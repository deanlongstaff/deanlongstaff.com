/**
 * DESCRIPTION: This is the AboutMe component that is used to display the about me section on the home page.
 *
 * Author: Dean Longstaff
 */
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----- Import the required modules

import aboutPhoto from "../../assets/images/me-diy.jpeg";
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----- Define the AboutMe component

function index() {
  return (
    <section id="aboutme" className="aboutme-section relative overflow-hidden px-[14px] pt-[58px] pb-[50px] md:px-5 md:py-[120px]">
      <div id="about" className="mx-auto max-w-7xl">
        <h1 className="main-heading">
          About <strong className="primary-color">Me</strong>
        </h1>
        <div className="aboutme-description max-w-7xl pt-5 md:pt-[45px]">
          <div className="aboutme-grid flex items-center gap-[18px] max-md:flex-col md:grid md:grid-cols-[1.1fr_0.9fr] md:gap-[42px]">
            <div className="aboutme-copy p-0 text-center md:py-7 md:text-left">
              <span className="section-label">The short version</span>
              <p className="aboutme-body">
                I'm the Swiss Army knife of tech - sharp, handy, and a tad bit quirky.
                <br />
                <br />
                Jack of all trades, master of <b>one</b> - where versatility meets mastery.
                <br />
                <br />
                Coding? <b className="primary-color">Check</b>. Innovating? <b className="primary-color">Always</b>. DIY projects? <b className="primary-color">Bring 'em on</b>.
                <br />
                <br />
                I dive into development with a splash of creativity and a toolbox full of skills. My mantra: Why just play one tune when you can rock the whole concert?
                <br />
                <br />
                Stick around for a mix of tech magic, crafty coding, and the occasional robot I built from a toaster. It's not just about making things work. It's about making them awesome!
              </p>
            </div>
            <figure className="aboutme-photo-card">
              <img src={aboutPhoto} alt="Dean working on a DIY project" />
              <figcaption><span>Current status</span><strong>Making something cool</strong></figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default index;
