/**
 * DESCRIPTION: This is the welcome component that is used to display the welcome section on the home page.
 *
 * Author: Dean Longstaff
 */
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----- Import the required modules

import Typewriter from "typewriter-effect";
import { FiCloud, FiSettings, FiStar } from "react-icons/fi";
import Particle from "../Particle";
import { getAge } from "../../utils/age";

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----- Import images

import photo from "../../assets/images/me.jpeg";
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// -- Custom Functions

// Type writer effect
function Type() {
  return (
    <Typewriter
      options={{
        strings: ["Software Developer", "Open Source Contributor", "Automation Engineer", "DevOps Engineer", "Cloud Engineer", "Innovator", "Tech Enthusiast", "DIYer", "Problem Solver"],
        autoStart: true,
        loop: true,
        deleteSpeed: 100,
        cursor: "|",
      }}
    />
  );
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----- Define the Welcome component

function index() {
  return (
    <section id="welcome">
      <Particle />
      {/* The tablet shell (768-1199px) runs full-bleed; only true desktop gets the 60vw column. */}
      <section
        className="welcome-section relative z-[2] flex min-h-0 items-center overflow-visible p-0 md:min-h-[790px]"
        id="home"
      >
        <div className="relative z-[1] mx-auto grid w-full grid-cols-1 items-center gap-4 px-3 pt-22 pb-8 text-left md:grid-cols-[1.15fr_0.85fr] md:gap-8 md:px-6 md:pt-44 md:pb-20 desk:w-[60vw] desk:gap-28">
          <div className="pt-5 pb-2.5 text-center md:p-0 md:text-left">
            <div
              className="mb-[26px] inline-flex rotate-[-1.2deg] items-center gap-2 rounded-[5px] border-2 border-[color-mix(in_srgb,#172b40_70%,transparent)] bg-navy px-[9px] py-[7px] font-mono text-[0.5rem] tracking-[0.08em] text-mist shadow-[4px_4px_0_var(--primary-color),inset_0_1px_0_color-mix(in_srgb,white_20%,transparent)] md:mb-[18px] md:gap-3 md:text-[0.58rem]"
              aria-label="DEAN OS system status"
            >
              <span className="text-sun">DEAN_OS <b className="font-normal text-[rgba(238,244,243,0.68)]">v{getAge()}</b></span>
              <span className="welcome-system-item inline-flex items-center gap-[5px] text-aqua"><i /> CURIOUS</span>
              <span className="welcome-system-item inline-flex items-center gap-[5px] text-aqua"><i /> BUILDING</span>
            </div>

            <h1 className="m-0 mb-[1.1rem] px-0 pt-0 pb-[15px] font-mono text-[0.8rem] font-medium tracking-[0.08em] text-muted uppercase md:text-base">
              Hello!{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                👋
              </span>
            </h1>

            <h1 className="m-0 max-w-[680px] p-0 font-display text-[clamp(2.8rem,14vw,4.4rem)] leading-[0.92] tracking-[-0.09em] text-ink md:text-[clamp(3.8rem,8vw,7.2rem)]">
              I&apos;M <strong className="text-signal">DEAN</strong><br />LONGSTAFF
            </h1>

            <p className="mx-auto mt-5 mb-4 max-w-[23rem] text-[0.95rem] leading-[1.6] text-muted md:mx-0 md:mt-[26px] md:mb-[18px] md:max-w-[500px] md:text-[1.15rem]">
              I make useful things for the web, the cloud, and the real world.
            </p>
            <div className="flex flex-wrap gap-1.5 max-md:justify-center md:gap-2">
              {[
                { Icon: FiCloud, label: "Cloud Wrangler" },
                { Icon: FiSettings, label: "Automation Maniac" },
                { Icon: FiStar, label: "Side Quest Chaser" },
              ].map(({ Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-lg bg-[color-mix(in_srgb,var(--primary-color)_14%,transparent)] px-[9px] py-[7px] font-mono text-[0.6rem] text-signal-deep md:px-[11px] md:py-2 md:text-[0.68rem]"
                >
                  <Icon aria-hidden="true" className="block size-[1.05rem] [stroke-width:2.3]" /> {label}
                </span>
              ))}
            </div>

            <div className="hidden h-[50px] py-5 text-center md:block md:pb-10 md:text-left">
              <Type />
            </div>
          </div>
          <div className="group/photo relative flex items-center justify-center pt-4 pb-5 md:pt-5">
            <div className="relative flex w-full max-w-[450px] items-center justify-center md:max-w-[min(34vw,360px)] desk:max-w-[450px]">
              <span className="welcome-photo-ripple welcome-photo-ripple--1" aria-hidden="true" />
              <span className="welcome-photo-ripple welcome-photo-ripple--2" aria-hidden="true" />
              <span className="welcome-photo-ripple welcome-photo-ripple--3" aria-hidden="true" />
              <img
                src={photo}
                alt="Dean Longstaff"
                className="relative z-[1] m-[5px] h-auto w-full rounded-[50%] border-[12px] border-surface object-cover p-[5px] shadow-[10px_12px_0_var(--primary-color),0_0_0_3px_color-mix(in_srgb,var(--secondary-color)_46%,transparent),0_18px_35px_color-mix(in_srgb,var(--ink)_18%,transparent)] [aspect-ratio:1/1] md:shadow-[14px_18px_0_var(--primary-color),0_0_0_4px_color-mix(in_srgb,var(--secondary-color)_46%,transparent),0_24px_50px_color-mix(in_srgb,var(--ink)_20%,transparent)]"
              />
            </div>
            <span aria-hidden="true" className="absolute top-[5%] right-[6%] z-[2] rotate-[8deg] rounded-lg bg-sun px-3.5 py-[11px] font-mono text-[0.65rem] font-medium tracking-[0.1em] text-bin-ink transition-transform duration-[350ms] ease-[ease] group-hover/photo:scale-[1.08] group-hover/photo:rotate-[-2deg] md:right-[-3%]">
              HEY THERE
            </span>
            <span aria-hidden="true" className="absolute right-[10%] bottom-[1%] z-[2] rotate-[-5deg] rounded border border-[color-mix(in_srgb,var(--secondary-color)_48%,var(--line))] bg-[color-mix(in_srgb,var(--surface)_86%,transparent)] px-2.5 py-[7px] font-mono text-[0.58rem] tracking-[0.08em] text-signal-deep shadow-[3px_3px_0_color-mix(in_srgb,var(--ink)_14%,transparent)] transition-transform duration-[350ms] ease-[ease] group-hover/photo:scale-[1.08] group-hover/photo:rotate-[3deg] md:right-[6%] md:bottom-[4%]">
              DEAN.EXE
            </span>
          </div>
          <div className="md:hidden">
            <div className="h-[50px] py-5 pr-5 text-center md:text-left">
              <Type />
            </div>
          </div>
        </div>
        <button
          type="button"
          className="welcome-bridge absolute bottom-[-0.75rem] left-1/2 z-[3] flex w-[calc(100%-1rem)] -translate-x-1/2 rotate-[-1.2deg] cursor-pointer items-center overflow-hidden rounded-md border-2 border-navy bg-navy p-0 font-inherit text-mist shadow-[7px_7px_0_var(--primary-color),inset_0_1px_0_color-mix(in_srgb,white_24%,transparent)] md:bottom-[-1.2rem] md:w-[min(86%,940px)]"
          onClick={() => {
            const target = document.getElementById("aboutme");
            if (target) {
              target.scrollIntoView({ behavior: "smooth" });
            } else {
              window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
            }
          }}
          aria-label="Scroll to explore"
        >
          <span className="welcome-bridge-label relative z-[2] shrink-0 overflow-hidden bg-sun px-2 py-[9px] font-mono text-[0.48rem] font-medium tracking-[0.08em] text-navy md:px-[15px] md:py-[11px] md:text-[0.6rem]">
            SCROLL TO EXPLORE
          </span>
          <span className="min-w-0 flex-auto overflow-hidden">
            <span className="welcome-bridge-track flex w-max font-mono text-[0.68rem] tracking-[0.16em] text-aqua">
              <span className="block flex-none pl-3 text-[0.5rem] md:pl-5 md:text-[0.68rem]">BUILT IT &nbsp;✦&nbsp; BROKE IT &nbsp;✦&nbsp; FIXED IT &nbsp;✦&nbsp; PRESSED BUTTONS &nbsp;✦&nbsp; SAW WHAT HAPPENED &nbsp;✦&nbsp; DONE IT AGAIN &nbsp;✦&nbsp;</span>
              <span className="block flex-none pl-3 text-[0.5rem] md:pl-5 md:text-[0.68rem]" aria-hidden="true">BUILT IT &nbsp;✦&nbsp; BROKE IT &nbsp;✦&nbsp; FIXED IT &nbsp;✦&nbsp; PRESSED BUTTONS &nbsp;✦&nbsp; SAW WHAT HAPPENED &nbsp;✦&nbsp; DONE IT AGAIN &nbsp;✦&nbsp;</span>
            </span>
          </span>
        </button>
      </section>
    </section>
  );
}

export default index;
