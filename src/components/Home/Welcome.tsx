/**
 * DESCRIPTION: This is the welcome component that is used to display the welcome section on the home page.
 *
 * Author: Dean Longstaff
 */
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----- Import the required modules

import Typewriter from "typewriter-effect";
import Tilt from "react-parallax-tilt";
import { FiCloud, FiSettings, FiStar } from "react-icons/fi";
import Particle from "../Particle";

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
      <section className="welcome-section" id="home">
        <div className="background-container"></div>
        <div className="welcome-content mx-auto grid max-w-screen-2xl items-center gap-20 px-6 md:grid-cols-[1.15fr_0.85fr] lg:gap-28">
          <div className="welcome-header">
            <div className="welcome-system-strip" aria-label="DEAN OS system status">
              <span className="welcome-system-title">DEAN_OS <b>v2.0</b></span>
              <span className="welcome-system-item"><i /> CURIOUS</span>
              <span className="welcome-system-item"><i /> BUILD MODE</span>
            </div>
            <div className="welcome-kicker"><span className="kicker-dot" /> Developer, builder &amp; enthusiastic tinkerer</div>
            <h1 style={{ paddingBottom: 15 }} className="heading">
              Hello!{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                👋
              </span>
            </h1>

            <h1 className="heading-name">
              I&apos;M <strong className="primary-color">DEAN</strong><br />LONGSTAFF
            </h1>

            <p className="welcome-lede">I make useful things for the web, the cloud, and the real world.</p>
            <div className="welcome-tags"><span><FiCloud aria-hidden="true" /> Cloud</span><span><FiSettings aria-hidden="true" /> Automation</span><span><FiStar aria-hidden="true" /> Side quests</span></div>

            <div className="welcome-command hidden h-[50px] py-5 pl-[50px] md:block md:pb-10">
              <span className="welcome-command-prompt">&gt; </span>
              <Type />
            </div>
          </div>
          <div className="welcome-photo flex items-center justify-center py-5">
            <Tilt className="flex w-full max-w-[450px] items-center justify-center">
              <img
                src={photo}
                alt="Dean Longstaff"
                style={{
                  width: "100%",
                  height: "auto",
                  aspectRatio: "1 / 1",
                  borderRadius: "50%",
                  objectFit: "cover",
                  padding: 5,
                  margin: 5,
                  boxShadow: "0 0 20px 8px rgba(0, 0, 0, 0.5)",
                }}
              />
            </Tilt>
          </div>
          <div className="md:hidden">
            <div className="welcome-command h-[50px] px-5 py-5 text-center">
              <span className="welcome-command-prompt">&gt; </span>
              <Type />
            </div>
          </div>
        </div>
        <div className="welcome-bridge" aria-hidden="true">
          <span className="welcome-bridge-label">SCROLL TO EXPLORE</span>
          <span className="welcome-bridge-window">
            <span className="welcome-bridge-track">
              <span className="welcome-bridge-message">BUILT IT &nbsp;✦&nbsp; BROKE IT &nbsp;✦&nbsp; FIXED IT &nbsp;✦&nbsp; PRESSED BUTTONS &nbsp;✦&nbsp; SAW WHAT HAPPENED &nbsp;✦&nbsp; DONE IT AGAIN &nbsp;✦&nbsp;</span>
              <span className="welcome-bridge-message" aria-hidden="true">BUILT IT &nbsp;✦&nbsp; BROKE IT &nbsp;✦&nbsp; FIXED IT &nbsp;✦&nbsp; PRESSED BUTTONS &nbsp;✦&nbsp; SAW WHAT HAPPENED &nbsp;✦&nbsp; DONE IT AGAIN &nbsp;✦&nbsp;</span>
            </span>
          </span>
        </div>
      </section>
    </section>
  );
}

export default index;
