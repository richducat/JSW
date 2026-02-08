import React, { useEffect, useState } from 'react';
import {
  ArrowRight,
  Facebook,
  Flower2,
  Heart,
  Instagram,
  Leaf,
  Mail,
  Menu,
  Search,
  Sun,
  Users,
  X,
} from 'lucide-react';

// --- Mock Data based on the actual website content ---
const CATEGORIES = [
  { id: 'all', name: 'View All' },
  { id: 'natural-hacks', name: 'Natural Hacks' },
  { id: 'recipes', name: 'Recipes' },
  { id: 'family', name: 'Family Adventures' },
  { id: 'body', name: 'Human Body' },
  { id: 'animals', name: 'Animals' },
];

const POSTS = [
  {
    id: 1,
    title: 'Carnivore Ice Cream for the Whole Family',
    excerpt:
      "Who says you can't enjoy the decadence of ice cream while staying committed to a carnivore lifestyle? A creamy, nutrient-dense treat.",
    category: 'recipes',
    displayCategory: 'Recipes',
    date: 'Jan 06, 2025',
    image:
      'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    featured: true,
  },
  {
    id: 2,
    title: 'The Sweet Simplicity of Raw Milk',
    excerpt:
      'There’s something magical about stepping onto a farm. Our family journey to embrace the nutrient-packed powerhouse of raw dairy.',
    category: 'family',
    displayCategory: 'Family Adventures',
    date: 'Jan 19, 2025',
    image:
      'https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    featured: false,
  },
  {
    id: 3,
    title: 'Discover the Power of Magnesium Cream',
    excerpt:
      'Fatigue? Muscle cramps? Magnesium is an essential mineral that plays a vital role in over 300 biochemical reactions.',
    category: 'natural-hacks',
    displayCategory: 'Natural Hacks',
    date: 'Jan 13, 2025',
    image:
      'https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    featured: false,
  },
  {
    id: 4,
    title: 'Goat Milk: The G.O.A.T of Dairy?',
    excerpt:
      "It's packed with health benefits, easier to digest, and makes you feel just a little bit fancy when you pour it into your coffee.",
    category: 'recipes',
    displayCategory: 'Recipes',
    date: 'Feb 14, 2025',
    image:
      'https://images.unsplash.com/photo-1527441584288-5180ccdc1230?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    featured: false,
  },
  {
    id: 5,
    title: 'Bone Broth: The Cozy Cure-All',
    excerpt:
      "Nature's original comfort food. It's warm, rich, packed with collagen, and feels like a hug in a mug.",
    category: 'recipes',
    displayCategory: 'Recipes',
    date: 'Feb 16, 2025',
    image:
      'https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    featured: false,
  },
  {
    id: 6,
    title: 'Hoofbeats of Healing: Equine Therapy',
    excerpt:
      'Horses have an uncanny ability to heal. Beyond their beauty, they help humans get their emotional and mental lives back on track.',
    category: 'animals',
    displayCategory: 'Animals',
    date: 'Feb 12, 2025',
    image:
      'https://images.unsplash.com/photo-1534438097545-2c8320cd00fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    featured: false,
  },
  {
    id: 7,
    title: 'Unlock the Secret to Whole Body Health',
    excerpt:
      'Oil pulling: A simple yet powerful Ayurvedic technique that does more than just clean your mouth.',
    category: 'body',
    displayCategory: 'Human Body',
    date: 'Jan 11, 2025',
    image:
      'https://images.unsplash.com/photo-1544367563-12123d832d34?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    featured: false,
  },
  {
    id: 8,
    title: 'Butter Made Better: Churning Magic',
    excerpt:
      "A kitchen adventure that's part science, part arm workout, and 100% satisfying. Turning raw milk into golden goodness.",
    category: 'recipes',
    displayCategory: 'Recipes',
    date: 'Jan 19, 2025',
    image:
      'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    featured: false,
  },
];

const FeatureIcons = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl mx-auto mb-16 px-4">
    {[
      { icon: Leaf, label: 'Natural Living' },
      { icon: Heart, label: 'Holistic Health' },
      { icon: Users, label: 'Family First' },
      { icon: Sun, label: 'Mindful Days' },
    ].map((item, idx) => (
      <div
        key={idx}
        className="flex flex-col items-center justify-center p-6 bg-stone-50 rounded-xl hover:bg-emerald-50 hover:text-emerald-800 transition-colors group cursor-default"
      >
        <item.icon className="w-8 h-8 mb-3 text-stone-400 group-hover:text-emerald-600 transition-colors" />
        <span className="font-medium text-stone-600 group-hover:text-emerald-900">{item.label}</span>
      </div>
    ))}
  </div>
);

const NavBar = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a
          href="#"
          className="text-2xl font-serif font-bold tracking-tight text-stone-800 flex items-center gap-2"
        >
          <Flower2 className={`w-6 h-6 ${isScrolled ? 'text-emerald-600' : 'text-emerald-700'}`} />
          <span>Jenny Sabo</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {['Journal', 'About', 'Wellness', 'Recipes', 'Contact'].map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-medium text-stone-600 hover:text-emerald-700 transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all group-hover:w-full" />
            </a>
          ))}
          <button
            type="button"
            className="p-2 rounded-full hover:bg-stone-100 transition-colors text-stone-600 hover:text-emerald-700"
          >
            <Search size={20} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="md:hidden text-stone-800 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-stone-100 p-6 md:hidden shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-4">
            {['Journal', 'About', 'Wellness', 'Recipes', 'Contact'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-lg font-medium text-stone-800 hover:text-emerald-600 pl-2 border-l-2 border-transparent hover:border-emerald-500 transition-all"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <div className="relative pt-32 pb-16 md:pt-48 md:pb-24 bg-[#F9F8F6] overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-emerald-900">
          <path
            d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,79.6,-46.6C87.4,-34.2,90.2,-19.4,89.1,-5.2C87.9,9,82.9,22.6,74.4,34.4C65.9,46.2,53.9,56.2,41.1,63.6C28.3,71,14.7,75.8,0.6,74.8C-13.5,73.8,-27.9,67,-40.4,59.2C-52.9,51.4,-63.5,42.6,-71.4,31.7C-79.3,20.8,-84.5,7.8,-83.4,-4.8C-82.3,-17.4,-74.9,-29.6,-65.4,-39.7C-55.9,-49.8,-44.3,-57.8,-32.1,-66.2C-19.9,-74.6,-7.1,-83.4,3.8,-89.9C14.7,-96.5,29.4,-100.8,44.7,-76.4Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block py-1.5 px-4 mb-8 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-widest">
            Holistic Living & Wellness
          </span>

          <h1 className="text-5xl md:text-7xl font-serif font-medium text-stone-900 leading-[1.1] mb-8">
            The sweet simplicity of <span className="italic text-emerald-700 font-serif">nature.</span>
          </h1>

          <p className="text-lg md:text-xl text-stone-600 mb-10 leading-relaxed max-w-xl mx-auto font-light">
            Join me on a journey through holistic health, family adventures, and nourishing recipes. Let's get back to the
            basics, together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              className="px-8 py-4 bg-stone-900 text-white font-medium rounded-full hover:bg-emerald-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-emerald-900/10 flex items-center justify-center gap-2"
            >
              Read the Journal <ArrowRight size={18} />
            </button>
            <button
              type="button"
              className="px-8 py-4 bg-white border border-stone-200 text-stone-700 font-medium rounded-full hover:bg-stone-50 transition-all hover:border-stone-300"
            >
              About Jenny
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeaturedCard = ({ post }) => (
  <div className="group relative flex flex-col h-full bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-stone-100">
    <div className="aspect-[4/3] w-full overflow-hidden relative bg-stone-200">
      <img
        src={post.image}
        alt={post.title}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute top-4 left-4">
        <span className="bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800 rounded-full shadow-sm">
          {post.displayCategory}
        </span>
      </div>
    </div>

    <div className="p-6 flex flex-col flex-grow">
      <div className="flex items-center gap-2 mb-3 text-xs text-stone-400 font-medium uppercase tracking-wide">
        <Sun size={14} className="text-amber-400" />
        <span>{post.date}</span>
      </div>

      <h3 className="text-xl font-serif font-semibold text-stone-900 group-hover:text-emerald-700 transition-colors mb-3 leading-tight">
        {post.title}
      </h3>

      <p className="text-stone-500 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">{post.excerpt}</p>

      <div className="pt-4 border-t border-stone-100 mt-auto flex items-center justify-between">
        <span className="text-sm font-medium text-emerald-700 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
          Read Story <ArrowRight size={14} />
        </span>
      </div>
    </div>
  </div>
);

const BlogGrid = ({ posts }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{posts.map((p) => <FeaturedCard key={p.id} post={p} />)}</div>
);

const Newsletter = () => (
  <div className="bg-emerald-900 rounded-3xl p-8 md:p-20 text-center text-white relative overflow-hidden my-24 shadow-2xl shadow-emerald-900/20">
    <div className="relative z-10 max-w-2xl mx-auto">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-800/50 mb-6 border border-emerald-700">
        <Leaf className="w-8 h-8 text-emerald-300" />
      </div>
      <h2 className="text-3xl md:text-5xl font-serif mb-6 tracking-tight">Nourish your inbox</h2>
      <p className="text-emerald-100 mb-10 text-lg font-light leading-relaxed">
        Get weekly holistic hacks, carnivore-friendly recipes, and farm life updates delivered straight to you. No spam, just
        wholesome goodness.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
        <input
          type="email"
          placeholder="Your email address"
          className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-emerald-200/50 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all backdrop-blur-sm"
        />
        <button
          type="button"
          className="px-8 py-4 bg-emerald-100 text-emerald-900 font-bold rounded-full hover:bg-white transition-all shadow-lg hover:shadow-xl"
        >
          Subscribe
        </button>
      </div>
      <p className="mt-4 text-xs text-emerald-400/60">Join 10,000+ others finding their way back to nature.</p>
    </div>

    {/* Decorative Elements */}
    <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />

    {/* Texture overlay */}
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage:
          'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
      }}
    />
  </div>
);

const Footer = () => (
  <footer className="bg-white border-t border-stone-100 pt-20 pb-10">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        <div className="col-span-1 md:col-span-5 pr-8">
          <a href="#" className="text-3xl font-serif font-bold text-stone-900 mb-6 flex items-center gap-2">
            <Flower2 className="w-8 h-8 text-emerald-700" />
            <span>Jenny Sabo</span>
          </a>

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
            {['About Jenny', 'Our Story', 'Contact', 'Press'].map((t) => (
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

        <div className="col-span-1 md:col-span-2">
          <h4 className="font-bold text-stone-900 mb-6 text-sm uppercase tracking-wider">Topics</h4>
          <ul className="space-y-4 text-stone-500">
            {['Natural Hacks', 'Recipes', 'Family Life', 'Equine Therapy'].map((t) => (
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

export default function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredPosts = activeCategory === 'all' ? POSTS : POSTS.filter((post) => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-white font-sans text-stone-800 selection:bg-emerald-100 selection:text-emerald-900">
      <NavBar isScrolled={isScrolled} />

      <main>
        <Hero />

        <div className="container mx-auto px-6 -mt-10 relative z-20">
          <FeatureIcons />
        </div>

        <div className="container mx-auto px-6 pb-20">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="mb-6 md:mb-0">
              <h2 className="text-4xl font-serif font-medium text-stone-900 mb-2">Latest Stories</h2>
              <p className="text-stone-500 text-lg">Curated thoughts on living naturally and intentionally.</p>
            </div>

            {/* Category Filter */}
            <div className="flex overflow-x-auto pb-2 -mx-6 px-6 md:mx-0 md:px-0 no-scrollbar gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap border ${
                    activeCategory === cat.id
                      ? 'bg-emerald-800 text-white border-emerald-800 shadow-md transform scale-105'
                      : 'bg-white text-stone-500 border-stone-200 hover:border-emerald-300 hover:text-emerald-700'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="animate-in fade-in duration-700 slide-in-from-bottom-4">
            {filteredPosts.length > 0 ? (
              <BlogGrid posts={filteredPosts} />
            ) : (
              <div className="py-20 text-center text-stone-400">
                <p>No posts found in this category yet.</p>
              </div>
            )}
          </div>

          <div className="mt-20 text-center">
            <button
              type="button"
              className="px-10 py-4 border border-stone-200 bg-stone-50 rounded-full text-stone-600 font-bold tracking-wide hover:bg-stone-100 hover:text-stone-900 transition-all uppercase text-sm"
            >
              Load More from Archive
            </button>
          </div>

          <Newsletter />
        </div>
      </main>

      <Footer />
    </div>
  );
}
