/**
 * Icon system for the Next.js portfolio.
 *
 * The Nuxt version rendered icons through `@nuxt/icon` (Iconify / Simple Icons).
 * The React equivalent is `lucide-react`. Icons are referenced by their original
 * Simple Icons name through `getIcon()` when the name comes from data files, and
 * imported directly when it is hard-coded in a component.
 *
 * Mapping table (Nuxt Simple Icons -> lucide-react):
 *
 * | Simple Icons name           | React component            | Used by                    |
 * | --------------------------- | -------------------------- | -------------------------- |
 * | simple-icons:sparkles       | Sparkles                   | Hero badge                 |
 * | simple-icons:arrowright     | ArrowRight                 | Hero / Cta buttons         |
 * | simple-icons:code           | Code                       | Hero card, About           |
 * | simple-icons:calendar       | Calendar                   | Projects cards             |
 * | simple-icons:award          | Award                      | About achievements         |
 * | simple-icons:target         | Target                     | About achievements         |
 * | simple-icons:facebook       | Facebook                   | SocialLinks / Footer       |
 * | simple-icons:instagram      | Instagram                  | SocialLinks / Footer       |
 * | simple-icons:linkedin       | Linkedin                   | SocialLinks / Footer       |
 * | simple-icons:whatsapp       | WhatsAppIcon (local SVG)   | Navbar, SocialLinks        |
 * | simple-icons:mail           | Mail                       | Footer contact info        |
 * | simple-icons:phone          | Phone                      | Footer contact info        |
 * | simple-icons:mappin         | MapPin                     | Footer contact info        |
 * | simple-icons:palette        | Palette                    | About expertise cards      |
 * | simple-icons:zap            | Zap                        | About expertise / Features |
 * | simple-icons:users          | Users                      | About expertise            |
 * | simple-icons:menu           | Menu                       | Navbar mobile toggle       |
 * | simple-icons:x              | X                          | Navbar mobile close        |
 *
 * `lucide-react` dropped brand glyphs other than the social ones above, so
 * WhatsApp uses a local inline SVG (`WhatsAppIcon`) to stay visually identical
 * to the deployed Nuxt site. Technology logos from `data.logos` have no brand
 * equivalent in lucide, so they map to visually similar generic icons.
 */

import {
  ArrowRight,
  Atom,
  Award,
  Boxes,
  Braces,
  Calendar,
  Code,
  Cpu,
  Database,
  Facebook,
  FileCode,
  Github,
  Instagram,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Palette,
  Phone,
  Quote,
  Send,
  Sparkles,
  Tag,
  Target,
  Users,
  X,
  Zap,
} from 'lucide-react';
import type { LucideIcon, LucideProps } from 'lucide-react';

/**
 * WhatsApp glyph (Simple Icons) as an inline SVG, since lucide-react does not
 * ship the brand icon. Accepts the same props as a lucide icon.
 */
export function WhatsAppIcon(props: LucideProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      aria-hidden="true"
      {...props}
      className={props.className ?? 'w-4 h-4'}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.174.199-.347.223-.645.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.049-.371-.025-.52-.075-.148-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export type IconComponent = React.ComponentType<LucideProps>;

/** Name -> component. Names accepted with or without the `i-`/`simple-icons` prefix. */
export const iconMap: Record<string, IconComponent> = {
  'simple-icons:sparkles': Sparkles,
  'simple-icons:arrowright': ArrowRight,
  'simple-icons:code': Code,
  'simple-icons:calendar': Calendar,
  'simple-icons:award': Award,
  'simple-icons:target': Target,
  'simple-icons:facebook': Facebook,
  'simple-icons:instagram': Instagram,
  'simple-icons:linkedin': Linkedin,
  'simple-icons:whatsapp': WhatsAppIcon,
  'simple-icons:mail': Mail,
  'simple-icons:phone': Phone,
  'simple-icons:mappin': MapPin,
  'simple-icons:palette': Palette,
  'simple-icons:zap': Zap,
  'simple-icons:users': Users,
  'simple-icons:menu': Menu,
  'simple-icons:x': X,
  'simple-icons:github': Github,
  'simple-icons:quote': Quote,
  'simple-icons:tag': Tag,
  'simple-icons:javascript': FileCode,
  'simple-icons:typescript': Braces,
  'simple-icons:react': Atom,
  'simple-icons:vue': Layers,
  'simple-icons:node-dot-js': Cpu,
  'simple-icons:mongodb': Database,
  'simple-icons:express': Boxes,
  'simple-icons:socketdotio': Send,
};

/** Placeholder rendered when a data-driven icon name cannot be mapped. */
export function IconFallback({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <span
      className={`inline-block border-2 border-dashed border-gray-300 rounded ${className}`}
      aria-hidden="true"
    />
  );
}

function normalizeIconName(name: string): string {
  // Accepts "i-simple-icons-whatsapp", "simple-icons:whatsapp", "whatsapp".
  const stripped = name.replace(/^i-/, '').replace(/^simple-icons[:-]/, '');
  return `simple-icons:${stripped.toLowerCase().replace(/\s+/g, '')}`;
}

/**
 * Resolves a Simple Icons name (as stored in the data files) to its React
 * equivalent. Unknown names log a warning and render a placeholder box, which
 * keeps the migrated layout intact instead of crashing the render.
 */
export function getIcon(iconName?: string): IconComponent {
  if (!iconName) return IconFallback;

  const Icon = iconMap[iconName] ?? iconMap[normalizeIconName(iconName)];
  if (!Icon) {
    console.warn(`Icon "${iconName}" has no lucide-react mapping, using placeholder`);
    return IconFallback;
  }
  return Icon;
}

export {
  ArrowRight,
  Award,
  Calendar,
  Code,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Palette,
  Phone,
  Quote,
  Sparkles,
  Tag,
  Target,
  Users,
  X,
  Zap,
};
export type { LucideIcon };
