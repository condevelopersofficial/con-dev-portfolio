import { motion } from 'motion/react';
import logoImage from 'figma:asset/ef7a1ad39259f598e17d11908c8ff85dbc8cc8fc.png';

export function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logoImage} alt="Logo" className="w-10 h-10" />
          <span className="text-xl font-semibold text-gray-900">Portfolio</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('home')}
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-6 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors"
          >
            Contact
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
