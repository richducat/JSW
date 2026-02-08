import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Footer, NavBar } from './components/Layout';

import HomePage from './pages/HomePage';
import JournalPage from './pages/JournalPage';
import PostPage from './pages/PostPage';
import AboutPage from './pages/AboutPage';
import WellnessPage from './pages/WellnessPage';
import RecipesPage from './pages/RecipesPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HashRouter>
      <div className="min-h-screen bg-white font-sans text-stone-800 selection:bg-emerald-100 selection:text-emerald-900">
        <NavBar isScrolled={isScrolled} />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/journal" element={<JournalPage />} />
          <Route path="/post/:slug" element={<PostPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/wellness" element={<WellnessPage />} />
          <Route path="/recipes" element={<RecipesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<JournalPage />} />
        </Routes>

        <Footer />
      </div>
    </HashRouter>
  );
}
