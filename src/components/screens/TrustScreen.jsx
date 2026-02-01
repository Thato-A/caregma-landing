import {
  Heart,
  Clock,
  DollarSign,
  GraduationCap,
  Menu,
  Check,
} from "lucide-react";

export default function AdvocatePhoneScreen() {
  return (
    <div className="w-full h-full bg-white rounded-[24px] px-4 pt-2 pb-4 flex flex-col">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold text-emerald-600">Caregma</span>
        <Menu className="w-4 h-4 text-slate-600" />
      </div>

      {/* TITLE */}
      <h3 className="text-sm font-semibold text-center mb-4">
        Become an Advocate
      </h3>

      {/* BENEFITS GRID */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <MiniCard icon={Heart} title="Make an Impact" color="rose" />
        <MiniCard icon={Clock} title="Flexible Schedule" color="emerald" />
        <MiniCard icon={DollarSign} title="Competitive Pay" color="rose" />
        <MiniCard
          icon={GraduationCap}
          title="Expand Knowledge"
          color="emerald"
        />
      </div>

      {/* CHECKLIST */}
      <div className="bg-slate-50 rounded-lg p-3 space-y-1 text-[11px] text-slate-700 mb-4">
        <CheckRow text="Background checked" />
        <CheckRow text="HIPAA-aware" />
        <CheckRow text="Medical advocacy focused" />
      </div>

      {/* CTA */}
      <button className="w-full py-2.5 rounded-full bg-rose-300 text-slate-900 text-sm font-medium hover:bg-rose-400 transition">
        Apply
      </button>
    </div>
  );
}

/* ---------- SUB COMPONENTS ---------- */

function MiniCard({ icon: Icon, title, color }) {
  const bg = color === "rose" ? "bg-rose-100" : "bg-emerald-100";
  const iconColor = color === "rose" ? "text-rose-500" : "text-emerald-600";

  return (
    <div className="bg-white rounded-lg border border-slate-100 p-3 text-center shadow-sm">
      <div
        className={`w-8 h-8 mx-auto mb-1 rounded-full flex items-center justify-center ${bg}`}
      >
        <Icon className={`w-4 h-4 ${iconColor}`} />
      </div>
      <p className="text-[11px] font-medium leading-tight">{title}</p>
    </div>
  );
}

function CheckRow({ text }) {
  return (
    <div className="flex items-center gap-2">
      <Check className="w-3.5 h-3.5 text-emerald-500" />
      <span>{text}</span>
    </div>
  );
}
