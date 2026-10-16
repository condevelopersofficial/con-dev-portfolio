import Image from 'next/image';
import { Quote } from 'lucide-react';
import { testimonials, type TestimonialItem } from '@/data';

interface TestimonialsProps {
  title?: string;
  description?: string;
  items?: TestimonialItem[];
}

/**
 * Client testimonials grid.
 *
 * Migrated from Nuxt's `Testimonials.vue`. When an author has no avatar image
 * (the case for the placeholder portfolio data) the author's initial is shown
 * instead, exactly as the Nuxt component did.
 */
export default function Testimonials({
  title = testimonials.title,
  description = testimonials.description,
  items = testimonials.items,
}: TestimonialsProps) {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {title && (
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            {title}
          </h2>
        )}
        {description && (
          <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto mb-16">
            {description}
          </p>
        )}

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.author.name}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all"
            >
              <Quote className="w-10 h-10 text-gray-300 mb-4" />
              <p className="text-gray-600 mb-6 leading-relaxed">{item.quote}</p>
              <div className="flex items-center gap-4">
                {item.author.avatar ? (
                  <Image
                    src={item.author.avatar}
                    alt={item.author.name}
                    width={48}
                    height={48}
                    sizes="48px"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-500 font-semibold">
                      {item.author.name.charAt(0)}
                    </span>
                  </div>
                )}
                <div>
                  <div className="font-semibold text-gray-900">{item.author.name}</div>
                  <div className="text-sm text-gray-500">{item.author.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
