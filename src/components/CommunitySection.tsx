import blackGirlsCodeLogo from "../assets/black_girls_code_logo.jpeg";
import coolGirlsLogo from "../assets/cool_girls_inc__logo.jpeg";
import colorwaveLogo from "../assets/thecolorwave_logo.jpeg";

import type { CommunityItem } from "../data/content";

type CommunitySectionProps = {
  community: CommunityItem[];
};

const organizationLogos: Record<
  string,
  {
    src: string;
    alt: string;
  }
> = {
  Colorwave: {
    src: colorwaveLogo,
    alt: "Colorwave logo",
  },
  "Black Girls Code": {
    src: blackGirlsCodeLogo,
    alt: "Black Girls Code logo",
  },
  "Cool Girls, Inc.": {
    src: coolGirlsLogo,
    alt: "Cool Girls, Inc. logo",
  },
};

const CommunitySection = ({ community }: CommunitySectionProps) => (
  <section className="section" id="community">
    <div className="section-heading">
      <h2 className="section-title">Beyond the office</h2>
      <p className="section-subtitle">
        Mentoring, organizing, and giving back to the communities that fuel my
        creativity.
      </p>
    </div>
    <div className="community-grid">
      {community.map((item, index) => {
        const logo = organizationLogos[item.organization];

        return (
          <article
            key={`${item.organization}-${item.title}`}
            className="community-card fade-in"
            style={{ animationDelay: `${index * 0.1 + 0.1}s` }}
            tabIndex={0}
          >
            <div className="community-card-inner">
              <div className="community-card-face community-card-front">
                <span className="community-icon has-image">
                  <img src={logo.src} alt={logo.alt} />
                </span>
                <div className="community-meta">
                  <span className="community-role">{item.role}</span>
                  <h3>{item.title}</h3>
                  <p className="community-organization">{item.organization}</p>
                  <span className="community-timeframe">{item.timeframe}</span>
                </div>
              </div>
              <div className="community-card-face community-card-back">
                <div className="community-back-content">
                  <p className="community-summary">{item.summary}</p>
                  {item.highlights && item.highlights.length > 0 && (
                    <ul className="community-highlights">
                      {item.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  )}
                  {item.link && (
                    <a
                      className="community-link"
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Learn more
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  </section>
);

export default CommunitySection;
