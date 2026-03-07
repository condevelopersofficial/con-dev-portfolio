import { motion } from 'motion/react';
import { ArrowRight, Code2, Sparkles } from 'lucide-react';
import logoImage from 'figma:asset/ef7a1ad39259f598e17d11908c8ff85dbc8cc8fc.png';

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full mb-6">
              <Sparkles className="w-4 h-4" style={{ color: 'var(--color-brand-yellow)' }} />
              <span className="text-sm text-gray-700">Available for new projects</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Crafting Digital
              <span className="block mt-2">
                <span style={{ color: 'var(--color-brand-blue)' }}>Solutions</span>
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Transforming ideas into powerful software applications. 
              Specializing in modern web development with cutting-edge technologies.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToProjects}
                className="group px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all flex items-center gap-2"
              >
                View Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-full hover:bg-gray-50 transition-all"
              >
                Get in Touch
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-8">
              <div>
                <div className="text-3xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="h-12 w-px bg-gray-200" />
              <div>
                <div className="text-3xl font-bold text-gray-900">30+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="h-12 w-px bg-gray-200" />
              <div>
                <div className="text-3xl font-bold text-gray-900">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <div
                className="absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl opacity-20"
                style={{ background: 'var(--color-brand-blue)' }}
              />
              <div
                className="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-3xl opacity-20"
                style={{ background: 'var(--color-brand-red)' }}
              />
              
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <div className="flex items-center justify-center mb-6">
                  <img src={logoImage} alt="Logo" className="w-32 h-32" />
                </div>
                
                <div className="space-y-4">
                  <div
                    className="h-3 rounded-full"
                    style={{ background: 'var(--color-brand-green)', width: '80%' }}
                  />
                  <div
                    className="h-3 rounded-full"
                    style={{ background: 'var(--color-brand-yellow)', width: '60%' }}
                  />
                  <div
                    className="h-3 rounded-full"
                    style={{ background: 'var(--color-brand-red)', width: '90%' }}
                  />
                  <div
                    className="h-3 rounded-full"
                    style={{ background: 'var(--color-brand-blue)', width: '70%' }}
                  />
                </div>
                
                <div className="mt-8 flex items-center justify-center gap-3">
                  <Code2 className="w-6 h-6 text-gray-400" />
                  <div className="text-sm text-gray-500">Building the future, one line at a time</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
