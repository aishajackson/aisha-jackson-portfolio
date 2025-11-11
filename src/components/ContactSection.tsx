import type { SocialLink } from "../data/content";

type ContactSectionProps = {
  socials: SocialLink[];
};

const iconForSocial = (label: string) => {
  switch (label.toLowerCase()) {
    case "email":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path
            d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm0 2v.14l8 5 8-5V8zm0 3.34V16h16v-4.66l-7.45 4.65a1.5 1.5 0 0 1-1.1.18 1.5 1.5 0 0 1-.42-.18z"
            fill="currentColor"
          />
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path
            d="M6.94 20.25H3.72V8.89h3.22zm-1.6-13a1.86 1.86 0 1 1 0-3.72 1.86 1.86 0 0 1 0 3.72zm15.91 13h-3.21v-5.62c0-1.34-.48-2.25-1.68-2.25-.92 0-1.47.62-1.71 1.22-.09.21-.11.51-.11.81v5.84h-3.22V8.89h3.22v1.51c.46-.71 1.19-1.72 2.89-1.72 2.11 0 3.82 1.38 3.82 4.36z"
            fill="currentColor"
          />
        </svg>
      );
    case "github":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path
            d="M12 .75a11.25 11.25 0 0 0-3.55 21.91c.56.11.75-.24.75-.54v-1.93c-3.06.66-3.7-1.48-3.7-1.48-.51-1.3-1.26-1.64-1.26-1.64-1.03-.71.08-.7.08-.7 1.14.08 1.73 1.17 1.73 1.17 1.01 1.73 2.65 1.23 3.3.94.1-.74.39-1.23.71-1.51-2.44-.28-5-1.22-5-5.43 0-1.2.43-2.18 1.14-2.95-.11-.28-.5-1.41.11-2.94 0 0 .95-.3 3.11 1.13.9-.25 1.86-.37 2.82-.37.96 0 1.92.12 2.82.37 2.16-1.43 3.11-1.13 3.11-1.13.61 1.53.22 2.66.11 2.94.71.77 1.14 1.75 1.14 2.95 0 4.22-2.57 5.15-5.01 5.43.4.34.76 1.01.76 2.04v3.02c0 .31.2.66.76.55A11.25 11.25 0 0 0 12 .75"
            fill="currentColor"
          />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <circle
            cx="12"
            cy="12"
            r="10"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      );
  }
};

const ContactSection = ({ socials }: ContactSectionProps) => {
  const primaryContact = socials.find(
    (social) => social.label.toLowerCase() === "email"
  );

  return (
    <section className="section contact" id="contact">
      <div className="section-heading">
        <h2 className="section-title">Get in Touch!</h2>
        <p className="section-subtitle">
          I’m currently open to any new opportunities and collaborations.
        </p>
      </div>
      <div className="contact-card fade-in" style={{ animationDelay: "0.2s" }}>
        <div>
          <h3>Say hello :)</h3>
          <p>
            Send me an email or InMail and I’ll do my best to get back to you!
          </p>
        </div>
        <div className="contact-icons" role="list">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="contact-icon"
              role="listitem"
              aria-label={`${social.label}: ${social.value}`}
              title={social.value}
            >
              <span className="contact-icon-graphic">
                {iconForSocial(social.label)}
              </span>
              <span className="sr-only">{social.value}</span>
            </a>
          ))}
        </div>
        <a
          className="btn primary"
          href={primaryContact?.href ?? "mailto:ajackson7148@gmail.com"}
        >
          Drop me a note
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
