import type { Metadata } from 'next';
import React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { slainteTheme } from '@/theme/slainteTheme';
import { SiteChrome } from '@/components/SiteChrome';
import '@/styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://slainte-tech.com'),
  title: 'SlainteTech | Clinical Safety, Revenue Integrity & Healthcare API Security',
  description:
    'Hospital-grade clinical decision checks, prescribing safety gates, HIPE revenue capture, and continuous API security built on HL7 FHIR R4 across 8 healthcare verticals.',
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: 'SlainteTech | Clinical Safety, Revenue Integrity & Healthcare API Security',
    description:
      'Hospital-grade clinical decision checks, prescribing safety gates, HIPE revenue capture, and continuous API security built on HL7 FHIR R4 across 8 healthcare verticals.',
    url: 'https://slainte-tech.com',
    siteName: 'SlainteTech',
    type: 'website',
    images: [
      {
        url: '/images/hero-clinicians.jpg',
        alt: 'SlainteTech: Clinical Safety, Revenue Integrity & HL7 FHIR R4 Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SlainteTech | Clinical Safety, Revenue Integrity & Healthcare API Security',
    description:
      'Hospital-grade clinical decision checks, prescribing safety gates, HIPE revenue capture, and continuous API security built on HL7 FHIR R4 across 8 healthcare verticals.',
    images: ['/images/hero-clinicians.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
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
