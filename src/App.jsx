import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import PillNav from "./components/PillNav";
import Home from "./pages/Home";
import BecomeAdvocate from "./pages/BecomeAdvocate";
import RequestModal from "./components/RequestModal";
import WaitlistModal from "./components/WaitlistModal";

export default function App() {
  const [requestOpen, setRequestOpen] = useState(false);
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const [language, setLanguage] = useState("en");

  return (
    <>
      <PillNav
        onRequest={() => setRequestOpen(true)}
        onWaitlist={() => setWaitlistOpen(true)}
        language={language}
        setLanguage={setLanguage}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home onRequest={() => setRequestOpen(true)} language={language} />
          }
        />
        <Route
          path="/become-advocate"
          element={<BecomeAdvocate onApply={() => setWaitlistOpen(true)} />}
        />
      </Routes>

      {/* GLOBAL MODALS */}
      <RequestModal open={requestOpen} onClose={() => setRequestOpen(false)} />

      <WaitlistModal
        open={waitlistOpen}
        onClose={() => setWaitlistOpen(false)}
      />
    </>
  );
}
