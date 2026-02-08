import React from 'react';
import ReactMarkdown from 'react-markdown';
import { ABOUT } from '../content/posts';

export default function AboutPage() {
  return (
    <main className="pt-32">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-medium text-stone-900 mb-6">{ABOUT.title}</h1>
          {ABOUT.image ? (
            <img src={ABOUT.image} alt={ABOUT.title} className="w-full rounded-2xl border border-stone-100 mb-10" />
          ) : null}
          <article className="prose prose-stone max-w-none prose-headings:font-serif prose-a:text-emerald-700">
            <ReactMarkdown>{ABOUT.content}</ReactMarkdown>
          </article>
        </div>
      </div>
    </main>
  );
}
