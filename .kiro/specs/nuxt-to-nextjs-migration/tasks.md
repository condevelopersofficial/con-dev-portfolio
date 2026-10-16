# Implementation Plan: Nuxt to Next.js Migration

## Overview

This task list covers the migration of the CON Developers portfolio from Nuxt 4 (Vue 3) to Next.js (React). The migration preserves all existing functionality, visual design, and URL structure while leveraging TypeScript for type safety and Next.js App Router for modern React patterns.

## Tasks

### Phase 1: Project Setup and Foundation

- [x] 1.1 Initialize Next.js project with TypeScript and Tailwind CSS
  - Run `npx create-next-app@latest` with TypeScript, Tailwind, and App Router options
  - Configure project name as `con-dev-portfolio` or similar
  - _Requirements: 1.1, 1.2, 1.3, 1.4_

- [x] 1.2 Configure next.config.js for static export
  - Set `output: 'export'` for static site generation
  - Configure `images.unoptimized: true` for static export
  - Add `trailingSlash: true` for hosting compatibility
  - Configure remotePatterns for image domains
  - _Requirements: 1.3, 1.5, 11.1, 11.3_

- [x] 1.3 Set up TypeScript configuration
  - Enable strict mode in tsconfig.json
  - Configure paths alias `@/*` to `./*`
  - Ensure no type errors on build
  - _Requirements: 1.4_

- [ ] 1.4 Install required dependencies
  - Install `lucide-react` for icon system (done)
  - Install testing libraries (Vitest, React Testing Library) - NOT done: no automated test
    suite was added; Phase 9 verification was performed with the production build plus
    browser checks against the deployed Nuxt site
  - Install `autoprefixer` (missing from the initial scaffold, it broke `next build`)
  - _Requirements: 7.1_

### Phase 2: Global Styles and Theming

- [x] 2.1 Create globals.css with Tailwind v4 configuration
  - Add `@import "tailwindcss"` directive
  - Define @theme block with `--font-display: "Inter", "Helvetica", "sans-serif"`
  - _Requirements: 2.1_

- [x] 2.2 Define custom CSS variables
  - color-primary (#030213)
  - color-primary-light (#ffffff)
  - color-brand-green (#22c55e)
  - color-brand-yellow (#fed600)
  - color-brand-red (#ef4444)
  - color-brand-blue (#6366f1)
  - color-gray-900 (#111827)
  - color-gray-600 (#4b5563)
  - color-gray-50 (#f9fafb)
  - _Requirements: 2.2_

- [x] 2.3 Configure typography system
  - h1: text-5xl md:text-6xl lg:text-7xl font-bold
  - h2: text-4xl md:text-5xl font-bold
  - h3: text-2xl font-bold
  - h4: text-xl font-bold
  - _Requirements: 2.3_

- [x] 2.4 Add animation keyframes
  - fadeInUp (opacity 0→1, translateY 30px→0)
  - slideInRight (opacity 0→1, translateX 30px→0)
  - pulse-glow (opacity 1→0.8→1)
  - _Requirements: 2.4_

- [x] 2.5 Configure global font
  - Load Inter font from Google Fonts CDN with font-display: swap
  - Or use next/font/google in layout
  - _Requirements: 2.5_

### Phase 3: Layout Migration

- [x] 3.1 Create RootLayout with Navbar and Footer
  - Create app/layout.tsx with Navbar and Footer components
  - Use Inter font via next/font/google
  - Set html lang attribute to "en-US"
  - Add smooth scrolling
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 13.4_

- [x] 3.2 Add metadata for SEO
  - Set default title: "CON Developers - Software Solutions"
  - Set default meta description
  - _Requirements: 5.5, 13.1, 13.2_

### Phase 4: Data Migration

- [x] 4.1 Create data/index.ts with TypeScript types
  - Define interfaces: Button, HeroData, ProjectItem, ProjectsData, FeatureItem, FeaturesData, TestimonialItem, TestimonialsData, CtaData, SocialLink, SocialData, SiteData, Project
  - _Requirements: 6.1, 6.2, 6.3_

- [x] 4.2 Migrate data from Nuxt JSON to TypeScript
  - Migrate hero section data
  - Migrate projects section data (including all 4 projects)
  - Migrate features section data
  - Migrate testimonials section data
  - Migrate CTA section data
  - Migrate social links data
  - _Requirements: 6.2, 6.4_

- [x] 4.3 Export data as named exports
  - Export: hero, projects, features, testimonials, cta, social
  - Ensure ES6 import compatibility
  - _Requirements: 6.3, 6.4_

### Phase 5: Icon System

- [x] 5.1 Create lib/icons.ts with icon mapping
  - Map SimpleIcons to lucide-react components
  - Include all 18 icons: sparkles, arrowright, code, calendar, award, target, facebook, instagram, linkedin, whatsapp, mail, phone, mappin, palette, zap, users, menu, x
  - Add warning fallback for unmapped icons
  - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 7.7, 7.8, 7.9_

- [x] 5.2 Document icon mapping table
  - Create README or comments documenting mapping
  - _Requirements: 7.8_

### Phase 6: Component Migration (12 Components)

- [x] 6.1 Migrate Hero component
  - Implement Hero.tsx with badge, heading, description, CTA buttons, stats
  - Use 'use client' for scroll functions
  - Import icons from lucide-react (Sparkles, ArrowRight, Code)
  - _Requirements: 4.1_

- [x] 6.2 Migrate Projects component
  - Implement Projects.tsx with project grid and category filter
  - Use 'use client' for filter state
  - Display all 4 projects with tags and features
  - _Requirements: 4.2_

- [x] 6.3 Migrate About component
  - Implement About.tsx with skills progress bars, expertise cards, achievements
  - Use server component (no client-side state)
  - _Requirements: 4.3_

- [x] 6.4 Migrate Contact component
  - Implement Contact.tsx with form validation
  - Use 'use client' for form state
  - Implement Netlify Forms integration
  - Add success/error message handling with 5-second display
  - Validate: name (required, max 100), email (required, valid format), message (required, max 1000)
  - _Requirements: 4.4, 10.1, 10.2, 10.3, 10.4, 10.5, 10.6_

- [x] 6.5 Migrate Navbar component
  - Implement Navbar.tsx with logo, navigation links, mobile hamburger menu
  - Use 'use client' for mobile menu state
  - Add WhatsApp link with icon
  - Implement md breakpoint (768px) for mobile menu
  - Add smooth scroll to sections
  - _Requirements: 4.5, 14.1, 14.2, 14.3_

- [x] 6.6 Migrate Footer component
  - Implement Footer.tsx with brand info, quick links, services, contact info, social links
  - Use server component
  - _Requirements: 4.6_

- [x] 6.7 Migrate SocialLinks component
  - Implement SocialLinks.tsx with Facebook, Instagram, LinkedIn, WhatsApp
  - Map icons from lucide-react
  - Rendered by the Footer "Follow Us" block
  - _Requirements: 4.7_

- [x] 6.8 Migrate Container component
  - Implement Container.tsx with max-width styling
  - _Requirements: 4.8_

- [x] 6.9 Migrate Features component
  - Implement Features.tsx displaying expertise section
  - Use icons from lucide-react (Palette, Zap, Users)
  - _Requirements: 4.9_

- [x] 6.10 Migrate Testimonials component
  - Implement Testimonials.tsx with client testimonials and avatars
  - _Requirements: 4.10_

- [x] 6.11 Migrate Cta component
  - Implement Cta.tsx for call-to-action sections
  - _Requirements: 4.11_

- [x] 6.12 Migrate Logos component
  - Implement Logos.tsx for displaying client logos
  - Use next/image for logo images
  - Note: migrated as a component but not rendered on any page, matching the deployed
    Nuxt site; its Simple Icons brand glyphs have no lucide equivalent, so `lib/icons.tsx`
    maps each technology to a visually similar generic icon plus a text label
  - _Requirements: 4.12_

### Phase 7: Page and Routing

- [x] 7.1 Create home page (app/page.tsx)
  - Render Hero, Projects, About, Contact sections
  - Add section IDs for navigation (home, projects, about, contact)
  - Add metadata for SEO
  - _Requirements: 5.1, 5.5, 13.1, 13.2_

- [x] 7.2 Create project detail page (app/projects/[slug]/page.tsx)
  - Implement dynamic routing for /projects/[slug]
  - Fetch project data by slug
  - Display title, description, image, features, tags
  - Add "Back to Home" link
  - Handle not-found state for invalid slugs
  - _Requirements: 5.2, 5.3, 5.4, 5.7, 5.8_

- [x] 7.3 Implement generateStaticParams for SSG
  - Generate static params for all 4 projects:
    - unicore-business-suite
    - unicore-hr-solutions
    - income-tax-calculator
    - funnecto-messaging
  - _Requirements: 1.5, 1.6, 5.7, 9.4, 11.2_

- [x] 7.4 Add dynamic metadata for project pages
  - Generate title and description for each project
  - _Requirements: 5.6, 13.3_

- [x] 7.5 Configure image handling in next/image
  - Configure next.config.js with remotePatterns
  - Handle /images/ paths
  - Configure Logo image sizing (150x40 desktop, 120x32 mobile)
  - _Requirements: 8.3, 8.4_

- [x] 7.6 Create error handling
  - Create app/error.tsx for error boundary
  - Handle data loading errors with retry button
  - _Requirements: 5.6_

### Phase 8: Responsive Design

- [x] 8.1 Implement responsive Navbar
  - Hamburger menu on mobile (md:hidden)
  - Full navigation on desktop (md:flex)
  - Force hamburger menu on all mobile devices
  - _Requirements: 14.1, 14.2, 14.3_

- [x] 8.2 Implement responsive Projects grid
  - Single column on mobile
  - Two columns on desktop
  - Maximum two columns across all sizes
  - _Requirements: 14.4, 14.5_

- [x] 8.3 Implement responsive Contact form
  - Full-width on mobile
  - _Requirements: 14.6_

- [x] 8.4 Implement responsive Footer grid
  - Stack on mobile
  - 4 columns on desktop
  - _Requirements: 14.7_

### Phase 9: Testing and Verification

- [x] 9.1 Verify build completes without errors
  - Run `npm run build`
  - Verify static HTML output for all routes
  - Check output: /index.html, /projects/unicore-business-suite/index.html, etc.
  - _Requirements: 12.1, 12.2_

- [x] 9.2 Verify development server starts
  - Run `npm run dev`
  - Check for console errors
  - _Requirements: 12.2_

- [x] 9.3 Verify home page renders correctly
  - Check all sections: Hero, Projects, About, Contact
  - _Requirements: 12.3_

- [x] 9.4 Verify project detail pages
  - Test all 4 project pages display correct data
  - _Requirements: 12.4_

- [x] 9.5 Verify category filter functionality
  - Test Projects component filter works correctly
  - _Requirements: 12.5_

- [x] 9.6 Verify navigation links
  - Test internal links between pages
  - Test smooth scroll to sections
  - _Requirements: 12.6, 9.7_

- [x] 9.7 Verify mobile menu toggle
  - Test hamburger menu appears on small screens
  - _Requirements: 12.7, 14.1, 14.2, 14.3_

- [x] 9.8 Verify contact form
  - Test form displays all fields
  - Test validation (name, email, message)
  - Test success/error messages
  - _Requirements: 12.8_

- [x] 9.9 Verify footer social links
  - Test all social links navigate to correct URLs
  - _Requirements: 12.9_

- [x] 9.10 Verify 404 handling
  - Test invalid project slug shows not-found state
  - _Requirements: 5.8, 9.5_

### Phase 10: Deployment Configuration

- [x] 10.1 Configure deployment settings
  - Verify next.config.js has necessary configurations
  - _Requirements: 15.1_

- [x] 10.2 Verify package.json scripts
  - Ensure scripts for build, dev, start exist
  - `start` serves the exported `out/` directory with `serve` (Next.js does not allow
    `next start` when `output: 'export'` is configured)
  - _Requirements: 15.2_

- [x] 10.3 Verify .gitignore
  - Ensure node_modules and build artifacts excluded
  - _Requirements: 15.3_

- [x] 10.4 Verify static assets
  - Confirm /public/images accessible after build
  - _Requirements: 15.4_

## Notes

- Tasks are organized in phases for logical progression
- Each phase builds on the previous phase
- Icon mapping is centralized in lib/icons.tsx (documented mapping table + placeholder
  fallback for unmapped names) for maintainability
- Netlify Forms integration uses hidden form approach for form detection
- All 12 Vue components migrated to React equivalents
- Static export enables deployment to any hosting platform
- Contact form posts to Netlify Forms through `fetch` (Requirement 10.2 mentions an API
  route / Server Action, which is not available in a static export build)
- `data/index.ts` is the single source of truth: the home page grid and the
  `/projects/[slug]` pages both read `projects.items`, which now also carries the slug,
  category, date, accent color, overview paragraphs, technical stack and per-project CTA
  used by the detail pages
- The home page renders Hero, Projects, About and Contact only - the deployed Nuxt site
  has no call-to-action band there; `Cta` is used at the bottom of each project page

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1", "1.2", "1.3", "1.4"] },
    { "id": 1, "tasks": ["2.1", "2.2", "2.3", "2.4", "2.5"] },
    { "id": 2, "tasks": ["3.1", "3.2"] },
    { "id": 3, "tasks": ["4.1", "4.2", "4.3"] },
    { "id": 4, "tasks": ["5.1", "5.2"] },
    { "id": 5, "tasks": ["6.1", "6.2", "6.3", "6.4", "6.5", "6.6", "6.7", "6.8", "6.9", "6.10", "6.11", "6.12"] },
    { "id": 6, "tasks": ["7.1", "7.2", "7.3", "7.4", "7.5", "7.6"] },
    { "id": 7, "tasks": ["8.1", "8.2", "8.3", "8.4"] },
    { "id": 8, "tasks": ["9.1", "9.2", "9.3", "9.4", "9.5", "9.6", "9.7", "9.8", "9.9", "9.10"] },
    { "id": 9, "tasks": ["10.1", "10.2", "10.3", "10.4"] }
  ]
}
```