// components/HowItWorks.jsx
const steps = [
  "Request an advocate for an upcoming appointment",
  "We contact you within 24 hours",
  "We confirm details and discuss support options",
  "An advocate attends the visit and provides a clear summary",
];

export default function HowItWorks() {
  return (
    <section className="max-w-4xl mx-auto mt-32 px-6">
      <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>

      <div className="space-y-10">
        {steps.map((step, i) => (
          <div key={i} className="flex items-start gap-6">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-semibold">
              {i + 1}
            </div>
            <p className="text-slate-600 text-lg max-w-xl leading-snug">
              {step}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
