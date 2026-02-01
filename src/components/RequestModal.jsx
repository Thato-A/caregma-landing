// components/RequestModal.jsx
export default function RequestModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl p-8 max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4">
          Request an advocate for an upcoming medical visit
        </h2>

        <form
          action="https://formspree.io/f/mzddjybl"
          method="POST"
          className="grid gap-4"
        >
          <input type="date" name="appointment_date" required />
          <input name="hospital" placeholder="Hospital or clinic" />
          <input name="zip_code" placeholder="Zip code" />
          <input type="email" name="email" placeholder="Email" required />
          <input type="tel" name="phone" placeholder="Phone" required />
          <textarea
            name="concerns"
            placeholder="What worries you most about this visit?"
          />
          <button className="bg-emerald-500 text-white py-3 rounded-full font-semibold hover:bg-emerald-600">
            Request an advocate
          </button>
        </form>
      </div>
    </div>
  );
}
