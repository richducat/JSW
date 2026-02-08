import React from 'react';

export default function ContactPage() {
  return (
    <main className="pt-32">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-medium text-stone-900 mb-4">Contact</h1>
          <p className="text-stone-600 mb-8">
            This is a static GitHub Pages demo. If you want a working contact form, we can either:
            <br />
            (1) use a mailto link, or (2) wire up Formspree / Netlify Forms.
          </p>

          <div className="bg-stone-50 border border-stone-100 rounded-2xl p-6">
            <div className="text-sm text-stone-500 mb-2">Quick option</div>
            <a
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-800 text-white font-semibold hover:bg-emerald-700 transition"
              href="mailto:hello@example.com?subject=Hello%20Jenny"
            >
              Email Jenny
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
