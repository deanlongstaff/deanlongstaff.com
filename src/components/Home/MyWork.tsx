/**
 * DESCRIPTION: This is the my work component that is used to display my work on the page.
 *
 * Author: Dean Longstaff
 */
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----- Import the required modules

import { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import GitHubCalendar from "react-github-calendar";
import { useReward } from "react-rewards";
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// -- Import Icons/Images/Sounds

import { SiTypescript, SiJavascript, SiPython, SiReact, SiPowershell, SiAzurefunctions, SiMicrosoftazure, SiGithub, SiElectron, SiRedis, SiMicrosoftsqlserver } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { DiGit } from "react-icons/di";
import mojLogo from "../../assets/images/moj.jpeg";
import quackSound from "../../assets/sounds/quack.mp3";
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// -- Define the skills to display

const skills = [
  { name: "TypeScript", logo: <SiTypescript />, link: "https://www.typescriptlang.org/" },
  { name: "JavaScript", logo: <SiJavascript />, link: "https://www.javascript.com/" },
  { name: "Python", logo: <SiPython />, link: "https://www.python.org/" },
  { name: "PowerShell", logo: <SiPowershell />, link: "https://docs.microsoft.com/en-gb/powershell/" },
  { name: "React", logo: <SiReact />, link: "https://reactjs.org/" },
  { name: "Azure", logo: <SiMicrosoftazure />, link: "https://azure.microsoft.com/en-gb/" },
  { name: "Serverless Functions", logo: <SiAzurefunctions />, link: "https://azure.microsoft.com/en-gb/services/functions/" },
  { name: "GitHub", logo: <SiGithub />, link: "https://github.com/deanlongstaff" },
  { name: "Electron", logo: <SiElectron />, link: "https://www.electronjs.org/" },
  { name: "Node.js", logo: <FaNodeJs />, link: "https://nodejs.org/en/" },
  { name: "Git", logo: <DiGit />, link: "https://git-scm.com/" },
  { name: "Redis", logo: <SiRedis />, link: "https://redis.io/" },
  { name: "SQL Server", logo: <SiMicrosoftsqlserver />, link: "https://www.microsoft.com/en-gb/sql-server/sql-server-2019" },
];
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// -- Custom Functions

// Skills section (Skill Cards)
function SkillsSection() {
  return (
    <section id="skills">
      <div className="skills-container">
        {skills.map((skill, index) => (
          <a href={skill.link} target="_blank" rel="noopener noreferrer" className="skill" key={`skill-${index}`}>
            <div className="icon">{skill.logo}</div>
            <p>{skill.name}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

// GitHub section (GitHub Calendar)
function GitHubSection() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <GitHubCalendar username="deanlongstaff" blockSize={15} blockMargin={5} fontSize={16} colorScheme="dark" />
    </Row>
  );
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----- Define the MyWork component

function MyWork() {
  const duckRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Duck confetti reward
  const duckConfettiConfig = {
    emoji: ["🦆", "🐤", "🐥"],
    elementCount: 60,
    spread: 150,
    zIndex: 9999,
    lifetime: 300,
    position: "absolute",
  };

  // Make 🦆 the dominant emoji
  for (let i = 0; i < 25; i++) {
    duckConfettiConfig.emoji.push("🦆");
  }
  const { reward: duckConfetti, isAnimating: ducksInFlight } = useReward("duckConfetti", "emoji", duckConfettiConfig);

  const handleDuckMouseOver = () => {
    if (!ducksInFlight) {
      duckConfetti(); // Launch the ducks!
    }
    const audio = new Audio(quackSound);
    audio.play().catch((error) => {
      console.warn("Duck can't quack:", error);
    });
  };
  const handleDuckClick = () => {
    window.open("https://rubberduckdebugging.com", "_blank");
  };

  // Some overkill code to position a div overlay ontop of the rubber ducky in the background image
  useEffect(() => {
    const duckOriginalPosition = { x: 3114, y: 2180 }; // Coordinates of the duck in the original image
    const backgroundOriginalSize = { width: 4032, height: 3024 }; // Size of the original image

    // Calculate the position of the overlay and update it
    const positionOverlay = () => {
      if (!sectionRef.current || !duckRef.current) return;

      const containerRect = sectionRef.current.getBoundingClientRect();
      const containerAspectRatio = containerRect.width / containerRect.height;
      const imageAspectRatio = backgroundOriginalSize.width / backgroundOriginalSize.height;

      let scaleFactor;
      let offsetX = 0;
      let offsetY = 0;

      if (containerAspectRatio > imageAspectRatio) {
        scaleFactor = containerRect.width / backgroundOriginalSize.width;
        offsetY = (containerRect.height - backgroundOriginalSize.height * scaleFactor) / 2;
      } else {
        scaleFactor = containerRect.height / backgroundOriginalSize.height;
        offsetX = (containerRect.width - backgroundOriginalSize.width * scaleFactor) / 2;
      }

      const newX = duckOriginalPosition.x * scaleFactor + offsetX;
      const newY = duckOriginalPosition.y * scaleFactor + offsetY;

      duckRef.current.style.left = `${newX}px`;
      duckRef.current.style.top = `${newY}px`;
    };

    window.addEventListener("resize", positionOverlay);
    positionOverlay(); // Initial call

    return () => {
      window.removeEventListener("resize", positionOverlay);
    };
  }, []);

  return (
    <section id="mywork" className="mywork-section" ref={sectionRef}>
      <div id="duckConfetti" className="interactive-duck" ref={duckRef} onMouseOver={handleDuckMouseOver} onClick={handleDuckClick}></div>
      <Container className="mywork-description">
        <h1 className="main-heading">
          My <strong className="primary-color">Work</strong>
        </h1>
        <p style={{ color: "white" }}>
          In my digital dojo, creativity flourishes and ideas soar. As a remote warrior, I excel in my personal haven, transforming concepts into vibrant digital experiences and interfaces into virtual art. While I relish the solitude of my
          workspace, the joy of collaboration and human interaction always beckons, bridging the gap between the virtual and the tangible.
        </p>
        <Row className="mywork-body">
          <Col md={6}>
            <img src={mojLogo} alt="Ministry of Justice UK" className="mywork-mojlogo" />
          </Col>
          <Col md={6}>
            <p>
              At the Ministry of Justice UK, I'm the tech maestro behind the curtain, orchestrating a digital symphony that's music to the ears of efficiency and innovation. With my wand — or should I say, keyboard — I'm leading the charge in the
              Evolve Programme, turning the old-school into the cool-school for over 40,000 devices.
            </p>
          </Col>
        </Row>
        <h2 className="secondary-heading">My Skills</h2>
        <SkillsSection />
        <h2 className="secondary-heading" style={{ paddingBottom: "20px" }}>
          My GitHub History
        </h2>
        <GitHubSection />
      </Container>
    </section>
  );
}

export default MyWork;
