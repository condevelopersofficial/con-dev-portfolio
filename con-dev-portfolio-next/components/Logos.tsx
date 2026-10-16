import { logos } from '@/data';
import { getIcon } from '@/lib/icons';

/** Human readable labels for the Simple Icons names stored in the data file. */
const techLabels: Record<string, string> = {
  'simple-icons:javascript': 'JavaScript',
  'simple-icons:typescript': 'TypeScript',
  'simple-icons:react': 'React',
  'simple-icons:vue': 'Vue',
  'simple-icons:node-dot-js': 'Node.js',
  'simple-icons:mongodb': 'MongoDB',
  'simple-icons:express': 'Express',
  'simple-icons:socketdotio': 'Socket.io',
};

interface LogosProps {
  title?: string;
  className?: string;
}

/**
 * "Technologies We Work With" strip.
 *
 * Migrated from Nuxt's `Logos.vue`, where every logo was an `i-simple-icons:*`
 * glyph. lucide-react has no brand glyphs for these technologies, so each name
 * maps to a visually similar generic icon (see `lib/icons.tsx`) and the
 * technology label is rendered next to it for clarity.
 */
export default function Logos({ title = logos.title, className = '' }: LogosProps) {
  return (
    <section className={`py-16 px-6 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
          {title}
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {logos.icons.map((icon) => {
            const Icon = getIcon(icon.name);
            const label = techLabels[icon.name] ?? icon.name;
            return (
              <div
                key={icon.name}
                className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-100 rounded-full text-gray-700"
                title={label}
              >
                <Icon className="w-5 h-5 text-gray-500" />
                <span className="text-sm font-medium">{label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
