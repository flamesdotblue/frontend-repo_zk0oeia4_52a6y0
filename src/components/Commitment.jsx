import { Recycle, Factory, Lightbulb } from "lucide-react";

function Pillar({ icon: Icon, title, children }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-lg bg-emerald-600/10 text-emerald-700 flex items-center justify-center">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>
      <p className="mt-3 text-neutral-600 text-sm">{children}</p>
    </div>
  );
}

export default function Commitment() {
  return (
    <section id="commitment" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight">Our Commitment</h2>
          <p className="mt-2 text-neutral-600">Sustainable Solutions for a Better Tomorrow</p>
          <p className="mt-2 text-neutral-600">Discover our range of eco-friendly products designed to enhance your lifestyle while protecting the planet.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <Pillar icon={Recycle} title="Eco-Conscious Design">
            Our products are crafted with sustainability at their core, using environmentally friendly materials and processes.
          </Pillar>
          <Pillar icon={Factory} title="Ethical Manufacturing">
            We partner with responsible manufacturers who share our commitment to fair labor practices and environmental stewardship.
          </Pillar>
          <Pillar icon={Lightbulb} title="Sustainable Innovation">
            Continuously developing solutions that reduce environmental impact without compromising on quality or style.
          </Pillar>
        </div>
      </div>
    </section>
  );
}
