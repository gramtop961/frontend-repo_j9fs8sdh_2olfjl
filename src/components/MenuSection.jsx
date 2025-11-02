import React from 'react';
import { Coffee, Cookie, Star, ShoppingCart } from 'lucide-react';

const items = {
  coffee: [
    { name: 'House Latte', desc: 'Velvety microfoam, double shot espresso', price: 5.5, icon: Coffee },
    { name: 'Pour Over', desc: 'Single-origin, hand-poured', price: 4.5, icon: Coffee },
    { name: 'Cold Brew', desc: 'Slow steeped, chocolatey finish', price: 5.0, icon: Coffee },
  ],
  pastry: [
    { name: 'Almond Croissant', desc: 'Buttery layers, almond frangipane', price: 4.75, icon: Cookie },
    { name: 'Raspberry Danish', desc: 'Flaky pastry, sweet-tart center', price: 4.25, icon: Cookie },
    { name: 'Chocolate Scone', desc: 'Dark chocolate chunks, sea salt', price: 3.75, icon: Cookie },
  ],
};

function MenuCard({ name, desc, price, Icon }) {
  return (
    <div className="group rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="flex items-start gap-4">
        <div className="rounded-xl bg-amber-100 p-3 text-amber-700">
          <Icon className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between gap-2">
            <h4 className="font-semibold text-stone-900">{name}</h4>
            <span className="rounded-full bg-stone-100 px-3 py-1 text-sm font-medium text-stone-700">${price.toFixed(2)}</span>
          </div>
          <p className="mt-1 text-sm text-stone-600">{desc}</p>
          <button className="mt-4 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-sm font-medium text-amber-800 transition hover:bg-amber-100">
            <ShoppingCart className="h-4 w-4" /> Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default function MenuSection() {
  return (
    <section id="menu" className="relative bg-gradient-to-b from-white to-amber-50">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="font-display text-3xl font-bold text-stone-900 md:text-4xl">Menu Highlights</h2>
            <p className="mt-2 text-stone-600">Crafted daily with premium beans and butter.</p>
          </div>
          <div className="hidden items-center gap-1 text-amber-600 sm:flex">
            <Star className="h-5 w-5 fill-amber-400" />
            <Star className="h-5 w-5 fill-amber-400" />
            <Star className="h-5 w-5 fill-amber-400" />
            <Star className="h-5 w-5 fill-amber-400" />
            <Star className="h-5 w-5 fill-amber-400" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-stone-200 bg-white/70 p-6 shadow-sm backdrop-blur">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-stone-900">
              <Coffee className="h-5 w-5 text-amber-700" /> Coffee
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {items.coffee.map((item) => (
                <MenuCard key={item.name} name={item.name} desc={item.desc} price={item.price} Icon={item.icon} />
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-white/70 p-6 shadow-sm backdrop-blur">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-stone-900">
              <Cookie className="h-5 w-5 text-rose-700" /> Pastries
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {items.pastry.map((item) => (
                <MenuCard key={item.name} name={item.name} desc={item.desc} price={item.price} Icon={item.icon} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
