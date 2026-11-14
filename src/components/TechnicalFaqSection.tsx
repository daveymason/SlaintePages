import React from 'react';
import { Box, Container, Paper, Stack, Typography } from '@mui/material';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';

export interface FaqItem {
  question: string;
  answer: string;
}

interface TechnicalFaqSectionProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  accentColor?: string;
  items: FaqItem[];
  id?: string;
}

/**
 * Renders a buyer-friendly technical FAQ block on every route using native HTML
 * `<details>` / `<summary>` elements (accessible, zero client-JS hydration cost,
 * full answer text visible in static HTML) alongside schema.org FAQPage JSON-LD.
 */
export function TechnicalFaqSection({
  eyebrow = 'Technical & Procurement FAQ',
  title = 'Technical Details & Architecture Questions',
  subtitle = 'Everything IT directors, clinical safety officers, and procurement teams need to check under the hood.',
  accentColor = '#1B6B8D',
  items,
  id = 'technical-faq-heading',
}: TechnicalFaqSectionProps) {
  if (!items.length) return null;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <Box
      component="section"
      aria-labelledby={id}
      sx={{
        py: { xs: 6, md: 8 },
        bgcolor: '#F8FAFC',
        borderTop: '1px solid #CBD5E1',
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Container maxWidth="lg">
        <Box sx={{ mb: 4, maxWidth: 760 }}>
          <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 0.75 }}>
            <HelpOutlineRoundedIcon sx={{ color: accentColor, fontSize: 18 }} aria-hidden="true" />
            <Typography
              variant="overline"
              sx={{ color: accentColor, fontWeight: 800, letterSpacing: '0.08em', lineHeight: 1.2 }}
            >
              {eyebrow}
            </Typography>
          </Stack>
          <Typography component="h2" variant="h2" id={id} sx={{ color: '#0F172A', mb: 1 }}>
            {title}
          </Typography>
          <Typography variant="body1" sx={{ color: '#334155' }}>
            {subtitle}
          </Typography>
        </Box>

        <Stack spacing={2}>
          {items.map((item, idx) => (
            <Paper
              key={item.question}
              component="details"
              open={idx === 0}
              elevation={0}
              sx={{
                bgcolor: '#FFFFFF',
                border: '1px solid #CBD5E1',
                borderLeft: `4px solid ${accentColor}`,
                borderRadius: 2,
                overflow: 'hidden',
                '&[open] .faq-chevron': {
                  transform: 'rotate(180deg)',
                },
                '& > summary::-webkit-details-marker': {
                  display: 'none',
                },
              }}
            >
              <Box
                component="summary"
                sx={{
                  px: 3,
                  py: 2.25,
                  cursor: 'pointer',
                  listStyle: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 2,
                  fontWeight: 700,
                  color: '#0F172A',
                  fontSize: '1.02rem',
                  '&:hover': {
                    bgcolor: '#F1F5F9',
                  },
                }}
              >
                <span>{item.question}</span>
                <ExpandMoreRoundedIcon
                  className="faq-chevron"
                  sx={{
                    color: accentColor,
                    flexShrink: 0,
                    transition: 'transform 160ms ease',
                  }}
                  aria-hidden="true"
                />
              </Box>
              <Box
                sx={{
                  px: 3,
                  pb: 2.5,
                  pt: 0.5,
                  borderTop: '1px solid #F1F5F9',
                  color: '#334155',
                  fontSize: '0.94rem',
                  lineHeight: 1.65,
                }}
              >
                {item.answer}
              </Box>
            </Paper>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
