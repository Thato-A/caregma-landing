import { Heart, Clock, DollarSign, GraduationCap } from "lucide-react";

export default function BecomeAdvocate({ onApply }) {
  return (
    <main className="w-full bg-slate-50 px-6 pt-32 pb-32 space-y-32">
      {/* HERO */}
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Become a Healthcare Advocate
        </h1>
        <p className="text-slate-600 text-lg mb-8">
          Make a meaningful difference in patients' lives by providing support,
          guidance, and advocacy during their healthcare journey.
        </p>

        <button
          onClick={onApply}
          className="px-8 py-3 rounded-full bg-rose-300 text-slate-900 font-medium hover:bg-rose-400"
        >
          Apply Now
        </button>
      </section>

      {/* WHY JOIN */}
      <section className="max-w-6xl mx-auto bg-white rounded-3xl p-12 shadow-sm">
        <h2 className="text-3xl font-bold text-center mb-16">
          Why Join Caregma?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <Feature icon={Heart} title="Make an Impact" color="rose">
            Help patients navigate complex healthcare systems with confidence
            and clarity.
          </Feature>

          <Feature icon={Clock} title="Flexible Schedule" color="emerald">
            Choose your availability and support patients when it fits your
            schedule.
          </Feature>

          <Feature icon={DollarSign} title="Competitive Pay" color="rose">
            Earn competitive compensation for your time, expertise, and
            compassion.
          </Feature>

          <Feature
            icon={GraduationCap}
            title="Expand Your Knowledge"
            color="emerald"
          >
            Build your understanding of healthcare systems by attending real
            medical appointments and supporting patients through meaningful
            moments in care.
          </Feature>
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section className="max-w-6xl mx-auto bg-white rounded-3xl p-12 shadow-sm">
        <h2 className="text-3xl font-bold text-center mb-16">
          Advocate Requirements
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <RequirementCard title="Qualifications">
            <li>Healthcare background or experience</li>
            <li>Excellent communication skills</li>
            <li>Empathy and compassion</li>
            <li>Professional demeanor</li>
            <li>Clean background check</li>
          </RequirementCard>

          <RequirementCard title="Responsibilities">
            <li>Accompany patients to appointments</li>
            <li>Take clear, structured notes</li>
            <li>Ask clarifying questions</li>
            <li>Provide emotional support</li>
            <li>Maintain confidentiality</li>
          </RequirementCard>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>

        <p className="text-slate-600 mb-8">
          Join our team of compassionate advocates and help patients navigate
          their healthcare journey.
        </p>

        <button
          onClick={onApply}
          className="px-8 py-3 rounded-full bg-rose-300 text-slate-900 font-medium hover:bg-rose-400"
        >
          Apply Now
        </button>
      </section>
    </main>
  );
}

function Feature({ icon: Icon, title, color, children }) {
  const bg = color === "rose" ? "bg-rose-100" : "bg-emerald-100";
  const text = color === "rose" ? "text-rose-500" : "text-emerald-600";

  return (
    <div className="text-center px-6">
      <div
        className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center ${bg}`}
      >
        <Icon className={`w-7 h-7 ${text}`} />
      </div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-slate-600 text-sm max-w-sm mx-auto">{children}</p>
    </div>
  );
}

function RequirementCard({ title, children }) {
  return (
    <div className="bg-slate-50 rounded-2xl p-8 text-center">
      <h3 className="font-semibold mb-4">{title}</h3>
      <ul className="space-y-3 text-slate-600 text-sm">{children}</ul>
    </div>
  );
}
