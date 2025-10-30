import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductShowcase from "./components/ProductShowcase";
import Commitment from "./components/Commitment";
import ImpactMetrics from "./components/ImpactMetrics";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <ProductShowcase />
        <Commitment />
        <ImpactMetrics />
      </main>
      <footer className="border-top border-neutral-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-600">© 2025 Zygreen. All rights reserved.</p>
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
