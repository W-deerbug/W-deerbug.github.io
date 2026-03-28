import { useState, useEffect } from "react";
import { resumeItems, profile, education, training } from "../../data/resume";
import type { ResumeCategory, CareerDetail, IntroductionDetail } from "../../data/resume";
import SectionTitle from "../ui/SectionTitle";
// import profileImg from "../../assets/profile.jpg";
import "./Resume.css";

function ResumeModal() {
  return (
    <div className="resume-modal-resume">
      <div className="resume-modal-top">
        {/*<img src={profileImg} alt="프로필" className="resume-modal-image" />*/}
        <div className="resume-info-basic">
          <table className="resume-info-table">
            <tbody>
              <tr>
                <th>이름</th>
                <td>{profile.name.replace("Profile : ", "")}</td>
              </tr>
              {profile.birthdate && (
                <tr>
                  <th>생년월일</th>
                  <td>{profile.birthdate}</td>
                </tr>
              )}
              <tr>
                <th>연락처</th>
                <td>{profile.email}</td>
              </tr>
              {profile.location && (
                <tr>
                  <th>주소</th>
                  <td>{profile.location}</td>
                </tr>
              )}
              {profile.hobbies && (
                <tr>
                  <th>취미</th>
                  <td>{profile.hobbies}</td>
                </tr>
              )}
              {profile.specialties && (
                <tr>
                  <th>특기</th>
                  <td>{profile.specialties}</td>
                </tr>
              )}
              {profile.mbti && (
                <tr>
                  <th>MBTI</th>
                  <td>{profile.mbti}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="resume-modal-section">
        <h3 className="resume-modal-section-title">학력</h3>
        {education.map((edu, i) => (
          <div key={i} className="resume-modal-row">
            <span className="resume-modal-period">{edu.period}</span>
            <span className="resume-modal-content">{edu.school} {edu.major} {edu.degree}</span>
          </div>
        ))}
      </div>

      <div className="resume-modal-section">
        <h3 className="resume-modal-section-title">경력</h3>
        <div className="resume-modal-row">
          <span className="resume-modal-period">2023.07 - 현재</span>
          <span className="resume-modal-content">(주)호디 · 사원</span>
        </div>
        <div className="resume-modal-row">
          <span className="resume-modal-period">2022.02 - 2022.06</span>
          <span className="resume-modal-content">퓨렌스㈜ · 사원</span>
        </div>
      </div>

      {training.length > 0 && (
        <div className="resume-modal-section">
          <h3 className="resume-modal-section-title">교육</h3>
          {training.map((t, i) => (
            <div key={i} className="resume-modal-row">
              <span className="resume-modal-period">{t.period}</span>
              <span className="resume-modal-content">{t.institution} · {t.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function CareerModalContent({ careerDetail }: { careerDetail: CareerDetail }) {
  return (
    <div className="resume-modal-career">
      <p className="career-total-exp">경력사항 – {careerDetail.totalExp}</p>
      {careerDetail.entries.map((entry, i) => (
        <div key={i} className="career-entry">
          <div className="career-entry-header">
            <span className="career-entry-period">{entry.period}</span>
            <span className="career-entry-company">{entry.company}</span>
            <span className="career-entry-meta">{entry.role} · {entry.duration}</span>
          </div>
          <ul className="career-entry-bullets">
            {entry.bullets.map((bullet, j) => (
              <li key={j}>{bullet}</li>
            ))}
          </ul>
          <p className="career-entry-stack"><strong>Tech Stack:</strong> {entry.stack}</p>
        </div>
      ))}
    </div>
  );
}

function IntroductionModalContent({ introductionDetail }: { introductionDetail: IntroductionDetail }) {
  return (
    <div className="resume-modal-introduction">
      {introductionDetail.sections.map((section, i) => (
        <div key={i} className="introduction-section">
          <h3 className="introduction-section-title">{section.title}</h3>
          <ul className="introduction-bullets">
            {section.bullets.map((bullet, j) => (
              <li key={j}>{bullet}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function ModalContent({ item }: { item: ResumeCategory }) {
  if (item.type === "resume") return <ResumeModal />;

  if (item.type === "career") {
    if (item.careerDetail) return <CareerModalContent careerDetail={item.careerDetail} />;
    return (
      <div className="resume-modal-career">
        {item.detail && <p className="resume-modal-detail">{item.detail}</p>}
      </div>
    );
  }

  if (item.type === "introduction") {
    if (item.introductionDetail) return <IntroductionModalContent introductionDetail={item.introductionDetail} />;
    return (
      <div className="resume-modal-introduction">
        {item.detail && <p className="resume-modal-detail">{item.detail}</p>}
      </div>
    );
  }

  return null;
}

export default function Resume() {
  const [selected, setSelected] = useState<ResumeCategory | null>(null);

  useEffect(() => {
    if (!selected) return;
    const onKeyDown = (e: KeyboardEvent) => { if (e.key === "Escape") setSelected(null); };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selected]);

  return (
    <section className="section skills">
      <SectionTitle title="Resume" icon="article_person" iconSize={40} />

      <div className="skills-list">
        {resumeItems.map((group) => (
          <button
            key={group.category}
            className="skills-row resume-row"
            onClick={() => setSelected(group)}
          >
            {group.icon && (
              <span className={["material-symbols-outlined", "section-title-icon", `icon-size-${group.iconSize ?? 26}`, group.iconColor ? `icon-color-${group.iconColor}` : ""].filter(Boolean).join(" ")}>
                {group.icon}
              </span>
            )}
            <span className="resume-category">{group.category}</span>
          </button>
        ))}
      </div>

      {selected && (
        <div className="resume-modal-overlay" onClick={() => setSelected(null)}>
          <div className={["resume-modal", (selected.type === "career" || selected.type === "introduction") ? "resume-modal--wide" : ""].filter(Boolean).join(" ")} onClick={(e) => e.stopPropagation()}>
            <div className="resume-modal-sticky">
              <div className="resume-modal-header">
                {selected.icon && (
                  <span className="material-symbols-outlined section-title-icon icon-size-26">{selected.icon}</span>
                )}
                <span className="resume-modal-title">{selected.category}</span>
              </div>
              <button className="resume-modal-close" onClick={() => setSelected(null)}>
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="resume-modal-body">
              <ModalContent item={selected} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
