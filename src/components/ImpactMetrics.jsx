import { Leaf, Footprints, Recycle, CheckCircle2 } from "lucide-react";

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
        <div className="md:flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Transparent impact you can track</h2>
            <p className="mt-2 text-neutral-600 max-w-2xl">
              We quantify our footprint across materials, manufacturing, and logistics — and share the numbers.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-2 text-sm text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
            <CheckCircle2 className="h-4 w-4" /> Third-party verified data
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Stat icon={Leaf} value="100+ tons" label="CO₂ avoided" sub="Target for early launch phase" />
          <Stat icon={Footprints} value=">80%" label="Customer satisfaction" sub="Consistently above our goal" />
          <Stat icon={Recycle} value="<5%" label="Return rate" sub="Quality that stands the test of time" />
          <Stat icon={Leaf} value="25+" label="Products curated" sub="Premium, eco-conscious essentials" />
        </div>
      </div>
    </section>
  );
}
