import { Linkedin, Facebook, Instagram, Twitter } from "lucide-react";
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
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              aria-label="X"
              className="text-slate-500 hover:text-slate-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="currentColor"
              >
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.64 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.933zm-1.29 19.49h2.04L6.486 3.24H4.298L17.61 20.643z" />
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
