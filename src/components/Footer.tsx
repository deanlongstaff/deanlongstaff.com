/**
 * DESCRIPTION: This is the footer component that is used to display the footer on the bottom of the page.
 *
 * Author: Dean Longstaff
 */
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----- Import icons

import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----- Shared styles

const HEADING = "m-0 font-display text-[1rem] font-semibold tracking-[-0.04em] text-cream";

// Pressed-in chips: raised offset shadow, tipping up and over on hover.
const SOCIAL_CHIP =
  "grid size-[30px] place-items-center rounded border border-[rgba(247,244,235,0.3)] bg-[color-mix(in_srgb,var(--ink)_18%,transparent)] text-cream shadow-[2px_2px_0_color-mix(in_srgb,var(--ink)_20%,transparent),inset_0_1px_0_rgba(255,255,255,.16)] transition-[transform,background] duration-[160ms] ease-[ease] hover:-translate-y-0.5 hover:-rotate-3 hover:bg-[color-mix(in_srgb,var(--sun)_22%,transparent)] hover:text-sun";

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----- Define the Footer component

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer className="footer border-t border-t-[color-mix(in_srgb,var(--ink)_82%,transparent)] bg-brick pt-3 pb-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,.18),0_-5px_14px_color-mix(in_srgb,var(--ink)_9%,transparent)]">
      <div className="mx-auto flex min-h-[58px] w-[min(100%,1600px)] flex-col items-center justify-center gap-3 px-6 md:flex-row md:gap-[clamp(4rem,10vw,12rem)] md:px-[clamp(2rem,8vw,8rem)]">
        <div className="text-center">
          <h3 className={HEADING}><span className="text-sun">✦</span> DEAN_OS</h3>

        </div>
        <div className="text-center">
          <h3 className={HEADING}>Copyright © {year}</h3>
        </div>
        <div className="z-[1] text-center">
          <ul className="m-0 flex list-none justify-center gap-2.5 p-0">
            <li className="block">
              <a className={SOCIAL_CHIP} href="https://github.com/deanlongstaff" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <AiFillGithub />
              </a>
            </li>
            <li className="block">
              <a className={SOCIAL_CHIP} href="https://www.linkedin.com/in/dean-longstaff-934023126/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
