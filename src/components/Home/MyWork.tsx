/**
 * DESCRIPTION: This is the my work component that is used to display my work on the page.
 *
 * Author: Dean Longstaff
 */
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----- Import the required modules

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// -- Import Icons/Images/Sounds

import type { CSSProperties } from "react";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiReact,
  SiGithub,
  SiElectron,
  SiRedis,
  SiKubernetes,
  SiDocker,
  SiPostgresql,
  SiVite,
  SiTailwindcss,
  SiExpo,
} from "react-icons/si";
import { FaNodeJs, FaAws } from "react-icons/fa";
import { DiGit, DiMsqlServer } from "react-icons/di";
import { VscAzure } from "react-icons/vsc";
import { TbBrandPowershell, TbBrandReactNative } from "react-icons/tb";
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
  { name: "AWS", logo: <FaAws />, link: "https://aws.amazon.com/" },
  { name: "Kubernetes", logo: <SiKubernetes />, link: "https://kubernetes.io/" },
  { name: "Docker", logo: <SiDocker />, link: "https://www.docker.com/" },
  { name: "Postgres", logo: <SiPostgresql />, link: "https://www.postgresql.org/" },
  { name: "React Native", logo: <TbBrandReactNative />, link: "https://reactnative.dev/" },
  { name: "Vite", logo: <SiVite />, link: "https://vitejs.dev/" },
  { name: "Tailwind CSS", logo: <SiTailwindcss />, link: "https://tailwindcss.com/" },
  { name: "Expo", logo: <SiExpo />, link: "https://expo.dev/" },
];
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// -- Scatter angles

// Each pill is tipped at its own angle so the tray reads as hand-filled rather
// than machine-aligned. Cycled by index, so adding a skill keeps the scatter
// going - the previous version hard-coded 13 rules in CSS and left the last
// eight tiles lying flat.
const SCATTER = [
  "rotate(-2deg) translateY(3px)",
  "rotate(1.5deg) translateY(-2px)",
  "rotate(-1deg) translateY(5px)",
  "rotate(2deg) translateY(-3px)",
  "rotate(-1.5deg) translateY(2px)",
  "rotate(1deg) translateY(-4px)",
  "rotate(-2deg) translateY(4px)",
  "rotate(1.5deg) translateY(-2px)",
  "rotate(-1deg) translateY(3px)",
  "rotate(2deg) translateY(-4px)",
  "rotate(-1.5deg) translateY(2px)",
  "rotate(1deg) translateY(-3px)",
];

// Liquid float timing per pill. Each entry picks one of several drift
// *shapes* (skill-float-1..5, defined in MyWork.css - some lean left, some
// right, some barely move vertically) plus its own delay/duration, so
// neighbouring pills don't all bob up and down in the same direction at the
// same time. Values are hand-jittered rather than a clean sequence so the
// cycle doesn't read as a repeating pattern once it wraps.
const FLOAT = [
  { shape: 1, delay: "-0.8s", duration: "7.4s" },
  { shape: 3, delay: "-3.6s", duration: "8.9s" },
  { shape: 5, delay: "-1.1s", duration: "7.9s" },
  { shape: 2, delay: "-5.2s", duration: "9.6s" },
  { shape: 4, delay: "-2.3s", duration: "8.1s" },
  { shape: 1, delay: "-6.4s", duration: "9.1s" },
  { shape: 3, delay: "-0.4s", duration: "7.6s" },
  { shape: 5, delay: "-4.1s", duration: "8.6s" },
  { shape: 2, delay: "-1.7s", duration: "9.3s" },
  { shape: 4, delay: "-3.9s", duration: "7.7s" },
  { shape: 1, delay: "-5.6s", duration: "8.4s" },
];

// Every third pill picks up a warm tint and every fourth a cool one, so the
// tray never reads as one flat block of chips. Fourth wins where they collide.
function tileTint(position: number) {
  if (position % 4 === 0) return "bg-[color-mix(in_srgb,var(--secondary-color)_12%,var(--surface))]";
  if (position % 3 === 0) return "bg-[color-mix(in_srgb,var(--sun)_13%,var(--surface))]";
  return "bg-surface";
}

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// -- Custom Functions

// Skills section (Skill Cards)
function SkillsSection() {
  return (
    <section
      id="skills"
      className="skills-manifesto relative mx-auto mt-12 grid max-w-7xl grid-cols-1 items-center gap-7 overflow-hidden rounded-[20px] border border-line bg-surface px-[14px] py-[22px] text-left md:mt-[84px] md:grid-cols-[minmax(270px,0.75fr)_minmax(0,1.25fr)] md:gap-[50px] md:rounded-[28px] md:p-[42px]"
    >
      <div className="relative z-[1] text-center md:text-left">
        <span className="mb-3 block font-mono text-[0.7rem] tracking-[0.1em] text-signal uppercase">How I approach things</span>
        <h2 className="m-0 font-display text-[2.65rem] leading-[0.9] tracking-[-0.08em] text-ink md:text-[clamp(2.7rem,5vw,4.4rem)]">
          Anything is<br /><em className="text-signal not-italic">possible.</em>
        </h2>
        <p className="mx-auto my-[22px] max-w-[360px] text-[0.95rem] leading-[1.55] text-muted md:mx-0 md:text-base md:leading-[1.7]">
          I don&apos;t believe in staying in one lane. When there&apos;s a problem to solve, I learn whatever helps me move it forward. The technology is just the set of tools on the bench.
        </p>
        <div className="inline-flex items-center justify-center gap-2 font-mono text-[0.68rem] text-signal md:justify-start">
          <span className="grid size-10 place-items-center rounded-[50%] bg-sun text-[1.15rem] text-navy shadow-[0_5px_0_color-mix(in_srgb,var(--sun)_55%,var(--paper))]">✦</span> Curiosity is the real superpower
        </div>
      </div>
      <div className="skills-toolbox relative z-[1] rotate-[-1deg] rounded-[20px] border border-[color-mix(in_srgb,var(--primary-color)_22%,transparent)] px-3 py-4 md:p-5">
        <div className="mx-1 mb-4 flex justify-center gap-3 font-mono text-[0.55rem] text-muted uppercase md:text-[0.62rem]">
          <span>Things I&apos;ve picked up along the way</span>
        </div>
        <div className="flex w-full flex-wrap items-start justify-center gap-2.5 px-1.5 pt-[5px] pb-3">
          {skills.map((skill, index) => (
            <a
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              className="skill-wrapper block w-auto text-inherit no-underline"
              // Set as a custom property, not `transform`: an inline transform
              // would outrank the :hover rule that straightens the pill.
              style={{ "--tilt": SCATTER[index % SCATTER.length] } as CSSProperties}
              key={skill.name}
            >
              <div
                className={`skill flex h-full items-center justify-start rounded-[13px] border border-line px-3 py-[9px] max-md:flex-col max-md:text-center ${tileTint(index + 1)}`}
                style={
                  {
                    "--float-name": `skill-float-${FLOAT[index % FLOAT.length].shape}`,
                    "--float-delay": FLOAT[index % FLOAT.length].delay,
                    "--float-duration": FLOAT[index % FLOAT.length].duration,
                  } as CSSProperties
                }
              >
                <div className="mr-[7px] text-[1.45rem] text-signal drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] max-md:mb-[5px]">{skill.logo}</div>
                <p className="m-0 font-mono text-[0.68rem] font-medium text-ink">{skill.name}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
      <span aria-hidden="true" className="pointer-events-none absolute -right-[10px] -bottom-[45px] rotate-[18deg] md:right-[25px] md:-bottom-[35px] text-[8rem] leading-none text-[color-mix(in_srgb,var(--sun)_70%,transparent)] md:text-[10rem]">
        ✳
      </span>
    </section>
  );
}

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----- Define the MyWork component

function MyWork() {
  return (
    <section
      id="mywork"
      className="mywork-section relative overflow-hidden border-b border-b-line bg-cover bg-center bg-no-repeat px-[14px] pt-[58px] pb-[50px] md:px-5 md:py-[120px]"
    >
      <div className="mx-auto max-w-7xl text-center text-muted">
        <h1 className="main-heading">
          My <strong className="primary-color">Work</strong>
        </h1>
        <p className="mx-auto mt-[18px] max-w-[620px] text-[0.95rem] leading-[1.55] md:text-base md:leading-[1.75]">
          I turn half-formed ideas into polished digital experiences, then jump into the group chat to make them even better together.
        </p>
        <div className="mywork-body relative mx-auto mt-7 grid max-w-7xl grid-cols-1 items-center justify-center justify-items-center gap-8 rounded-[18px] border border-line bg-surface px-3.5 py-[18px] text-center md:mt-[55px] md:grid-cols-2 md:rounded-3xl md:p-11 md:text-[1.2em]">
          <div className="w-full">
            <img src={mojLogo} alt="Ministry of Justice UK" className="mx-auto block h-auto w-full max-w-[250px] rounded-[10px] object-contain max-md:pt-8 max-md:mb-2" />
          </div>
          <div className="w-full">
            <p className="mx-auto m-0 max-w-[650px] leading-[1.75] max-md:text-[0.95rem] max-md:leading-[1.55]">
              At the Ministry of Justice, I help teams swap repetitive clicks for code that does it for them. I focus on upskilling the EUCS department to work more efficiently and securely, turning good ideas into practical workflows that can keep up with an ever changing security climate.
            </p>
          </div>
          {/* Taped-on label for the day-job card. */}
          <span aria-hidden="true" className="absolute -top-[11px] left-[25px] rounded bg-signal px-[9px] py-1 font-mono text-[0.6rem] text-surface">
            THE DAY JOB
          </span>
        </div>
        <SkillsSection />
      </div>
    </section>
  );
}

export default MyWork;
