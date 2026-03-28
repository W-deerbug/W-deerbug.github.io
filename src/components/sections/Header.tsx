import { profile } from "../../data/resume";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-name-block">
        <h1 className="header-name">{profile.name}</h1>
        {/*<p className="header-title">{profile.title}</p>*/}
      </div>

      <div className="header-box">
        <p className="header-summary">{profile.summary}</p>

        <ul className="header-links">
            {/*{profile.github && (*/}
            {/*  <li>*/}
            {/*    <a*/}
            {/*      href={`https://github.com/${profile.github}`}*/}
            {/*      target="_blank"*/}
            {/*      rel="noreferrer"*/}
            {/*    >*/}
            {/*      github.com/{profile.github}*/}
            {/*    </a>*/}
            {/*  </li>*/}
            {/*)}*/}
            {profile.linkedin && (
              <li>
                <a
                  href={`https://linkedin.com/${profile.linkedin}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            )}
            {profile.blog && (
              <li>
                <a href={profile.blog} target="_blank" rel="noreferrer">
                  Blog
                </a>
              </li>
            )}
            <li>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
        </ul>
      </div>
    </header>
  );
}
