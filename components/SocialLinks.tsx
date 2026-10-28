import { social } from '@/data';
import { getIcon } from '@/lib/icons';

interface SocialLinksProps {
  /** Override the links (defaults to the `social` section of the site data). */
  links?: typeof social.links;
  /** Icon size classes, tuned for the dark footer by default. */
  iconClassName?: string;
  /** Extra classes for the wrapping element. */
  className?: string;
  /** Render the section title above the links. */
  showTitle?: boolean;
}

/**
 * Social media links (Facebook, Instagram, Threads, LinkedIn, WhatsApp).
 *
 * Migrated from Nuxt's `SocialLinks.vue`: the icon names stored in the data file
 * are resolved through `getIcon()` instead of `<Icon name="..." />`.
 */
export default function SocialLinks({
  links = social.links,
  iconClassName = 'w-6 h-6',
  className = 'flex gap-4',
  showTitle = false,
}: SocialLinksProps) {
  return (
    <div>
      {showTitle && (
        <h4 className="font-semibold mb-4 text-white">{social.title}</h4>
      )}
      <div className={className}>
        {links.map((link) => {
          const Icon = getIcon(link.icon);
          return (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              title={link.name}
              aria-label={link.name}
            >
              <Icon className={iconClassName} />
            </a>
          );
        })}
      </div>
    </div>
  );
}
