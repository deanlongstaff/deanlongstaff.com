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
    <footer className="footer">
      <div className="footer-inner mx-auto grid max-w-screen-2xl items-center gap-6 px-6 md:grid-cols-3">
        <div className="footer-identity">
          <h3><span className="footer-os-mark">✦</span> DEAN_OS</h3>
          <p className="footer-os-status">SYSTEM ONLINE // THANKS FOR VISITING</p>
        </div>
        <div className="footer-copyright">
          <h3>Copyright © {year}</h3>
        </div>
        <div className="footer-social">
          <ul className="footer-icons">
            <li className="social-icons">
              <a href="https://github.com/deanlongstaff" target="_blank" rel="noopener noreferrer">
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a href="https://www.linkedin.com/in/dean-longstaff-934023126/" target="_blank" rel="noopener noreferrer">
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
