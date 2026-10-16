import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const SITE_URL = 'https://condevelopers.netlify.app';
const SITE_TITLE = 'CON Developers - Software Solutions';
const SITE_DESCRIPTION =
  'Professional software development services. We transform ideas into powerful software solutions.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    'CON Developers',
    'software development',
    'MERN stack',
    'ERP system',
    'HR management software',
    'web development Pakistan',
  ],
  authors: [{ name: 'CON Developers' }],
  creator: 'CON Developers',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'CON Developers',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [{ url: '/images/hero.png', width: 1584, height: 396, alt: SITE_TITLE }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/images/hero.png'],
  },
  icons: {
    icon: '/images/Logo.png',
    apple: '/images/Logo.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US" className={inter.variable}>
      <body className="font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
