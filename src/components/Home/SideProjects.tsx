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
      className="side-projects-section relative overflow-hidden px-[14px] pt-[58px] pb-[50px] text-ink md:px-5 md:py-[120px]"
    >
      <div className="side-projects-dots absolute inset-0 opacity-[0.18]" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-[180px] -left-[150px] size-[420px] rounded-[50%] bg-[rgba(144,199,236,0.3)] blur-[75px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-[180px] -bottom-[210px] size-[420px] rounded-[50%] bg-[rgba(147,221,156,0.28)] blur-[75px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl">
        <p className="m-0 mb-2 text-[0.8rem] font-bold tracking-[0.14em] text-bin uppercase">A little something I built</p>
        <h1 className="main-heading">
          Side <strong className="text-bin">Projects</strong>
        </h1>
        <p className="mx-auto mt-[14px] mb-[26px] max-w-[620px] px-1 text-[0.95rem] leading-[1.55] text-muted md:mb-[42px] md:px-0 md:text-base md:leading-[1.7]">
          Useful ideas, made real. One side quest that escaped the notebook and became something handy.
        </p>

        <article className="binminder-card grid grid-cols-1 items-center gap-[22px] overflow-hidden rounded-[18px] border border-line bg-[linear-gradient(135deg,var(--surface)_0%,var(--surface-soft)_100%)] px-4 py-6 text-left shadow-[0_20px_60px_rgba(23,51,42,0.12)] md:grid-cols-[1.1fr_0.9fr] md:gap-9 md:rounded-[28px] md:px-[58px] md:py-[52px]">
          <div>
            <div className="flex items-center gap-2.5 text-[1.35rem] font-extrabold tracking-[-0.04em] text-bin-deep">
              <img src={binminderMark} alt="" className="size-[38px] rounded-[11px]" />
              <span>binminder</span>
            </div>
            <span className="badge mt-[26px] h-6 min-h-0 gap-2 rounded-[999px] border border-[rgba(24,122,90,0.2)] bg-[rgba(24,122,90,0.08)] px-3 py-[7px] align-middle text-[0.75rem] leading-[1.5] font-bold text-bin outline-bin">
              <span className="size-[7px] rounded-[50%] bg-bin" /> Launching August 2026
            </span>
            <h2 className="mt-[18px] mb-3 text-[2rem] leading-[1.05] tracking-[-0.055em] text-ink md:text-[clamp(2rem,4vw,3.35rem)]">
              Never miss <span className="text-bin">bin day</span> again.
            </h2>
            <p className="max-w-[500px] text-[0.95rem] leading-[1.55] text-muted md:text-base md:leading-[1.7]">
              Keep your local bin collections in reach with live updates, reminders, widgets and shortcuts.
            </p>
            <div className="mt-6 mb-7 flex flex-wrap gap-x-[14px] gap-y-[9px] md:gap-2.5">
              {highlights.map((highlight) => (
                <div className="inline-flex items-center gap-[7px] text-[0.8rem] text-muted" key={highlight.label}>
                  <span className="inline-grid size-[27px] place-items-center rounded-[50%] bg-[color-mix(in_srgb,var(--primary-color)_18%,transparent)] text-base text-signal-deep">
                    {highlight.icon}
                  </span>
                  <span>{highlight.label}</span>
                </div>
              ))}
            </div>
            <a
              className="inline-flex h-10 min-h-0 shrink-0 cursor-pointer touch-manipulation items-center justify-center gap-2 rounded-[999px] select-none outline-offset-2 border-[3px] border-white bg-bin px-[17px] py-3 text-center align-middle text-[0.9rem] leading-[1.5] font-bold text-white no-underline outline-signal transition-[transform,background] duration-[180ms] ease-[ease] hover:-translate-y-0.5 hover:bg-bin-deep hover:text-white"
              href="https://binminder.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit binminder.app <HiArrowUpRight aria-hidden="true" />
            </a>
          </div>

          <div className="binminder-preview flex h-[280px] min-h-0 items-center justify-center self-stretch overflow-hidden rounded-2xl md:h-[430px] md:rounded-[22px]" aria-hidden="true">
            <div className="h-[245px] w-auto max-w-[86%] rotate-2 overflow-hidden rounded-[30px] border-[6px] border-bin-ink bg-bone shadow-[0_18px_30px_rgba(23,51,42,0.25)] [aspect-ratio:1320/2868] md:h-[min(360px,100%)] md:rotate-[4deg]">
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
