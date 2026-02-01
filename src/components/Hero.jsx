// components/Hero.jsx
import { useEffect, useState } from "react";
import { autoTranslate } from "../autoTranslate";

export default function Hero({ onRequest, language }) {
  // Base English text (single source of truth)
  const baseTitle = "Do not go to critical medical visits alone.";
  const baseDescription =
    "Caregma provides clinically trained advocates who attend high-stakes medical appointments to help patients and families understand what’s happening and make safer decisions.";
  const baseCta = "Request an advocate for an upcoming appointment";
  const baseNote =
    "We’ll contact you within 24 hours to learn more about your visit.";

  // Translated state
  const [title, setTitle] = useState(baseTitle);
  const [description, setDescription] = useState(baseDescription);
  const [cta, setCta] = useState(baseCta);
  const [note, setNote] = useState(baseNote);

  useEffect(() => {
    async function translate() {
      setTitle(await autoTranslate(baseTitle, language));
      setDescription(await autoTranslate(baseDescription, language));
      setCta(await autoTranslate(baseCta, language));
      setNote(await autoTranslate(baseNote, language));
    }

    translate();
  }, [language]);

  return (
    <section className="max-w-7xl mx-auto px-6 pt-24 grid md:grid-cols-2 gap-16 items-center">
      <div>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          {title}
        </h1>

        <p className="text-slate-600 text-lg mb-8 max-w-xl">{description}</p>

        <button
          onClick={onRequest}
          className="bg-emerald-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-600 transition"
        >
          {cta}
        </button>

        <p className="text-sm text-slate-500 mt-3">{note}</p>
      </div>

      <img
        src="/assets/doctor-pic.png"
        alt="Doctor speaking with patient"
        className="rounded-3xl shadow-2xl w-full max-h-[420px] object-cover"
      />
    </section>
  );
}
