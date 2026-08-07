/**
 * DESCRIPTION: Hobbies section of the home page.
 *
 * Author: Dean Longstaff
 */
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----- Import images

import type { CSSProperties } from "react";
import skiing from "../../assets/images/me-skiing.jpeg";
import programming from "../../assets/images/programming.jpeg";
import diy from "../../assets/images/diy.jpeg";
import rex from "../../assets/images/rex.jpeg";
import rc_car from "../../assets/images/rc_car.jpeg";
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----- Define the Hobbies to be displayed

type Hobby = {
  image: string;
  title: string;
  description: string;
  /** Sticker slapped on the photo corner. */
  sticker: string;
  /** Angle the photo is dropped onto the pile at; straightened on hover. */
  tilt: string;
};

const hobbies: Hobby[] = [
  {
    image: skiing,
    title: "Skiing",
    description: "Occasional mountain menace. I ski for the views, the adrenaline, and the optimistic belief that I can definitely stop.",
    sticker: "SNOW DAY",
    tilt: "rotate(-2.5deg) translateY(8px)",
  },
  {
    image: programming,
    title: "Programming",
    description: "My favourite hobby is turning “this should be easy” into a weekend project with documentation.",
    sticker: "ALWAYS LEARNING",
    tilt: "rotate(1.5deg) translateY(-8px)",
  },
  {
    image: diy,
    title: "DIY",
    description: "If it can be measured, drilled, glued or painted, I’ll probably make it harder than necessary.",
    sticker: "MADE BY HAND",
    tilt: "rotate(-1deg) translateY(18px)",
  },
  {
    image: rex,
    title: "Rex",
    description: "Chief morale officer, tennis-ball consultant and full-time snack detector. Management is mostly paws-off.",
    sticker: "R&D BUDDY",
    tilt: "rotate(2.5deg) translateY(-2px)",
  },
  {
    image: rc_car,
    title: "Remote Control Anything",
    description: "Cars, drones, boats, If it has a remote, I want to drive it. Rex remains my most enthusiastic crash-test dummy.",
    sticker: "FULL SEND",
    tilt: "rotate(-1.5deg) translateY(13px)",
  },
];
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// -- Custom Functions

// Hobby card
function HobbyCard({ image, title, description }: Hobby) {
  return (
    <article className="hobbies-card-view card relative overflow-hidden rounded-[22px] border-2 border-surface bg-surface transition-shadow duration-300 ease-[ease] group-hover:shadow-[0_18px_30px_-12px_color-mix(in_srgb,var(--ink)_35%,transparent)]">
      <figure className="overflow-hidden rounded-t-[16px] rounded-b-[5px]">
        <img
          src={image}
          alt={title}
          className="block h-[225px] w-full origin-center scale-100 object-cover object-center shadow-[inset_0_-3px_0_color-mix(in_srgb,var(--ink)_15%,transparent)] transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110 group-hover:rotate-1"
        />
      </figure>
      <div className="card-body px-3.5 pt-4 pb-[18px] text-center md:p-[18px] md:pb-[21px]">
        <h3 className="card-title mb-3 font-display text-[1.3rem] font-semibold text-signal md:mb-0">{title}</h3>
        <p className="text-[0.95rem] leading-[1.55] text-muted md:text-sm md:leading-[1.65]">{description}</p>
      </div>
    </article>
  );
}

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----- Define the Hobbies component

function index() {
  return (
    <section id="hobbies">
      <div className="hobbies-section relative overflow-hidden px-[14px] pt-[62px] pb-[46px] md:px-5 md:pt-[125px] md:pb-[100px]">
        <div className="mx-auto max-w-7xl">
          <span className="mb-3 block text-center font-mono text-[0.7rem] tracking-[0.13em] text-signal uppercase">
            When the laptop is closed
            <span className="mx-auto mt-1.5 [display:table] rotate-[-2deg] rounded-md border-[1.5px] border-dashed border-signal bg-[color-mix(in_srgb,var(--primary-color)_12%,transparent)] px-2.5 py-[3px] font-display text-[0.8rem] font-semibold tracking-normal normal-case italic">
              Just kidding, it's always open
            </span>
          </span>
          <h1 className="main-heading max-md:px-5">
            My <strong className="primary-color">Hobbies </strong>
          </h1>
          <p className="mx-auto mt-[18px] mb-6 max-w-[620px] px-5 text-[0.95rem] leading-[1.55] text-muted md:mb-[42px] md:px-0 md:text-base md:leading-[1.75]">
            The things that keep me curious, make me laugh, and occasionally leave me covered in sawdust.
          </p>
          <div className="mx-auto flex max-w-7xl flex-wrap items-start justify-center gap-x-12 gap-y-6 pb-2.5 md:gap-y-9">
            {hobbies.map((hobby, index) => (
              <div
                key={hobby.title}
                className="hobbies-card group relative w-full max-w-[360px] px-[7px] py-3.5 md:w-[calc(33.333%-2rem)] md:max-w-[350px] md:px-3.5 md:py-7"
                // A custom property, not `transform`: an inline transform would
                // outrank the :hover rule that straightens the photo.
                style={{ "--tilt": hobby.tilt } as CSSProperties}
              >
                <span
                  aria-hidden="true"
                  className="absolute top-7 right-5 z-[2] m-0 rounded-[5px] bg-sun px-[9px] py-[5px] font-mono text-[0.58rem] tracking-[0.04em] text-navy transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-rotate-6 group-hover:scale-110 md:top-9 md:right-7"
                >
                  {hobby.sticker}
                </span>
                <HobbyCard {...hobby} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default index;
