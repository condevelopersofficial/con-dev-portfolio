import { Palette, Users, Zap } from 'lucide-react';
import { features, type FeatureItem } from '@/data';

/** Rotated across the expertise cards, mirroring the Nuxt icon order. */
const cardIcons = [Palette, Zap, Users];

interface FeaturesProps {
  title?: string;
  description?: string;
  items?: FeatureItem[];
}

/**
 * "Our Solutions" grid.
 *
 * Migrated from Nuxt's `Features.vue`. Defaults to the `features` section of the
 * site data so it can be dropped into any page without passing props.
 */
export default function Features({
  title = features.title,
  description = features.description,
  items = features.items,
}: FeaturesProps) {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {title && (
          <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent leading-tight">
            {title}
          </h2>
        )}
        {description && (
          <p className="max-w-3xl mx-auto mt-6 text-lg text-center text-gray-600 leading-relaxed">
            {description}
          </p>
        )}
        <div className="grid gap-8 mt-16 mb-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => {
            const Icon = cardIcons[idx % cardIcons.length];
            return (
              <div
                key={item.title}
                className="p-8 bg-gradient-to-br from-white to-blue-50 rounded-xl border border-blue-100 shadow-md hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 group hover:border-blue-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg mb-6 group-hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="leading-relaxed text-gray-600 text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
