
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./ScrollExperience.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const parallaxSections = [
  {
    section: ".projects-section",
    watermark: ".projects-section__watermark",
  },
  {
    section: ".four-panel",
    watermark: ".four-panel__watermark",
  },
  {
    section: ".final-showcase",
    watermark: ".final-showcase__watermark",
  },
  {
    section: ".contact-section",
    watermark: ".contact-section__watermark",
  },
];

export default function ScrollExperience() {
  const progressRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const progress = progressRef.current;

    if (!progress) return;

    // Keep the progress bar synchronized with the
    // actual scroll position, including GSAP pinning.
    ScrollTrigger.create({
      start: 0,
      end: "max",
      invalidateOnRefresh: true,

      onUpdate: (self) => {
        gsap.set(progress, {
          scaleX: self.progress,
        });
      },
    });

    // Only enable extra parallax on sufficiently
    // wide screens when reduced motion is not set.
    const media = gsap.matchMedia();

    media.add(
      "(min-width: 901px) and (prefers-reduced-motion: no-preference)",
      () => {
        parallaxSections.forEach(
          ({ section, watermark }) => {
            const sectionElement =
              document.querySelector<HTMLElement>(section);

            const watermarkElement =
              sectionElement?.querySelector<HTMLElement>(
                watermark
              );

            if (!sectionElement || !watermarkElement) {
              return;
            }

            gsap.fromTo(
              watermarkElement,
              {
                y: 25,
              },
              {
                y: -35,
                ease: "none",
                scrollTrigger: {
                  trigger: sectionElement,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 1,
                  invalidateOnRefresh: true,
                },
              }
            );
          }
        );
      }
    );

    return () => {
      media.revert();
    };
  }, []);

  return (
    <div
      className="scroll-experience"
      aria-hidden="true"
    >
      <div className="scroll-experience__track">
        <div
          ref={progressRef}
          className="scroll-experience__progress"
        />
      </div>
    </div>
  );
}
