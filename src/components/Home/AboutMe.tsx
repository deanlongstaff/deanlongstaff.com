/**
 * DESCRIPTION: About Me section of the home page.
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
      <div
        id="about"
        className="relative mx-auto max-w-7xl rounded-[6px] border border-[color-mix(in_srgb,var(--ink)_20%,transparent)] bg-paper bg-[linear-gradient(color-mix(in_srgb,var(--secondary-color)_13%,transparent)_1px,transparent_1px)] bg-[size:100%_30px] bg-[position:0_24px] px-[28px] pt-[34px] pb-[42px] shadow-[9px_10px_0_color-mix(in_srgb,var(--primary-color)_30%,transparent),0_24px_40px_color-mix(in_srgb,var(--ink)_16%,transparent),inset_0_1px_0_rgba(255,255,255,.72)] rotate-[-.35deg] before:absolute before:-top-[13px] before:left-6 before:rounded-[3px_3px_0_0] before:border before:border-ink before:px-[11px] before:py-[6px] before:font-mono before:text-[.52rem] before:tracking-[.08em] before:text-surface before:bg-ink before:content-['ABOUT_ME.TXT'] max-md:rotate-0 max-md:bg-[size:100%_27px] max-md:bg-[position:0_21px] max-md:px-3.5 max-md:pt-7 max-md:pb-8"
      >
        <div className="max-w-7xl pt-0 text-center text-muted md:pt-6">
          <div className="flex items-center gap-[18px] max-md:flex-col md:grid md:grid-cols-[1.1fr_0.9fr] md:gap-[42px]">
            <div className="p-0 text-center md:py-0 md:text-left">
              <span className="relative top-[7px] mb-2 block font-mono text-[0.7rem] tracking-[0.1em] text-signal uppercase max-md:top-1">
                The short version
              </span>
              <p className="m-0 p-0 pt-2 text-[0.95rem] leading-[30px] text-muted [&_b]:text-signal max-md:pt-0.5 max-md:leading-[27px] max-md:[&_br]:leading-[.55] md:text-[1.08rem]">
                Curious by default. Open-minded by design.
                <br />
                <br />
                I like trying things, learning things, and occasionally pressing the button labelled <b>DO NOT PRESS</b>.
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
  );
}

export default index;
