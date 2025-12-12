import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#F7F5F3]/95 backdrop-blur-sm border-b border-stone-200 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl tracking-wide text-stone-800 font-light">
            CLEAN INCENSE
          </Link>

          <div className="flex gap-8">
            <Link
              to="/"
              className={`text-sm tracking-wide transition-colors ${
                isActive('/') ? 'text-stone-800' : 'text-stone-500 hover:text-stone-700'
              }`}
            >
              What Is Clean Incense?
            </Link>
            <Link
              to="/standards"
              className={`text-sm tracking-wide transition-colors ${
                isActive('/standards') ? 'text-stone-800' : 'text-stone-500 hover:text-stone-700'
              }`}
            >
              Standards
            </Link>
            <Link
              to="/warming-vs-burning"
              className={`text-sm tracking-wide transition-colors ${
                isActive('/warming-vs-burning') ? 'text-stone-800' : 'text-stone-500 hover:text-stone-700'
              }`}
            >
              Warming vs Burning
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
