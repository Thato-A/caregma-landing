// components/WaitlistModal.jsx
export default function WaitlistModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-2">Join the Caregma Waitlist</h2>
        <p className="text-slate-600 mb-4">
          Be the first to know when the Caregma app launches.
        </p>

        <form
          action="https://formspree.io/f/mzddjybl"
          method="POST"
          className="grid gap-4"
        >
          <input
            type="email"
            name="email"
            placeholder="Email address"
            required
          />
          <input type="hidden" name="type" value="waitlist" />
          <button className="bg-slate-900 text-white py-3 rounded-full font-medium hover:bg-slate-800">
            Join waitlist
          </button>
        </form>
      </div>
    </div>
  );
}
