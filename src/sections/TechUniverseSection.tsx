
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  ArrowDownRight,
  ArrowUpRight,
  Braces,
  Code2,
  Database,
  GitBranch,
  Layers3,
  Monitor,
  Orbit,
  Server,
  Sparkles,
  Workflow,
} from "lucide-react";

import "./TechUniverseSection.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type SkillCategory =
  | "frontend"
  | "backend"
  | "data";

type Skill = {
  name: string;
  abbreviation: string;
};

type Category = {
  id: SkillCategory;
  label: string;
  headline: string;
  description: string;
  skills: Skill[];
};

const categories: Category[] = [
  {
    id: "frontend",
    label: "Frontend",
    headline: "CRAFTING THE INTERFACE.",
    description:
      "Designing responsive interfaces and interactive experiences using modern web technologies.",
    skills: [
      { name: "React", abbreviation: "REACT" },
      { name: "TypeScript", abbreviation: "TS" },
      { name: "JavaScript", abbreviation: "JS" },
      { name: "HTML / CSS", abbreviation: "HTML" },
      { name: "Tailwind CSS", abbreviation: "CSS" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    headline: "POWERING THE LOGIC.",
    description:
      "Building APIs, authentication flows and application services that connect the interface to real functionality.",
    skills: [
      { name: "Node.js", abbreviation: "NODE" },
      { name: "Express.js", abbreviation: "EXP" },
      { name: "REST APIs", abbreviation: "API" },
      { name: "JWT Authentication", abbreviation: "JWT" },
      { name: "TypeScript", abbreviation: "TS" },
    ],
  },
  {
    id: "data",
    label: "Data & Tools",
    headline: "CONNECTING THE SYSTEMS.",
    description:
      "Working with databases, background processing, development workflows and application infrastructure.",
    skills: [
      { name: "MongoDB", abbreviation: "MONGO" },
      { name: "PostgreSQL", abbreviation: "SQL" },
      { name: "Redis", abbreviation: "REDIS" },
      { name: "Docker", abbreviation: "DOCKER" },
      { name: "Git", abbreviation: "GIT" },
    ],
  },
];

const positions = [
  "node-one",
  "node-two",
  "node-three",
  "node-four",
  "node-five",
];

const categoryIcons = {
  frontend: Monitor,
  backend: Server,
  data: Database,
};

export default function TechUniverseSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const [activeCategory, setActiveCategory] =
    useState<SkillCategory>("frontend");

  const [activeSkill, setActiveSkill] =
    useState<string>("React");

  const category =
    categories.find(
      (entry) => entry.id === activeCategory
    ) ?? categories[0];

  const selectCategory = (id: SkillCategory) => {
    const next = categories.find(
      (entry) => entry.id === id
    );

    if (!next) return;

    setActiveCategory(id);
    setActiveSkill(next.skills[0].name);
  };

  const Icon = categoryIcons[activeCategory];

  useGSAP(
    () => {
      const section = sectionRef.current;

      if (!section) return;

      const media = gsap.matchMedia();

      media.add(
        "(prefers-reduced-motion: no-preference)",
        () => {
          const reveal = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top 78%",
              toggleActions: "play none none reverse",
              invalidateOnRefresh: true,
            },
          });

          reveal
            .from(".tech-universe__eyebrow", {
              autoAlpha: 0,
              y: 25,
              duration: 0.65,
            })
            .from(
              ".tech-universe__title span",
              {
                autoAlpha: 0,
                y: 65,
                duration: 0.9,
                stagger: 0.16,
              },
              0.1
            )
            .from(
              ".tech-universe__description",
              {
                autoAlpha: 0,
                y: 22,
                duration: 0.7,
              },
              0.4
            )
            .from(
              ".tech-universe__visual",
              {
                autoAlpha: 0,
                scale: 0.88,
                duration: 1.1,
                ease: "power3.out",
              },
              0.35
            )
            .from(
              ".tech-universe__panel",
              {
                autoAlpha: 0,
                y: 35,
                duration: 0.8,
              },
              0.55
            );

          gsap.to(".tech-universe__ring--outer", {
            rotation: 360,
            duration: 65,
            ease: "none",
            repeat: -1,
          });

          gsap.to(".tech-universe__ring--inner", {
            rotation: -360,
            duration: 46,
            ease: "none",
            repeat: -1,
          });

          gsap.to(".tech-universe__center-glow", {
            scale: 1.12,
            opacity: 0.75,
            duration: 3,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
          });

          gsap.to(".tech-universe__spark", {
            y: -8,
            opacity: 0.85,
            duration: 2.4,
            stagger: 0.5,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
          });
        },
        section
      );

      return () => media.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="tech-universe"
      id="more-work"
      aria-labelledby="tech-universe-heading"
    >
      <div
        className="tech-universe__background-word"
        aria-hidden="true"
      >
        TECHNOLOGY
      </div>

      <div className="tech-universe__container">
        <div className="tech-universe__header">
          <div className="tech-universe__intro">
            <div className="tech-universe__eyebrow">
              <span />
              02 / THE DEVELOPER TOOLKIT
            </div>

            <h2
              id="tech-universe-heading"
              className="tech-universe__title"
            >
              <span>MY TECH</span>
              <span>UNIVERSE.</span>
            </h2>
          </div>

          <p className="tech-universe__description">
            A collection of technologies I use to
            transform ideas into functional digital
            experiences — from interfaces to APIs
            and the systems behind them.
          </p>
        </div>

        <div className="tech-universe__layout">
          <div className="tech-universe__visual">
            <div className="tech-universe__orbit">
              <div
                className="tech-universe__ring tech-universe__ring--outer"
                aria-hidden="true"
              />

              <div
                className="tech-universe__ring tech-universe__ring--inner"
                aria-hidden="true"
              />

              <div
                className="tech-universe__orbit-guide"
                aria-hidden="true"
              />

              <span
                className="tech-universe__spark tech-universe__spark--one"
                aria-hidden="true"
              />

              <span
                className="tech-universe__spark tech-universe__spark--two"
                aria-hidden="true"
              />

              <span
                className="tech-universe__spark tech-universe__spark--three"
                aria-hidden="true"
              />

              <div className="tech-universe__center">
                <span
                  className="tech-universe__center-glow"
                  aria-hidden="true"
                />

                <div className="tech-universe__center-content">
                  <Code2 size={33} strokeWidth={1.5} />
                  <strong>FULL-STACK</strong>
                  <span>DEVELOPER</span>
                </div>
              </div>

              {category.skills.map(
                (skill, index) => (
                  <button
                    type="button"
                    key={skill.name}
                    className={[
                      "tech-universe__node",
                      `tech-universe__${positions[index]}`,
                      activeSkill === skill.name
                        ? "is-active"
                        : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    onClick={() =>
                      setActiveSkill(skill.name)
                    }
                    aria-pressed={
                      activeSkill === skill.name
                    }
                    aria-label={`Select ${skill.name}`}
                    title={skill.name}
                  >
                    <span>{skill.abbreviation}</span>
                  </button>
                )
              )}
            </div>

            <div className="tech-universe__visual-footer">
              <span>
                <Orbit size={15} />
                INTERACTIVE SKILL MAP
              </span>

              <span>
                SELECT A TECHNOLOGY
                <ArrowDownRight size={15} />
              </span>
            </div>
          </div>

          <div className="tech-universe__panel">
            <div className="tech-universe__panel-top">
              <span>
                <Sparkles size={16} />
                EXPLORE MY STACK
              </span>

              <span>01 — 03</span>
            </div>

            <div
              className="tech-universe__categories"
              role="group"
              aria-label="Technology categories"
            >
              {categories.map((entry) => {
                const EntryIcon =
                  categoryIcons[entry.id];

                return (
                  <button
                    type="button"
                    key={entry.id}
                    className={
                      "tech-universe__category" +
                      (activeCategory === entry.id
                        ? " is-active"
                        : "")
                    }
                    aria-pressed={
                      activeCategory === entry.id
                    }
                    onClick={() =>
                      selectCategory(entry.id)
                    }
                  >
                    <EntryIcon size={17} />
                    <span>{entry.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="tech-universe__panel-body">
              <div className="tech-universe__panel-kicker">
                <Icon size={19} />
                <span>
                  {category.label.toUpperCase()}
                  {" / "}
                  EXPERTISE
                </span>
              </div>

              <h3>{category.headline}</h3>

              <p>{category.description}</p>

              <div className="tech-universe__skills">
                {category.skills.map((skill) => (
                  <button
                    type="button"
                    key={skill.name}
                    className={
                      "tech-universe__skill" +
                      (activeSkill === skill.name
                        ? " is-active"
                        : "")
                    }
                    aria-pressed={
                      activeSkill === skill.name
                    }
                    onClick={() =>
                      setActiveSkill(skill.name)
                    }
                  >
                    <span className="tech-universe__skill-dot" />
                    {skill.name}
                  </button>
                ))}
              </div>

              <div
                className="tech-universe__selected"
                aria-live="polite"
                aria-atomic="true"
              >
                <div>
                  <span>SELECTED TECHNOLOGY</span>
                  <strong>{activeSkill}</strong>
                </div>

                <Braces size={25} />
              </div>
            </div>

            <div className="tech-universe__panel-footer">
              <div>
                <Workflow size={17} />
                BUILDING CONNECTED EXPERIENCES
              </div>

              <GitBranch size={19} />
            </div>
          </div>
        </div>

        <div className="tech-universe__bottom">
          <div>
            <Layers3 size={18} />
            <span>
              INTERFACE.
              <span> LOGIC.</span>
              <span> DATA.</span>
            </span>
          </div>

          <a href="#final-showcase">
            MORE ABOUT ME
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
