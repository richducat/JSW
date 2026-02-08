import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sun } from 'lucide-react';

export default function PostCard({ post }) {
  return (
    <Link
      to={`/post/${post.slug}`}
      className="group relative flex flex-col h-full bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-stone-100"
    >
      <div className="aspect-[4/3] w-full overflow-hidden relative bg-stone-200">
        {post.image ? (
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-emerald-50 to-stone-100" />
        )}
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
    </Link>
  );
}
