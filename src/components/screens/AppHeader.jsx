import { Menu } from "lucide-react";

export default function AppHeader() {
  return (
    <div className="flex items-center justify-between px-3 py-4">
      <span className="text-sm font-semibold text-emerald-600">Caregma</span>
      <Menu className="w-5 h-5 text-slate-500" />
    </div>
  );
}
