import Image from 'next/image';
import { contactInfo } from '@/data';
import { getIcon } from '@/lib/icons';
import SocialLinks from '@/components/SocialLinks';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  'Web Development',
  'Enterprise Solutions',
  'UI/UX Design',
  'Technical Consulting',
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/Logo.png"
                alt="CON Developers Logo"
                width={40}
                height={40}
                sizes="40px"
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-semibold">CON Developers</span>
            </div>
            <p className="text-gray-400 text-sm">
              Creating exceptional digital experiences through innovative software solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              {contactInfo.map((info) => {
                const Icon = getIcon(info.icon);
                return (
                  <li key={info.label}>
                    <a
                      href={info.href}
                      className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                    >
                      <Icon className="w-4 h-4" />
                      <span>{info.value}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <SocialLinks showTitle />
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} CON Developers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
