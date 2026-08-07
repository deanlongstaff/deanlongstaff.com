/**
 * DESCRIPTION: This is the footer component that is used to display the footer on the bottom of the page.
 *
 * Author: Dean Longstaff
 */
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----- Import the required modules

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----- Import icons

import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----- Define the Footer component

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer className="footer pt-3 pb-2.5">
      <div className="footer-inner mx-auto flex min-h-[58px] w-[min(100%,1600px)] flex-col items-center justify-center gap-3 px-6 md:flex-row md:gap-[clamp(4rem,10vw,12rem)] md:px-[clamp(2rem,8vw,8rem)]">
        <div className="text-center">
          <h3><span className="footer-os-mark">✦</span> DEAN_OS</h3>
          <p className="footer-os-status">SYSTEM ONLINE // THANKS FOR VISITING</p>
        </div>
        <div className="text-center">
          <h3>Copyright © {year}</h3>
        </div>
        <div className="z-[1] text-center">
          <ul className="m-0 flex list-none justify-center gap-2.5 p-0">
            <li className="block">
              <a className="social-icons-link grid size-[30px] place-items-center" href="https://github.com/deanlongstaff" target="_blank" rel="noopener noreferrer">
                <AiFillGithub />
              </a>
            </li>
            <li className="block">
              <a className="social-icons-link grid size-[30px] place-items-center" href="https://www.linkedin.com/in/dean-longstaff-934023126/" target="_blank" rel="noopener noreferrer">
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
