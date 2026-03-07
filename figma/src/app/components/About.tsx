import { motion } from 'motion/react';
import { Code2, Palette, Zap, Users, Award, Target } from 'lucide-react';

const skills = [
  { name: 'Frontend Development', level: 95, color: 'var(--color-brand-blue)' },
  { name: 'Backend Development', level: 90, color: 'var(--color-brand-green)' },
  { name: 'UI/UX Design', level: 85, color: 'var(--color-brand-yellow)' },
  { name: 'Database Design', level: 88, color: 'var(--color-brand-red)' },
];

const expertise = [
  {
    icon: Code2,
    title: 'Full-Stack Development',
    description: 'Expert in building scalable web applications using modern frameworks and technologies.',
    color: 'var(--color-brand-blue)',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Creating beautiful, intuitive interfaces that deliver exceptional user experiences.',
    color: 'var(--color-brand-green)',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Ensuring applications run smoothly with optimal speed and efficiency.',
    color: 'var(--color-brand-yellow)',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Working seamlessly with cross-functional teams to deliver outstanding results.',
    color: 'var(--color-brand-red)',
  },
];

const achievements = [
  { icon: Award, value: '15+', label: 'Awards Won' },
  { icon: Target, value: '98%', label: 'Client Satisfaction' },
  { icon: Code2, value: '200K+', label: 'Lines of Code' },
];

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate software developer dedicated to creating innovative solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              With over 5 years of experience in software development, I've had the privilege of working 
              on diverse projects ranging from startup MVPs to enterprise-level applications. My passion 
              lies in transforming complex problems into elegant, user-friendly solutions.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I specialize in full-stack development with a keen eye for design and user experience. 
              Every project is an opportunity to push boundaries and create something exceptional.
            </p>

            {/* Skills */}
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-700">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className="h-full rounded-full"
                      style={{ background: skill.color }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <achievement.icon className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{achievement.value}</div>
                  <div className="text-xs text-gray-600">{achievement.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Areas of Expertise</h3>
            
            {expertise.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${item.color}20` }}
                  >
                    <item.icon className="w-6 h-6" style={{ color: item.color }} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
