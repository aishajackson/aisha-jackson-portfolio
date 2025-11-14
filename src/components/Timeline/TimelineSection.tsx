import warnerLogo from "../../assets/warner_bros_discovery_logo.jpeg";
import nikeLogo from "../../assets/nike_logo.jpeg";
import oregonLabsLogo from "../../assets/oregon_labs_logo.jpeg";
import type { TimelineItem } from "../../data/content";
import "./TimelineSection.css";

type TimelineSectionProps = {
  timeline: TimelineItem[];
};

const companyPalettes: Record<
  string,
  {
    bg: string;
    color: string;
  }
> = {
  "Warner Bros. Discovery": {
    bg: "linear-gradient(135deg, #0052cc, #001848)",
    color: "#fff",
  },
  Nike: {
    bg: "linear-gradient(135deg, #1c1c1c, #000)",
    color: "#fff",
  },
  "Oregon Labs": {
    bg: "linear-gradient(135deg, #0f9b0f, #000000)",
    color: "#f7fff7",
  },
  BrightLabs: {
    bg: "linear-gradient(135deg, #ff5f6d, #ffc371)",
    color: "#2f1100",
  },
  "Neon Studio": {
    bg: "linear-gradient(135deg, #12c2e9, #c471ed)",
    color: "#0a0121",
  },
  "Howard University": {
    bg: "linear-gradient(135deg, #002554, #ba0c2f)",
    color: "#fff",
  },
  "PDX Tech Gives Back": {
    bg: "linear-gradient(135deg, #ff9966, #ff5e62)",
    color: "#2b0d00",
  },
};

const companyLogos: Record<string, string> = {
  "Warner Bros. Discovery": warnerLogo,
  Nike: nikeLogo,
  "Oregon Labs": oregonLabsLogo,
};

const getCompanyInitials = (name: string) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .slice(0, 2)
    .join("");

const TimelineSection = ({ timeline }: TimelineSectionProps) => (
  <section className="section" id="timeline">
    <div className="section-heading">
      <h2 className="section-title">Journey so far</h2>
      <p className="section-subtitle">
        A snapshot of my professional impact across the roles and projects that
        have shaped my career.
      </p>
    </div>
    <ul className="timeline">
      {timeline.map((item, index) => {
        const subtitle = item.subtitle.trim();
        const subtitleParts = subtitle
          .split(/[,·|]/)
          .map((part) => part.trim())
          .filter(Boolean);
        const companyName = item.company?.trim();
        const hasCompany = Boolean(companyName);
        const companyLogo = hasCompany ? companyLogos[companyName!] : undefined;
        const companyPalette = (hasCompany &&
          companyPalettes[companyName!]) || {
          bg: "linear-gradient(135deg, var(--surface-highlight), var(--accent-soft))",
          color: "var(--text-primary)",
        };
        const companyInitials = hasCompany
          ? getCompanyInitials(companyName!)
          : "";

        return (
          <li
            key={`${item.year}-${item.role}-${companyName ?? "independent"}`}
            className="timeline-item fade-in"
            style={{ animationDelay: `${index * 0.12 + 0.1}s` }}
          >
            <span className="timeline-dot" />
            <div className="timeline-content">
              <span className="timeline-year">{item.year}</span>
              <div className="timeline-role">
                {hasCompany && (
                  <span
                    className={`timeline-company-icon${
                      companyLogo ? " has-image" : ""
                    }`}
                    style={
                      companyLogo
                        ? undefined
                        : {
                            background: companyPalette.bg,
                            color: companyPalette.color,
                          }
                    }
                    role={companyLogo ? undefined : "img"}
                    aria-label={companyLogo ? undefined : `${companyName} logo`}
                    title={companyName}
                  >
                    {companyLogo ? (
                      <img src={companyLogo} alt={`${companyName} logo`} />
                    ) : (
                      companyInitials
                    )}
                  </span>
                )}
                <div>
                  <h3>{item.role}</h3>
                  {hasCompany && (
                    <span className="timeline-company-name">{companyName}</span>
                  )}
                </div>
              </div>
              {subtitleParts.length > 0 && (
                <div className="timeline-subtitle">
                  {subtitleParts.map((part, partIndex) => (
                    <span
                      key={`${item.year}-${part}-${partIndex}`}
                      className="timeline-subtitle-chip"
                    >
                      {part}
                    </span>
                  ))}
                </div>
              )}
              <p>{item.description}</p>
            </div>
          </li>
        );
      })}
    </ul>
  </section>
);

export default TimelineSection;
