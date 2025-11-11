import Hero from "./components/Hero";
import ContactSection from "./components/ContactSection";
import TimelineSection from "./components/TimelineSection";
import ProjectsSection from "./components/ProjectsSection";
import CommunitySection from "./components/CommunitySection";
import { community, projects, timeline, socials } from "./data/content";
import headshot from "./assets/headshot.jpg";
import "./App.css";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { isDarkMode, toggleTheme } = useTheme();

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
