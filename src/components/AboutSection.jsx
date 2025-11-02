import React from 'react';
import { Coffee, Cookie, UtensilsCrossed } from 'lucide-react';

const features = [
  {
    title: 'Small-Batch Roasting',
    desc: 'We roast in-house for nuanced flavors and peak freshness.',
    icon: Coffee,
    accent: 'text-amber-700 bg-amber-100',
  },
  {
    title: 'Artisan Pastries',
    desc: 'Hand-laminated dough, seasonal fillings, and real butter.',
    icon: Cookie,
    accent: 'text-rose-700 bg-rose-100',
  },
  {
    title: 'Community Space',
    desc: 'A cozy corner to read, meet, or simply savor the moment.',
    icon: UtensilsCrossed,
    accent: 'text-stone-700 bg-stone-100',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold text-stone-900 md:text-4xl">Our Story</h2>
            <p className="mt-4 text-stone-700">
              We started as a weekend pop-up, pairing single-origin espresso with small-batch laminated doughs. Today, our kitchen and roastery live under one roof, where we obsess over the details that make each sip and bite memorable.
            </p>
            <p className="mt-3 text-stone-700">
              From dialing in the sweetness of a house blend to folding butter into 27 perfect layers, we do it because we love it—and because you can taste the difference.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map(({ title, desc, icon: Icon, accent }) => (
              <div key={title} className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
                <div className={`inline-flex items-center justify-center rounded-xl ${accent} p-3`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h4 className="mt-3 font-semibold text-stone-900">{title}</h4>
                <p className="mt-1 text-sm text-stone-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
