/**
 * Site data for the CON Developers portfolio.
 *
 * Migrated from the Nuxt project's `data/index.json`. Every section is exposed
 * as a named export so components can import only what they need
 * (`hero`, `logos`, `projects`, `features`, `testimonials`, `cta`, `social`).
 *
 * `projects.items` is the single source of truth for both the home page grid
 * and the `/projects/[slug]` detail pages.
 */

export interface Button {
  label: string;
  url: string;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface HeroData {
  image: string;
  imageAlt: string;
  badge: string;
  titleLead: string;
  titleHighlight: string;
  description: string;
  buttons: Button[];
  stats: HeroStat[];
  cardCaption: string;
}

export interface IconItem {
  name: string;
}

export interface LogosData {
  title: string;
  icons: IconItem[];
}

export interface TechStackGroup {
  heading: string;
  items: string[];
}

export interface ProjectCta {
  title: string;
  description: string;
  buttons: Button[];
}

export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  imageAlt: string;
  /** Intrinsic size of `image`, used by next/image to reserve layout space. */
  imageWidth: number;
  imageHeight: number;
  tags: string[];
  color: string;
  category: string;
  date: string;
  features: string[];
  overview: string[];
  techStack: TechStackGroup[];
  cta: ProjectCta;
}

/** Kept as an alias so the home-page grid and the detail pages share one type. */
export type ProjectItem = Project;

export interface ProjectsData {
  title: string;
  description: string;
  items: Project[];
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
  /** Optional - when empty the testimonial card renders the author's initial. */
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

export const CONTACT_EMAIL = 'condevelopersofficial@gmail.com';
export const CONTACT_PHONE = '+92 314 4461293';
export const WHATSAPP_URL = 'https://wa.me/923144461293';

export const hero: HeroData = {
  image: '/images/Logo.png',
  imageAlt: 'CON Developers Logo',
  badge: 'Available for new projects',
  titleLead: 'Crafting Digital',
  titleHighlight: 'Solutions',
  description:
    'Transforming ideas into powerful software applications. Specializing in modern web development with cutting-edge technologies.',
  buttons: [
    { label: 'View Projects', url: '#projects' },
    { label: 'Get in Touch', url: '#contact' },
  ],
  stats: [
    { value: '4', label: 'Enterprise Projects' },
    { value: '4', label: 'Years Experience' },
    { value: '100K+', label: 'Lines of Code' },
  ],
  cardCaption: 'Building the future, one line at a time',
};

export const logos: LogosData = {
  title: 'Technologies We Work With',
  icons: [
    { name: 'simple-icons:javascript' },
    { name: 'simple-icons:typescript' },
    { name: 'simple-icons:react' },
    { name: 'simple-icons:vue' },
    { name: 'simple-icons:node-dot-js' },
    { name: 'simple-icons:mongodb' },
    { name: 'simple-icons:express' },
    { name: 'simple-icons:socketdotio' },
  ],
};

export const projects: ProjectsData = {
  title: 'Featured Projects',
  description:
    'Showcasing our latest work in software development and digital innovation',
  items: [
    {
      id: 1,
      title: 'UniCore Business Suite',
      slug: 'unicore-business-suite',
      description:
        'A cloud-based ERP & Business Suite for retail, wholesale, distribution, and service businesses — manage inventory, accounting, sales, CRM, and analytics from one place, with an optional purpose-built Optical & Prescription module.',
      image: '/images/projects/ucbslatest.png',
      imageAlt: 'UniCore Business Suite',
      imageWidth: 1351,
      imageHeight: 630,
      tags: [
        'React',
        'Node.js',
        'MongoDB',
        'Material-UI',
        'Redux',
        'PWA',
        'Socket.io',
        'SaaS',
      ],
      color: '#22c55e',
      category: 'ERP',
      date: 'October 2026',
      features: [
        'Inventory & Stock Management — barcode/QR codes, reorder-level & low-stock alerts, multi-unit UOM conversions',
        'Sales & Purchases — orders, invoices, partial payments, and sales/purchase returns (RMA)',
        'Double-Entry Accounting — hierarchical chart of accounts, general & subsidiary ledgers, opening balances, multi-currency',
        'Bank & Cash Management — receipts and payments for both bank and cash, with full audit trail',
        'CRM & WhatsApp Integration — customer segments, message templates, communication center, contact management',
        'Optical & Prescription Module (optional) — prescriptions, lens-power stock variants, prescription reports',
        'Real-Time Analytics Dashboard & Live Notifications',
        'Order Fulfillment Workflow — order-prep schedule, today’s orders, address labels for parcel dispatch',
        'Reporting — PDF & Excel export, bulk Excel import',
        'Secure & Mobile-Ready — role-based access, installable PWA, responsive across all devices, automated cloud backup & restore',
      ],
      overview: [
        'UniCore Business Suite is a full-featured, cloud-delivered ERP built on the MERN stack that centralizes every core business operation. It handles inventory and stock management, a complete double-entry accounting engine with a hierarchical chart of accounts, sales and purchase processing with returns, and built-in CRM — including WhatsApp-based messaging and customer segmentation. Businesses can sell both products and services, track stock across units of measurement, and manage bank and cash transactions with full financial records.',
        'The platform ships with real-time dashboards, live notifications, an installable mobile-friendly PWA experience, PDF and Excel reporting, role-based user access, and automated cloud backup & restore. A configurable business-type setting enables an optional Optical & Prescription vertical — supporting eyesight prescriptions, near/computer add-mode lenses, power-based stock tracking, and prescription reports.',
        'Built for general stores & retail, optical shops, electronics, hardware & auto-parts, wholesale & distribution, service businesses (clinics, salons, workshops, coaching), and hybrid product + service businesses.',
      ],
      techStack: [
        {
          heading: 'Frontend',
          items: [
            'React 18 with Material-UI (MUI)',
            'Redux Toolkit',
            'React Router',
            'PWA (Service Worker + Push)',
            'Socket.io Client',
            'jsPDF & Excel Export',
            'Barcode / QR Generation',
          ],
        },
        {
          heading: 'Backend',
          items: [
            'Node.js with Express',
            'MongoDB with Mongoose',
            'JWT Authentication with Role-Based Permissions',
            'Socket.io Real-Time Server',
            'Cloud Backup & Restore Engine',
            'Auto-Incrementing Sequences',
          ],
        },
      ],
      cta: {
        title: 'Interested in this solution?',
        description:
          'Contact us to learn more about how UniCore Business Suite can transform your operations.',
        buttons: [
          { label: 'Email Us', url: `mailto:${CONTACT_EMAIL}` },
          { label: 'View All Projects', url: '/' },
        ],
      },
    },
    {
      id: 2,
      title: 'UniCore HR Solutions',
      slug: 'unicore-hr-solutions',
      description:
        'Complete HR management platform with employee management, payroll processing, attendance tracking with biometric integration, and AI-powered HR assistant.',
      image: '/images/projects/unicore-hr-solutions.jpg',
      imageAlt: 'UniCore HR Solutions',
      imageWidth: 1300,
      imageHeight: 619,
      tags: ['React', 'Node.js', 'MongoDB', 'AI/ML', 'Material-UI'],
      color: '#6366f1',
      category: 'HR',
      date: 'February 2026',
      features: [
        'Employee Management System',
        'Automated Payroll Processing',
        'Biometric Attendance Integration',
        'Shift & Schedule Management',
        'Leave & Holiday Management',
        'Loan & Advance Tracking',
        'AI-Powered HR Assistant',
        'Performance Analytics Dashboard',
        'Geo-fencing & Location Tracking',
        'Full & Final Settlement',
      ],
      overview: [
        'UniCore HR Solutions is an intelligent Human Resource Management System built with the MERN stack and integrated AI capabilities. The platform covers the entire employee lifecycle, including recruitment, onboarding, attendance tracking, payroll management, and employee performance insights.',
        'Key features include biometric attendance integration with Hikvision devices, shift scheduling with geo-fencing, automated payroll processing with configurable rules, leave management, employee loan tracking, and full & final settlement automation.',
        'The system also includes an AI-powered HR Assistant powered by Ollama, enabling users to ask HR-related questions and receive intelligent responses. With interactive dashboards powered by Recharts and advanced analytics, the platform helps HR teams make informed workforce decisions while improving operational efficiency.',
      ],
      techStack: [
        {
          heading: 'Frontend',
          items: [
            'React 19 with Material-UI',
            'Recharts Analytics',
            'React Router DOM',
            'Excel Processing',
            'File Upload & Export',
          ],
        },
        {
          heading: 'Backend',
          items: [
            'Node.js with Express',
            'MongoDB & MySQL',
            'Ollama AI Integration',
            'Hikvision API',
            'Geo-fencing & Caching',
          ],
        },
      ],
      cta: {
        title: 'Ready to optimize your HR processes?',
        description:
          'Contact us to discover how UniCore HR Solutions can transform your human resources management.',
        buttons: [
          { label: 'Email Us', url: `mailto:${CONTACT_EMAIL}` },
          { label: 'View All Projects', url: '/' },
        ],
      },
    },
    {
      id: 3,
      title: 'Income Tax Calculator',
      slug: 'income-tax-calculator',
      description:
        'Advanced tax calculation engine with multi-year support (2014-2026), bulk Excel processing, and detailed financial reporting for individuals and businesses.',
      image: '/images/projects/income-tax-calculator.jpg',
      imageAlt: 'Income Tax Calculator',
      imageWidth: 1300,
      imageHeight: 634,
      tags: ['Node.js', 'Express', 'Excel', 'REST API'],
      color: '#ef4444',
      category: 'Finance',
      date: 'January 2026',
      features: [
        'Multi-year Tax Calculations (2014-2026)',
        'Individual Tax Computation',
        'Bulk Excel Processing',
        'Real-time Tax Computation',
        'Detailed Financial Reports',
        'Monthly & Annual Breakdowns',
        'Cross-year Comparison',
        'REST API Integration',
      ],
      overview: [
        'The Income Tax Calculator is a powerful Node.js-based tax computation system designed to simplify complex tax calculations. It supports 12 tax years (2014–2026) and enables users to perform both individual and bulk tax calculations through Excel file uploads.',
        'The platform provides real-time tax computation with detailed monthly and annual breakdowns, along with cross-year tax comparisons for financial analysis and planning. It also includes a RESTful API for easy integration with other financial systems, making it suitable for accountants, finance professionals, and software integrations.',
        'With accurate financial calculations, detailed reporting, and a user-friendly web interface, the system helps users efficiently manage tax planning and compliance.',
      ],
      techStack: [
        {
          heading: 'Backend',
          items: [
            'Node.js with Express',
            'Multer File Processing',
            'XLSX Library',
            'CORS Support',
            'REST API Design',
          ],
        },
        {
          heading: 'Features',
          items: [
            '12 Tax Year Support',
            'Bulk Excel Processing',
            'Real-time Calculations',
            'Cross-year Comparisons',
            'Detailed Reporting',
          ],
        },
      ],
      cta: {
        title: 'Need accurate tax calculations?',
        description:
          'Contact us to learn how our Income Tax Calculator can simplify your financial compliance.',
        buttons: [
          { label: 'Email Us', url: `mailto:${CONTACT_EMAIL}` },
          { label: 'View All Projects', url: '/' },
        ],
      },
    },
    {
      id: 4,
      title: 'Funnecto Messaging',
      slug: 'funnecto-messaging',
      description:
        'Enterprise real-time messaging platform with AI-powered features, Socket.io, end-to-end encryption, group chats, file sharing, and comprehensive notification system.',
      image: '/images/projects/funnecto-messaging.jpg',
      imageAlt: 'Funnecto Messaging',
      imageWidth: 1300,
      imageHeight: 624,
      tags: [
        'React',
        'TypeScript',
        'Socket.io',
        'Node.js',
        'Material-UI',
        'AI/ML',
      ],
      color: '#fed600',
      category: 'Communication',
      date: 'December 2025',
      features: [
        'Real-time Messaging with Socket.io',
        'AI-Powered Message Insights',
        'Group Chats & Channels',
        'File Sharing & Preview',
        'End-to-end Encryption',
        'Presence & Typing Indicators',
        'User Authentication & Authorization',
        'Admin Dashboard',
        'Email Notifications',
        'Message Formatting & Emojis',
        'Password Reset System',
      ],
      overview: [
        'Funnecto Messaging is a secure, enterprise-grade real-time communication platform built using React 19, TypeScript, Node.js, and Socket.io. The application enables instant bidirectional messaging, group conversations, file sharing with preview support, and structured user management with role-based permissions.',
        'The system includes a modern Material-UI interface, emoji support, and rich message formatting to enhance the user communication experience. It also features an admin dashboard, email notifications via Nodemailer, advanced logging with Winston, and built-in rate limiting for enhanced security and system stability.',
        'A standout feature is Funnecto AI, an intelligent assistant that analyzes conversations, provides smart suggestions, and helps teams communicate more effectively. The AI can summarize discussions, extract action items, and provide contextual insights to improve collaboration.',
        'Designed with performance, scalability, and security in mind, Funnecto Messaging provides a reliable communication platform suitable for teams, organizations, and enterprise environments.',
      ],
      techStack: [
        {
          heading: 'Frontend',
          items: [
            'React 19 with TypeScript',
            'Material-UI Components',
            'Zustand State Management',
            'Socket.io Client',
            'React Hook Form',
          ],
        },
        {
          heading: 'Backend',
          items: [
            'Node.js with Express',
            'Socket.io Server',
            'MongoDB with Mongoose',
            'JWT Authentication',
            'Winston Logging',
          ],
        },
      ],
      cta: {
        title: 'Ready to improve team communication?',
        description:
          'Contact us to learn how Funnecto Messaging with AI-powered features can transform your workplace collaboration.',
        buttons: [
          { label: 'Email Us', url: `mailto:${CONTACT_EMAIL}` },
          { label: 'View All Projects', url: '/' },
        ],
      },
    },
  ],
};

export const features: FeaturesData = {
  title: 'Our Solutions',
  description:
    'We deliver comprehensive software solutions designed to solve complex business challenges:',
  items: [
    {
      title: 'Enterprise Resource Planning',
      description:
        'Full-featured ERP systems with inventory, accounting, order management, and real-time analytics.',
    },
    {
      title: 'HR Management Systems',
      description:
        'Complete HR platforms with payroll automation, biometric integration, and AI-powered assistance.',
    },
    {
      title: 'Financial Applications',
      description:
        'Advanced financial tools for tax calculation, accounting, and compliance management.',
    },
    {
      title: 'Real-time Communication',
      description:
        'Secure messaging platforms with Socket.io, file sharing, and enterprise-grade features.',
    },
    {
      title: 'Custom Web Applications',
      description:
        'Scalable MERN stack applications with modern UI frameworks and best practices.',
    },
    {
      title: 'AI-Powered Solutions',
      description:
        'Intelligent systems with AI assistants, automated workflows, and decision support.',
    },
  ],
};

export const testimonials: TestimonialsData = {
  title: 'Client Success Stories',
  description: 'Businesses that transformed their operations with our solutions:',
  items: [
    {
      quote:
        'The UniCore Business Suite transformed our inventory management, reducing processing time by 60% and improving our operational efficiency significantly.',
      author: {
        name: 'Sarah Johnson',
        title: 'Operations Director, TechCorp Inc.',
        avatar: '',
      },
    },
    {
      quote:
        'The HR Solutions platform with AI assistant streamlined our entire HR workflow, reducing administrative overhead by 40% while improving employee satisfaction.',
      author: {
        name: 'Michael Chen',
        title: 'HR Director, Global Solutions',
        avatar: '',
      },
    },
    {
      quote:
        'The tax calculation system saved us hundreds of hours in manual processing and improved our financial reporting accuracy by 95%.',
      author: {
        name: 'David Rodriguez',
        title: 'CFO, Financial Dynamics',
        avatar: '',
      },
    },
  ],
};

export const cta: CtaData = {
  title: 'Ready to Transform Your Business?',
  description:
    'Let us discuss how our software solutions can drive efficiency and growth for your organization.',
  buttons: [
    { label: 'Schedule a Consultation', url: `mailto:${CONTACT_EMAIL}` },
    { label: 'View Case Studies', url: '/#projects' },
  ],
};

export const social: SocialData = {
  title: 'Follow Us',
  links: [
    {
      name: 'Facebook',
      url: 'https://facebook.com/condevelopers',
      icon: 'simple-icons:facebook',
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/condevelopersofficial',
      icon: 'simple-icons:instagram',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/con-developers',
      icon: 'simple-icons:linkedin',
    },
    {
      name: 'WhatsApp',
      url: WHATSAPP_URL,
      icon: 'simple-icons:whatsapp',
    },
  ],
};

export const contactInfo = [
  {
    icon: 'simple-icons:mail',
    label: 'Email',
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    icon: 'simple-icons:phone',
    label: 'Phone',
    value: CONTACT_PHONE,
    href: 'tel:+923144461293',
  },
  {
    icon: 'simple-icons:mappin',
    label: 'Location',
    value: 'Pakistan',
    href: '#',
  },
];

const projectBySlug: Record<string, Project> = Object.fromEntries(
  projects.items.map((project) => [project.slug, project]),
);

/** Returns the project matching the given slug, or `undefined` for unknown slugs. */
export function getProjectBySlug(slug: string): Project | undefined {
  return projectBySlug[slug];
}

/** Slugs of every project - used by `generateStaticParams`. */
export function getProjectSlugs(): string[] {
  return projects.items.map((project) => project.slug);
}

export const siteData: SiteData = {
  hero,
  logos,
  projects,
  features,
  testimonials,
  cta,
  social,
};

const data: SiteData = siteData;
export default data;
