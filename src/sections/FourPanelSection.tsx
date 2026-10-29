
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ShowcasePanel from "../components/projects/ShowcasePanel";
import { showcaseItems } from "../data/showcase";

import "./FourPanelSection.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function FourPanelSection() {
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
          end: "top 18%",
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      });

      timeline
        .fromTo(
          ".four-panel__heading > *",
          { autoAlpha: 0, y: 40 },
          {
            autoAlpha: 1,
            y: 0,
            stagger: 0.12,
            duration: 0.8,
            ease: "power3.out",
          }
        )
        .fromTo(
          ".showcase-panel",
          {
            autoAlpha: 0,
            y: 100,
            scale: 0.9,
            rotate: (index: number) =>
              index % 2 === 0 ? -3 : 3,
          },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            rotate: 0,
            stagger: 0.17,
            duration: 1.1,
            ease: "power3.out",
          },
          0.25
        );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="four-panel"
      id="more-work"
      aria-labelledby="four-panel-heading"
    >
      <div
        className="four-panel__watermark"
        aria-hidden="true"
      >
        PORTFOLIO
      </div>

      <div className="four-panel__container">
        <header className="four-panel__heading">
          <p>02 — BEHIND THE BUILD</p>

          <h2 id="four-panel-heading">
            BUILT WITH <span>CODE.</span>
          </h2>

          <div className="four-panel__subtitle">
            A closer look at application interfaces,
            developer tooling and design concepts.
          </div>
        </header>

        <div className="four-panel__grid">
          {showcaseItems.map((item) => (
            <ShowcasePanel key={item.id} item={item} />
          ))}
        </div>

        <footer className="four-panel__footer">
          <span>CRAFTED BY HASSAN JAN</span>
          <span>SCROLL TO EXPLORE MORE</span>
        </footer>
      </div>
    </section>
  );
}
