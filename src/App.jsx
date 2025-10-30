import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ImpactMetrics from "./components/ImpactMetrics";
import ProductShowcase from "./components/ProductShowcase";

function Ethos() {
  return (
    <section id="ethos" className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
          <h3 className="text-2xl font-bold">Our ethos</h3>
          <p className="mt-3 text-neutral-700">
            We believe sustainability should feel effortless and look exceptional. From material selection to supplier audits and end-of-life recyclability, we design for minimal footprint and maximal usability. Every decision is guided by transparency and a commitment to continuous improvement.
          </p>
          <ul className="mt-6 grid sm:grid-cols-3 gap-4 text-sm">
            <li className="rounded-xl bg-emerald-50 text-emerald-900 p-4">Sustainable materials</li>
            <li className="rounded-xl bg-emerald-50 text-emerald-900 p-4">Ethical manufacturing</li>
            <li className="rounded-xl bg-emerald-50 text-emerald-900 p-4">Design-first thinking</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <ProductShowcase />
        <ImpactMetrics />
        <Ethos />
      </main>
      <footer className="border-t border-neutral-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-600">© {new Date().getFullYear()} Zygreen. Design-driven sustainability.</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-emerald-700">Privacy</a>
            <a href="#" className="hover:text-emerald-700">Terms</a>
            <a href="#" className="hover:text-emerald-700">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
