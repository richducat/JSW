import React from 'react';
import PostCard from '../components/PostCard';
import { CATEGORIES, POSTS } from '../content/posts';

export default function JournalPage({ initialCategory = 'all' }) {
  const [activeCategory, setActiveCategory] = React.useState(initialCategory);

  const filteredPosts = activeCategory === 'all' ? POSTS : POSTS.filter((p) => p.category === activeCategory);

  return (
    <main className="pt-32">
      <div className="container mx-auto px-6 pb-20">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-4xl font-serif font-medium text-stone-900 mb-2">Journal</h2>
            <p className="text-stone-500 text-lg">Curated thoughts on living naturally and intentionally.</p>
          </div>

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

        <div className="animate-in fade-in duration-700 slide-in-from-bottom-4">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center text-stone-400">
              <p>No posts found in this category yet.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
