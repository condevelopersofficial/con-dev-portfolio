'use client';

import Image from 'next/image';
import { Sparkles, ArrowRight, Code } from 'lucide-react';
import { hero } from '@/data';

function scrollToSection(hash: string) {
  const id = hash.replace(/^#/, '');
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-32">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-gray-700">{hero.badge}</span>
            </div>

            {/* Heading */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
                {hero.titleLead}
                <span className="block mt-2" style={{ color: '#6366f1' }}>
                  {hero.titleHighlight}
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              {hero.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              {hero.buttons.map((button, idx) => {
                const isPrimary = idx === 0;
                return (
                  <button
                    key={button.label}
                    onClick={() => scrollToSection(button.url)}
                    className={
                      isPrimary
                        ? 'group px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all flex items-center gap-2 font-semibold'
                        : 'px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-full hover:bg-gray-50 transition-all font-semibold'
                    }
                  >
                    {button.label}
                    {isPrimary && (
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-8">
              {hero.stats.map((stat, idx) => (
                <div key={stat.label} className="flex items-center gap-8">
                  {idx > 0 && <div className="h-12 w-px bg-gray-200" />}
                  <div>
                    <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative">
              {/* Blur Glows */}
              <div
                className="absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl opacity-20"
                style={{ background: '#6366f1' }}
              />
              <div
                className="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-3xl opacity-20"
                style={{ background: '#ef4444' }}
              />

              {/* Card */}
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <Image
                  src={hero.image}
                  alt={hero.imageAlt}
                  width={200}
                  height={200}
                  sizes="128px"
                  className="w-32 h-32 mx-auto mb-6 object-contain"
                  priority
                />

                <div className="space-y-4">
                  <div className="h-3 rounded-full bg-green-500" style={{ width: '80%' }} />
                  <div className="h-3 rounded-full" style={{ background: '#fed600', width: '60%' }} />
                  <div className="h-3 rounded-full" style={{ background: '#ef4444', width: '90%' }} />
                  <div className="h-3 rounded-full" style={{ background: '#6366f1', width: '70%' }} />
                </div>

                <div className="mt-8 flex items-center justify-center gap-3">
                  <Code className="w-6 h-6 text-gray-400" />
                  <div className="text-sm text-gray-500">{hero.cardCaption}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
