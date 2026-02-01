import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { languages } from "../i18n";
import ReactCountryFlag from "react-country-flag";
import { useRef, useEffect } from "react";

export default function PillNav({
  onRequest,
  onWaitlist,
  language,
  setLanguage,
}) {
  const navigate = useNavigate();
  const langRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-100">
      {/* TOP BAR */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        {/* LEFT: Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/assets/caregma-logo.png"
            alt="Caregma logo"
            className="w-9 h-9 rounded-md"
          />
          <span className="text-lg font-semibold text-emerald-600">
            Caregma
          </span>
        </div>

        {/* CENTER: Pill Nav (desktop only) */}
        <div className="hidden md:flex flex-1 justify-center max-w-[720px]">
          <div className="flex gap-2 px-6 py-3 rounded-full bg-white shadow-[0_12px_32px_rgba(0,184,124,0.28)]">
            <button
              onClick={() => navigate("/")}
              className="px-5 py-2 text-sm rounded-full hover:bg-slate-100"
            >
              Home
            </button>

            <a
              href="#why-caregma"
              className="px-5 py-2 text-sm rounded-full hover:bg-slate-100"
            >
              Services
            </a>

            <button
              onClick={onRequest}
              className="px-5 py-2 text-sm rounded-full hover:bg-slate-100"
            >
              Book an Advocate
            </button>

            <button
              onClick={() => navigate("/become-advocate")}
              className="px-5 py-2 text-sm rounded-full hover:bg-slate-100"
            >
              Become an Advocate
            </button>
          </div>
        </div>

        {/* RIGHT: Desktop actions + Mobile hamburger */}
        <div className="flex justify-end items-center gap-3">
          {/* Desktop actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onWaitlist}
              className="hidden md:block text-sm text-slate-600"
            >
              Sign in
            </button>

            {/* Language dropdown */}
            <div ref={langRef} className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 px-2 py-1 rounded-full border border-slate-200"
              >
                <ReactCountryFlag
                  svg
                  countryCode={languages[language].countryCode}
                  style={{ width: "1.1em", height: "1.1em" }}
                />
                <span className="text-xs font-medium">
                  {languages[language].short}
                </span>
              </button>

              {langOpen && (
                <div className="absolute right-0 mt-2 bg-white rounded-xl shadow-lg p-2 z-50">
                  {Object.entries(languages).map(([code, lang]) => (
                    <button
                      key={code}
                      onClick={() => {
                        setLanguage(code);
                        setLangOpen(false);
                      }}
                      className="flex items-center gap-2 w-full px-3 py-2 text-sm hover:bg-slate-100 rounded-lg"
                    >
                      <ReactCountryFlag
                        svg
                        countryCode={lang.countryCode}
                        style={{ width: "1.1em", height: "1.1em" }}
                      />
                      <span className="text-xs font-medium">{lang.short}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={onWaitlist}
              className="px-4 py-2 text-sm rounded-full bg-slate-900 text-white"
            >
              Join waitlist
            </button>
          </div>

          {/* Mobile hamburger */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div
          className="
    md:hidden
    mx-4 mb-4
    rounded-2xl
    bg-white
    shadow-[0_20px_50px_rgba(0,0,0,0.15)]
    p-4
    space-y-2
  "
        >
          <button
            onClick={() => {
              navigate("/");
              setOpen(false);
            }}
            className="block w-full text-left px-4 py-3 rounded-xl hover:bg-slate-100"
          >
            Home
          </button>

          <button
            onClick={() => {
              onRequest();
              setOpen(false);
            }}
            className="block w-full text-left px-4 py-3 rounded-xl hover:bg-slate-100"
          >
            Book Appointment
          </button>

          <button
            onClick={() => {
              navigate("/become-advocate");
              setOpen(false);
            }}
            className="block w-full text-left px-4 py-3 rounded-xl hover:bg-slate-100"
          >
            Become an Advocate
          </button>

          <button
            onClick={() => {
              onWaitlist();
              setOpen(false);
            }}
            className="block w-full text-left px-4 py-3 rounded-xl hover:bg-slate-100"
          >
            Sign in
          </button>
        </div>
      )}
    </header>
  );
}
