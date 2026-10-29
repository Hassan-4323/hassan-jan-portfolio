
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown } from "lucide-react";

import FinalShowcaseCard from "../components/projects/FinalShowcaseCard";
import { finalShowcaseItems } from "../data/finalShowcase";

import "./FinalShowcaseSection.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function FinalShowcaseSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;

      if (!section) return;

      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reducedMotion) return;

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top 15%",
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      });

      timeline
        .fromTo(
          ".final-showcase__heading > *",
          {
            autoAlpha: 0,
            y: 45,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
          }
        )
        .fromTo(
          ".final-card",
          {
            autoAlpha: 0,
            y: 150,
            scale: 0.85,
            rotate: (index: number) =>
              index === 0 ? -6 : index === 2 ? 6 : 0,
          },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            rotate: 0,
            duration: 1.3,
            stagger: 0.22,
            ease: "power3.out",
          },
          0.25
        )
        .fromTo(
          ".final-showcase__ending",
          {
            autoAlpha: 0,
            y: 30,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
          },
          1.2
        );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="final-showcase"
      id="final-showcase"
      aria-labelledby="final-showcase-title"
    >
      <div
        className="final-showcase__watermark"
        aria-hidden="true"
      >
        PORTFOLIO
      </div>

      <div className="final-showcase__container">
        <header className="final-showcase__heading">
          <p>03 — DEVELOPMENT IN MOTION</p>

          <h2 id="final-showcase-title">
            CRAFTED WITH <span>CODE.</span>
          </h2>

          <div className="final-showcase__subtitle">
            From application development to developer
            tooling and creative digital experiences.
          </div>
        </header>

        <div className="final-showcase__grid">
          {finalShowcaseItems.map((item) => (
            <FinalShowcaseCard
              key={item.id}
              item={item}
            />
          ))}
        </div>

        <div className="final-showcase__ending">
          <span>MORE THAN JUST CODE.</span>

          <div>
            <p>THE NEXT CHAPTER</p>
            <ArrowDown size={21} aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
