import Link from 'next/link';

interface Button {
  label: string;
  url: string;
}

interface CtaProps {
  title?: string;
  description?: string;
  buttons?: Button[];
  /**
   * 'card'    - rounded gradient band used at the bottom of project detail pages
   *             (matches the deployed Nuxt layout).
   * 'section' - full-bleed dark section.
   */
  variant?: 'card' | 'section';
  /** Extra classes for the outer wrapper. */
  className?: string;
}

const isExternal = (url: string) =>
  /^(https?:|mailto:|tel:|#)/.test(url) || url.startsWith('/#');

/**
 * Call-to-action band.
 *
 * Migrated from Nuxt's `Cta.vue`. On project pages it is driven by the
 * per-project `cta` entry in the data file (heading, copy and the
 * "Email Us" / "View All Projects" buttons).
 */
export default function Cta({
  title,
  description,
  buttons = [],
  variant = 'card',
  className = '',
}: CtaProps) {
  const buttonClass = (idx: number) =>
    idx === 0
      ? 'px-8 py-4 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-all font-semibold'
      : 'px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white/10 transition-all font-semibold';

  const content = (
    <>
      {/* Decorative blur glows */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20 bg-green-500 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl opacity-20 bg-indigo-500 pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{title}</h2>
        )}
        {description && <p className="text-lg text-gray-300 mb-10">{description}</p>}
        {buttons.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {buttons.map((button, idx) =>
              isExternal(button.url) ? (
                <a
                  key={button.label}
                  href={button.url}
                  target={button.url.startsWith('http') ? '_blank' : undefined}
                  rel={button.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={buttonClass(idx)}
                >
                  {button.label}
                </a>
              ) : (
                <Link key={button.label} href={button.url} className={buttonClass(idx)}>
                  {button.label}
                </Link>
              ),
            )}
          </div>
        )}
      </div>
    </>
  );

  if (variant === 'section') {
    return (
      <section className={`relative py-20 px-6 md:px-12 text-center bg-gray-900 overflow-hidden ${className}`}>
        {content}
      </section>
    );
  }

  return (
    <div
      className={`relative py-20 px-6 md:px-12 text-center bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden ${className}`}
    >
      {content}
    </div>
  );
}
