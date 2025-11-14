import { useEffect, useRef, useState } from "react";
import type { Project } from "../../data/content";
import "./ProjectsSection.css";

type ProjectsSectionProps = {
  projects: Project[];
};

const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const [scrollVelocity, setScrollVelocity] = useState(0);

  const handlePointerMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const bounds = containerRef.current.getBoundingClientRect();
    const relativeX = (event.clientX - bounds.left) / bounds.width;
    const edgeZone = 0.2;

    if (relativeX < edgeZone) {
      setScrollVelocity(-1);
    } else if (relativeX > 1 - edgeZone) {
      setScrollVelocity(1);
    } else {
      setScrollVelocity(0);
    }
  };

  const stopVelocity = () => {
    setScrollVelocity(0);
  };

  useEffect(() => {
    const node = scrollerRef.current;
    if (!node) {
      return;
    }

    // Disable scroll snap when auto-scrolling
    if (scrollVelocity !== 0) {
      node.style.scrollSnapType = "none";
    } else {
      node.style.scrollSnapType = "x mandatory";
    }

    // Cancel any existing animation
    if (animationRef.current !== null) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }

    // If velocity is 0, don't start animation
    if (scrollVelocity === 0) {
      return;
    }

    const animate = () => {
      if (!scrollerRef.current) return;

      const currentScroll = scrollerRef.current.scrollLeft;
      const newScroll = currentScroll + scrollVelocity * 8;

      scrollerRef.current.scrollLeft = newScroll;

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };
  }, [scrollVelocity]);

  return (
    <section className="section" id="projects">
      <div className="section-heading">
        <h2 className="section-title">Featured experiments & builds</h2>
        <p className="section-subtitle">
          A peek into soul-filling collaborations, open source contributions,
          and passion projects.
        </p>
      </div>

      <div
        ref={containerRef}
        className="projects-carousel"
        onMouseMove={handlePointerMove}
        onMouseLeave={stopVelocity}
      >
        <div
          className="projects-grid"
          ref={scrollerRef}
          aria-label="Featured experiments carousel"
        >
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="project-card fade-in"
              style={{
                animationDelay: `${index * 0.1 + 0.1}s`,
              }}
            >
              <div className="project-card-header">
                <h3>{project.title}</h3>
                <a className="project-link" href={project.link}>
                  View
                </a>
              </div>
              <p>{project.description}</p>
              <ul className="tag-list">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="projects-scroll-hint">
          Hover near the edges to glide through the experiments
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
