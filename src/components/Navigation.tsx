import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-[#F7F5F3]/95 backdrop-blur-sm border-b border-stone-200 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-xl tracking-wide text-stone-800 font-light">
              CLEAN INCENSE
            </Link>

            <div className="hidden md:flex gap-8">
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

            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden text-stone-800 hover:text-stone-600 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 bg-[#F7F5F3] z-50 md:hidden">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200">
              <span className="text-xl tracking-wide text-stone-800 font-light">
                CLEAN INCENSE
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-stone-800 hover:text-stone-600 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col items-center justify-center flex-1 gap-8 px-6">
              <Link
                to="/"
                onClick={handleLinkClick}
                className={`text-2xl tracking-wide transition-colors ${
                  isActive('/') ? 'text-stone-800 font-medium' : 'text-stone-500 hover:text-stone-700'
                }`}
              >
                What Is Clean Incense?
              </Link>
              <Link
                to="/standards"
                onClick={handleLinkClick}
                className={`text-2xl tracking-wide transition-colors ${
                  isActive('/standards') ? 'text-stone-800 font-medium' : 'text-stone-500 hover:text-stone-700'
                }`}
              >
                Standards
              </Link>
              <Link
                to="/warming-vs-burning"
                onClick={handleLinkClick}
                className={`text-2xl tracking-wide transition-colors ${
                  isActive('/warming-vs-burning') ? 'text-stone-800 font-medium' : 'text-stone-500 hover:text-stone-700'
                }`}
              >
                Warming vs Burning
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
