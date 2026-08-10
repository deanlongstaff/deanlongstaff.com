/**
 * DESCRIPTION: Welcome/hero section of the home page.
 *
 * Author: Dean Longstaff
 */
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----- Import the required modules

import Typewriter from "typewriter-effect";
import { FiCloud, FiSettings, FiStar } from "react-icons/fi";
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
      {/* The tablet shell (768-1199px) runs full-bleed; only true desktop gets the 60vw column. */}
      <section
        className="welcome-section relative z-[2] flex min-h-0 items-center overflow-visible p-0 md:min-h-[790px]"
        id="home"
      >
        <div className="relative z-[1] mx-auto grid w-full grid-cols-1 items-center gap-4 px-3 pt-22 pb-8 text-left md:grid-cols-[1.15fr_0.85fr] md:gap-8 md:px-6 md:pt-44 md:pb-20 desk:w-[60vw] desk:gap-28">
          <div className="pt-5 pb-2.5 text-center md:p-0 md:text-left">
            <div
              className="mb-[26px] inline-flex rotate-[-1.2deg] items-center gap-2 rounded-[5px] border-2 border-[var(--chrome-border)] bg-[var(--chrome-bg)] px-[9px] py-[7px] font-mono text-[0.5rem] tracking-[0.08em] text-mist shadow-[4px_4px_0_var(--primary-color),inset_0_1px_0_color-mix(in_srgb,white_20%,transparent)] md:mb-[18px] md:gap-3 md:text-[0.58rem]"
              aria-label="DEAN OS system status"
            >
              <span className="text-sun">DEAN_OS <b className="font-normal text-[rgba(238,244,243,0.68)]">v{getAge()}</b></span>
              <span className="inline-flex items-center gap-[5px] text-aqua"><i className="size-1.5 animate-[welcome-system-pulse_1.5s_ease-in-out_infinite] rounded-full bg-aqua shadow-[0_0_0_3px_color-mix(in_srgb,var(--secondary-color)_18%,transparent)] motion-reduce:animate-none" /> CURIOUS</span>
              <span className="inline-flex items-center gap-[5px] text-aqua"><i className="size-1.5 animate-[welcome-system-pulse_1.5s_ease-in-out_infinite] [animation-delay:.35s] rounded-full bg-sun shadow-[0_0_0_3px_color-mix(in_srgb,var(--sun)_18%,transparent)] motion-reduce:animate-none" /> BUILDING</span>
            </div>

            <h1 className="m-0 mb-[1.1rem] px-0 pt-0 pb-[15px] font-mono text-[0.8rem] font-medium tracking-[0.08em] text-muted uppercase md:text-base">
              Hello!{" "}
              <span className="inline-block animate-[wave-animation_2.1s_infinite] [transform-origin:70%_70%] motion-reduce:animate-none" role="img" aria-labelledby="wave">
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
                  className="badge h-auto items-center gap-2 rounded-lg border-none bg-[var(--chip-bg)] px-[9px] py-[7px] font-mono text-[0.6rem] text-[var(--chip-text)] md:px-[11px] md:py-2 md:text-[0.68rem]"
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
            <div className="relative flex w-full max-w-[450px] items-center justify-center max-md:max-w-[290px] md:max-w-[min(34vw,360px)] desk:max-w-[450px]">
              <span aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 animate-[welcome-photo-ripple_3.6s_cubic-bezier(0.25,0.65,0.4,1)_infinite] rounded-full border-2 border-signal opacity-0 motion-reduce:animate-none motion-reduce:opacity-25" />
              <span aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 animate-[welcome-photo-ripple_3.6s_cubic-bezier(0.25,0.65,0.4,1)_infinite] [animation-delay:1.2s] rounded-full border-2 border-sun opacity-0 motion-reduce:animate-none motion-reduce:opacity-25" />
              <span aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 animate-[welcome-photo-ripple_3.6s_cubic-bezier(0.25,0.65,0.4,1)_infinite] [animation-delay:2.4s] rounded-full border-2 border-aqua opacity-0 motion-reduce:animate-none motion-reduce:opacity-25" />
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
          className="group absolute bottom-[-0.75rem] left-1/2 z-[3] flex w-[calc(100%-1rem)] -translate-x-1/2 rotate-[-1.2deg] cursor-pointer items-center overflow-hidden rounded-md border-2 border-[var(--chrome-border)] bg-[var(--chrome-bg)] p-0 font-inherit text-mist shadow-[7px_7px_0_var(--primary-color),inset_0_1px_0_color-mix(in_srgb,white_24%,transparent)] focus-visible:[outline:2px_solid_var(--sun)] focus-visible:outline-offset-2 md:bottom-[-1.2rem] md:w-[min(86%,940px)]"
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
          <span className="relative z-[2] shrink-0 overflow-hidden bg-sun px-2 py-[9px] font-mono text-[0.48rem] font-medium tracking-[0.08em] text-navy shadow-[inset_0_1px_0_rgba(255,255,255,.35),inset_0_-3px_4px_rgba(0,0,0,.12)] transition-[filter,box-shadow] duration-150 ease-[ease] after:absolute after:inset-0 after:z-[1] after:bg-[linear-gradient(115deg,rgba(255,255,255,.55)_0%,rgba(255,255,255,.12)_22%,transparent_45%,transparent_70%,rgba(255,255,255,.18)_100%)] after:bg-[length:220%_220%] after:bg-[position:0%_0%] after:opacity-35 after:transition-[opacity,background-position] after:duration-[400ms] after:ease-[ease] after:content-[''] after:pointer-events-none group-hover:brightness-110 group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,.55),inset_0_-5px_8px_rgba(0,0,0,.2)] group-hover:after:opacity-60 group-hover:after:bg-[position:100%_100%] group-focus-visible:brightness-110 group-focus-visible:shadow-[inset_0_1px_0_rgba(255,255,255,.55),inset_0_-5px_8px_rgba(0,0,0,.2)] group-focus-visible:after:opacity-60 group-focus-visible:after:bg-[position:100%_100%] group-active:brightness-[.94] group-active:shadow-[inset_0_2px_6px_rgba(0,0,0,.35)] md:px-[15px] md:py-[11px] md:text-[0.6rem]">
            SCROLL TO EXPLORE
          </span>
          <span className="min-w-0 flex-auto overflow-hidden">
            <span className="flex w-max animate-[welcome-marquee_24s_linear_infinite] font-mono text-[0.68rem] tracking-[0.16em] text-aqua motion-reduce:animate-none">
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
