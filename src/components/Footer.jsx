import { Linkedin, Facebook, Instagram } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Footer({ onWaitlist, onRequest }) {
  const navigate = useNavigate();

  return (
    <footer className="mt-32 border-t border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        {/* LEFT */}
        <div className="text-left">
          <p className="text-sm text-slate-600 mb-2">
            Caregma is an independent patient support service.
          </p>
          <p className="text-xs text-slate-400">Not medical advice.</p>
        </div>

        {/* CENTER */}
        <div className="flex flex-col items-start text-sm gap-2 text-left md:mx-auto">
          <button
            onClick={onRequest}
            className="text-slate-600 hover:text-slate-900"
          >
            Book an Advocate
          </button>

          <button
            onClick={() => navigate("/become-advocate")}
            className="text-slate-600 hover:text-slate-900"
          >
            Become an Advocate
          </button>

          <button
            onClick={onWaitlist}
            className="text-slate-600 hover:text-slate-900"
          >
            Join the Waitlist
          </button>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col items-start md:items-end gap-3 text-left">
          {/* Social icons */}
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-slate-900"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>

            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-slate-900"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>

            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-slate-900"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>

            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
              className="text-slate-500 hover:text-slate-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="currentColor"
              >
                <path d="M21.5 7.5c-1.8 0-3.3-.6-4.6-1.7v8.4c0 4.1-3.4 7.5-7.5 7.5S2 18.3 2 14.2 5.4 6.7 9.5 6.7c.4 0 .9 0 1.3.1v3.9c-.4-.1-.8-.2-1.3-.2-1.9 0-3.5 1.6-3.5 3.6s1.6 3.6 3.5 3.6 3.5-1.6 3.5-3.6V2h4.1c.3 2.4 2.2 4.2 4.6 4.5v1z" />
              </svg>
            </a>
          </div>

          {/* Contact info */}
          <div className="flex flex-col text-sm text-slate-600 gap-1">
            <a
              href="mailto:support@caregma.com"
              className="hover:text-slate-900"
            >
              support@caregma.com
            </a>

            <a href="tel:+19196516934" className="hover:text-slate-900">
              +1 919 651 6934
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-slate-400 pb-6">
        © {new Date().getFullYear()} Caregma. All rights reserved.
      </div>
    </footer>
  );
}
