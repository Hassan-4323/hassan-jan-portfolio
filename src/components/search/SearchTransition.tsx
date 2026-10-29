
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Search } from "lucide-react";

import "./SearchTransition.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function SearchTransition() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;

      if (!section) return;

      const mm = gsap.matchMedia();

      // Desktop: preserve the cinematic pinned sequence.
      mm.add(
        "(min-width: 901px) and (prefers-reduced-motion: no-preference)",
        () => {
          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "+=1400",
              pin: true,
              scrub: 0.8,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          timeline
            .fromTo(
              ".search-transition__background-word",
              {
                autoAlpha: 0,
                y: 85,
                scale: 1.08,
              },
              {
                autoAlpha: 0.14,
                y: 0,
                scale: 1,
                duration: 1.15,
                ease: "power2.out",
              },
              0
            )
            .fromTo(
              ".search-transition__eyebrow",
              {
                autoAlpha: 0,
                y: 25,
              },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.55,
              },
              0.25
            )
            .fromTo(
              ".search-transition__searchbox",
              {
                autoAlpha: 0,
                y: 110,
                scale: 0.78,
              },
              {
                autoAlpha: 1,
                y: 0,
                scale: 1,
                duration: 1.2,
                ease: "power3.out",
              },
              0.55
            )
            .fromTo(
              ".search-transition__search-icon",
              {
                rotate: -35,
                scale: 0.4,
                autoAlpha: 0,
              },
              {
                rotate: 0,
                scale: 1,
                autoAlpha: 1,
                duration: 0.6,
              },
              1.15
            )
            .fromTo(
              ".search-transition__typed",
              {
                clipPath: "inset(0 100% 0 0)",
              },
              {
                clipPath: "inset(0 0% 0 0)",
                duration: 1.75,
                ease: "none",
              },
              1.55
            )
            .fromTo(
              ".search-transition__arrow",
              {
                autoAlpha: 0,
                x: -25,
                scale: 0.6,
              },
              {
                autoAlpha: 1,
                x: 0,
                scale: 1,
                duration: 0.6,
              },
              3.0
            )
            .to(
              ".search-transition__searchbox",
              {
                boxShadow:
                  "0 25px 75px rgba(64,42,28,0.20)",
                scale: 1.035,
                duration: 0.4,
                repeat: 1,
                yoyo: true,
              },
              3.4
            )
            .fromTo(
              ".search-transition__bottom-label",
              {
                autoAlpha: 0,
                y: 25,
              },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.55,
              },
              3.8
            );
        },
        section
      );

      // Mobile/tablet: a short reveal with NO pinning.
      mm.add(
        "(max-width: 900px) and (prefers-reduced-motion: no-preference)",
        () => {
          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top 78%",
              toggleActions: "play none none none",
              invalidateOnRefresh: true,
            },
          });

          timeline
            .fromTo(
              ".search-transition__searchbox",
              {
                autoAlpha: 0,
                y: 55,
                scale: 0.92,
              },
              {
                autoAlpha: 1,
                y: 0,
                scale: 1,
                duration: 0.75,
                ease: "power3.out",
              }
            )
            .fromTo(
              ".search-transition__typed",
              {
                clipPath: "inset(0 100% 0 0)",
              },
              {
                clipPath: "inset(0 0% 0 0)",
                duration: 0.95,
                ease: "none",
              },
              0.25
            );

          gsap.set(
            ".search-transition__background-word",
            { autoAlpha: 0.14 }
          );
        },
        section
      );

      // Revert the correct animation when changing
      // viewport size or unmounting the component.
      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="search-transition"
      id="search"
      aria-labelledby="search-transition-heading"
    >
      <div
        className="search-transition__texture"
        aria-hidden="true"
      />

      <div
        className="search-transition__background-word"
        aria-hidden="true"
      >
        PORTFOLIO
      </div>

      <div className="search-transition__content">
        <p className="search-transition__eyebrow">
          EXPLORE MY WORK
        </p>

        <h2
          id="search-transition-heading"
          className="search-transition__heading"
        >
          Discover what I build.
        </h2>

        <div
          className="search-transition__searchbox"
          role="img"
          aria-label="Animated search for Hassan Jan projects"
        >
          <span
            className="search-transition__search-icon"
            aria-hidden="true"
          >
            <Search size={27} strokeWidth={1.9} />
          </span>

          <span className="search-transition__query">
            <span className="search-transition__typed">
              Hassan Jan projects
            </span>
          </span>

          <span
            className="search-transition__cursor"
            aria-hidden="true"
          />

          <span
            className="search-transition__arrow"
            aria-hidden="true"
          >
            <ArrowUpRight size={24} strokeWidth={1.9} />
          </span>
        </div>

        <p className="search-transition__bottom-label">
          FRONTEND · BACKEND · FULL-STACK
        </p>
      </div>

      <div className="search-transition__corner-label">
        SELECTED WORK / HASSAN JAN
      </div>
    </section>
  );
}
