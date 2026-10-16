import type { MetadataRoute } from 'next';
import { getProjectSlugs } from '@/data';

const SITE_URL = 'https://condevelopers.netlify.app';

/** Static export keeps `trailingSlash: true`, so URLs end with a slash. */
function url(path: string) {
  return `${SITE_URL}${path === '/' ? '/' : `/${path.replace(/^\//, '')}/`}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: url('/'),
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...getProjectSlugs().map((slug) => ({
      url: url(`/projects/${slug}`),
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.8,
    })),
  ];
}
