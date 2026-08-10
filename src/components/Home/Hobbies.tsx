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
  /** Photo height override; used when the source photo is too tall/narrow for the default crop. */
  imageHeight?: string;
  /** object-position override for the photo crop. */
  imagePosition?: string;
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
    imageHeight: "340px",
    imagePosition: "center bottom",
  },
  {
    image: rc_car,
    title: "Remote Control Anything",
    description: "Cars, drones, boats, If it has a remote, I want to drive it. Rex remains my most enthusiastic crash-test dummy.",
    sticker: "FULL SEND",
    tilt: "rotate(-1.5deg) translateY(13px)",
    imageHeight: "340px",
    imagePosition: "center 85%",
  },
];
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// -- Custom Functions

// Hobby card
function HobbyCard({ image, title, description, imageHeight, imagePosition }: Hobby) {
  return (
    <article className="card relative overflow-hidden rounded-[22px] border-2 border-[color-mix(in_srgb,var(--ink)_16%,transparent)] bg-surface shadow-[0_14px_0_color-mix(in_srgb,var(--primary-color)_22%,transparent),0_24px_36px_color-mix(in_srgb,var(--ink)_16%,transparent),inset_0_1px_0_rgba(255,255,255,.8)] transition-shadow duration-300 ease-[ease] motion-reduce:transition-none group-hover:shadow-[0_18px_30px_-12px_color-mix(in_srgb,var(--ink)_35%,transparent)]">
      <figure className="overflow-hidden rounded-t-[16px] rounded-b-[5px]">
        <img
          src={image}
          alt={title}
          style={{ height: imageHeight, objectPosition: imagePosition }}
          className="block h-[260px] w-full origin-center scale-100 object-cover object-center shadow-[inset_0_-3px_0_color-mix(in_srgb,var(--ink)_15%,transparent)] transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110 group-hover:rotate-1"
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
      <div className="hobbies-section relative overflow-hidden px-[14px] pt-[62px] pb-[46px] before:absolute before:top-[8%] before:left-[4%] before:grid before:size-[82px] before:place-items-center before:rounded-[22px_42px_28px_38px] before:border-[5px] before:border-sun before:bg-[linear-gradient(145deg,var(--coral),var(--primary-color))] before:text-[2.5rem] before:text-surface before:shadow-[0_7px_0_color-mix(in_srgb,var(--ink)_18%,transparent),inset_5px_5px_0_rgba(255,255,255,.25)] before:content-['★'] before:[transform:rotate(-15deg)] max-md:before:hidden after:absolute after:right-[4%] after:bottom-[8%] after:animate-[hobbies-sticker-float_5s_ease-in-out_infinite] after:rounded-[5px] after:border-2 after:border-[color-mix(in_srgb,var(--ink)_20%,transparent)] after:bg-[linear-gradient(180deg,var(--sun),color-mix(in_srgb,var(--sun)_72%,var(--coral)))] after:px-[14px] after:py-[10px] after:font-mono after:text-[.6rem] after:text-[#172b40] after:shadow-[0_4px_0_color-mix(in_srgb,var(--ink)_18%,transparent)] after:content-['GOOD_VIBES_ONLY'] after:[transform:rotate(7deg)] max-md:after:hidden motion-reduce:after:animate-none md:px-5 md:pt-[125px] md:pb-[100px]">
        <div className="mx-auto max-w-7xl">
          <span className="mb-3 block text-center font-mono text-[0.7rem] tracking-[0.13em] text-signal uppercase">
            When the laptop is closed
            <span className="mx-auto mt-1.5 [display:table] rotate-[-2deg] rounded-md border-[1.5px] border-dashed border-signal bg-[color-mix(in_srgb,var(--primary-color)_12%,transparent)] px-2.5 py-[3px] font-display text-[0.8rem] font-semibold tracking-normal normal-case italic">
              Just kidding, it's always open
            </span>
          </span>
          <h1 className="main-heading max-md:px-5">
            My <strong className="text-signal">Hobbies </strong>
          </h1>
          <p className="mx-auto mt-[18px] mb-6 max-w-[620px] px-5 text-[0.95rem] leading-[1.55] text-muted md:mb-[42px] md:px-0 md:text-base md:leading-[1.75]">
            The things that keep me curious, make me laugh, and occasionally leave me covered in sawdust.
          </p>
          <div className="mx-auto flex max-w-7xl flex-wrap items-start justify-center gap-x-12 gap-y-6 pb-2.5 md:gap-y-9">
            {hobbies.map((hobby, index) => (
              <div
                key={hobby.title}
                className="group relative w-full max-w-[360px] px-[7px] py-3.5 [transform:none] transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:z-[4] hover:[transform:translateY(-5px)_scale(1.02)] md:w-[calc(33.333%-2rem)] md:max-w-[350px] md:px-3.5 md:py-7 md:[transform:var(--tilt,none)] md:hover:[transform:translateY(-10px)_scale(1.04)_rotate(0deg)]"
                // A custom property, not `transform`: an inline transform would
                // outrank the hover rule that straightens the photo.
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
