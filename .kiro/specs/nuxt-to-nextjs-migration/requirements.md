# Requirements Document: Nuxt to Next.js Migration

## Introduction

This document outlines the requirements for migrating the CON Developers portfolio from Nuxt 4 (Vue 3) to Next.js (React). The migration encompasses pages, components, layouts, data, assets, and configuration files while maintaining equivalent or enhanced functionality.

## Glossary

- **Nuxt**: Vue.js framework for server-side rendering and static site generation
- **Next.js**: React framework for server-side rendering, static site generation, and routing
- **Tailwind CSS**: Utility-first CSS framework (v4 in Nuxt, standard version in Next.js)
- **@nuxt/icon**: Nuxt module for Iconify icon integration
- **@nuxt/image**: Nuxt module for optimized image handling
- **next/image**: Next.js built-in image optimization component
- **Netlify Forms**: Serverless form handling provided by Netlify platform
- **API Routes**: Next.js serverless function endpoints for backend logic
- **Static Site Generation (SSG)**: Pre-rendering pages at build time
- **Server-Side Rendering (SSR)**: Rendering pages on each request
- **Client Component**: React component that renders on the client side
- **Server Component**: React component that renders on the server side
- **Dynamic Route**: Route parameter for handling variable paths (e.g., /projects/[slug])

## Requirements

### Requirement 1: Project Setup and Configuration

**User Story:** As a developer, I want to set up the Next.js project with equivalent configuration, so that I can begin migrating the portfolio.

#### Acceptance Criteria

1. THE Developer SHALL create a Next.js project with TypeScript and Tailwind CSS support
2. THE Configuration SHALL include a compatibility date setting equivalent to nuxt.config.ts compatibilityDate "2024-12-18"
3. THE Project SHALL be configured to support static export (next export) and server-side rendering modes
4. THE TypeScript configuration SHALL include strict mode enabled and shall not produce type errors on build
5. WHEN the project build command executes successfully, THE Build Output SHALL generate static HTML files for the following routes: /, /projects/unicore-business-suite, /projects/unicore-hr-solutions, /projects/income-tax-calculator, /projects/funnecto-messaging
6. WHERE generated routes differ from the Nuxt nitro prerender configuration, THE Build SHALL complete without errors and the Developer SHALL perform route validation as a separate verification step

---

### Requirement 2: Global Styles and Theming

**User Story:** As a developer, I want to migrate the global CSS and Tailwind configuration, so that the visual design remains consistent.

#### Acceptance Criteria

1. WHEN the application builds, THE Global CSS SHALL include the Tailwind v4 @import "tailwindcss" directive and the @theme block defining --font-display with value "Inter", "Helvetica", "sans-serif"
2. WHEN the CSS loads, THE Custom CSS Variables SHALL define color-primary (#030213), color-primary-light (#ffffff), color-brand-green (#22c55e), color-brand-yellow (#fed600), color-brand-red (#ef4444), color-brand-blue (#6366f1), color-gray-900 (#111827), color-gray-600 (#4b5563), and color-gray-50 (#f9fafb)
3. THE Typography System SHALL define h1 as text-5xl md:text-6xl lg:text-7xl font-bold, h2 as text-4xl md:text-5xl font-bold, h3 as text-2xl font-bold, h4 as text-xl font-bold, using Inter font family
4. THE Animation Keyframes SHALL include fadeInUp (opacity 0 to 1 with translateY 30px to 0), slideInRight (opacity 0 to 1 with translateX 30px to 0), and pulse-glow (opacity 1 to 0.8 to 1) as defined in main.css
5. WHEN the application loads, THE Global Font Configuration SHALL load Inter font from Google Fonts CDN with font-display: swap, OR load a local font file with identical font metrics to Inter

---

### Requirement 3: Layout Migration

**User Story:** As a user, I want the site layout to remain consistent, so that I can navigate the portfolio without confusion.

#### Acceptance Criteria

1. WHEN the Default Layout is rendered, THE System SHALL render the Navbar component as the first element within the layout's root container.
2. WHEN the Default Layout is rendered, THE System SHALL render the Footer component as the last element within the layout's root container.
3. THE Default Layout SHALL provide a slot element for page content that is nested between the Navbar and Footer components in the DOM tree.
4. WHEN the Default Layout is loaded, THE System SHALL render structural HTML matching the Nuxt default.vue layout, consisting of a root container element containing Navbar, a slot element, and Footer in that sequential order.

---

### Requirement 4: Component Migration

**User Story:** As a developer, I want to migrate all Vue components to React equivalents, so that the UI functionality is preserved.

#### Acceptance Criteria

1. THE Hero Component SHALL render a hero section containing: a badge with icon and text "Available for new projects", a heading with title "Crafting Digital Solutions", a description paragraph about transforming ideas into software, two CTA buttons for scrolling to projects and contact sections, and a stats section displaying "4 Enterprise Projects", "4 Years Experience", "100K+ Lines of Code".
2. THE Projects Component SHALL display all projects with filtering by category and navigation links
3. THE About Component SHALL display the skills progress bars, expertise cards, and achievements
4. THE Contact Component SHALL render a contact form with fields for name (required, max 100 characters), email (required, valid email format), and message (required, max 1000 characters), and SHALL display a success message for 5 seconds after successful submission or an error message on failure.
5. THE Navbar Component SHALL render the logo, navigation links, and mobile hamburger menu that appears when viewport width is less than 768px (md breakpoint).
6. THE Footer Component SHALL render the brand info, quick links, services, contact info, and social links
7. THE SocialLinks Component SHALL render social media links for Facebook, Instagram, LinkedIn, and WhatsApp with corresponding icons.
8. THE Container Component SHALL provide consistent max-width container styling
9. THE Features Component SHALL display the features/areas of expertise section
10. THE Testimonials Component SHALL render client testimonials with avatars
11. THE Cta Component SHALL render call-to-action sections
12. WHERE a component uses Icons, THE React Equivalent SHALL use lucide-react or react-icons, and SHALL provide a mapping document defining which Vue icon names (simple-icons:sparkles, simple-icons-arrowright, simple-icons-code, simple-icons-calendar, simple-icons-award, simple-icons-target, simple-icons-facebook, simple-icons-instagram, simple-icons-linkedin, simple-icons-whatsapp, simple-icons-mail, simple-icons-phone, simple-icons-mappin, simple-icons-palette, simple-icons-zap, simple-icons-users, simple-icons-menu, simple-icons-x) map to which React icon names.

---

### Requirement 5: Page Migration

**User Story:** As a user, I want all pages to be accessible in the migrated site, so that I can view the complete portfolio.

#### Acceptance Criteria

1. THE Home Page (/) SHALL render the Hero, Projects, About, and Contact sections
2. THE Project Detail Pages SHALL use dynamic routing (/projects/[slug]) to display individual projects
3. THE Project Detail Pages SHALL fetch project data from the data source and display title, description, image, features, and tags
4. THE Project Detail Pages SHALL include the "Back to Home" navigation link
5. WHEN the home page is rendered, THE System SHALL include unique metadata with title "CON Developers - Software Solutions" and a meta description tag, using Next.js Metadata API
6. WHEN the data source fails to load, THE System SHALL display an error message with a retry button and a link back to home
7. WHEN a user navigates to a project page, THE Dynamic Route SHALL find and display the correct project based on the slug parameter
8. WHERE the slug does not match any project, THE Page SHALL display a not-found state with a link back to home

---

### Requirement 6: Data Migration

**User Story:** As a developer, I want to migrate the project data, so that it can be used by the Next.js components.

#### Acceptance Criteria

1. THE Data File SHALL be migrated to a TypeScript or JSON file located in a directory that can be resolved by the Next.js build system
2. THE Data Structure SHALL contain all fields defined in the data/index.json file with the same nested structure and data types
3. THE Project Data SHALL be importable via ES6 import statements in both .tsx/.jsx component files and .ts/.js server files
4. THE Hero, Projects, Features, Testimonials, CTA, and Social data sections SHALL each be accessible as a named export from the migrated data file

---

### Requirement 7: Icon System Migration

**User Story:** As a developer, I want to replace Nuxt-specific icon components with React equivalents, so that icons render correctly.

#### Acceptance Criteria

1. WHEN lucide-react is installed via npm, THE Icon Integration SHALL configure lucide-react as the primary icon library
2. THE Navbar SHALL display icons for WhatsApp and mobile menu toggle
3. THE Footer SHALL display icons for social links (Facebook, Instagram, LinkedIn, WhatsApp) and contact info
4. THE About Component SHALL display icons for expertise cards and achievements
5. THE Projects Component SHALL display calendar icon for project dates
6. THE Hero Component SHALL display icons for sparkles, arrow-right, and code
7. WHERE an exact icon match does not exist, THE Implementation SHALL use a visually similar alternative
8. THE Developer SHALL create a mapping table documenting which SimpleIcons icon names (from the Vue project) map to which lucide-react icon names
9. WHEN an icon cannot be mapped, THE System SHALL log a warning and render a placeholder indicator (e.g., a simple box or question mark icon)

---

### Requirement 8: Image Optimization Migration

**User Story:** As a developer, I want to replace @nuxt/image with next/image, so that images are optimized.

#### Acceptance Criteria

1. THE System SHALL identify all image components in the components directory that use HTML img tags or @nuxt/image, and migrate them to use next/image
2. THE Image Components using next/image SHALL include alt text, object-fit styling with value "cover" or "contain", and responsive sizes prop with breakpoints of 640w, 768w, 1024w, 1280w, and 1920w
3. THE next.config.js SHALL configure the images object with remotePatterns or images.domains to allow localhost and relative paths starting with /images/
4. THE Logo Image in Navbar SHALL use next/image with width prop set to 150 and height prop set to 40 for desktop displays, and width prop set to 120 and height prop set to 32 for mobile displays

---

### Requirement 9: Routing and Navigation

**User Story:** As a user, I want to navigate between pages using the same URLs, so that bookmarks and links continue to work.

#### Acceptance Criteria

1. THE Routing System SHALL use Next.js App Router (app directory)
2. THE Home Page Route SHALL be app/page.tsx rendering the homepage
3. THE Project Detail Route SHALL be app/projects/[slug]/page.tsx
4. WHEN a user navigates to any of the following URLs, THE System SHALL serve the corresponding Next.js page:
   - `/` → app/page.tsx (homepage)
   - `/projects/unicore-business-suite` → app/projects/unicore-business-suite/page.tsx
   - `/projects/unicore-hr-solutions` → app/projects/unicore-hr-solutions/page.tsx
   - `/projects/income-tax-calculator` → app/projects/income-tax-calculator/page.tsx
   - `/projects/funnecto-messaging` → app/projects/funnecto-messaging/page.tsx
5. IF a user requests a project slug that does not match one of the defined slugs, THEN THE System SHALL return a 404 error
6. THE Navigation Links SHALL use Next.js Link component
7. WHEN a user clicks a navigation link to a section on the same page, THE System SHALL scroll smoothly to the target section within 500 milliseconds

---

### Requirement 10: Form Handling Migration

**User Story:** As a user, I want to submit the contact form and receive confirmation, so that I can reach out to the portfolio owner.

#### Acceptance Criteria

1. THE Contact Form SHALL include name, email, and message fields with validation
2. THE Form Submission SHALL be handled by a Next.js API route or Server Action
3. THE Success Message SHALL display after successful form submission
4. THE Error Message SHALL display when form submission fails
5. THE Form State (submitting, success, error) SHALL be managed with React useState
6. THE Submitting State SHALL immediately exit when an error occurs - submitting and error states SHALL be mutually exclusive

---

### Requirement 11: Static Site Generation

**User Story:** As a developer, I want the migrated site to support static export, so that it can be deployed to any hosting platform.

#### Acceptance Criteria

1. THE Project Configuration SHALL support next export for static site generation
2. THE Prerendered Routes SHALL include "/" and all project detail pages
3. THE Generated Output SHALL produce HTML files for each route
4. THE Assets SHALL be optimized and bundled correctly

---

### Requirement 12: Testing and Verification

**User Story:** As a developer, I want to verify that the migrated site functions correctly, so that I can ensure a successful migration.

#### Acceptance Criteria

1. THE Build Command SHALL complete without errors
2. THE Development Server SHALL start without errors
3. THE Home Page SHALL load and render all sections correctly
4. EACH Project Detail Page SHALL load and display the correct project data
5. THE Category Filter in Projects SHALL filter projects correctly
6. THE Navigation Links SHALL work between pages
7. THE Mobile Menu SHALL toggle correctly on small screens
8. THE Contact Form SHALL display and validate inputs
9. THE Footer Social Links SHALL navigate to correct URLs

---

### Requirement 13: SEO and Metadata

**User Story:** As a site owner, I want the migrated site to maintain SEO metadata, so that search engine visibility is preserved.

#### Acceptance Criteria

1. THE Home Page SHALL have title "CON Developers - Software Solutions"
2. THE Home Page SHALL have the current meta description
3. EACH Project Detail Page SHALL have dynamic title and description
4. THE HTML Lang Attribute SHALL be set to "en-US"
5. THE Metadata API SHALL export the equivalent metadata from each page

---

### Requirement 14: Responsive Design Verification

**User Story:** As a user, I want the site to work correctly on mobile devices, so that I can view the portfolio on any device.

#### Acceptance Criteria

1. THE Navbar SHALL display a hamburger menu on mobile (md:hidden breakpoint)
2. THE Navbar SHALL display full navigation on desktop (md:flex)
3. THE Navbar SHALL force hamburger menu on all mobile devices regardless of available screen space
4. THE Projects Grid SHALL display as single column on mobile and two columns on desktop
5. THE Projects Grid SHALL limit maximum columns to two across all screen sizes
6. THE Contact Form SHALL be full-width on mobile
7. THE Footer Grid SHALL stack on mobile and display 4 columns on desktop

---

### Requirement 15: Deployment Configuration

**User Story:** As a developer, I want to configure the project for deployment, so that the site can be deployed to production.

#### Acceptance Criteria

1. THE next.config.js SHALL include necessary configurations for the deployment platform
2. THE package.json SHALL include scripts for build, dev, and start
3. THE .gitignore SHALL exclude node_modules and build artifacts
4. THE Static Assets in /public/images SHALL be accessible after build