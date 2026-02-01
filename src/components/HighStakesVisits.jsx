export default function HighStakesVisits() {
  return (
    <section className="max-w-7xl mx-auto mt-24 px-6">
      <div
        className="
          bg-white rounded-[32px] px-10 py-16
          shadow-[0_24px_64px_rgba(0,184,124,0.08)]
          text-center
        "
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Appointment Representation for High-Stakes Visits
        </h2>

        <p className="text-slate-500 mb-10">Our initial focus</p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            "New diagnosis appointments",
            "Treatment planning visits",
            "Specialist or second-opinion consults",
          ].map((item, i) => (
            <div
              key={i}
              className="
                bg-white rounded-2xl p-6 text-sm text-slate-600
                shadow-[0_10px_30px_rgba(0,0,0,0.05)]
              "
            >
              {item}
            </div>
          ))}
        </div>

        <p className="text-slate-600 max-w-2xl mx-auto">
          These moments are emotionally urgent, time-bound, and difficult to
          navigate alone.
        </p>
      </div>
    </section>
  );
}
