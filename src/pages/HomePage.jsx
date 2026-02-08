import React from 'react';
import { ArrowRight, Leaf, Sun, Heart, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

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

const Hero = () => (
  <div className="relative pt-32 pb-16 md:pt-48 md:pb-24 bg-[#F9F8F6] overflow-hidden">
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
          <Link
            to="/journal"
            className="px-8 py-4 bg-stone-900 text-white font-medium rounded-full hover:bg-emerald-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-emerald-900/10 flex items-center justify-center gap-2"
          >
            Read the Journal <ArrowRight size={18} />
          </Link>
          <Link
            to="/about"
            className="px-8 py-4 bg-white border border-stone-200 text-stone-700 font-medium rounded-full hover:bg-stone-50 transition-all hover:border-stone-300 text-center"
          >
            About Jenny
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default function HomePage() {
  return (
    <main>
      <Hero />
      <div className="container mx-auto px-6 -mt-10 relative z-20">
        <FeatureIcons />
      </div>
      <div className="container mx-auto px-6 pb-20">
        <div className="bg-white border border-stone-100 rounded-3xl p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Start here</h2>
          <p className="text-stone-600 max-w-2xl mx-auto mb-8">
            This demo is a GitHub Pages-friendly clone. Browse the journal, open any post, and use the category filters.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/journal"
              className="px-8 py-3 bg-emerald-800 text-white font-semibold rounded-full hover:bg-emerald-700 transition"
            >
              Browse Journal
            </Link>
            <Link
              to="/recipes"
              className="px-8 py-3 border border-stone-200 bg-stone-50 rounded-full text-stone-700 font-semibold hover:bg-stone-100 transition"
            >
              See Recipes
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
