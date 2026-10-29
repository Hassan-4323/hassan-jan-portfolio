
import Navbar from "./components/layout/Navbar";

import ScrollExperience from "./components/common/ScrollExperience";
import MotionRefresh from "./components/common/MotionRefresh";

import Hero from "./components/hero/Hero";
import SearchTransition from "./components/search/SearchTransition";

import ProjectsSection from "./sections/ProjectsSection";
import TechUniverseSection from "./sections/TechUniverseSection";
import AboutJourneySection from "./sections/AboutJourneySection";
import ContactSection from "./sections/ContactSection";

import "./App.css";
import "./styles/responsive.css";
import "./styles/hero-responsive-fix.css";
import "./styles/galaxy-a55.css";

function App() {
  return (
    <>
      <MotionRefresh />

      <ScrollExperience />

      <Navbar />

      <main className="portfolio-app">
        <Hero />

        <SearchTransition />

        <ProjectsSection />

        <TechUniverseSection />

        <AboutJourneySection />

        <ContactSection />
      </main>
    </>
  );
}

export default App;
