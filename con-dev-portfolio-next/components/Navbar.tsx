'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { WhatsAppIcon } from '@/lib/icons';
import { WHATSAPP_URL, CONTACT_PHONE } from '@/data';

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'Projects', id: 'projects' },
  { label: 'About', id: 'about' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo - 150x40 on desktop, 120x32 on mobile */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/Logo.png"
            alt="CON Developers Logo"
            width={150}
            height={40}
            sizes="(max-width: 767px) 120px, 150px"
            className="hidden md:block h-10 w-auto object-contain"
            priority
          />
          <Image
            src="/images/Logo.png"
            alt="CON Developers Logo"
            width={120}
            height={32}
            sizes="120px"
            className="md:hidden h-10 w-auto object-contain"
            priority
          />
          <span className="text-xl font-semibold text-gray-900">CON Developers</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              {item.label}
            </button>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-full transition-all font-medium text-sm"
          >
            <WhatsAppIcon className="h-5 w-5" />
            <span>{CONTACT_PHONE}</span>
          </a>
        </div>

        {/* Mobile Menu Toggle - hamburger below the md (768px) breakpoint */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-b border-gray-100"
        >
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg transition-colors font-medium"
              onClick={() => setMobileOpen(false)}
            >
              <WhatsAppIcon className="h-5 w-5" />
              <span>{CONTACT_PHONE}</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
