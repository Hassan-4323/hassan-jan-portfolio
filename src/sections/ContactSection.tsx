import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  ArrowUpRight,
  Code2,
  Database,
  Download,
  ExternalLink,
  Layers3,
  Mail,
  MapPin,
  Monitor,
} from "lucide-react";

import { contactInfo } from "../data/contact";
import "./ContactSection.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reducedMotion) return;

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
        defaults: {
          ease: "power3.out",
        },
      });

      timeline
        .from(".contact-section__eyebrow", {
          autoAlpha: 0,
          y: 25,
          duration: 0.6,
        })
        .from(
          ".contact-section__title span",
          {
            autoAlpha: 0,
            y: 65,
            stagger: 0.14,
            duration: 0.9,
          },
          0.15,
        )
        .from(
          ".contact-section__description",
          {
            autoAlpha: 0,
            y: 25,
            duration: 0.65,
          },
          0.5,
        )
        .from(
          ".contact-section__actions",
          {
            autoAlpha: 0,
            y: 25,
            duration: 0.65,
          },
          0.7,
        )
        .from(
          ".contact-section__feature",
          {
            autoAlpha: 0,
            x: 65,
            scale: 0.96,
            duration: 1,
          },
          0.35,
        );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="contact-section"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="contact-section__watermark" aria-hidden="true">
        HASSAN JAN
      </div>

      <div className="contact-section__container">
        <div className="contact-section__grid">
          <div className="contact-section__content">
            <div className="contact-section__eyebrow">
              <span className="contact-section__eyebrow-line" />
              {contactInfo.availabilityLabel}
            </div>

            <h2 className="contact-section__title" id="contact-heading">
              <span>{contactInfo.headline}</span>

              <span className="contact-section__title-accent">
                {contactInfo.headlineAccent}
              </span>
            </h2>

            <p className="contact-section__description">
              {contactInfo.introduction}
            </p>

            <div className="contact-section__actions">
              <a
                className="contact-section__primary-button"
                href={`mailto:${contactInfo.email}`}
              >
                <Mail size={18} />
                GET IN TOUCH
                <ArrowUpRight size={18} />
              </a>

              <a
                className="contact-section__secondary-button"
                href={contactInfo.cvPath}
                download={contactInfo.cvFilename}
                type="application/pdf"
                aria-label="Download Hassan Jan's CV as PDF"
              >
                <Download size={18} />
                DOWNLOAD CV
                <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="contact-section__socials">
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hassan Jan's GitHub profile"
                className="contact-section__social"
              >
                <Code2 size={18} />
                <span>GitHub</span>
                <ExternalLink size={14} />
              </a>

              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hassan Jan's LinkedIn profile"
                className="contact-section__social"
              >
                <ExternalLink size={17} />
                <span>LinkedIn</span>
                <ArrowUpRight size={14} />
              </a>

              <a
                href={`mailto:${contactInfo.email}`}
                aria-label="Email Hassan Jan"
                className="contact-section__social"
              >
                <Mail size={18} />
                <span>Email</span>
                <ArrowUpRight size={14} />
              </a>
            </div>

            <div className="contact-section__location">
              <MapPin size={17} />
              {contactInfo.locationLabel}
            </div>
          </div>

          <aside
            className="contact-section__feature"
            aria-label="Development expertise"
          >
            <div className="contact-section__feature-top">
              <span>HASSAN JAN / DEVELOPMENT</span>
              <Code2 size={23} />
            </div>

            <div className="contact-section__symbol">
              <div className="contact-section__symbol-inner">
                <Code2 size={70} strokeWidth={1.2} />
              </div>
            </div>

            <div className="contact-section__feature-body">
              <span className="contact-section__feature-kicker">
                THINK. DESIGN. DEVELOP.
              </span>

              <h3>
                YOUR NEXT
                <span> GREAT IDEA.</span>
              </h3>

              <p>
                From the first interface to the systems behind it — built with
                care.
              </p>
            </div>

            <div className="contact-section__feature-bottom">
              <div>
                <Monitor size={16} />
                FRONTEND
              </div>

              <div>
                <Database size={16} />
                BACKEND
              </div>

              <div>
                <Layers3 size={16} />
                FULL-STACK
              </div>
            </div>
          </aside>
        </div>

        <footer className="contact-section__footer">
          <div className="contact-section__footer-brand">
            <strong>
              HJ<span>.</span>
            </strong>

            <span>HASSAN JAN / FULL-STACK DEVELOPER</span>
          </div>

          <span>© 2026 HASSAN JAN</span>

          <a href="#home">
            BACK TO TOP
            <ArrowUpRight size={17} />
          </a>
        </footer>
      </div>
    </section>
  );
}
