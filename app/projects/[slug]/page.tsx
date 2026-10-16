import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { getProjectBySlug, getProjectSlugs } from '@/data';
import Cta from '@/components/Cta';

interface ProjectPageProps {
  params: { slug: string };
}

/** Pre-render a static page for every project (SSG). */
export async function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return { title: 'Project Not Found - CON Developers' };
  }

  return {
    title: `${project.title} - CON Developers`,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} - CON Developers`,
      description: project.description,
      url: `/projects/${project.slug}`,
      images: [{ url: project.image, width: project.imageWidth, height: project.imageHeight, alt: project.imageAlt }],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} - CON Developers`,
      description: project.description,
      images: [project.image],
    },
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Back to Home */}
        <div className="mb-8">
          <Link
            href="/"
            className="text-gray-700 hover:text-gray-900 flex items-center gap-2 font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            {project.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Cover image */}
        <div className="mb-16">
          <div className="rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-100">
            <Image
              src={project.image}
              alt={project.imageAlt}
              width={project.imageWidth}
              height={project.imageHeight}
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Key Features */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features</h2>
            <ul className="space-y-3">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span
                    className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            {/* Technologies */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Overview */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-lg p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Project Overview</h3>
              <div className="space-y-4">
                {project.overview.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)} className="text-gray-300 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Technical Stack */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Stack</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                {project.techStack.map((group) => (
                  <div key={group.heading}>
                    <h4 className="font-semibold text-gray-900 mb-3">{group.heading}</h4>
                    <ul className="space-y-2 text-gray-600">
                      {group.items.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span aria-hidden="true">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Project CTA */}
        <Cta
          title={project.cta.title}
          description={project.cta.description}
          buttons={project.cta.buttons}
        />
      </div>
    </div>
  );
}
