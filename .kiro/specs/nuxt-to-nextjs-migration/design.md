# Design Document: Nuxt to Next.js Migration

## Overview

This design document outlines the technical approach for migrating the CON Developers portfolio from Nuxt 4 (Vue 3) to Next.js (React). The migration encompasses all pages, components, layouts, data, assets, and configuration files while maintaining equivalent or enhanced functionality.

### Migration Scope

- **12 Vue Components**: Hero, Projects, About, Contact, Navbar, Footer, SocialLinks, Container, Features, Testimonials, Cta, Logos
- **Data Layer**: JSON data file with hero, projects, features, testimonials, CTA, and social sections
- **Styling**: Tailwind CSS v4 with custom CSS variables
- **Routing**: File-based routing with dynamic project pages
- **Forms**: Netlify Forms integration for contact form
- **Images**: Static assets in public/images directory

### Key Migration Goals

1. Preserve all existing functionality and visual design
2. Maintain SEO metadata and URL structure
3. Enable static site generation for any hosting platform
4. Improve type safety with TypeScript
5. Leverage Next.js App Router for modern React patterns

---

## Architecture

### Project Structure

The Next.js project will use the App Router (introduced in Next.js 13) for file-based routing and server components.

```
con-dev-portfolio/
├── app/
│   ├── layout.tsx              # Root layout (Navbar + Footer)
│   ├── page.tsx                # Home page
│   ├── projects/
│   │   └── [slug]/
│   │       └── page.tsx        # Dynamic project detail page
│   └── globals.css             # Global styles with Tailwind
├── components/
│   ├── Hero.tsx
│   ├── Projects.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── SocialLinks.tsx
│   ├── Container.tsx
│   ├── Features.tsx
│   ├── Testimonials.tsx
│   ├── Cta.tsx
│   └── Logos.tsx
├── data/
│   └── index.ts                # Migrated data file
├── public/
│   └── images/                 # Static images
├── lib/
│   └── utils.ts                # Utility functions
├── next.config.js
├── package.json
├── tsconfig.json
└── tailwind.config.js
```

### Routing Strategy

| Nuxt Route | Next.js Route | File |
|------------|---------------|------|
| `/` | `/` | `app/page.tsx` |
| `/projects/[slug]` | `/projects/[slug]` | `app/projects/[slug]/page.tsx` |

**Prerendered Routes** (via `generateStaticParams`):
- `/` - Home page
- `/projects/unicore-business-suite`
- `/projects/unicore-hr-solutions`
- `/projects/income-tax-calculator`
- `/projects/funnecto-messaging`

### Rendering Strategy

- **Static Site Generation (SSG)**: All pages prerendered at build time for optimal performance
- **Server Components**: Default for pages and data-fetching components
- **Client Components**: Interactive components (Contact form, Projects filter, Mobile menu)
- **Hybrid Approach**: Static base with client-side interactivity where needed

---

## Components and Interfaces

### Component Mapping: Vue to React

| Vue Component | React Component | Client/Server |
|---------------|-----------------|---------------|
| Hero.vue | Hero.tsx | Client (scroll functions) |
| Projects.vue | Projects.tsx | Client (filter state) |
| About.vue | About.tsx | Server |
| Contact.vue | Contact.tsx | Client (form state) |
| Navbar.vue | Navbar.tsx | Client (mobile menu) |
| Footer.vue | Footer.tsx | Server |
| SocialLinks.vue | SocialLinks.tsx | Server |
| Container.vue | Container.tsx | Server |
| Features.vue | Features.tsx | Server |
| Testimonials.vue | Testimonials.tsx | Server |
| Cta.vue | Cta.tsx | Server |
| Logos.vue | Logos.tsx | Server |

### Component Interface: Hero

```tsx
// app/components/Hero.tsx
'use client';

import { Sparkles, ArrowRight, Code } from 'lucide-react';

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-32">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full">
        <Sparkles className="w-4 h-4 text-yellow-400" />
        <span className="text-sm text-gray-700">Available for new projects</span>
      </div>

      {/* Heading */}
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
        Crafting Digital
        <span className="block mt-2" style={{ color: '#6366f1' }}>Solutions</span>
      </h1>

      {/* Stats */}
      <div className="flex items-center gap-8 pt-8">
        <div>
          <div className="text-3xl font-bold text-gray-900">4</div>
          <div className="text-sm text-gray-600">Enterprise Projects</div>
        </div>
        {/* ... more stats */}
      </div>
    </section>
  );
}
```

### Component Interface: Navbar

```tsx
// app/components/Navbar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ArrowRight } from 'lucide-react';
import { WhatsApp } from 'lucide-react';

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
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3">
        <Image src="/images/Logo.png" alt="Logo" width={40} height={40} />
        <span className="text-xl font-semibold text-gray-900">CON Developers</span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        <button onClick={() => scrollToSection('home')}>Home</button>
        <button onClick={() => scrollToSection('projects')}>Projects</button>
        <button onClick={() => scrollToSection('about')}>About</button>
        <a href="https://wa.me/923144461293" className="flex items-center gap-2 px-6 py-2 bg-green-500...">
          <WhatsApp className="h-5 w-5" />
          <span>+92 314 4461293</span>
        </a>
      </div>

      {/* Mobile Menu Toggle */}
      <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden">
        {mobileOpen ? <X /> : <Menu />}
      </button>
    </nav>
  );
}
```

### Client vs Server Component Guidelines

- **Use `'use client'`** when:
  - Component uses `useState`, `useEffect`, or other React hooks
  - Component handles user events (onClick, onSubmit, etc.)
  - Component uses browser-only APIs
  - Component uses third-party libraries that require client-side rendering

- **Use Server Components** (default) when:
  - Component primarily renders static content
  - Component fetches data from data sources
  - Component doesn't need interactivity

---

## Data Models

### Data Structure Migration

The `data/index.json` file will be migrated to `data/index.ts` with TypeScript types.

```typescript
// data/index.ts

export interface Button {
  label: string;
  url: string;
}

export interface HeroData {
  image: string;
  imageAlt: string;
  buttons: Button[];
}

export interface IconItem {
  name: string;
}

export interface LogosData {
  title: string;
  icons: IconItem[];
}

export interface ProjectItem {
  title: string;
  description: string;
  image: string;
  tags: string[];
  features: string[];
}

export interface ProjectsData {
  title: string;
  description: string;
  items: ProjectItem[];
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface FeaturesData {
  title: string;
  description: string;
  items: FeatureItem[];
}

export interface Author {
  name: string;
  title: string;
  avatar: string;
}

export interface TestimonialItem {
  quote: string;
  author: Author;
}

export interface TestimonialsData {
  title: string;
  description: string;
  items: TestimonialItem[];
}

export interface CtaData {
  title: string;
  description: string;
  buttons: Button[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface SocialData {
  title: string;
  links: SocialLink[];
}

export interface SiteData {
  hero: HeroData;
  logos: LogosData;
  projects: ProjectsData;
  features: FeaturesData;
  testimonials: TestimonialsData;
  cta: CtaData;
  social: SocialData;
}

// Project type for project detail pages
export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  tags: string[];
  color: string;
  category: string;
  date: string;
  features?: string[];
}
```

### Data Export Strategy

```typescript
// data/index.ts

import heroData from './hero.json';
import projectsData from './projects.json';
// ... other imports

// Named exports for each section
export const hero = heroData;
export const projects = projectsData;

// Or use a single export
const data: SiteData = {
  hero: heroData,
  projects: projectsData,
  // ...
};

export default data;
```

### Component Data Consumption

```tsx
// app/components/Hero.tsx
import { hero } from '@/data';

export default function Hero() {
  const { image, imageAlt, buttons } = hero;
  // ...
}
```

---

## Icon System Migration

### SimpleIcons to lucide-react Mapping

The Vue project uses `@nuxt/icon` with SimpleIcons. The React equivalent will use `lucide-react`.

| SimpleIcons Name | lucide-react Component | Usage |
|------------------|------------------------|-------|
| `simple-icons:sparkles` | `Sparkles` | Hero badge |
| `simple-icons-arrowright` | `ArrowRight` | CTA buttons |
| `simple-icons-code` | `Code` | Hero, About |
| `simple-icons-calendar` | `Calendar` | Project dates |
| `simple-icons-award` | `Award` | Achievements |
| `simple-icons-target` | `Target` | Achievements |
| `simple-icons-facebook` | `Facebook` | Social links |
| `simple-icons-instagram` | `Instagram` | Social links |
| `simple-icons-linkedin` | `Linkedin` | Social links |
| `simple-icons-whatsapp` | `WhatsApp` | Contact, Navbar |
| `simple-icons-mail` | `Mail` | Contact info |
| `simple-icons-phone` | `Phone` | Contact info |
| `simple-icons-mappin` | `MapPin` | Contact info |
| `simple-icons-palette` | `Palette` | Expertise cards |
| `simple-icons-zap` | `Zap` | Expertise cards |
| `simple-icons-users` | `Users` | Expertise cards |
| `simple-icons-menu` | `Menu` | Mobile menu toggle |
| `simple-icons-x` | `X` | Mobile menu close |

### Icon Mapping Table

Create a utility file for centralized icon mapping:

```typescript
// lib/icons.ts
import {
  Sparkles,
  ArrowRight,
  Code,
  Calendar,
  Award,
  Target,
  Facebook,
  Instagram,
  Linkedin,
  WhatsApp,
  Mail,
  Phone,
  MapPin,
  Palette,
  Zap,
  Users,
  Menu,
  X,
} from 'lucide-react';

export const iconMap: Record<string, React.ComponentType<any>> = {
  'simple-icons:sparkles': Sparkles,
  'simple-icons-arrowright': ArrowRight,
  'simple-icons-code': Code,
  'simple-icons-calendar': Calendar,
  'simple-icons-award': Award,
  'simple-icons-target': Target,
  'simple-icons-facebook': Facebook,
  'simple-icons-instagram': Instagram,
  'simple-icons-linkedin': Linkedin,
  'simple-icons-whatsapp': WhatsApp,
  'simple-icons-mail': Mail,
  'simple-icons-phone': Phone,
  'simple-icons-mappin': MapPin,
  'simple-icons-palette': Palette,
  'simple-icons-zap': Zap,
  'simple-icons-users': Users,
  'simple-icons-menu': Menu,
  'simple-icons-x': X,
};

export function getIcon(iconName: string) {
  const IconComponent = iconMap[iconName];
  if (!IconComponent) {
    console.warn(`Icon "${iconName}" not found, using fallback`);
    return () => <span className="w-4 h-4 bg-gray-300" />;
  }
  return IconComponent;
}
```

### Installation

```bash
npm install lucide-react
```

---

## Configuration Differences

### nuxt.config.ts → next.config.js

**Nuxt Configuration (existing):**
```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss() as any],
  },
  modules: ["@nuxt/icon", "@nuxt/image"],
  compatibilityDate: "2024-12-18",
  nitro: {
    prerender: {
      routes: ['/', '/projects/unicore-business-suite', ...],
      crawlLinks: true,
      failOnError: false
    }
  }
});
```

**Next.js Configuration (target):**
```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static export
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  },
  // Ensure trailing slashes for static hosting compatibility
  trailingSlash: true,
};

module.exports = nextConfig;
```

### TypeScript Configuration

```json
// tsconfig.json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### Package.json Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

---

## Styling Approach

### Tailwind v4 to Standard Tailwind Migration

The Vue project uses Tailwind CSS v4 with the `@theme` directive. This will be converted to standard Tailwind configuration.

### Global CSS (app/globals.css)

```css
/* app/globals.css */
@import "tailwindcss";

/* Custom CSS Variables */
:root {
  --color-primary: #030213;
  --color-primary-light: #ffffff;
  --color-brand-green: #22c55e;
  --color-brand-yellow: #fed600;
  --color-brand-red: #ef4444;
  --color-brand-blue: #6366f1;
  --color-gray-900: #111827;
  --color-gray-600: #4b5563;
  --color-gray-50: #f9fafb;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Global animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes pulse-glow {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
}

/* Base styles */
body {
  @apply bg-white text-gray-900;
  font-family: "Inter", "Helvetica", "sans-serif";
}

/* Typography */
h1 {
  @apply text-5xl md:text-6xl lg:text-7xl font-bold;
}

h2 {
  @apply text-4xl md:text-5xl font-bold;
}

h3 {
  @apply text-2xl font-bold;
}

h4 {
  @apply text-xl font-bold;
}

/* Button styles */
.btn-primary {
  @apply px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all font-semibold;
}

.btn-secondary {
  @apply px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-full hover:bg-gray-50 transition-all font-semibold;
}

/* Card styles */
.card {
  @apply bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border border-gray-100;
}

/* Section spacing */
.section {
  @apply py-24 px-6;
}

/* Container */
.container-max {
  @apply max-w-7xl mx-auto;
}

/* Utility classes */
.text-gradient {
  @apply bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent;
}

.blur-glow {
  @apply blur-3xl opacity-20;
}
```

### Font Configuration

**Option 1: Google Fonts (next/font)**

```tsx
// app/layout.tsx
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
```

**Option 2: CSS Import (simpler)**

```css
/* In globals.css */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
```

---

## Image Handling

### Migration from @nuxt/image to next/image

The Nuxt project uses `@nuxt/image` for image optimization. Next.js has built-in `next/image` component.

### Image Component Migration

**Before (Vue with @nuxt/image):**
```vue
<NuxtImg src="/images/hero.png" alt="Hero" />
<img src="/images/projects/unicore-business-suite.jpg" alt="Project" />
```

**After (React with next/image):**
```tsx
import Image from 'next/image';

<Image
  src="/images/hero.png"
  alt="CON Developers Banner"
  width={800}
  height={600}
  className="w-full h-auto"
/>
```

### Configuration

```javascript
// next.config.js
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  },
};

module.exports = nextConfig;
```

### Logo Image Sizing

Per Requirements 8.4:

```tsx
// Navbar Logo
<Image
  src="/images/Logo.png"
  alt="CON Developers Logo"
  width={150}
  height={40}
  className="hidden md:block" // Desktop
/>
<Image
  src="/images/Logo.png"
  alt="CON Developers Logo"
  width={120}
  height={32}
  className="md:hidden" // Mobile
/>
```

### Image Sizes Prop

For responsive images with proper srcset:

```tsx
<Image
  src={project.image}
  alt={project.title}
  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 50vw, (max-width: 1280px) 50vw, 33vw"
  fill
  className="object-cover"
/>
```

---

## Form Handling Approach

### Netlify Forms Integration

The current Nuxt project uses Netlify Forms. This will be migrated to Next.js with equivalent functionality.

### Contact Form Component

```tsx
// app/components/Contact.tsx
'use client';

import { useState, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const encode = (data: FormData) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key as keyof FormData]))
      .join('&');
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          ...formData,
        }),
      });

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-gray-50">
      {/* Success/Error Messages */}
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
          <p className="text-green-800 font-semibold">
            ✓ Thank you! Your message has been sent successfully.
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
          <p className="text-red-800 font-semibold">
            ✗ Something went wrong. Please try again.
          </p>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8">
        <div className="mb-6">
          <label htmlFor="name" className="block text-gray-700 mb-2 font-semibold">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            maxLength={100}
            disabled={isSubmitting}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl..."
            placeholder="John Doe"
          />
        </div>

        {/* Email and Message fields... */}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-8 py-4 bg-gray-900 text-white rounded-xl... disabled:opacity-50"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
  );
}
```

### Hidden Form for Netlify

```tsx
{/* Hidden form for Netlify Forms detection */}
<form name="contact" data-netlify="true" hidden>
  <input type="text" name="name" />
  <input type="email" name="email" />
  <textarea name="message"></textarea>
</form>
```

---

## Error Handling

### Project Not Found Handling

For dynamic project routes, handle invalid slugs gracefully:

```tsx
// app/projects/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { projects } from '@/data';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.items.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Render project details...
}

// Generate static params for SSG
export async function generateStaticParams() {
  return projects.items.map((project) => ({
    slug: project.slug,
  }));
}
```

### Data Loading Errors

```tsx
// app/projects/[slug]/page.tsx
export default async function ProjectPage({ params }: PageProps) {
  try {
    const { slug } = await params;
    const project = getProjectBySlug(slug); // Could throw

    if (!project) {
      notFound();
    }

    return <ProjectDetail project={project} />;
  } catch (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Failed to load project</h2>
          <a href="/" className="text-blue-600 hover:underline">
            Return to Home
          </a>
        </div>
      </div>
    );
  }
}
```

### Error Boundary

Create a client-side error boundary for catching render errors:

```tsx
// app/error.tsx
'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
        <button
          onClick={() => reset()}
          className="px-4 py-2 bg-gray-900 text-white rounded-lg"
        >
          Try again
        </button>
        <a href="/" className="block mt-4 text-gray-600">
          Return to Home
        </a>
      </div>
    </div>
  );
}
```

---

## Testing Strategy

### Testing Approach

This migration project focuses on functional equivalence and does not require property-based testing. The target application is a portfolio website with:

- **UI rendering**: React components for visual display
- **Static content**: Data-driven pages with minimal transformation logic
- **Form handling**: Client-side state management with Netlify Forms
- **Routing**: Static routes generated at build time

### Why Property-Based Testing Does Not Apply

The migration does not involve:
- Complex business logic with transformation rules
- Parsers or serializers
- Algorithms with large input spaces
- Data validation transformations

Instead, the project uses:
- **Component snapshot tests**: Verify UI structure
- **Example-based unit tests**: Test specific interactions
- **Integration tests**: Verify page rendering
- **Visual regression tests**: Ensure design consistency (optional)

### Test Types

| Test Type | Purpose | Tool |
|-----------|---------|------|
| Unit Tests | Component logic, form validation | Vitest + React Testing Library |
| Integration Tests | Page rendering, routing | Vitest + Playwright |
| E2E Tests | Full user flows | Playwright |
| Build Tests | Verify SSG output | npm scripts |

### Unit Test Example

```tsx
// __tests__/Contact.test.tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Contact from '@/components/Contact';

describe('Contact Component', () => {
  it('renders contact form with all fields', () => {
    render(<Contact />);
    
    expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
  });

  it('shows success message after submission', async () => {
    // Mock fetch for Netlify Forms
    global.fetch = jest.fn().mockResolvedValue({ ok: true });
    
    render(<Contact />);
    
    fireEvent.change(screen.getByLabelText(/Full Name/i), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: 'john@test.com' } });
    fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: 'Hello' } });
    
    fireEvent.submit(screen.getByRole('form'));
    
    await waitFor(() => {
      expect(screen.getByText(/thank you/i)).toBeInTheDocument();
    });
  });

  it('validates email format', () => {
    render(<Contact />);
    
    const emailInput = screen.getByLabelText(/Email Address/i);
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    
    // HTML5 validation should prevent submission
    expect(emailInput.validity.valid).toBe(false);
  });
});
```

### Build Verification Tests

```bash
# Build command (Requirement 12.1)
npm run build

# Verify static output
# Check that .next/out contains:
# - index.html
# - projects/unicore-business-suite/index.html
# - projects/unicore-hr-solutions/index.html
# - projects/income-tax-calculator/index.html
# - projects/funnecto-messaging/index.html
```

### Manual Verification Checklist

Per Requirement 12:
- [ ] Build completes without errors
- [ ] Dev server starts without errors
- [ ] Home page loads all sections (Hero, Projects, About, Contact)
- [ ] Each project detail page displays correct data
- [ ] Category filter works correctly
- [ ] Navigation links work between pages
- [ ] Mobile menu toggles correctly
- [ ] Contact form displays and validates inputs
- [ ] Footer social links are correct

---

## Implementation Priority

### Phase 1: Foundation
1. Create Next.js project with TypeScript and Tailwind
2. Configure next.config.js for static export
3. Set up globals.css with all custom styles
4. Create RootLayout with Navbar and Footer

### Phase 2: Data Layer
1. Create data/index.ts with TypeScript types
2. Migrate all data from data/index.json
3. Create icon mapping utility

### Phase 3: Components
1. Build Hero, Projects, About, Contact components
2. Build Navbar, Footer, Container, SocialLinks
3. Build Features, Testimonials, Cta, Logos

### Phase 4: Pages and Routing
1. Create home page (app/page.tsx)
2. Create project detail page (app/projects/[slug]/page.tsx)
3. Implement generateStaticParams for SSG
4. Add metadata for SEO

### Phase 5: Integration
1. Test all pages render correctly
2. Verify static build output
3. Test contact form submission
4. Verify responsive design

### Phase 6: Deployment
1. Configure deployment settings
2. Test on target platform (Netlify)
3. Verify all acceptance criteria

---

## Summary

This design document provides a comprehensive technical approach for migrating the Nuxt portfolio to Next.js. The migration maintains functional equivalence while leveraging modern React patterns and Next.js capabilities.

Key design decisions:
- **App Router**: For modern React routing and server components
- **Static Export**: For hosting flexibility on any platform
- **lucide-react**: For consistent icon rendering
- **next/image**: For optimized image handling
- **Client Components**: Only where interactivity is needed
- **TypeScript**: For type safety throughout
- **Tailwind CSS**: For consistent styling with existing design tokens

All 15 requirements from the requirements document are addressed through this design, ensuring a complete and functional migration.