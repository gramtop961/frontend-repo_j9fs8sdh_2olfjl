import React from 'react';
import { Coffee, Cookie, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-rose-50 to-white" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/70 px-4 py-2 text-sm text-amber-700 shadow-sm backdrop-blur">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            Voted neighborhood favorite
          </div>
          <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-stone-900 sm:text-5xl md:text-6xl">
            Cozy Coffee & Artisan Pastries
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-stone-600">
            Small-batch roasts, hand-crafted bakes, and a space designed to slow down. Come for the latte, stay for the layers of flaky goodness.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#menu"
              className="inline-flex items-center gap-2 rounded-full bg-amber-600 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-amber-700 hover:shadow-lg"
            >
              <Coffee className="h-5 w-5" /> View Menu
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-6 py-3 font-semibold text-stone-800 shadow-sm transition hover:border-stone-400"
            >
              <Cookie className="h-5 w-5" /> Our Story
            </a>
          </div>
        </div>

        <div className="pointer-events-none relative mx-auto mt-12 aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5">
          <img
            src="https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1600&auto=format&fit=crop"
            alt="Coffee and pastries on a wooden table"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
