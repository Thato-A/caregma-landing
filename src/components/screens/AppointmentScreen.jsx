import { Menu, Phone, MessageSquare } from "lucide-react";

export default function AppointmentScreen() {
  return (
    <div className="w-full h-full bg-white rounded-[24px] px-4 pt-2 pb-4 flex flex-col">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-semibold text-emerald-600">Caregma</span>
        <Menu className="w-4 h-4 text-slate-600" />
      </div>

      {/* TITLE */}
      <h3 className="text-sm font-semibold text-center mb-4">
        Your Appointment
      </h3>

      {/* APPOINTMENT CARD */}
      <div className="bg-slate-50 rounded-xl p-4 text-center mb-4">
        <p className="text-xs text-slate-500 mb-1">Cardiology Follow-up</p>
        <p className="text-sm font-medium">Dr. Elaine Morris</p>
        <p className="text-xs text-slate-500">May 10 · 2:30 PM</p>
      </div>

      {/* ADVOCATE STATUS */}
      <div className="bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full px-4 py-2 text-center mb-4">
        Advocate Assigned
      </div>

      {/* ADVOCATE PROFILE */}
      <div className="relative bg-white border border-slate-100 rounded-xl pt-8 pb-4 px-4 mb-4 text-center">
        {/* Avatar */}
        <img
          src="../../../assets/advocate-pic.webp"
          alt="Advocate"
          className="
      absolute
      -top-6
      left-1/2
      -translate-x-1/2
      w-14
      h-14
      rounded-full
      object-cover
      border-4
      border-white
      shadow-sm
    "
        />

        <div className="flex-1">
          <p className="text-sm font-semibold">Sarah Johnson</p>
          <p className="text-xs text-slate-500">Registered Nurse (RN)</p>
        </div>
      </div>

      {/* DISCLAIMER */}
      <p className="text-[10px] text-slate-400 text-center mb-3 leading-snug">
        Caregma is an independent patient support service. Not medical advice.
      </p>

      {/* CONTACT ACTIONS */}
      <div className="grid grid-cols-2 gap-3 mt-auto">
        <button
          type="button"
          className="flex items-center justify-center gap-2 py-2.5 rounded-full border border-slate-200 text-sm font-medium text-slate-700 hover:bg-slate-50"
        >
          <Phone className="w-4 h-4 text-emerald-600" />
          Call
        </button>

        <button
          type="button"
          className="flex items-center justify-center gap-2 py-2.5 rounded-full bg-emerald-500 text-white text-sm font-medium hover:bg-emerald-600"
        >
          <MessageSquare className="w-4 h-4" />
          Text
        </button>
      </div>
    </div>
  );
}
