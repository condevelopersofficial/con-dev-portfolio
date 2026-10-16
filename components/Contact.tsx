'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import { CONTACT_EMAIL } from '@/data';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const EMPTY_FORM: FormData = { name: '', email: '', message: '' };
const SUCCESS_MESSAGE_DURATION = 5000;

const inputClass =
  'w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all disabled:opacity-50';

/** Netlify expects an urlencoded body with the field names of the registered form. */
const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

export default function Contact() {
  const [formData, setFormData] = useState<FormData>(EMPTY_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Hide the success banner again after 5 seconds.
  useEffect(() => {
    return () => {
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (hideTimer.current) clearTimeout(hideTimer.current);

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          ...formData,
        }),
      });

      if (!response.ok) {
        throw new Error(`Form submission failed with status ${response.status}`);
      }

      setFormData(EMPTY_FORM);
      setSubmitStatus('success');
      hideTimer.current = setTimeout(() => setSubmitStatus(null), SUCCESS_MESSAGE_DURATION);
    } catch (error) {
      console.error('Form submission error:', error);
      // Submitting and error states are mutually exclusive.
      setIsSubmitting(false);
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            Have a project in mind? Let&apos;s discuss how we can bring your ideas to life
          </p>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12">
            We&apos;re always interested in hearing about new projects and opportunities.
            Whether you have a question or just want to say hi, feel free to reach out!
            We&apos;re currently available for new projects and collaborations.
            Let&apos;s create something amazing together!
          </p>
        </div>

        {/* Contact Form - Centered */}
        <div className="max-w-2xl mx-auto">
          {/* Success Message */}
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl" role="status">
              <p className="text-green-800 font-semibold">
                ✓ Thank you! Your message has been sent successfully. We&apos;ll get back to
                you soon.
              </p>
            </div>
          )}

          {/* Error Message */}
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl" role="alert">
              <p className="text-red-800 font-semibold">
                ✗ Something went wrong. Please try again or contact us directly at{' '}
                {CONTACT_EMAIL}
              </p>
            </div>
          )}

          {/* Hidden form used by Netlify to register the "contact" form at deploy time */}
          <form name="contact" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
            <input type="hidden" name="form-name" value="contact" />
            <input type="text" name="bot-field" />
            <input type="text" name="name" maxLength={100} />
            <input type="email" name="email" />
            <textarea name="message" maxLength={1000} />
          </form>

          {/* Visible form, submitted to Netlify Forms through fetch */}
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8">
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 mb-2 font-semibold">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                maxLength={100}
                disabled={isSubmitting}
                className={inputClass}
                placeholder="John Doe"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 mb-2 font-semibold">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                disabled={isSubmitting}
                className={inputClass}
                placeholder="john@example.com"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 mb-2 font-semibold">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                maxLength={1000}
                rows={6}
                disabled={isSubmitting}
                className={`${inputClass} resize-none`}
                placeholder="Tell us about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all flex items-center justify-center gap-2 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
