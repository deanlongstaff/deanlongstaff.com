import { HiArrowUpRight } from "react-icons/hi2";
import { MdCalendarMonth, MdNotificationsActive, MdWidgets } from "react-icons/md";
import binminderMark from "../../assets/images/binminder-mark.svg";
import binminderToday from "../../assets/images/binminder-today.png";

const highlights = [
  { icon: <MdCalendarMonth />, label: "Local collection dates" },
  { icon: <MdNotificationsActive />, label: "Helpful reminders" },
  { icon: <MdWidgets />, label: "Widgets & shortcuts" },
];

function SideProjects() {
  return (
    <section id="sideprojects" className="side-projects-section">
      <div className="side-projects-dots" aria-hidden="true" />
      <div className="side-projects-glow side-projects-glow-left" aria-hidden="true" />
      <div className="side-projects-glow side-projects-glow-right" aria-hidden="true" />

      <div className="side-projects-content">
        <p className="side-projects-eyebrow">A little something I built</p>
        <h1 className="main-heading">
          Side <strong className="side-projects-accent">Projects</strong>
        </h1>
        <p className="side-projects-intro">
          Useful ideas, made real. Binminder is my app for making bin day one less thing to remember.
        </p>

        <article className="binminder-card">
          <div className="binminder-copy">
            <div className="binminder-brand">
              <img src={binminderMark} alt="" className="binminder-mark" />
              <span>binminder</span>
            </div>
            <span className="binminder-status badge badge-outline"><span /> Launching August 2026</span>
            <h2>Never miss <span>bin day</span> again.</h2>
            <p>
              Keep your local bin collections in reach with live updates, reminders, widgets and shortcuts—all without an account.
            </p>
            <div className="binminder-highlights">
              {highlights.map((highlight) => (
                <div className="binminder-highlight" key={highlight.label}>
                  <span className="binminder-highlight-icon">{highlight.icon}</span>
                  <span>{highlight.label}</span>
                </div>
              ))}
            </div>
            <a className="binminder-link btn btn-primary" href="https://binminder.app" target="_blank" rel="noopener noreferrer">
              Visit binminder.app <HiArrowUpRight aria-hidden="true" />
            </a>
          </div>

          <div className="binminder-preview" aria-hidden="true">
            <div className="binminder-phone">
              <img src={binminderToday} alt="Binminder Today screen showing the next collection and upcoming bin days" />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default SideProjects;
