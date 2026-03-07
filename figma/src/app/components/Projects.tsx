import { motion } from 'motion/react';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  color: string;
  category: string;
  date: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with payment integration, inventory management, and real-time analytics dashboard.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    color: 'var(--color-brand-green)',
    category: 'Web App',
    date: 'March 2026',
  },
  {
    id: 2,
    title: 'AI Analytics Dashboard',
    description: 'An intelligent analytics platform powered by machine learning to provide actionable business insights and predictions.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    tags: ['Python', 'TensorFlow', 'React', 'D3.js'],
    color: 'var(--color-brand-blue)',
    category: 'Data Science',
    date: 'February 2026',
  },
  {
    id: 3,
    title: 'Social Media Manager',
    description: 'Cross-platform social media management tool with scheduling, analytics, and automated posting capabilities.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
    tags: ['Vue.js', 'Firebase', 'API Integration'],
    color: 'var(--color-brand-red)',
    category: 'SaaS',
    date: 'January 2026',
  },
  {
    id: 4,
    title: 'Mobile Fitness App',
    description: 'Cross-platform fitness tracking application with workout plans, nutrition tracking, and progress analytics.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop',
    tags: ['React Native', 'GraphQL', 'PostgreSQL'],
    color: 'var(--color-brand-yellow)',
    category: 'Mobile',
    date: 'December 2025',
  },
  {
    id: 5,
    title: 'Project Management Tool',
    description: 'Collaborative project management platform with task tracking, team collaboration, and time management features.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    tags: ['Next.js', 'TypeScript', 'Prisma'],
    color: 'var(--color-brand-green)',
    category: 'Productivity',
    date: 'November 2025',
  },
  {
    id: 6,
    title: 'Real Estate Platform',
    description: 'Property listing and management system with virtual tours, advanced search filters, and agent CRM integration.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
    tags: ['React', 'Express', 'MySQL', 'Google Maps'],
    color: 'var(--color-brand-blue)',
    category: 'Web App',
    date: 'October 2025',
  },
];

const categories = ['All', 'Web App', 'Mobile', 'SaaS', 'Data Science', 'Productivity'];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Showcasing my latest work in software development and digital innovation
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === category
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity"
                  style={{ background: project.color }}
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-100">
                    <Github className="w-5 h-5 text-gray-700" />
                  </button>
                  <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-100">
                    <ExternalLink className="w-5 h-5 text-gray-700" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="px-3 py-1 text-xs font-semibold rounded-full text-white"
                    style={{ background: project.color }}
                  >
                    {project.category}
                  </span>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{project.date}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
