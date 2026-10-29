
import {
  Activity,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Compass,
  Database,
  Heart,
  Layers3,
  LayoutDashboard,
  MapPin,
  Search,
  Server,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";

import type { ShowcaseItem } from "../../types/showcase";

import "./ShowcasePanel.css";
import "./TourismShowcase.css";

interface ShowcasePanelProps {
  item: ShowcaseItem;
}

/* ==========================================
   01 — AL FALAH SCHOOL MANAGEMENT
========================================== */

function AcademicsVisual() {
  return (
    <div className="showcase-art showcase-art--academics">
      <div className="showcase-art__navigation">
        <span className="showcase-art__logo">
          <LayoutDashboard size={15} />
          AL FALAH
        </span>
        <span>ADMIN PANEL</span>
      </div>

      <div className="showcase-academics__body">
        <div className="showcase-academics__heading">
          <div>
            <strong>Overview</strong>
            <small>Academic management</small>
          </div>
          <Activity size={19} />
        </div>

        <div className="showcase-academics__stats">
          <div>
            <Users size={18} />
            <strong>Students</strong>
            <small>Profiles</small>
          </div>

          <div>
            <Layers3 size={18} />
            <strong>Classes</strong>
            <small>Academics</small>
          </div>

          <div>
            <CheckCircle2 size={18} />
            <strong>Attendance</strong>
            <small>Reports</small>
          </div>
        </div>

        <div className="showcase-academics__chart">
          <span>Attendance activity</span>

          <div className="showcase-academics__bars">
            {[45, 67, 54, 80, 64, 94, 76, 88].map(
              (height, index) => (
                <i
                  key={index}
                  style={{ height: `${height}%` }}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==========================================
   02 — DEVRESCUE AI
========================================== */

function AnalysisVisual() {
  return (
    <div className="showcase-art showcase-art--analysis">
      <div className="showcase-art__navigation">
        <span className="showcase-art__logo">
          <Code2 size={15} />
          DEVRESCUE AI
        </span>
        <span>ANALYSIS</span>
      </div>

      <div className="showcase-analysis__body">
        <div className="showcase-analysis__terminal">
          <div className="showcase-analysis__dots">
            <i />
            <i />
            <i />
          </div>

          <div className="showcase-analysis__lines">
            <span>
              <b>$</b> analyze --repository
            </span>

            <span>Scanning source files...</span>

            <span>Inspecting dependencies...</span>

            <span className="showcase-analysis__success">
              ✓ Analysis completed
            </span>
          </div>
        </div>

        <div className="showcase-analysis__metrics">
          <div>
            <Code2 size={17} />
            <span>CODE QUALITY</span>
          </div>

          <div>
            <ShieldCheck size={17} />
            <span>ISSUE REVIEW</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==========================================
   03 — TOURISM RECOMMENDATION SYSTEM

   Replaces the old CREATIVE WEB concept.
   Brown theme and existing panel dimensions
   are preserved.
========================================== */

function TourismVisual() {
  return (
    <div className="showcase-art showcase-art--frontend showcase-tourism">
      <div className="showcase-art__navigation">
        <span className="showcase-art__logo">
          <Compass size={16} />
          TRAVEL SMART
        </span>

        <span>TOURISM / FYP</span>
      </div>

      <div className="showcase-tourism__browser">
        <div className="showcase-tourism__browser-bar">
          <div className="showcase-tourism__dots">
            <i />
            <i />
            <i />
          </div>

          <span>tourism-recommendations</span>

          <Compass size={14} />
        </div>

        <div className="showcase-tourism__content">
          <div className="showcase-tourism__heading">
            <div>
              <small>EXPLORE WITH CONFIDENCE</small>
              <strong>
                DISCOVER YOUR
                <span> NEXT PLACE.</span>
              </strong>
            </div>

            <div className="showcase-tourism__compass">
              <Compass size={24} strokeWidth={1.5} />
            </div>
          </div>

          <div className="showcase-tourism__search">
            <Search size={14} />

            <span>
              Search destinations...
            </span>

            <ArrowUpRight size={14} />
          </div>

          <div className="showcase-tourism__subheading">
            <span>EXPLORE DESTINATIONS</span>
            <Heart size={15} />
          </div>

          <div className="showcase-tourism__places">
            <div className="showcase-tourism__place">
              <div className="showcase-tourism__landscape showcase-tourism__landscape--hunza">
                <div className="showcase-tourism__sun" />
                <div className="showcase-tourism__mountain showcase-tourism__mountain--back" />
                <div className="showcase-tourism__mountain showcase-tourism__mountain--front" />
              </div>

              <div className="showcase-tourism__place-info">
                <div>
                  <strong>Hunza Valley</strong>
                  <small>Explore Pakistan</small>
                </div>

                <MapPin size={13} />
              </div>
            </div>

            <div className="showcase-tourism__place">
              <div className="showcase-tourism__landscape showcase-tourism__landscape--skardu">
                <div className="showcase-tourism__sun" />
                <div className="showcase-tourism__mountain showcase-tourism__mountain--back" />
                <div className="showcase-tourism__mountain showcase-tourism__mountain--front" />
              </div>

              <div className="showcase-tourism__place-info">
                <div>
                  <strong>Skardu</strong>
                  <small>Discover places</small>
                </div>

                <MapPin size={13} />
              </div>
            </div>
          </div>

          <div className="showcase-tourism__features">
            <span>
              <Heart size={12} />
              FAVOURITES
            </span>

            <span>
              <ShieldCheck size={12} />
              SAFETY INSIGHTS
            </span>

            <span>
              <Star size={12} />
              REVIEWS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==========================================
   04 — CONNECTED SYSTEMS ARCHITECTURE
   Original illustration preserved.
========================================== */

function ArchitectureVisual() {
  return (
    <div className="showcase-art showcase-art--architecture">
      <div className="showcase-art__navigation">
        <span className="showcase-art__logo">
          <Server size={15} />
          SYSTEM DESIGN
        </span>
        <span>CONCEPT</span>
      </div>

      <div className="showcase-architecture__body">
        <div className="showcase-architecture__node">
          <LayoutDashboard size={19} />
          <span>REACT CLIENT</span>
        </div>

        <div className="showcase-architecture__connector" />

        <div className="showcase-architecture__services">
          <div className="showcase-architecture__node">
            <Server size={18} />
            <span>API</span>
          </div>

          <div className="showcase-architecture__node">
            <ShieldCheck size={18} />
            <span>AUTH</span>
          </div>

          <div className="showcase-architecture__node">
            <Database size={18} />
            <span>DATABASE</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==========================================
   MAIN SHOWCASE CARD
========================================== */

export default function ShowcasePanel({
  item,
}: ShowcasePanelProps) {
  return (
    <article
      className={`showcase-panel showcase-panel--${item.theme}`}
    >
      <div className="showcase-panel__preview">
        {item.theme === "academics" && (
          <AcademicsVisual />
        )}

        {item.theme === "analysis" && (
          <AnalysisVisual />
        )}

        {item.theme === "frontend" && (
          <TourismVisual />
        )}

        {item.theme === "architecture" && (
          <ArchitectureVisual />
        )}
      </div>

      <div className="showcase-panel__caption">
        <div>
          <span className="showcase-panel__eyebrow">
            {item.number} / {item.label}
          </span>

          <h3>{item.title}</h3>

          <p>{item.description}</p>

          {item.isConcept && (
            <span className="showcase-panel__concept">
              CONCEPT PREVIEW
            </span>
          )}
        </div>

        <span
          className="showcase-panel__arrow"
          aria-hidden="true"
        >
          <ArrowUpRight size={21} />
        </span>
      </div>
    </article>
  );
}
