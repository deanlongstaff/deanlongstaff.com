/**
 * DESCRIPTION: About Me section of the home page.
 *
 * Author: Dean Longstaff
 */
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----- Import the required modules

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import aboutPhoto from "../../assets/images/me-diy.jpeg";
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----- Define the AboutMe component

function index() {
  const [isEasterEggActive, setIsEasterEggActive] = useState(false);
  const [isEasterEggRebooting, setIsEasterEggRebooting] = useState(false);
  const [isEasterEggRestoring, setIsEasterEggRestoring] = useState(false);
  const [pressCount, setPressCount] = useState(0);
  const resetTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    document.body.classList.toggle("site-is-infected", isEasterEggActive);
    document.body.classList.toggle("site-is-rebooting", isEasterEggRebooting);
    document.body.classList.toggle("site-is-restoring", isEasterEggRestoring);
  }, [isEasterEggActive, isEasterEggRebooting, isEasterEggRestoring]);

  useEffect(() => {
    return () => {
      document.body.classList.remove("site-is-infected");
      document.body.classList.remove("site-is-rebooting");
      document.body.classList.remove("site-is-restoring");

      if (resetTimer.current !== undefined) {
        window.clearTimeout(resetTimer.current);
      }
    };
  }, []);

  const pressButton = () => {
    setIsEasterEggActive(true);
    setIsEasterEggRebooting(false);
    setIsEasterEggRestoring(false);
    setPressCount((currentCount) => currentCount + 1);

    if (resetTimer.current !== undefined) {
      window.clearTimeout(resetTimer.current);
    }

    resetTimer.current = window.setTimeout(() => {
      setIsEasterEggRebooting(true);

      resetTimer.current = window.setTimeout(() => {
        setIsEasterEggRestoring(true);

        resetTimer.current = window.setTimeout(() => {
          setIsEasterEggActive(false);
          setIsEasterEggRebooting(false);
          setIsEasterEggRestoring(false);
        }, 1200);
      }, 1600);
    }, 7500);
  };

  const buttonLabel = !isEasterEggActive ? "DO NOT PRESS" : isEasterEggActive && pressCount > 2 ? "OKAY DUDE RELAX" : pressCount > 1 ? "AGAIN ? REALLY ? " : pressCount == 1 ? "I WARNED YOU" : "DO NOT PRESS";
  const infectionLevel = Math.min(pressCount, 3);
  const systemMessage = pressCount === 1
    ? "Nice, I like your curiosity."
    : pressCount < 3
      ? "I like your enthusiasm, but I think you should stop now."
      : "Okay I get it, you like pressing buttons.";

  return (
    <>
      <section
        id="aboutme"
        className={`aboutme-section relative overflow-hidden border-b border-b-line px-[14px] pt-[58px] pb-[50px] md:px-5 md:py-[120px] ${isEasterEggActive ? `aboutme-section--easter-egg aboutme-section--infection-${infectionLevel}` : ""}`}
      >
      <div
        id="about"
        className="aboutme-paper relative mx-auto max-w-7xl rounded-[6px] border border-[color-mix(in_srgb,var(--ink)_20%,transparent)] bg-paper bg-[linear-gradient(color-mix(in_srgb,var(--secondary-color)_13%,transparent)_1px,transparent_1px)] bg-[size:100%_30px] bg-[position:0_24px] px-[28px] pt-[34px] pb-[42px] shadow-[9px_10px_0_color-mix(in_srgb,var(--primary-color)_30%,transparent),0_24px_40px_color-mix(in_srgb,var(--ink)_16%,transparent),inset_0_1px_0_rgba(255,255,255,.72)] rotate-[-.35deg] before:absolute before:-top-[13px] before:left-6 before:rounded-[3px_3px_0_0] before:border before:border-ink before:px-[11px] before:py-[6px] before:font-mono before:text-[.52rem] before:tracking-[.08em] before:text-surface before:bg-ink before:content-['ABOUT_ME.TXT'] max-md:rotate-0 max-md:bg-[size:100%_27px] max-md:bg-[position:0_21px] max-md:px-3.5 max-md:pt-7 max-md:pb-8"
      >
        <span className="aboutme-paper__burning-edge" aria-hidden="true" />
        <div className="relative z-[1] max-w-7xl pt-0 text-center text-muted md:pt-6">
          <div className="flex items-center gap-[18px] max-md:flex-col md:grid md:grid-cols-[1.1fr_0.9fr] md:gap-[42px]">
            <div className="p-0 text-center md:py-0 md:text-left">
              <span className="relative top-[7px] mb-2 block font-mono text-[0.7rem] tracking-[0.1em] text-signal uppercase max-md:top-1">
                The short version
              </span>
              <p className="m-0 p-0 pt-2 text-[0.95rem] leading-[30px] text-muted [&_b]:text-signal max-md:pt-0.5 max-md:leading-[27px] max-md:[&_br]:leading-[.55] md:text-[1.08rem]">
                Curious by default. Open-minded by design.
                <br />
                <br />
                I like trying things, learning things, and occasionally pressing the button labelled{" "}
                <button
                  type="button"
                  className="aboutme-do-not-press"
                  aria-label="Press the button labelled do not press"
                  aria-pressed={isEasterEggActive}
                  onClick={pressButton}
                >
                  <span className="aboutme-do-not-press__label">{buttonLabel}</span>
                </button>
                <br />
                <br />
                Give me a problem and I&apos;ll start poking at it. Code, cloud, DIY, cars, or anything else that needs fixing. I&apos;ll figure it out, make it work, and then make it better.
                <br />
                <br />
                I don&apos;t need to know anything before I begin. I'll figure it out along the way, break it, and then fix it. I like to learn by doing, and I like to do things that are useful.
                <br />
                <br />
                Sometimes it works first time. That&apos;s usually when I worry.
              </p>
              {isEasterEggActive && (
                <div className="aboutme-easter-egg" role="status" aria-live="polite">
                  <span className="aboutme-easter-egg__icon" aria-hidden="true">✦</span>
                  <span className="aboutme-easter-egg__copy">
                    <strong>CURIOUS.EXE // ACTIVATED</strong>
                    <span>{systemMessage}</span>
                  </span>
                  <span className="aboutme-easter-egg__count" aria-label={`${pressCount} presses`}>
                    ×{String(pressCount).padStart(2, "0")}
                  </span>
                </div>
              )}
            </div>
            {/* A photo dropped on the desk at an angle, not a flat image tile. */}
            <figure className="relative m-0 h-fit self-center rotate-2 rounded-[20px] bg-surface px-3 pt-3 pb-0 shadow-[0_3px_0_color-mix(in_srgb,var(--surface)_95%,transparent),0_22px_38px_color-mix(in_srgb,var(--ink)_16%,transparent),inset_0_1px_0_rgba(255,255,255,0.8)] max-md:mx-auto max-md:max-w-[360px] max-md:-rotate-2">
              <img
                src={aboutPhoto}
                alt="Dean working on a DIY project"
                className="block h-[260px] w-full rounded-t-[13px] rounded-b-[5px] object-cover [object-position:center_65%] md:h-[330px]"
              />
              <figcaption className="flex flex-wrap items-center justify-between gap-3 px-1 pt-[11px] pb-[13px] text-left md:flex-nowrap md:pt-3.5 md:pb-[15px]">
                <span className="font-mono text-[0.62rem] text-muted">Current status</span>
                <strong className="text-[0.8rem] text-signal">Making something cool</strong>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      </section>
      {isEasterEggRebooting && createPortal(
        <div className="aboutme-reboot-copy" role="status" aria-live="polite">
          <strong>DEAN_OS // REBOOTING...</strong>
          <span className="aboutme-reboot-status aboutme-reboot-status--memory">[ OK ] memory cleared</span>
          <span className="aboutme-reboot-status aboutme-reboot-status--interface">[ OK ] rebuilding interface</span>
        </div>,
        document.body,
      )}
    </>
  );
}

export default index;
