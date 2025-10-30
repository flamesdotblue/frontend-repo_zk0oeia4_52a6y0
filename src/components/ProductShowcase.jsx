import { Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Recycled Glass Water Bottle",
    price: "$28",
    impact: "-1.2kg CO₂",
    image:
      "https://images.unsplash.com/photo-1611259183859-15e6766b1a3b?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Bamboo Fiber Lunchbox",
    price: "$34",
    impact: "-1.8kg CO₂",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Organic Cotton Tote",
    price: "$22",
    impact: "-0.9kg CO₂",
    image:
      "https://images.unsplash.com/photo-1544551763-7ef420d2d67d?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Compostable Phone Case",
    price: "$29",
    impact: "-0.7kg CO₂",
    image:
      "https://images.unsplash.com/photo-1610395127066-27d589f5f0fc?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Cork Yoga Block",
    price: "$24",
    impact: "-1.1kg CO₂",
    image:
      "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Hemp Travel Pouch",
    price: "$26",
    impact: "-0.8kg CO₂",
    image:
      "https://images.unsplash.com/photo-1627627254494-98aca14fdb6c?q=80&w=1470&auto=format&fit=crop",
  },
];

function ProductCard({ product }) {
  return (
    <div className="group rounded-2xl overflow-hidden border border-neutral-200 bg-white hover:shadow-md transition-all">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="h-56 w-full object-cover"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-white/90 backdrop-blur px-2 py-1 text-xs font-medium text-emerald-700">
          <Star className="h-3.5 w-3.5 fill-emerald-500 text-emerald-500" />
          Eco-rated
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold leading-tight">{product.name}</h3>
        <div className="mt-1 flex items-center justify-between text-sm">
          <span className="text-neutral-600">{product.price}</span>
          <span className="text-emerald-700 font-medium">{product.impact}</span>
        </div>
        <button className="mt-4 w-full rounded-md bg-neutral-900 py-2 text-sm font-medium text-white hover:bg-neutral-800 transition-colors">
          View details
        </button>
      </div>
    </div>
  );
}

export default function ProductShowcase() {
  return (
    <section id="products" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Join the Sustainable Living Movement</h2>
            <p className="mt-2 text-neutral-600 max-w-2xl">
              Discover how our eco-friendly products can help you reduce your environmental footprint without compromising on quality or style.
            </p>
          </div>
          <a href="#" className="mt-4 md:mt-0 inline-flex items-center rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-50">
            View all
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
