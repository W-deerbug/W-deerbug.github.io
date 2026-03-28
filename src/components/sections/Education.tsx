import { education } from "../../data/resume";
import SectionTitle from "../ui/SectionTitle";
import "./Education.css";

export default function Education() {
  return (
    <section className="section education">
      <SectionTitle title="Education" />

      <div className="education-list">
        {education.map((item, i) => (
          <div key={i} className="education-item">
            <div className="education-header">
              <div>
                <span className="education-school">{item.school}</span>
                <span className="education-major">
                  {item.degree} · {item.major}
                </span>
              </div>
              <span className="education-period">{item.period}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
