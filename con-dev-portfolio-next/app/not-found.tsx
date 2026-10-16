import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

/**
 * 404 page - emitted as `out/404.html` during the static export and served by
 * Netlify for unknown URLs (including project slugs that do not exist).
 */
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-32 pb-24 bg-gray-50">
      <div className="max-w-xl w-full text-center bg-white rounded-2xl shadow-lg border border-gray-100 p-12">
        <div className="text-6xl font-bold text-gray-900 mb-4">404</div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Page not found</h2>
        <p className="text-gray-600 mb-8">
          The page you are looking for does not exist or may have been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all font-semibold"
        >
          <ArrowLeft className="w-5 h-5" />
          Return to Home
        </Link>
      </div>
    </div>
  );
}
