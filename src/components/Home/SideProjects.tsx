import { HiArrowUpRight } from "react-icons/hi2";
import { MdCalendarMonth, MdNotificationsActive, MdWidgets } from "react-icons/md";
import binminderMark from "../../assets/images/binminder-mark.svg";
import binminderToday from "../../assets/images/binminder-today.png";

const highlights = [
  { icon: <MdCalendarMonth />, label: "Live collection dates" },
  { icon: <MdNotificationsActive />, label: "Helpful reminders" },
  { icon: <MdWidgets />, label: "Widgets & Shortcuts" },
];

function SideProjects() {
  return (
    <section
      id="sideprojects"
      className="side-projects-section relative overflow-hidden px-[14px] pt-[58px] pb-[50px] text-ink after:absolute after:top-[10%] after:left-[3%] after:grid after:size-[74px] after:animate-[side-project-sticker-float_5s_ease-in-out_infinite] after:place-items-center after:rounded-full after:border-4 after:border-sun after:bg-signal after:font-display after:text-base after:font-bold after:tracking-[.08em] after:text-surface after:shadow-[0_6px_0_color-mix(in_srgb,var(--ink)_18%,transparent),inset_4px_4px_0_rgba(255,255,255,.25)] after:content-['PLAY'] after:[transform:rotate(-12deg)] max-md:after:hidden motion-reduce:after:animate-none md:px-5 md:py-[120px]"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(var(--secondary-color)_1px,transparent_1px)] bg-[length:32px_32px] opacity-[0.18] [mask-image:linear-gradient(to_bottom,black_5%,transparent_85%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">
        <p className="m-0 mb-2 text-[0.8rem] font-bold tracking-[0.14em] text-bin uppercase">A little something I built</p>
        <h1 className="main-heading">
          Side <strong className="text-bin">Projects</strong>
        </h1>
        <p className="mx-auto mt-[14px] mb-[26px] max-w-[620px] px-1 text-[0.95rem] leading-[1.55] text-muted md:mb-[42px] md:px-0 md:text-base md:leading-[1.7]">
          Useful ideas, made real. One side quest that escaped the notebook and became something handy.
        </p>

        <article className="relative grid grid-cols-1 items-center gap-[22px] overflow-hidden rounded-[18px] border-[3px] border-ink bg-[linear-gradient(105deg,color-mix(in_srgb,var(--surface)_94%,var(--sun))_0_56%,color-mix(in_srgb,var(--surface-soft)_92%,var(--secondary-color))_56%_100%),linear-gradient(color-mix(in_srgb,var(--secondary-color)_8%,transparent)_1px,transparent_1px)] bg-[size:auto,100%_28px] bg-[position:0_0,0_22px] px-4 pt-[54px] pb-6 text-left shadow-[9px_10px_0_color-mix(in_srgb,var(--primary-color)_42%,transparent),0_24px_40px_color-mix(in_srgb,var(--ink)_16%,transparent),inset_0_2px_0_rgba(255,255,255,.78)] transition-[transform,box-shadow] duration-[180ms] ease-[ease] rotate-[-.45deg] max-md:rotate-0 hover:-translate-y-0.5 hover:rotate-[-.2deg] hover:shadow-[12px_13px_0_color-mix(in_srgb,var(--primary-color)_48%,transparent),0_28px_44px_color-mix(in_srgb,var(--ink)_18%,transparent),inset_0_2px_0_rgba(255,255,255,.78)] before:absolute before:inset-x-0 before:top-0 before:h-[35px] before:px-[14px] before:py-[10px] before:text-left before:font-mono before:text-[.42rem] before:tracking-[.04em] before:text-surface before:bg-[linear-gradient(180deg,var(--ink),color-mix(in_srgb,var(--ink)_80%,var(--secondary-color)))] before:border-b-2 before:border-ink before:content-['SIDE_QUEST.EXE_//_BINMINDER.APP'] md:grid-cols-[1.05fr_0.95fr] md:gap-9 md:rounded-3xl md:px-[58px] md:pt-[72px] md:pb-[52px] md:before:text-[.52rem] md:before:tracking-[.07em]">
          <div className="relative z-[1]">
            <div className="flex items-center gap-2.5 text-[1.35rem] font-extrabold tracking-[-0.04em] text-bin-deep">
              <img src={binminderMark} alt="" className="size-[38px] rounded-[11px] border border-[color-mix(in_srgb,var(--bin)_20%,transparent)] shadow-[3px_3px_0_color-mix(in_srgb,var(--sun)_55%,transparent),inset_0_1px_0_rgba(255,255,255,.7)]" />
              <span>binminder</span>
            </div>
            <h2 className="mt-[18px] mb-3 text-[2rem] leading-[1.05] tracking-[-0.055em] text-ink md:text-[clamp(2rem,4vw,3.35rem)]">
              Never miss <span className="text-bin">bin day</span> again.
            </h2>
            <p className="max-w-[500px] text-[0.95rem] leading-[1.55] text-muted md:text-base md:leading-[1.7]">
              Keep your local bin collections in reach with live updates, reminders, widgets and shortcuts.
            </p>
            <div className="mt-6 mb-7 flex flex-wrap gap-x-[14px] gap-y-[9px] md:gap-2.5">
              {highlights.map((highlight) => (
                <div className="inline-flex items-center gap-[7px] text-[0.8rem] text-muted" key={highlight.label}>
                  <span className="inline-grid size-[27px] place-items-center rounded-[7px] border border-[color-mix(in_srgb,var(--primary-color)_20%,transparent)] bg-[color-mix(in_srgb,var(--primary-color)_15%,var(--surface))] text-base text-signal-deep shadow-[0_2px_0_color-mix(in_srgb,var(--primary-color)_20%,transparent)]">
                    {highlight.icon}
                  </span>
                  <span>{highlight.label}</span>
                </div>
              ))}
            </div>
            <a
              className="inline-flex h-10 min-h-0 shrink-0 cursor-pointer touch-manipulation items-center justify-center gap-2 rounded-[5px] select-none outline-offset-2 border-[3px] border-surface bg-bin px-[17px] py-3 text-center align-middle text-[0.9rem] leading-[1.5] font-bold text-white no-underline outline-signal transition-[transform,background] duration-[180ms] ease-[ease] hover:-translate-y-0.5 hover:bg-bin-deep hover:text-white"
              href="https://binminder.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit binminder.app <HiArrowUpRight aria-hidden="true" />
            </a>
          </div>

          <div className="relative isolate flex h-[280px] min-h-0 items-center justify-center self-stretch overflow-visible before:absolute before:inset-[5%_1%_3%] before:-z-[1] before:rounded-[42%_58%_49%_51%/52%_43%_57%_48%] before:border-2 before:border-[color-mix(in_srgb,var(--secondary-color)_34%,var(--ink))] before:bg-[radial-gradient(circle_at_36%_18%,color-mix(in_srgb,var(--surface)_65%,transparent)_0_4rem,transparent_11rem),linear-gradient(145deg,color-mix(in_srgb,var(--secondary-color)_28%,var(--surface-soft)),color-mix(in_srgb,var(--sun)_22%,var(--surface)))] before:shadow-[inset_0_2px_5px_color-mix(in_srgb,var(--ink)_12%,transparent),7px_8px_0_color-mix(in_srgb,var(--primary-color)_34%,transparent)] before:content-[''] before:[transform:rotate(-4deg)] md:h-[430px]" aria-hidden="true">
            <div className="relative z-[1] h-[265px] w-auto max-w-[86%] rotate-2 overflow-hidden rounded-[30px] border-[6px] border-bin-ink bg-bone shadow-[10px_13px_0_color-mix(in_srgb,var(--primary-color)_42%,transparent),0_22px_28px_color-mix(in_srgb,var(--ink)_27%,transparent),inset_2px_2px_0_rgba(255,255,255,.55)] [aspect-ratio:1320/2868] md:h-[min(390px,100%)] md:rotate-[4deg]">
              <img
                src={binminderToday}
                alt="Binminder Today screen showing the next collection and upcoming bin days"
                className="block size-full object-contain"
              />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default SideProjects;
