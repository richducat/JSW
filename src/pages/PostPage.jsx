import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { POSTS } from '../content/posts';

export default function PostPage() {
  const { slug } = useParams();

  const post = POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="pt-32">
        <div className="container mx-auto px-6 py-20">
          <h1 className="text-3xl font-serif mb-3">Post not found</h1>
          <Link to="/journal" className="text-emerald-700 font-semibold">
            ← Back to Journal
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-24">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <Link to="/journal" className="text-emerald-700 font-semibold">
            ← Back to Journal
          </Link>

          <h1 className="text-4xl md:text-5xl font-serif font-medium text-stone-900 mt-6 mb-3 leading-tight">
            {post.title}
          </h1>
          <div className="text-stone-500 text-sm mb-8">
            <span className="font-semibold text-emerald-800">{post.displayCategory}</span>
            <span className="mx-2">•</span>
            <span>{post.date}</span>
          </div>

          {post.image ? (
            <img src={post.image} alt={post.title} className="w-full rounded-2xl border border-stone-100 mb-10" />
          ) : null}

          <article className="prose prose-stone max-w-none prose-headings:font-serif prose-a:text-emerald-700">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </article>

          <div className="mt-12 pt-8 border-t border-stone-100 text-sm text-stone-500">
            Source: jennysabo.com (mirrored for demo, with permission)
          </div>
        </div>
      </div>
    </main>
  );
}
