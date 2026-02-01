export default function CaregmaWhatWeDo() {
  return (
    <section className="max-w-7xl mx-auto mt-32 px-6">
      <div
        className="bg-white rounded-[32px] px-10 py-16
                      shadow-[0_24px_64px_rgba(0,184,124,0.08)]"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          What Caregma Does
        </h2>

        <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
          We support patients and families before, during, and after critical
          medical visits — when decisions feel overwhelming and stakes are high.
        </p>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            "Help prepare questions ahead of the visit",
            "Attend appointments in person (or virtually when needed)",
            "Take structured notes in plain language",
            "Clarify decisions and next steps afterward",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 text-sm text-slate-600
                         shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
