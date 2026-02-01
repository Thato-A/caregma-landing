import { Menu } from "lucide-react";

export default function RequestAdvocatePhoneScreen() {
  return (
    <div className="w-full h-full bg-white rounded-[24px] px-4 pt-2 pb-4 flex flex-col">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold text-emerald-600">Caregma</span>
        <Menu className="w-4 h-4 text-slate-600" />
      </div>

      {/* TITLE */}
      <h3 className="text-sm font-semibold text-center mb-3">
        Request an Advocate
      </h3>

      {/* FORM (VISUAL ONLY) */}
      <div className="space-y-2 text-[11px]">
        <Input label="Appointment date">
          <input type="date" />
        </Input>

        <Input label="Hospital or clinic">
          <input placeholder="Hospital or clinic" />
        </Input>

        <Input label="Zip code">
          <input placeholder="Zip code" />
        </Input>

        <Input label="Email">
          <input type="email" placeholder="Email" />
        </Input>

        <Input label="Phone">
          <input type="tel" placeholder="Phone" />
        </Input>

        <Input label="Concerns">
          <textarea rows={2} placeholder="What worries you most?" />
        </Input>
      </div>

      {/* CTA */}
      <button
        type="button"
        className="mt-4 w-full py-2.5 rounded-full bg-emerald-500 text-white text-sm font-semibold hover:bg-emerald-600 transition"
      >
        Request an Advocate
      </button>

      {/* FOOTNOTE */}
      <p className="text-[10px] text-center text-slate-500 mt-2">
        We’ll contact you within 24 hours
      </p>
    </div>
  );
}

/* ---------- SMALL INPUT WRAPPER ---------- */

function Input({ label, children }) {
  return (
    <div>
      <label className="block mb-0.5 text-[10px] font-medium text-slate-500">
        {label}
      </label>
      {children}
    </div>
  );
}
