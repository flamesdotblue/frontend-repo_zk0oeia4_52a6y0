import { Leaf, ShoppingBag, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-emerald-600 flex items-center justify-center">
              <Leaf className="h-5 w-5 text-white" />
            </div>
            <span className="font-semibold text-lg tracking-tight">Zygreen</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-700">
            <a href="#products" className="hover:text-emerald-700 transition-colors">Products</a>
            <a href="#commitment" className="hover:text-emerald-700 transition-colors">Commitment</a>
            <a href="#impact" className="hover:text-emerald-700 transition-colors">Impact</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex items-center gap-2 rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 transition-colors">
              <ShoppingBag className="h-4 w-4" />
              Shop
            </button>
            <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-neutral-100">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in fade-in slide-in-from-top-2">
            <nav className="grid gap-2 text-sm">
              <a href="#products" className="rounded-md px-3 py-2 hover:bg-neutral-100">Products</a>
              <a href="#commitment" className="rounded-md px-3 py-2 hover:bg-neutral-100">Commitment</a>
              <a href="#impact" className="rounded-md px-3 py-2 hover:bg-neutral-100">Impact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
