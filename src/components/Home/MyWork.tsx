/**
 * DESCRIPTION: This is the my work component that is used to display my work on the page.
 *
 * Author: Dean Longstaff
 */
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----- Import the required modules

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// -- Import Icons/Images/Sounds

import { SiTypescript, SiJavascript, SiPython, SiReact, SiGithub, SiElectron, SiRedis } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { DiGit, DiMsqlServer } from "react-icons/di";
import { VscAzure } from "react-icons/vsc";
import { TbBrandPowershell } from "react-icons/tb";
import { PiCodeBold } from "react-icons/pi";
import mojLogo from "../../assets/images/moj.jpeg";
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// -- Define the skills to display

const skills = [
  { name: "TypeScript", logo: <SiTypescript />, link: "https://www.typescriptlang.org/" },
  { name: "JavaScript", logo: <SiJavascript />, link: "https://www.javascript.com/" },
  { name: "Python", logo: <SiPython />, link: "https://www.python.org/" },
  { name: "PowerShell", logo: <TbBrandPowershell />, link: "https://docs.microsoft.com/en-gb/powershell/" },
  { name: "React", logo: <SiReact />, link: "https://reactjs.org/" },
  { name: "Azure", logo: <VscAzure />, link: "https://azure.microsoft.com/en-gb/" },
  { name: "Serverless Functions", logo: <PiCodeBold />, link: "https://azure.microsoft.com/en-gb/services/functions/" },
  { name: "GitHub", logo: <SiGithub />, link: "https://github.com/deanlongstaff" },
  { name: "Electron", logo: <SiElectron />, link: "https://www.electronjs.org/" },
  { name: "Node.js", logo: <FaNodeJs />, link: "https://nodejs.org/en/" },
  { name: "Git", logo: <DiGit />, link: "https://git-scm.com/" },
  { name: "Redis", logo: <SiRedis />, link: "https://redis.io/" },
  { name: "SQL Server", logo: <DiMsqlServer />, link: "https://www.microsoft.com/en-gb/sql-server/sql-server-2019" },
];
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// -- Custom Functions

// Skills section (Skill Cards)
function SkillsSection() {
  return (
    <section id="skills" className="skills-manifesto">
      <div className="skills-manifesto-copy">
        <span className="section-label">How I approach things</span>
        <h2>Anything is<br /><em>possible.</em></h2>
        <p>
          I don&apos;t believe in staying in one lane. When there&apos;s a problem to solve, I learn whatever helps me move it forward. The technology is just the set of tools on the bench.
        </p>
        <div className="skills-manifesto-note"><span>✦</span> Curiosity is the real superpower</div>
      </div>
      <div className="skills-toolbox">
        <div className="toolbox-topline"><span>Things I&apos;ve picked up along the way</span></div>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <a href={skill.link} target="_blank" rel="noopener noreferrer" className={`skill-wrapper skill-wrapper-${index + 1}`} key={`skill-${index}`}>
              <div className="skill">
                <div className="icon">{skill.logo}</div>
                <p>{skill.name}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----- Define the MyWork component

function MyWork() {
  return (
    <section id="mywork" className="mywork-section">
      <div className="mywork-description mx-auto max-w-7xl">
        <h1 className="main-heading">
          My <strong className="primary-color">Work</strong>
        </h1>
        <p>
          I thrive working remotely, where I transform concepts into polished digital experiences. While I value the focus of independent work, I equally embrace collaboration and the energy that comes from working with others.
        </p>
        <div className="mywork-body grid items-center gap-8 md:grid-cols-2">
          <div>
            <img src={mojLogo} alt="Ministry of Justice UK" className="mywork-mojlogo" />
          </div>
          <div>
            <p>
              At the Ministry of Justice UK, I lead a pioneering automation initiative across the EUCS department, driving efficiency and innovation at scale. I engage multiple product teams, upskilling them into programmatic workflows and delivering
              tangible cost savings for us taxpayers.
            </p>
          </div>
        </div>
        <SkillsSection />
      </div>
    </section>
  );
}

export default MyWork;
