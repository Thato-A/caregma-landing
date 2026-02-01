// components/WhyCaregma.jsx
import { Heart, Shield, Users, Calendar } from "lucide-react";

const items = [
  {
    title: "Compassionate Care",
    text: "Our advocates provide emotional support and genuine care throughout your healthcare journey.",
    icon: Heart,
  },
  {
    title: "Professional Expertise",
    text: "All advocates are trained in medical terminology and patient rights advocacy.",
    icon: Shield,
  },
  {
    title: "Your Voice Matters",
    text: "We ensure your concerns are heard and your questions are addressed during medical visits.",
    icon: Users,
  },
  {
    title: "Easy Scheduling",
    text: "Book an advocate for any appointment with a simple, guided scheduling process.",
    icon: Calendar,
  },
];

export default function WhyCaregma() {
  return (
    <section id="why-caregma" className="max-w-6xl mx-auto mt-32 px-6">
      <div
        className="
          bg-white
          rounded-[32px]
          px-10 py-16
          shadow-[0_24px_64px_rgba(0,184,124,0.08)]
        "
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Caregma
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-slate-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-6">
                <item.icon />
              </div>

              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
