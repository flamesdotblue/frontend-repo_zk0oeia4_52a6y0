import { ArrowRight, ShieldCheck, Recycle, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 via-white to-white pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 text-emerald-800 px-3 py-1 text-xs font-medium mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              Design-driven sustainability
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Premium eco-friendly products that put planet and design first
            </h1>
            <p className="mt-4 text-neutral-600 text-lg">
              Zygreen curates sustainable essentials crafted with responsible materials and ethical production — without compromising on performance or aesthetics.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#products"
                className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-5 py-3 text-white font-medium shadow-sm hover:bg-emerald-700 transition-colors"
              >
                Explore the collection
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#impact"
                className="inline-flex items-center justify-center rounded-md border border-neutral-300 px-5 py-3 font-medium text-neutral-800 hover:bg-neutral-50"
              >
                See our impact
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-neutral-600">
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald-700" /> Fair-labor suppliers</div>
              <div className="flex items-center gap-2"><Recycle className="h-4 w-4 text-emerald-700" /> Recycled & renewable materials</div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-emerald-100/60 rounded-3xl blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden border border-emerald-200 bg-white shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1545231027-637d2f6210f4?q=80&w=1500&auto=format&fit=crop"
                alt="Eco-friendly lifestyle"
                className="w-full h-80 object-cover"
                loading="eager"
              />
              <div className="p-6">
                <p className="text-neutral-700">
                  Thoughtfully designed, rigorously tested, and made to last — for you and the planet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
