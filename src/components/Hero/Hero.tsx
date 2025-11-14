import "./Hero.css";

type HeroProps = {
  headshot: string;
};

const Hero = ({ headshot }: HeroProps) => (
  <section className="hero" id="intro">
    <div className="hero-content">
      <p className="eyebrow">Hello,</p>
      <h1>I'm Aisha Jackson!</h1>
      <p className="lead">
        I design and build meaningful digital experiences that merge creativity,
        technology, and community. As a creative technologist, I bring ideas to
        life—from polished interfaces and data-driven tools to projects that
        celebrate creativity and foster connection. My work bridges design,
        engineering, and social impact to create products that feel as good as
        they look.
      </p>
      <div className="hero-actions">
        <a className="btn primary" href="#projects">
          Explore my work
        </a>
        <a className="btn ghost" href="#contact">
          Let’s collaborate
        </a>
      </div>
    </div>
    <div className="hero-portrait">
      <span className="portrait-glow" aria-hidden="true" />
      <img
        src={headshot}
        alt="Portrait of Aisha Jackson smiling"
        loading="lazy"
      />
    </div>
  </section>
);

export default Hero;
