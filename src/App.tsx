import { useEffect, useMemo, useState } from "react";
import Hero from "./components/Hero";
import ContactSection from "./components/ContactSection";
import TimelineSection from "./components/TimelineSection";
import ProjectsSection from "./components/ProjectsSection";
import CommunitySection from "./components/CommunitySection";
import { community, projects, timeline, socials } from "./data/content";
import headshot from "./assets/headshot.jpg";
import "./App.css";

type Theme = "light" | "dark";
const getPreferredTheme = (): Theme => {
  if (typeof window === "undefined") {
    return "light";
  }

  const stored = window.localStorage.getItem("portfolio-theme");
  if (stored === "light" || stored === "dark") {
    return stored;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

function App() {
  const [theme, setTheme] = useState<Theme>(() => getPreferredTheme());

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const isDarkMode = useMemo(() => theme === "dark", [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  return (
    <div className="app">
      <div className="orb orb-one" aria-hidden="true" />
      <div className="orb orb-two" aria-hidden="true" />
      <div className="app-wrapper">
        <header className="app-header">
          <div className="branding">
            <span className="logo-pill" aria-hidden="true">
              AJ
            </span>
            <div>
              <p className="brand-name">Aisha Jackson</p>
              <p className="brand-tagline">
                Bridging creativity, code, and community.
              </p>
            </div>
          </div>

          <nav className="app-nav">
            <a href="#projects">Projects</a>
            <a href="#community">Community</a>
            <a href="#timeline">Timeline</a>
            <a href="#contact">Contact</a>
          </nav>

          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Activate ${isDarkMode ? "light" : "dark"} mode`}
          >
            <span className="theme-icon" aria-hidden="true">
              {isDarkMode ? "🌞" : "🌙"}
            </span>
            <span>{isDarkMode ? "Light" : "Dark"}</span>
          </button>
        </header>

        <main className="app-main">
          <Hero headshot={headshot} />
          <ProjectsSection projects={projects} />
          <CommunitySection community={community} />
          <TimelineSection timeline={timeline} />
          <ContactSection socials={socials} />
        </main>

        <footer className="app-footer">
          <p>
            © {new Date().getFullYear()} Aisha Jackson. All Rights Reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
