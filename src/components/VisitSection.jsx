import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function VisitSection() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="font-display text-2xl font-bold text-stone-900">Visit Us</h3>
              <p className="mt-2 text-stone-700">123 Brew Lane, Suite A, Your City</p>
              <div className="mt-4 space-y-2 text-stone-700">
                <div className="flex items-center gap-2"><Clock className="h-4 w-4" /> Mon–Fri: 7a–6p</div>
                <div className="flex items-center gap-2"><Clock className="h-4 w-4" /> Sat–Sun: 8a–5p</div>
                <a href="tel:+1234567890" className="flex items-center gap-2 text-amber-700 hover:underline">
                  <Phone className="h-4 w-4" /> (123) 456-7890
                </a>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1600&auto=format&fit=crop"
                  alt="Cafe interior seating"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent" />
                <a
                  href="https://maps.google.com/?q=123+Brew+Lane"
                  target="_blank"
                  rel="noreferrer"
                  className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-stone-900 shadow backdrop-blur hover:bg-white"
                >
                  <MapPin className="h-4 w-4 text-amber-700" /> Open in Maps
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-stone-200 pt-6 text-center text-sm text-stone-500">
            © {new Date().getFullYear()} Cozy Coffee & Pastry. All rights reserved.
          </div>
        </div>
      </div>
    </section>
  );
}
