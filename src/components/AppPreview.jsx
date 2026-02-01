import IPhone from "./IPhone";
import RequestAdvocateScreen from "./screens/RequestAdvocateScreen";
import AppointmentScreen from "./screens/AppointmentScreen";
import TrustScreen from "./screens/TrustScreen";

export default function AppPreview({ onWaitlist }) {
  return (
    <section className="max-w-7xl mx-auto mt-32 px-6 text-center">
      <span className="inline-block mb-4 px-4 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium">
        Coming Soon
      </span>

      <h2 className="text-3xl md:text-4xl font-bold mb-4">The Caregma App</h2>

      <p className="text-slate-600 mb-10 max-w-2xl mx-auto">
        Book advocates, manage appointments, and feel supported — all from your
        phone.
      </p>

      <div
        className="
    flex
    flex-col
    items-center
    justify-center
    gap-12
    w-full

    md:flex-row
    md:items-end
  "
      >
        <div className="md:translate-y-8">
          <IPhone>
            <RequestAdvocateScreen />
          </IPhone>
        </div>

        <IPhone>
          <AppointmentScreen />
        </IPhone>

        <div className="md:translate-y-12">
          <IPhone>
            <TrustScreen />
          </IPhone>
        </div>
      </div>

      <button
        onClick={onWaitlist}
        className="mt-16 px-8 py-3 rounded-full bg-slate-900 text-white font-medium hover:bg-slate-800"
      >
        Join the waitlist
      </button>
    </section>
  );
}
