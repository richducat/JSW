import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Flower2, Instagram, Mail, Menu, Search, X } from 'lucide-react';

export function NavBar({ isScrolled }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif font-bold tracking-tight text-stone-800 flex items-center gap-2">
          <Flower2 className={`w-6 h-6 ${isScrolled ? 'text-emerald-600' : 'text-emerald-700'}`} />
          <span>Jenny Sabo</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {[
            { label: 'Journal', to: '/journal' },
            { label: 'About', to: '/about' },
            { label: 'Wellness', to: '/wellness' },
            { label: 'Recipes', to: '/recipes' },
            { label: 'Contact', to: '/contact' },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-stone-600 hover:text-emerald-700 transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all group-hover:w-full" />
            </Link>
          ))}

          <button
            type="button"
            className="p-2 rounded-full hover:bg-stone-100 transition-colors text-stone-600 hover:text-emerald-700"
            aria-label="Search (demo)"
            title="Search (demo)"
          >
            <Search size={20} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="md:hidden text-stone-800 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-stone-100 p-6 md:hidden shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-4">
            {[
              { label: 'Journal', to: '/journal' },
              { label: 'About', to: '/about' },
              { label: 'Wellness', to: '/wellness' },
              { label: 'Recipes', to: '/recipes' },
              { label: 'Contact', to: '/contact' },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-stone-800 hover:text-emerald-600 pl-2 border-l-2 border-transparent hover:border-emerald-500 transition-all"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-white border-t border-stone-100 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="col-span-1 md:col-span-5 pr-8">
            <Link to="/" className="text-3xl font-serif font-bold text-stone-900 mb-6 flex items-center gap-2">
              <Flower2 className="w-8 h-8 text-emerald-700" />
              <span>Jenny Sabo</span>
            </Link>
            <p className="text-stone-500 mb-8 leading-relaxed">
              Exploring the intersection of nature, health, and family. Dedicated to finding simple, effective ways to live
              better through holistic practices and nutrient-dense food.
            </p>

            <div className="flex gap-4">
              {[Instagram, Facebook, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center text-stone-400 hover:text-emerald-600 hover:border-emerald-200 hover:bg-emerald-50 transition-all"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 md:col-start-7">
            <h4 className="font-bold text-stone-900 mb-6 text-sm uppercase tracking-wider">Explore</h4>
            <ul className="space-y-4 text-stone-500">
              {[{ t: 'About Jenny', to: '/about' }, { t: 'Journal', to: '/journal' }, { t: 'Contact', to: '/contact' }].map(
                (x) => (
                  <li key={x.to}>
                    <Link
                      to={x.to}
                      className="hover:text-emerald-700 transition-colors inline-block hover:translate-x-1 transform duration-200"
                    >
                      {x.t}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h4 className="font-bold text-stone-900 mb-6 text-sm uppercase tracking-wider">Topics</h4>
            <ul className="space-y-4 text-stone-500">
              {[{ t: 'Natural Hacks', to: '/wellness' }, { t: 'Recipes', to: '/recipes' }].map((x) => (
                <li key={x.to}>
                  <Link
                    to={x.to}
                    className="hover:text-emerald-700 transition-colors inline-block hover:translate-x-1 transform duration-200"
                  >
                    {x.t}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h4 className="font-bold text-stone-900 mb-6 text-sm uppercase tracking-wider">Resources</h4>
            <ul className="space-y-4 text-stone-500">
              {['Shop Favorites', 'Reading List', 'Free Guides'].map((t) => (
                <li key={t}>
                  <a
                    href="#"
                    className="hover:text-emerald-700 transition-colors inline-block hover:translate-x-1 transform duration-200"
                  >
                    {t}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-stone-100 text-sm text-stone-400">
          <p>&copy; 2026 The Way LLC. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map((t) => (
              <a key={t} href="#" className="hover:text-stone-600 transition-colors">
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
