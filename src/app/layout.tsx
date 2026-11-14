import React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { slainteTheme } from '@/theme/slainteTheme';
import { SiteChrome } from '@/components/SiteChrome';
import { buildPageMetadata } from '@/utils/seo';
import '@/styles/globals.css';

export const metadata = buildPageMetadata({
  title: 'SlainteTech | Safer Care, Recovered Hospital Funding & Proven API Security',
  description:
    'Save clinician charting hours, catch unsafe prescriptions automatically, recover missed hospital HIPE funding, and prove EU NIS2 cybersecurity compliance across 8 care settings.',
  path: '/',
  ogImage: '/images/og/slainte-og.png',
  ogImageAlt: 'SlainteTech Clinical Safety, Hospital Revenue Integrity & API Security Platform',
  keywords: [
    'clinical safety software',
    'hospital API security',
    'HIPE clinical coding software',
    'HL7 FHIR R4 platform',
    'EU NIS2 healthcare compliance',
    'SlainteTech',
  ],
});

const SITE_SCHEMA_GRAPH = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://slainte-tech.com/#organization',
      name: 'SlainteTech',
      url: 'https://slainte-tech.com/',
      email: 'hello@slainte-tech.com',
      logo: 'https://slainte-tech.com/icon.svg',
      description:
        'Healthcare clinical safety checks, prescribing protection, HIPE revenue integrity, and continuous API security built on HL7 FHIR R4.',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://slainte-tech.com/#website',
      url: 'https://slainte-tech.com/',
      name: 'SlainteTech',
      publisher: { '@id': 'https://slainte-tech.com/#organization' },
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://slainte-tech.com/#software',
      name: 'SlainteDash Clinical & Security Platform',
      applicationCategory: 'HealthApplication',
      operatingSystem: 'Web, Linux, iPadOS, Android',
      url: 'https://slainte-tech.com/',
      screenshot: 'https://slainte-tech.com/images/og/slainte-og.png',
      provider: { '@id': 'https://slainte-tech.com/#organization' },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SITE_SCHEMA_GRAPH) }}
        />
        <AppRouterCacheProvider>
          <ThemeProvider theme={slainteTheme}>
            <CssBaseline />
            <SiteChrome>{children}</SiteChrome>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
