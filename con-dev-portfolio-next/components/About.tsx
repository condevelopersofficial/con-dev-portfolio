import { Code, Palette, Zap, Users, Award, Target } from 'lucide-react';

const skills = [
  { name: 'Full-Stack Development', level: 95, color: '#6366f1' },
  { name: 'Backend Development', level: 90, color: '#22c55e' },
  { name: 'UI/UX Design', level: 85, color: '#fed600' },
  { name: 'Database Design', level: 88, color: '#ef4444' }
];

const expertise = [
  {
    icon: Code,
    title: 'Full-Stack Development',
    description: 'Expert in building scalable web applications using modern frameworks and technologies.',
    color: '#6366f1'
  },
  {
    icon: Palette,
    title: 'Enterprise Solutions',
    description: 'Creating robust, integrated systems that deliver exceptional business value.',
    color: '#22c55e'
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Ensuring applications run smoothly with optimal speed and efficiency.',
    color: '#fed600'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Working seamlessly with cross-functional teams to deliver outstanding results.',
    color: '#ef4444'
  }
];

const achievements = [
  { icon: Award, value: '4', label: 'Enterprise Projects' },
  { icon: Target, value: '4', label: 'Years Experience' },
  { icon: Code, value: '100K+', label: 'Lines of Code' }
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate software developers dedicated to creating innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Left Column */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Journey</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              With over 4 years of experience in software development, we&apos;ve had the privilege of working on diverse projects ranging from startup MVPs to enterprise-level applications. Our passion lies in transforming complex problems into elegant, user-friendly solutions.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We specialize in full-stack development with a keen eye for design and user experience. Every project is an opportunity to push boundaries and create something exceptional.
            </p>

            {/* Skills */}
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-700">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{ background: skill.color, width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              {achievements.map((achievement) => (
                <div key={achievement.label} className="text-center">
                  <achievement.icon className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{achievement.value}</div>
                  <div className="text-xs text-gray-600">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Areas of Expertise</h3>

            {expertise.map((item) => (
              <div key={item.title} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
