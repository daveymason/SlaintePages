#!/usr/bin/env node
/**
 * Post-processes Next.js static export HTML in ./public-site/ for GitHub Pages and social scrapers:
 * 1. Moves bulky SSR <style data-emotion="mui ..."> blocks out of <head> to the top of <body>
 *    (keeping data-emotion="mui-global ..." in <head>), shrinking <head> from ~105-208 KB to <4.5 KB.
 * 2. Places charset, viewport, title, description, canonical, Open Graph, and Twitter Card tags
 *    at the very start of <head> before any <link rel="preload"> or <script> tags.
 * 3. Adds scraper compatibility tags (og:image:url, og:image:secure_url, name="image",
 *    twitter:image:src, property="twitter:*", link rel="image_src").
 * 4. Writes extensionless sibling <route>.html files for every <route>/index.html so GitHub Pages
 *    returns HTTP 200 (instead of a 301 HTML stub) when links are shared without a trailing slash.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', 'public-site');

function walkHtmlFiles(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...walkHtmlFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      results.push(fullPath);
    }
  }
  return results.sort();
}

function getAttr(tag, attrName) {
  const re = new RegExp(`\\b${attrName}\\s*=\\s*"([^"]*)"`, 'i');
  const m = tag.match(re);
  return m ? m[1] : null;
}

function isEmotionGlobalStyle(tag) {
  const attr = getAttr(tag, 'data-emotion');
  return Boolean(attr && attr.startsWith('mui-global'));
}

function isHeadEmotionStyle(tag) {
  return /^<style\b/i.test(tag) && Boolean(getAttr(tag, 'data-emotion')) && !isEmotionGlobalStyle(tag);
}

function classifyHeadToken(token) {
  const trimmed = token.trim();
  if (!trimmed) return 'whitespace';
  if (/^<meta\b/i.test(trimmed)) {
    if (/\bcharSet\s*=|\bcharset\s*=/i.test(trimmed)) return 'charset';
    const nameAttr = (getAttr(trimmed, 'name') || '').toLowerCase();
    const propAttr = (getAttr(trimmed, 'property') || '').toLowerCase();
    if (nameAttr === 'viewport') return 'viewport';
    if (nameAttr === 'description') return 'description';
    if (propAttr.startsWith('og:') || nameAttr === 'image') return 'og';
    if (nameAttr.startsWith('twitter:') || propAttr.startsWith('twitter:')) return 'twitter';
    return 'other_head';
  }
  if (/^<title\b/i.test(trimmed)) return 'title';
  if (/^<link\b/i.test(trimmed)) {
    const rel = (getAttr(trimmed, 'rel') || '').toLowerCase();
    if (rel === 'canonical') return 'canonical';
    if (rel === 'image_src') return 'image_src';
    return 'other_head';
  }
  if (isHeadEmotionStyle(trimmed)) return 'emotion_mui';
  return 'other_head';
}

function tokenizeHead(headInner) {
  const tokenRe =
    /(<!--[\s\S]*?-->|<title\b[^>]*>[\s\S]*?<\/title>|<style\b[^>]*>[\s\S]*?<\/style>|<script\b[^>]*>[\s\S]*?<\/script>|<meta\b[^>]*\/?>|<link\b[^>]*\/?>|[^<]+|<)/gi;
  const tokens = headInner.match(tokenRe) || [];
  if (tokens.join('') !== headInner) {
    throw new Error('Lossy head tokenization detected; aborting postprocess.');
  }
  return tokens;
}

function buildCompatibilityTags(ogTags, twitterTags) {
  let ogImage = null;
  let ogUrl = null;
  const existingKeys = new Set();

  for (const tag of [...ogTags, ...twitterTags]) {
    const prop = (getAttr(tag, 'property') || '').toLowerCase();
    const name = (getAttr(tag, 'name') || '').toLowerCase();
    const content = getAttr(tag, 'content');
    if (prop) existingKeys.add(`property:${prop}`);
    if (name) existingKeys.add(`name:${name}`);
    if (prop === 'og:image' && !ogImage && content) ogImage = content;
    if (prop === 'og:url' && !ogUrl && content) ogUrl = content;
  }

  const extraTags = [];
  if (ogImage) {
    if (!existingKeys.has('property:og:image:url')) {
      extraTags.push(`<meta property="og:image:url" content="${ogImage}"/>`);
    }
    if (!existingKeys.has('property:og:image:secure_url')) {
      extraTags.push(`<meta property="og:image:secure_url" content="${ogImage}"/>`);
    }
    if (!existingKeys.has('name:image')) {
      extraTags.push(`<meta name="image" property="og:image" content="${ogImage}"/>`);
    }
    if (!existingKeys.has('name:twitter:image:src')) {
      extraTags.push(`<meta name="twitter:image:src" content="${ogImage}"/>`);
    }
    if (!existingKeys.has('property:twitter:image')) {
      extraTags.push(`<meta property="twitter:image" content="${ogImage}"/>`);
    }
  }
  if (!existingKeys.has('property:twitter:card')) {
    extraTags.push(`<meta property="twitter:card" content="summary_large_image"/>`);
  }
  if (!existingKeys.has('property:twitter:domain')) {
    extraTags.push(`<meta property="twitter:domain" content="slainte-tech.com"/>`);
  }
  if (ogUrl && !existingKeys.has('property:twitter:url')) {
    extraTags.push(`<meta property="twitter:url" content="${ogUrl}"/>`);
  }
  const extraImageLinks = ogImage ? [`<link rel="image_src" href="${ogImage}"/>`] : [];
  return { extraTags, extraImageLinks };
}

function processHtml(html, fileLabel) {
  const headOpenMatch = html.match(/<head\b[^>]*>/i);
  if (!headOpenMatch) {
    throw new Error(`Missing <head> in ${fileLabel}`);
  }
  const headOpenIndex = headOpenMatch.index;
  const headContentStart = headOpenIndex + headOpenMatch[0].length;
  const headCloseIndex = html.indexOf('</head>', headContentStart);
  if (headCloseIndex === -1) {
    throw new Error(`Missing </head> in ${fileLabel}`);
  }

  const afterHead = html.slice(headCloseIndex);
  const bodyOpenMatch = afterHead.match(/<body\b[^>]*>/i);
  if (!bodyOpenMatch) {
    throw new Error(`Missing <body> after </head> in ${fileLabel}`);
  }
  const bodyOpenEnd = headCloseIndex + bodyOpenMatch.index + bodyOpenMatch[0].length;

  const headInner = html.slice(headContentStart, headCloseIndex);
  const tokens = tokenizeHead(headInner);

  const buckets = {
    charset: [],
    viewport: [],
    title: [],
    description: [],
    canonical: [],
    og: [],
    twitter: [],
    image_src: [],
    emotion_mui: [],
    other_head: [],
  };

  for (const tok of tokens) {
    const kind = classifyHeadToken(tok);
    if (kind === 'whitespace') continue;
    buckets[kind].push(tok);
  }

  const { extraTags, extraImageLinks } = buildCompatibilityTags(buckets.og, buckets.twitter);
  const imageSrcLinks = buckets.image_src.length > 0 ? buckets.image_src : extraImageLinks;

  const orderedHead = [
    ...buckets.charset,
    ...buckets.viewport,
    ...buckets.title,
    ...buckets.description,
    ...buckets.canonical,
    ...buckets.og,
    ...buckets.twitter,
    ...extraTags,
    ...imageSrcLinks,
    ...buckets.other_head,
  ].join('');

  // Check whether any existing emotion_mui style blocks are already at start of <body>
  const movedStyles = buckets.emotion_mui.join('');
  const betweenHeadAndBodyOpen = html.slice(headCloseIndex, bodyOpenEnd);
  const bodyRest = html.slice(bodyOpenEnd);

  const newHtml =
    html.slice(0, headContentStart) +
    orderedHead +
    betweenHeadAndBodyOpen +
    movedStyles +
    bodyRest;

  return newHtml;
}

function main() {
  if (!fs.existsSync(OUT_DIR)) {
    throw new Error(`Missing static export directory: ${OUT_DIR}`);
  }

  const htmlFiles = walkHtmlFiles(OUT_DIR);
  let processedCount = 0;
  let maxHeadBytes = 0;
  let maxOgEndBytes = 0;

  for (const filePath of htmlFiles) {
    const raw = fs.readFileSync(filePath, 'utf8');
    const rel = path.relative(OUT_DIR, filePath);
    const updated = processHtml(raw, rel);
    fs.writeFileSync(filePath, updated, 'utf8');
    processedCount += 1;

    const headClosePos = updated.indexOf('</head>');
    if (headClosePos > maxHeadBytes) maxHeadBytes = headClosePos;
    const headSlice = updated.slice(0, headClosePos);
    const lastTwitter = headSlice.lastIndexOf('twitter:');
    const ogEnd = lastTwitter === -1 ? 0 : headSlice.indexOf('>', lastTwitter) + 1;
    if (ogEnd > maxOgEndBytes) maxOgEndBytes = ogEnd;
  }

  // Create extensionless sibling HTML files for every <route>/index.html (excluding root and 404)
  let siblingCount = 0;
  for (const filePath of htmlFiles) {
    const rel = path.relative(OUT_DIR, filePath);
    if (rel === 'index.html' || rel === '404/index.html') continue;
    if (rel.endsWith(`${path.sep}index.html`) || rel.endsWith('/index.html')) {
      const routeRel = rel.slice(0, -'/index.html'.length);
      if (!routeRel || routeRel === '404') continue;
      const siblingPath = path.join(OUT_DIR, `${routeRel}.html`);
      fs.copyFileSync(filePath, siblingPath);
      siblingCount += 1;
    }
  }

  console.log(
    `Post-processed ${processedCount} HTML files and generated ${siblingCount} extensionless sibling routes ` +
      `(max </head>=${maxHeadBytes} bytes, max OG/Twitter end=${maxOgEndBytes} bytes).`
  );
}

main();
