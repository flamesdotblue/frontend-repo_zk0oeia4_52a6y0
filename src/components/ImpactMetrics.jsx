import { Leaf, Footprints, Recycle, Users } from "lucide-react";

const Stat = ({ icon: Icon, label, value, sub }) => (
  <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 rounded-lg bg-emerald-600/10 text-emerald-700 flex items-center justify-center">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-2xl font-bold">{value}</div>
        <div className="text-sm text-neutral-600">{label}</div>
      </div>
    </div>
    {sub && <p className="mt-3 text-sm text-neutral-500">{sub}</p>}
  </div>
);

export default function ImpactMetrics() {
  return (
    <section id="impact" className="py-16 bg-gradient-to-b from-white to-emerald-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <p className="text-sm font-medium tracking-wide text-emerald-700 uppercase">Our Impact in Numbers</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight">Making a Real Difference</h2>
          <p className="mt-2 text-neutral-600">We measure our success by the positive impact we create for our customers and the planet.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Stat icon={Recycle} value="25+" label="Eco-Friendly Products" />
          <Stat icon={Leaf} value="125+ tons" label="CO₂ Reduced" />
          <Stat icon={Users} value="189+" label="Satisfied Customers" />
          <Stat icon={Footprints} value=">80%" label="Customer Satisfaction" sub="Consistently above our goal" />
        </div>

        <p className="mt-8 text-center text-neutral-700">Join thousands of eco-conscious customers who trust Zygreen for sustainable living solutions.</p>
      </div>
    </section>
  );
}
