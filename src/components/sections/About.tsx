import { about } from "../../data/resume";
import SectionTitle from "../ui/SectionTitle";
import "./About.css";

export default function About() {
  const paragraphs = about.split("\n\n").filter(Boolean);

  return (
    <section className="section about">
      <SectionTitle title="About" />
      <div className="about-content">
        {paragraphs.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </section>
  );
}
