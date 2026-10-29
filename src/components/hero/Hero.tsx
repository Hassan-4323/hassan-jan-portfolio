
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import {
  Code2,
  Database,
  Layers3,
  Monitor,
} from "lucide-react";

import { portfolio } from "../../data/portfolio";
import "./Hero.css";

gsap.registerPlugin(useGSAP);

const specialtyIcons = [
  Code2,
  Database,
  Layers3,
  Monitor,
];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) {
        return;
      }

      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      timeline
        .from(".hero__background-title", {
          autoAlpha: 0,
          y: -70,
          scale: 1.06,
          duration: 1.2,
        })
        .from(
          ".hero__portrait",
          {
            autoAlpha: 0,
            y: 160,
            scale: 0.96,
            duration: 1.45,
            ease: "power4.out",
          },
          0.3
        )
        .from(
          ".hero__greeting",
          {
            autoAlpha: 0,
            y: 30,
            duration: 0.7,
          },
          0.85
        )
        .from(
          ".hero__name span",
          {
            autoAlpha: 0,
            y: 70,
            duration: 0.95,
            stagger: 0.13,
          },
          1.0
        )
        .from(
          ".hero__profession",
          {
            autoAlpha: 0,
            y: 25,
            duration: 0.7,
          },
          1.4
        )
        .from(
          ".hero__specialty",
          {
            autoAlpha: 0,
            x: 50,
            duration: 0.8,
            stagger: 0.2,
          },
          1.45
        )
        .from(
          ".hero__footer",
          {
            autoAlpha: 0,
            y: 18,
            duration: 0.65,
          },
          2.7
        );
    },
    {
      scope: heroRef,
    }
  );

  return (
    <section
      ref={heroRef}
      className="hero"
      id="home"
      aria-labelledby="hero-name"
    >
      <div
        className="hero__texture"
        aria-hidden="true"
      />

      <div
        className="hero__background-title"
        aria-hidden="true"
      >
        {portfolio.heroTitle}
      </div>

      <div
        className="hero__portrait"
      >
        <img
          className="hero__portrait-image"
          src={portfolio.portrait}
          alt={portfolio.portraitAlt}
          fetchPriority="high"
        />
      </div>

      <div className="hero__content">
        <div className="hero__intro">
          <p className="hero__greeting">
            {portfolio.greeting}
          </p>

          <h1
            className="hero__name"
            id="hero-name"
          >
            <span>
              {portfolio.firstName}
            </span>

            <span className="hero__name-last">
              {portfolio.lastName}
            </span>
          </h1>

          <div className="hero__profession-wrap">
            <p className="hero__profession">
              {portfolio.profession}
            </p>
          </div>
        </div>

        <div
          className="hero__specialties"
          aria-label="Development specialties"
        >
          {portfolio.specialties.map(
            (specialty, index) => {
              const Icon = specialtyIcons[index];

              return (
                <div
                  className="hero__specialty"
                  key={specialty}
                >
                  <Icon
                    size={23}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />

                  <span className="hero__specialty-label">
                    {specialty}
                  </span>

                  <span
                    className="hero__specialty-line"
                    aria-hidden="true"
                  />
                </div>
              );
            }
          )}
        </div>
      </div>

      <div className="hero__footer">
        <span>
          {portfolio.tagline}
        </span>

        <span
          className="hero__footer-divider"
          aria-hidden="true"
        />

        <span>
          {portfolio.scrollLabel}
        </span>
      </div>
    </section>
  );
}
