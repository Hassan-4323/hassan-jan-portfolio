
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  ArrowDownRight,
  ArrowUpRight,
  BookOpen,
  Code2,
  Download,
  ExternalLink,
  GraduationCap,
  MapPinned,
  Rocket,
  Sparkles,
} from "lucide-react";

import { contactInfo } from "../data/contact";
import "./AboutJourneySection.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface JourneyMilestone {
  id: string;
  period: string;
  eyebrow: string;
  title: string;
  description: string;
  icon: typeof GraduationCap;
  tags: string[];
}

const milestones: JourneyMilestone[] = [
  {
    id: "education",
    period: "2022 — 2026",
    eyebrow: "THE FOUNDATION",
    title: "Computer Science",
    description:
      "Bachelor of Science in Computer Science at COMSATS University Islamabad, Abbottabad Campus. Built a foundation in programming, software development and problem solving.",
    icon: GraduationCap,
    tags: ["BS Computer Science", "COMSATS"],
  },
  {
    id: "tourism",
    period: "2025 — 2026",
    eyebrow: "FINAL YEAR PROJECT",
    title: "Tourism Recommendation",
    description:
      "Developed a MERN Stack tourism platform that uses traveller preferences, ratings and review sentiment to support personalised destination recommendations.",
    icon: MapPinned,
    tags: ["React", "Node.js", "MongoDB", "Data Mining"],
  },
  {
    id: "devrescue",
    period: "2026",
    eyebrow: "DEVELOPER TOOLS",
    title: "DevRescue AI",
    description:
      "Worked on the architecture and development of an AI-powered codebase analysis platform focused on issue discovery, technical findings and code-repair workflows.",
    icon: Code2,
    tags: ["TypeScript", "Node.js", "Redis", "Docker"],
  },
  {
    id: "present",
    period: "NOW & BEYOND",
    eyebrow: "THE NEXT CHAPTER",
    title: "Building What's Next",
    description:
      "Continuing to develop real-world full-stack applications, strengthen software engineering skills and create thoughtful user experiences.",
    icon: Rocket,
    tags: ["Full-Stack", "React", "APIs", "Problem Solving"],
  },
];

export default function AboutJourneySection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;

      if (!section) return;

      const mm = gsap.matchMedia();

      mm.add(
        "(prefers-reduced-motion: no-preference)",
        () => {
          const introTimeline = gsap.timeline({
            scrollTrigger: {
              trigger: ".about-journey__header",
              start: "top 80%",
              toggleActions: "play none none none",
            },
          });

          introTimeline
            .from(".about-journey__eyebrow", {
              autoAlpha: 0,
              y: 20,
              duration: 0.55,
            })
            .from(
              ".about-journey__title-line",
              {
                autoAlpha: 0,
                y: 55,
                stagger: 0.15,
                duration: 0.85,
                ease: "power3.out",
              },
              0.15
            )
            .from(
              ".about-journey__introduction",
              {
                autoAlpha: 0,
                y: 25,
                duration: 0.7,
              },
              0.5
            );

          const timeline = section.querySelector(
            ".about-journey__timeline"
          );

          if (timeline) {
            gsap.fromTo(
              ".about-journey__progress",
              { scaleY: 0 },
              {
                scaleY: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: timeline,
                  start: "top 70%",
                  end: "bottom 65%",
                  scrub: 0.6,
                  invalidateOnRefresh: true,
                },
              }
            );
          }

          gsap.utils
            .toArray<HTMLElement>(".about-journey__milestone")
            .forEach((milestone) => {
              gsap.from(milestone, {
                autoAlpha: 0,
                y: 45,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: milestone,
                  start: "top 86%",
                  toggleActions: "play none none none",
                },
              });
            });

          gsap.from(".about-journey__closing", {
            autoAlpha: 0,
            y: 35,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".about-journey__closing",
              start: "top 88%",
              toggleActions: "play none none none",
            },
          });
        },
        section
      );

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="about-journey"
      id="final-showcase"
      aria-labelledby="about-journey-heading"
    >
      <div
        className="about-journey__watermark"
        aria-hidden="true"
      >
        JOURNEY
      </div>

      <div className="about-journey__container">
        <header className="about-journey__header">
          <div className="about-journey__eyebrow">
            <span />
            03 / BEYOND THE CODE
          </div>

          <div className="about-journey__header-grid">
            <h2
              id="about-journey-heading"
              className="about-journey__title"
            >
              <span className="about-journey__title-line">
                MORE THAN
              </span>

              <span className="about-journey__title-line about-journey__title-line--accent">
                JUST CODE.
              </span>
            </h2>

            <div className="about-journey__introduction">
              <span className="about-journey__intro-icon">
                <Sparkles size={24} strokeWidth={1.5} />
              </span>

              <p>
                I'm <strong>Hassan Jan</strong>, a Full-Stack
                / MERN Stack Developer with a Computer
                Science background. I enjoy solving
                practical problems, building useful
                applications and exploring the
                technologies behind modern software.
              </p>

              <a href="#contact">
                LET'S CONNECT
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </header>

        <div className="about-journey__story-heading">
          <div>
            <span>THE JOURNEY SO FAR</span>
            <h3>Every project is a new chapter.</h3>
          </div>

          <div className="about-journey__story-note">
            <BookOpen size={18} />
            LEARNING · BUILDING · EVOLVING
          </div>
        </div>

        <div className="about-journey__timeline">
          <div
            className="about-journey__timeline-track"
            aria-hidden="true"
          >
            <div className="about-journey__progress" />
          </div>

          {milestones.map((milestone, index) => {
            const MilestoneIcon = milestone.icon;

            return (
              <article
                className="about-journey__milestone"
                key={milestone.id}
              >
                <div className="about-journey__time">
                  <span>{milestone.period}</span>

                  <span className="about-journey__index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <span
                  className="about-journey__timeline-dot"
                  aria-hidden="true"
                />

                <div className="about-journey__milestone-body">
                  <div className="about-journey__milestone-top">
                    <span className="about-journey__milestone-eyebrow">
                      {milestone.eyebrow}
                    </span>

                    <span className="about-journey__milestone-icon">
                      <MilestoneIcon
                        size={23}
                        strokeWidth={1.65}
                      />
                    </span>
                  </div>

                  <h4>{milestone.title}</h4>

                  <p>{milestone.description}</p>

                  <div className="about-journey__tags">
                    {milestone.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="about-journey__closing">
          <div className="about-journey__closing-copy">
            <span>LET'S CREATE THE NEXT CHAPTER</span>

            <h3>
              THE BEST WORK
              <em> IS STILL AHEAD.</em>
            </h3>

            <p>
              Interested in my experience,
              technical skills or project work?
              Explore my CV or get in touch.
            </p>
          </div>

          <div className="about-journey__closing-actions">
            <a
              href={contactInfo.cvPath}
              download={contactInfo.cvFilename}
              className="about-journey__download"
            >
              <Download size={19} />
              DOWNLOAD CV
              <ArrowUpRight size={17} />
            </a>

            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="about-journey__linkedin"
            >
              <ExternalLink size={17} />
              LINKEDIN PROFILE
            </a>
          </div>

          <div
            className="about-journey__closing-decoration"
            aria-hidden="true"
          >
            <ArrowDownRight size={64} strokeWidth={1} />
          </div>
        </div>

        <footer className="about-journey__footer">
          <span>CRAFTED BY HASSAN JAN</span>

          <a href="#contact">
            LET'S TALK
            <ArrowUpRight size={17} />
          </a>
        </footer>
      </div>
    </section>
  );
}
