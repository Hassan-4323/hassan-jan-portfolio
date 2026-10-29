
import {
  Activity,
  ArrowUpRight,
  Check,
  Code2,
  Compass,
  Database,
  Heart,
  Layers3,
  MapPin,
  Monitor,
  Search,
  ShieldCheck,
  Star,
  Terminal,
} from "lucide-react";

import type { FinalShowcaseItem } from "../../data/finalShowcase";

import "./FinalShowcaseCard.css";
import "./FinalTourism.css";

interface Props {
  item: FinalShowcaseItem;
}

/* ==========================================
   01 — AL FALAH
========================================== */

function BuildArtwork() {
  return (
    <div className="final-art final-art--build">
      <div className="final-art__topbar">
        <span>AL FALAH / DEVELOPMENT</span>
        <Layers3 size={18} />
      </div>

      <div className="final-art__bigword">
        BUILD.
      </div>

      <div className="final-build__window">
        <div className="final-build__header">
          <span>APPLICATION OVERVIEW</span>

          <span className="final-build__status">
            <Check size={12} />
            MODULES
          </span>
        </div>

        <div className="final-build__metrics">
          <div>
            <Monitor size={19} />
            <strong>Frontend</strong>
            <small>React interface</small>
          </div>

          <div>
            <Database size={19} />
            <strong>Backend</strong>
            <small>Application data</small>
          </div>
        </div>

        <div className="final-build__chart">
          <span>System modules</span>

          <div className="final-build__bars">
            {[44, 67, 53, 83, 72, 96, 76].map(
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

      <div className="final-art__signature">
        INTERFACES · DATA · SYSTEMS
      </div>
    </div>
  );
}

/* ==========================================
   02 — DEVRESCUE AI
========================================== */

function AnalyzeArtwork() {
  return (
    <div className="final-art final-art--analyze">
      <div className="final-art__topbar">
        <span>DEVRESCUE AI / ANALYSIS</span>
        <Code2 size={18} />
      </div>

      <div className="final-art__bigword">
        ANALYZE.
      </div>

      <div className="final-analyze__window">
        <div className="final-analyze__window-header">
          <Terminal size={16} />
          <span>REPOSITORY SCAN</span>

          <span className="final-analyze__indicator" />
        </div>

        <div className="final-analyze__code">
          <span>
            <b>$</b> start analysis
          </span>

          <span>Scanning source tree</span>

          <span>Inspecting dependencies</span>

          <span className="final-analyze__complete">
            ✓ Analysis complete
          </span>
        </div>

        <div className="final-analyze__progress">
          <span />
        </div>

        <div className="final-analyze__metrics">
          <div>
            <ShieldCheck size={17} />
            <span>Code review</span>
          </div>

          <div>
            <Activity size={17} />
            <span>Issue explorer</span>
          </div>
        </div>
      </div>

      <div className="final-art__signature">
        REVIEW · DETECT · IMPROVE
      </div>
    </div>
  );
}

/* ==========================================
   03 — TOURISM RECOMMENDATION SYSTEM

   Replaces generic creative-development
   artwork with a styled travel interface.
========================================== */

function TourismArtwork() {
  return (
    <div className="final-art final-art--create final-tourism">
      <div className="final-art__topbar">
        <span>TOURISM SYSTEM / FINAL YEAR PROJECT</span>
        <Compass size={19} />
      </div>

      <div className="final-art__bigword">
        CREATE.
      </div>

      <div className="final-tourism__window">
        <div className="final-tourism__window-header">
          <div className="final-tourism__brand">
            <Compass size={17} />
            <span>TRAVEL SMART</span>
          </div>

          <span className="final-tourism__window-label">
            DISCOVER
            <ArrowUpRight size={13} />
          </span>
        </div>

        <div className="final-tourism__content">
          <span className="final-tourism__eyebrow">
            PERSONALISED DESTINATIONS
          </span>

          <h4>
            Find your next
            <span> favourite place.</span>
          </h4>

          <div className="final-tourism__search">
            <Search size={15} />
            <span>Explore destinations...</span>
            <ArrowUpRight size={15} />
          </div>

          <div className="final-tourism__section-heading">
            <span>FEATURED DESTINATIONS</span>
            <Heart size={16} />
          </div>

          <div className="final-tourism__destinations">
            <div className="final-tourism__destination">
              <div className="final-tourism__scene final-tourism__scene--hunza">
                <div className="final-tourism__sun" />

                <div className="final-tourism__mountain final-tourism__mountain--back" />

                <div className="final-tourism__mountain final-tourism__mountain--front" />
              </div>

              <div className="final-tourism__destination-info">
                <div>
                  <strong>Hunza Valley</strong>
                  <small>
                    <MapPin size={11} />
                    Northern Pakistan
                  </small>
                </div>

                <Heart size={15} />
              </div>
            </div>

            <div className="final-tourism__destination">
              <div className="final-tourism__scene final-tourism__scene--skardu">
                <div className="final-tourism__sun" />

                <div className="final-tourism__mountain final-tourism__mountain--back" />

                <div className="final-tourism__mountain final-tourism__mountain--front" />
              </div>

              <div className="final-tourism__destination-info">
                <div>
                  <strong>Skardu</strong>
                  <small>
                    <MapPin size={11} />
                    Gilgit-Baltistan
                  </small>
                </div>

                <Heart size={15} />
              </div>
            </div>
          </div>

          <div className="final-tourism__features">
            <div>
              <Heart size={14} />
              <span>Favourites</span>
            </div>

            <div>
              <ShieldCheck size={14} />
              <span>Safety insights</span>
            </div>

            <div>
              <Star size={14} />
              <span>Reviews</span>
            </div>
          </div>
        </div>
      </div>

      <div className="final-art__signature">
        EXPLORE · RECOMMEND · DISCOVER
      </div>
    </div>
  );
}

/* ==========================================
   FINAL SHOWCASE CARD
========================================== */

export default function FinalShowcaseCard({
  item,
}: Props) {
  return (
    <article
      className={`final-card final-card--${item.theme}`}
    >
      <div className="final-card__media">
        {item.theme === "build" && (
          <BuildArtwork />
        )}

        {item.theme === "analyze" && (
          <AnalyzeArtwork />
        )}

        {item.theme === "create" && (
          <TourismArtwork />
        )}
      </div>

      <div className="final-card__information">
        <div className="final-card__heading">
          <span>
            {item.number} / {item.category}
          </span>

          <ArrowUpRight
            size={20}
            aria-hidden="true"
          />
        </div>

        <h3>{item.title}</h3>

        <p>{item.caption}</p>

        <div className="final-card__tags">
          {item.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        {item.concept && (
          <span className="final-card__concept">
            CONCEPT PREVIEW
          </span>
        )}
      </div>
    </article>
  );
}
