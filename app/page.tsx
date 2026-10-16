import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';

export const metadata: Metadata = {
  title: 'CON Developers - Software Solutions',
  description:
    'Professional software development services. We transform ideas into powerful software solutions.',
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Contact />
    </>
  );
}
