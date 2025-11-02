import React from 'react';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import AboutSection from './components/AboutSection';
import VisitSection from './components/VisitSection';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-stone-900">
      <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2">
            <span className="rounded-lg bg-amber-600 px-2.5 py-1 text-sm font-bold uppercase tracking-wide text-white">Cozy</span>
            <span className="font-display text-lg font-semibold">Coffee & Pastry</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-stone-700 sm:flex">
            <a href="#menu" className="hover:text-stone-900">Menu</a>
            <a href="#about" className="hover:text-stone-900">About</a>
            <a href="#visit" className="hover:text-stone-900">Visit</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <MenuSection />
        <AboutSection />
        <div id="visit">
          <VisitSection />
        </div>
      </main>
    </div>
  );
}
