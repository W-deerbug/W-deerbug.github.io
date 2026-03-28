import { useState, useEffect } from "react";
import { experience } from "../../data/resume";
import type { ExperienceItem } from "../../data/resume";
import SectionTitle from "../ui/SectionTitle";
import Tag from "../ui/Tag";
import "./Experience.css";

export default function Experience() {
  const [selected, setSelected] = useState<ExperienceItem | null>(null);

  useEffect(() => {
    if (!selected) return;
    const onKeyDown = (e: KeyboardEvent) => { if (e.key === "Escape") setSelected(null); };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selected]);

  return (
    <section className="section experience">
      <SectionTitle title="Project Experience" icon="folder_open" iconSize={40}/>

      <div className="experience-grid">
        {experience.map((item, i) => (
          <button
            key={i}
            className={["experience-card", item.period?.includes("현재") ? "experience-card--current" : ""].filter(Boolean).join(" ")}
            onClick={() => setSelected(item)}
          >
            <div className="experience-card-top">
              {item.projectName
                ? <span className="experience-card-project">{item.projectName}</span>
                : <span className="experience-card-company">{item.company}</span>
              }
              {item.period?.includes("현재") && (
                <span className="experience-card-badge">재직중</span>
              )}
            </div>
            <span className="experience-card-role">
              {item.company}, {item.role}
            </span>
            {item.description && (
              <span className="experience-card-desc">{item.description}</span>
            )}
            {item.period && (
              <span className="experience-card-period">{item.period}</span>
            )}
            {item.skills && item.skills.length > 0 && (
              <div className="experience-card-skills">
                {item.skills.slice(0, 3).map((skill) => (
                  <Tag key={skill} label={skill} />
                ))}
                {item.skills.length > 3 && (
                  <span className="experience-card-more">+{item.skills.length - 3}</span>
                )}
              </div>
            )}
          </button>
        ))}
      </div>

      {selected && (
        <div className="experience-modal-overlay" onClick={() => setSelected(null)}>
          <div className="experience-modal" onClick={(e) => e.stopPropagation()}>

            <div className="experience-modal-sticky">
              <div className="experience-modal-header">
                {selected.projectName && (
                  <span className="experience-modal-project">{selected.projectName}</span>
                )}
                <span className="experience-modal-role">
                  {selected.company}, {selected.role}
                </span>
                <span className="experience-modal-period">{selected.period}</span>
              </div>
              <button className="experience-modal-close" onClick={() => setSelected(null)}>
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="experience-modal-body">
              {(selected.teamSize || selected.tools) && (
                <div className="experience-modal-meta">
                  {selected.teamSize && (
                    <span className="experience-modal-meta-item">
                      <span className="material-symbols-outlined">group</span>
                      {selected.teamSize}
                    </span>
                  )}
                  {selected.tools && (
                    <span className="experience-modal-meta-item">
                      <span className="material-symbols-outlined">construction</span>
                      {selected.tools}
                    </span>
                  )}
                </div>
              )}

              {selected.description && (
                <p className="experience-modal-description">{selected.description}</p>
              )}

              <ul className="experience-modal-tasks">
                {selected.tasks.map((task, j) => (
                  <li key={j}>
                    {task.text}
                    {task.subItems && task.subItems.length > 0 && (
                      <ul className="experience-modal-subtasks">
                        {task.subItems.map((sub, k) => (
                          <li key={k}>{sub}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>

              {selected.skills && selected.skills.length > 0 && (
                <div className="experience-modal-skills">
                  {selected.skills.map((skill) => (
                    <Tag key={skill} label={skill} />
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
