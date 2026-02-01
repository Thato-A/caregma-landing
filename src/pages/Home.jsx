import Hero from "../components/Hero";
import WhyCaregma from "../components/WhyCaregma";
import HowItWorks from "../components/Howitworks";
import AppPreview from "../components/AppPreview";
import CaregmaWhatWeDo from "../components/WhatWeDo";
import HighStakesVisits from "../components/HighStakesVisits";
import TrustStrip from "../components/TrustStrip";
import Footer from "../components/Footer";

export default function Home({ onRequest, language }) {
  return (
    <>
      <Hero onRequest={onRequest} language={language} />
      <TrustStrip />
      <WhyCaregma />
      <CaregmaWhatWeDo />
      <HighStakesVisits />
      <HowItWorks />
      <AppPreview />
      <Footer onRequest={onRequest} />
    </>
  );
}
