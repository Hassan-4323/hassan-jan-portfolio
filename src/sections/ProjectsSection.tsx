
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ProjectCard from "../components/projects/ProjectCard";
import { featuredProjects } from "../data/projects";

import "./ProjectsSection.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (
        window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches
      ) {
        return;
      }

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 28%",
          scrub: 0.7,
          invalidateOnRefresh: true,
        },
      });

      timeline
        .fromTo(
          ".projects-section__intro > *",
          {
            autoAlpha: 0,
            y: 45,
          },
          {
            autoAlpha: 1,
            y: 0,
            stagger: 0.12,
            duration: 0.8,
            ease: "power3.out",
          }
        )
        .fromTo(
          ".project-card",
          {
            autoAlpha: 0,
            y: 140,
            scale: 0.88,
            rotate: (index: number) =>
              index === 0 ? -5 : index === 2 ? 5 : 0,
          },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            rotate: 0,
            stagger: 0.22,
            duration: 1.2,
            ease: "power3.out",
          },
          0.25
        );
    },
    {
      scope: sectionRef,
    }
  );

  return (
    <section
      ref={sectionRef}
      className="projects-section"
      id="projects"
      aria-labelledby="projects-heading"
    >
      <div
        className="projects-section__watermark"
        aria-hidden="true"
      >
        PORTFOLIO
      </div>

      <div className="projects-section__container">
        <header className="projects-section__intro">
          <p className="projects-section__eyebrow">
            01 — SELECTED WORK
          </p>

          <h2 id="projects-heading">
            DIGITAL
            <span> EXPERIENCES.</span>
          </h2>

          <p className="projects-section__description">
            A collection of development projects,
            technical experiments and creative ideas.
          </p>
        </header>

        <div className="projects-section__grid">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

        <div className="projects-section__footer">
          {/* <span>BUILT WITH PURPOSE</span>
          <span>HASSAN JAN © 2026</span> */}
        </div>
      </div>
    </section>
  );
}
