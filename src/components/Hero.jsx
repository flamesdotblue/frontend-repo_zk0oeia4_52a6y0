import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 via-white to-white pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm font-medium tracking-wide text-emerald-700 uppercase">Eco-Conscious Living</p>
            <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">ZYGREEN</h1>
            <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-neutral-900">Sustainable Innovation for a Better Tomorrow</h2>
            <p className="mt-4 text-neutral-600 text-lg">
              Discover premium, earth-friendly products that combine cutting-edge design with environmental responsibility. Join us in creating a sustainable future without compromising on style or performance.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#products"
                className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-5 py-3 text-white font-medium shadow-sm hover:bg-emerald-700 transition-colors"
              >
                Explore products
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#impact"
                className="inline-flex items-center justify-center rounded-md border border-neutral-300 px-5 py-3 font-medium text-neutral-800 hover:bg-neutral-50"
              >
                View impact
              </a>
            </div>

            <p className="mt-6 text-sm text-neutral-500">Every choice matters in our journey towards a greener future.</p>

            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-emerald-900">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1"><CheckCircle2 className="h-4 w-4" /> Eco-Friendly</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1"><CheckCircle2 className="h-4 w-4" /> Premium Quality</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1"><CheckCircle2 className="h-4 w-4" /> Sustainable</span>
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
                  Join thousands of eco-conscious customers who trust Zygreen for sustainable living solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
