
import {
  Activity,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Code2,
  Database,
  FileCode2,
  GraduationCap,
  LayoutDashboard,
  ShieldCheck,
  Users,
} from "lucide-react";

import ProjectMedia from "../common/ProjectMedia";
import TourismPreview from "./TourismPreview";

import type { PortfolioProject } from "../../types/project";

import "./ProjectCard.css";

interface ProjectCardProps {
  project: PortfolioProject;
}

function SchoolPreview() {
  return (
    <div className="project-screen project-screen--school">
      <div className="project-screen__sidebar">
        <GraduationCap size={19} />
        <LayoutDashboard size={14} />
        <Users size={14} />
        <BookOpen size={14} />
        <Database size={14} />
      </div>

      <div className="project-screen__main">
        <div className="project-screen__topline">
          <span>AL FALAH / ADMIN</span>
          <span className="project-screen__online" />
        </div>

        <h4>Dashboard</h4>
        <p>Academic overview</p>

        <div className="project-screen__metrics">
          <div>
            <Users size={14} />
            <strong>Students</strong>
            <span>Manage records</span>
          </div>

          <div>
            <BookOpen size={14} />
            <strong>Academics</strong>
            <span>Classes & subjects</span>
          </div>
        </div>

        <div className="project-screen__panel">
          <div className="project-screen__panel-header">
            <span>Attendance</span>
            <Activity size={13} />
          </div>

          <div className="project-screen__bars">
            {[38, 60, 47, 76, 55, 85, 67].map(
              (height, index) => (
                <div
                  key={index}
                  style={{ height: `${height}%` }}
                />
              )
            )}
          </div>
        </div>

        <div className="project-screen__table">
          <span>Recent activity</span>
          <div><i /><b /><em /></div>
          <div><i /><b /><em /></div>
          <div><i /><b /><em /></div>
        </div>
      </div>
    </div>
  );
}

function DevRescuePreview() {
  return (
    <div className="project-screen project-screen--devrescue">
      <div className="devrescue-preview__heading">
        <div className="devrescue-preview__logo">
          <Code2 size={20} />
        </div>

        <div>
          <strong>DevRescue AI</strong>
          <span>Repository intelligence</span>
        </div>
      </div>

      <div className="devrescue-preview__terminal">
        <div className="devrescue-preview__dots">
          <i /><i /><i />
        </div>

        <p>
          <span>$</span> analyze repository
        </p>

        <div className="devrescue-preview__code">
          <span>Scanning source files...</span>
          <span>Resolving dependencies...</span>
          <span className="is-complete">
            ✓ Analysis completed
          </span>
        </div>
      </div>

      <div className="devrescue-preview__summary">
        <div className="devrescue-preview__summary-title">
          <span>Analysis overview</span>
          <CheckCircle2 size={16} />
        </div>

        <div className="devrescue-preview__metric-grid">
          <div>
            <FileCode2 size={17} />
            <strong>CODE</strong>
            <small>Analysis</small>
          </div>

          <div>
            <ShieldCheck size={17} />
            <strong>ISSUES</strong>
            <small>Detection</small>
          </div>
        </div>
      </div>

      <div className="devrescue-preview__activity">
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  const hasRealMedia = Boolean(
    project.image || project.video
  );

  return (
    <article
      className={`project-card project-card--${project.theme}`}
    >
      <div className="project-card__top">
        <span>{project.number} / 03</span>
        <span>{project.eyebrow}</span>
      </div>

      <div className="project-card__visual">
        {hasRealMedia ? (
          <ProjectMedia
            title={project.subtitle}
            image={project.image}
            video={project.video}
            poster={project.poster}
          />
        ) : (
          <>
            {project.theme === "school" && (
              <SchoolPreview />
            )}

            {project.theme === "devrescue" && (
              <DevRescuePreview />
            )}

            {project.id === "tourism-recommendation" && (
              <TourismPreview />
            )}
          </>
        )}
      </div>

      <div className="project-card__details">
        <div className="project-card__heading-row">
          <div>
            <span className="project-card__category">
              {project.status === "concept"
                ? "CONCEPT PLACEHOLDER"
                : project.developmentStatus ===
                    "in-development"
                  ? "PROJECT IN DEVELOPMENT"
                  : "COMPLETED PROJECT"}
            </span>

            <h3>{project.title}</h3>
          </div>

          <span
            className="project-card__arrow"
            aria-hidden="true"
          >
            <ArrowUpRight size={22} />
          </span>
        </div>

        <h4>{project.subtitle}</h4>
        <p>{project.description}</p>

        <div className="project-card__technologies">
          {project.technologies.map((technology) => (
            <span key={technology}>
              {technology}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
