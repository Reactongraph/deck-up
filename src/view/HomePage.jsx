import React from "react";
// import Header from "../components/Header";
// import Footer from "../components/Foorter";
import HeroSection from "../components/HeroSection";
import ExpertSection from "../components/ExpertSection";
import FeaturesSection from "../components/FeatureSection";
import FeaturesShowcase from "../components/FeaturesShowcase";
import TutorialSection from "../components/TutorialSection";
import TestimonialsSection from "../components/TestimonialsSection";
import PowerUsers from "../components/PowerUser";
import OnboardingSection from "../components/OnboardingSection";

const HomePage = ({ freeTrialSectionRef, freeTrialInputFocus, setFreeTrialInputFocus }) => {
  return (
    <>
      {/* <Header /> */}
      <HeroSection
        freeTrialSectionRef={freeTrialSectionRef}
        freeTrialInputFocus={freeTrialInputFocus}
        setFreeTrialInputFocus={setFreeTrialInputFocus}
      />
      <ExpertSection />
      <FeaturesSection />
      <FeaturesShowcase />
      <TutorialSection />
      <TestimonialsSection />
      <PowerUsers />
      <OnboardingSection />
      {/* <Footer /> */}
    </>
  );
};

export default HomePage;
