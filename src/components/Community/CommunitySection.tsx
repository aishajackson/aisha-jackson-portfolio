import type { CommunityItem } from "../../data/content";
import "./CommunitySection.css";

type CommunitySectionProps = {
  community: CommunityItem[];
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
        const logo = item.logo;

        return (
          <article
            key={`${item.organization}-${item.title}`}
            className="community-card fade-in"
            style={{ animationDelay: `${index * 0.1 + 0.1}s` }}
            tabIndex={0}
          >
            <div className="community-card-inner">
              <div className="community-card-face community-card-front">
                <span
                  className={`community-icon${logo ? " has-image" : ""}`}
                  aria-hidden={logo ? true : undefined}
                >
                  {logo ? (
                    <img src={logo.src} alt={logo.alt} />
                  ) : (
                    <span>{item.organization.slice(0, 2).toUpperCase()}</span>
                  )}
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
