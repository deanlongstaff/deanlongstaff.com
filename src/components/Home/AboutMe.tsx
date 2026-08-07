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
    <section
      id="aboutme"
      className="aboutme-section relative overflow-hidden border-b border-b-line px-[14px] pt-[58px] pb-[50px] md:px-5 md:py-[120px]"
    >
      <div id="about" className="mx-auto max-w-7xl">
        <h1 className="main-heading">
          About <strong className="primary-color">Me</strong>
        </h1>
        <div className="max-w-7xl pt-5 text-center text-muted md:pt-[45px]">
          <div className="flex items-center gap-[18px] max-md:flex-col md:grid md:grid-cols-[1.1fr_0.9fr] md:gap-[42px]">
            <div className="p-0 text-center md:py-7 md:text-left">
              <span className="mb-[18px] block font-mono text-[0.7rem] tracking-[0.1em] text-signal uppercase">
                The short version
              </span>
              <p className="m-0 p-0 text-[0.95rem] leading-[1.55] text-muted [&_b]:text-signal max-md:[&_br]:leading-[.55] md:text-[1.08rem] md:leading-[1.85]">
                I'm the Swiss Army knife of tech - sharp, handy, and a tad bit quirky.
                <br />
                <br />
                Jack of all trades, master of <b>one</b> - where versatility meets mastery.
                <br />
                <br />
                Coding? <b>Check</b>. Innovating? <b>Always</b>. DIY projects? <b>Bring 'em on</b>.
                <br />
                <br />
                I dive into development with a splash of creativity and a toolbox full of skills. My mantra: Why just play one tune when you can rock the whole concert?
                <br />
                <br />
                Stick around for a mix of tech magic, crafty coding, and the occasional robot I built from a toaster. It's not just about making things work. It's about making them awesome!
              </p>
            </div>
            {/* A photo dropped on the desk at an angle, not a flat image tile. */}
            <figure className="relative m-0 h-fit self-center rotate-2 rounded-[20px] bg-surface px-3 pt-3 pb-0 shadow-[0_3px_0_color-mix(in_srgb,var(--surface)_95%,transparent),0_22px_38px_color-mix(in_srgb,var(--ink)_16%,transparent),inset_0_1px_0_rgba(255,255,255,0.8)] max-md:mx-auto max-md:max-w-[360px] max-md:-rotate-2">
              <img
                src={aboutPhoto}
                alt="Dean working on a DIY project"
                className="block h-[260px] w-full rounded-t-[13px] rounded-b-[5px] object-cover md:h-[330px]"
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
  );
}

export default index;
