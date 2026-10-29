
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Contact,
  Home,
  LayoutGrid,
  Menu,
  X,
} from "lucide-react";

import "./Navbar.css";

const navigationItems = [
  { id: "home", label: "Home", Icon: Home },
  { id: "projects", label: "Projects", Icon: LayoutGrid },
  { id: "more-work", label: "Tech Universe", Icon: Code2 },
  {
    id: "final-showcase",
    label: "About & Journey",
    Icon: BriefcaseBusiness,
  },
  { id: "contact", label: "Contact", Icon: Contact },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateActiveSection = () => {
      const center = window.innerHeight * 0.5;

      let current = "home";
      let nearest = Number.POSITIVE_INFINITY;

      for (const item of navigationItems) {
        const element = document.getElementById(item.id);
        if (!element) continue;

        const rect = element.getBoundingClientRect();

        if (rect.top <= center && rect.bottom >= center) {
          current = item.id;
          break;
        }

        const distance = Math.abs(rect.top - center);

        if (distance < nearest) {
          nearest = distance;
          current = item.id;
        }
      }

      setActiveSection(current);
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handlePointer = (event: PointerEvent) => {
      const target = event.target;

      if (
        target instanceof Node &&
        !navRef.current?.contains(target)
      ) {
        setIsOpen(false);
      }
    };

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        navRef.current
          ?.querySelector<HTMLButtonElement>(
            ".portfolio-nav__toggle"
          )
          ?.focus();
      }
    };

    document.addEventListener("pointerdown", handlePointer);
    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("pointerdown", handlePointer);
      document.removeEventListener("keydown", handleKey);
    };
  }, [isOpen]);

  return (
    <nav
      ref={navRef}
      className="portfolio-nav"
      aria-label="Main portfolio navigation"
    >
      <div className="portfolio-nav__bar">
        <a
          href="#home"
          className="portfolio-nav__brand"
          aria-label="Hassan Jan, go to home"
          onClick={() => setIsOpen(false)}
        >
          HJ<span>.</span>
        </a>

        <span className="portfolio-nav__separator" />

        <button
          className="portfolio-nav__toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="portfolio-navigation-panel"
          onClick={() => setIsOpen((previous) => !previous)}
        >
          <span>{isOpen ? "CLOSE" : "MENU"}</span>
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {isOpen && (
        <div
          id="portfolio-navigation-panel"
          className="portfolio-nav__panel"
        >
          <div className="portfolio-nav__panel-top">
            <span>EXPLORE THE PORTFOLIO</span>
            <span>01 — 05</span>
          </div>

          <div className="portfolio-nav__items">
            {navigationItems.map(({ id, label, Icon }, index) => (
              <a
                key={id}
                href={`#${id}`}
                className={`portfolio-nav__item ${
                  activeSection === id ? "is-active" : ""
                }`}
                aria-current={
                  activeSection === id ? "location" : undefined
                }
                onClick={() => setIsOpen(false)}
              >
                <span className="portfolio-nav__number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <Icon size={18} strokeWidth={1.7} />

                <span className="portfolio-nav__item-label">
                  {label}
                </span>

                <ArrowUpRight
                  className="portfolio-nav__item-arrow"
                  size={17}
                />
              </a>
            ))}
          </div>

          <div className="portfolio-nav__panel-footer">
            HASSAN JAN — FULL-STACK DEVELOPER
          </div>
        </div>
      )}
    </nav>
  );
}
