import { useEffect, useMemo, useState } from "react";
import SectionTitle from "../ui/SectionTitle";
import Tag from "../ui/Tag";
import { experience } from "../../data/resume";
import type { AttachmentItem, ExperienceItem } from "../../data/resume";
import "./Experience.css";
import "./ModalPatternShowcase.css";
import erpErdGrant from "../../assets/ERP_ERD_GRANT.png";
import erpErd from "../../assets/ERP_ERD.png";
import pdfMapping from "../../assets/인트라매핑설계서_종합.pdf?url";
import pdfPageAll from "../../assets/인트라화면설계서_종합.pdf?url";
import pdfApi from "../../assets/출입인증(연동)_API_V1.0.pdf?url";

const assetMap: Record<string, string> = {
  "ERP_ERD_GRANT.png": erpErdGrant,
  "ERP_ERD.png": erpErd,
  "인트라매핑설계서_매입매출.pdf": pdfMapping,
  "인트라화면설계서_종합.pdf": pdfPageAll,
  "출입인증(연동)_API_V1.0.pdf": pdfApi,
};

type AccordionSection = {
  id: string;
  title: string;
  summary?: string;
  bullets: string[];
  attachments?: AttachmentItem[];
};

function buildSections(item: ExperienceItem): AccordionSection[] {
  const taskSections: AccordionSection[] = item.tasks.map((task, index) => {
    const bullets = task.subItems && task.subItems.length > 0 ? task.subItems : [task.text];
    return {
      id: `task-${index}`,
      title: task.text,
      summary: task.subItems && task.subItems.length > 0 ? task.subItems[0] : undefined,
      bullets,
    };
  });

  if (item.attachments && item.attachments.length > 0) {
    taskSections.push({
      id: "attachments",
      title: "산출물",
      summary: `${item.attachments.length}개의 예시 산출물`,
      bullets: [],
      attachments: item.attachments,
    });
  }

  return taskSections;
}

function isCaseBasedProject(item: ExperienceItem): boolean {
  return item.projectName === "좌석 / 시설예약 시스템 유지보수";
}

function SummaryBlock({ item }: { item: ExperienceItem }) {
  const summary = item.summary ?? item.tasks[0]?.text ?? "프로젝트 상세 내용";

  return (
    <div className="project-detail-summary">
      <p className="project-detail-overview">{summary}</p>
      {item.skills && item.skills.length > 0 && (
        <div className="project-detail-tags">
          {item.skills.map((skill) => (
            <Tag key={`${item.projectName}-${skill}`} label={skill} />
          ))}
        </div>
      )}
    </div>
  );
}

function AttachmentCards({ attachments }: { attachments: AttachmentItem[] }) {
  return (
    <div className="project-detail-output-block">
      <p className="project-detail-output-title">
        산출물 (회사 원본 문서가 아닌 포트폴리오용 예시자료이며, 저작권은 본인에게 있습니다.)
      </p>
      <div className="project-detail-output-list">
        {attachments.map((attachment) => {
          const url = assetMap[attachment.filename];

          return (
            <div key={attachment.filename} className="project-detail-output-card">
              <div className="project-detail-output-preview">
                {attachment.type === "image" ? (
                  <img src={url} alt={attachment.label} />
                ) : attachment.type === "xlsx" ? (
                  <span className="material-symbols-outlined project-detail-output-icon project-detail-output-icon--xlsx">table</span>
                ) : (
                  <span className="material-symbols-outlined project-detail-output-icon project-detail-output-icon--pdf">picture_as_pdf</span>
                )}
              </div>
              <span className="project-detail-output-label">{attachment.label}</span>
              <div className="project-detail-output-actions">
                {attachment.type !== "xlsx" && (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(event) => event.stopPropagation()}
                    title="새 탭으로 열기"
                  >
                    <span className="material-symbols-outlined">open_in_new</span>
                  </a>
                )}
                <a
                  href={url}
                  download={attachment.filename}
                  onClick={(event) => event.stopPropagation()}
                  title="다운로드"
                >
                  <span className="material-symbols-outlined">download</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function TaskRow({ task }: { task: ExperienceItem["tasks"][number] }) {
  const hasSubItems = Boolean(task.subItems && task.subItems.length > 0);

  if (!hasSubItems) {
    return <li>{task.text}</li>;
  }

  return (
    <li className="project-detail-task-item project-detail-task-item--collapsible">
      <div className="project-detail-task-row">
        <span className="project-detail-task-text">{task.text}</span>
        {/* <button className="project-detail-task-trigger" onClick={() => setOpen((value) => !value)}>
          <span className="project-detail-task-trigger-label">{open ? "접기" : "더보기"}</span>
        </button> */}
      </div>
      <ul className="project-detail-task-sublist">
        {task.subItems!.map((subItem) => (
          <li key={subItem}>{subItem}</li>
        ))}
      </ul>
    </li>
  );
}

function TaskContent({ tasks }: { tasks: ExperienceItem["tasks"] }) {
  return (
    <div className="project-detail-task-content">
      <ul className="project-detail-task-list">
        {tasks.map((task) => (
          <TaskRow key={task.text} task={task} />
        ))}
      </ul>
    </div>
  );
}

function AccordionModal({ item }: { item: ExperienceItem }) {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const sections = useMemo(() => buildSections(item), [item]);
  const caseBased = isCaseBasedProject(item);

  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  return (
    <>
      <button className="project-detail-card project-detail-card--trigger experience-card" onClick={() => setOpen(true)}>
        <div className="project-detail-card-copy">
          <div className="experience-card-top">
            {item.projectName ? (
              <span className="experience-card-project">{item.projectName}</span>
            ) : (
              <span className="experience-card-company">{item.company}</span>
            )}
          </div>

          <span className="experience-card-role">
            {item.company}, {item.pos}
          </span>
          {item.description && <span className="experience-card-desc">{item.description}</span>}
          <span className="experience-card-period">{item.period}</span>
        </div>
        {item.skills && item.skills.length > 0 && (
          <div className="experience-card-skills">
            {item.skills.map((skill) => (
              <Tag key={`${item.projectName}-${skill}`} label={skill} />
            ))}
          </div>
        )}
      </button>

      {open && (
        <div className="project-detail-overlay" onClick={() => setOpen(false)}>
          <div className="project-detail-modal" onClick={(event) => event.stopPropagation()}>
            <div className="project-detail-modal-head">
              <div>
                <p className="project-detail-eyebrow">{item.period ? `${item.period}` : ""}</p>
                <h4>{item.projectName ?? item.company}</h4>
                <p className="project-detail-meta">
                  {item.company} / {item.pos}
                  {item.description ? ` / ${item.description}` : ""}
                  {item.role && (
                    <>
                      {" / "}
                      <strong>{item.role}</strong>
                    </>
                  )}
                  {item.teamSize ? ` / ${item.teamSize}` : ""}
                </p>
              </div>
              <button className="project-detail-close" onClick={() => setOpen(false)} aria-label="모달 닫기">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <SummaryBlock item={item} />

            {caseBased ? (
              <div className="project-detail-accordion-list">
                {sections.map((section) => {
                  const isOpen = expanded === section.id;
                  return (
                    <section key={section.id} className="project-detail-accordion-item">
                      <button
                        className="project-detail-accordion-trigger"
                        onClick={() => setExpanded(isOpen ? null : section.id)}
                      >
                        <div>
                          <strong>{section.title}</strong>
                          {section.summary && <p>{section.summary}</p>}
                        </div>
                        <span>{isOpen ? "접기" : "열기"}</span>
                      </button>

                      {isOpen && (
                        <div className="project-detail-accordion-panel">
                          {section.bullets.length > 0 && (
                            <ul>
                              {section.bullets.map((bullet) => (
                                <li key={bullet}>{bullet}</li>
                              ))}
                            </ul>
                          )}

                          {section.attachments && section.attachments.length > 0 && (
                            <AttachmentCards attachments={section.attachments} />
                          )}
                        </div>
                      )}
                    </section>
                  );
                })}
              </div>
            ) : (
              <div className="project-detail-accordion-list">
                <TaskContent tasks={item.tasks} />
                {item.attachments && item.attachments.length > 0 && (
                  <AttachmentCards attachments={item.attachments} />
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default function ModalPatternShowcase() {
  const showcaseItems = [...experience];

  return (
    <section className="section project-detail-section">
      <SectionTitle title="Project Experience" icon="folder_open" iconSize={40} />
      <p className="project-detail-intro">
      </p>

      <div className="project-detail-grid">
        {showcaseItems.map((item, index) => (
          <AccordionModal key={`${item.projectName ?? item.company}-${index}`} item={item} />
        ))}
      </div>
    </section>
  );
}
