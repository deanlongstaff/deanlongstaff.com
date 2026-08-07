/**
 * DESCRIPTION: This is the navbar component that is used to display the navbar on the page.
 *
 * Author: Dean Longstaff
 */
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----- Import the required modules

import { useEffect, useState } from "react";
import { Link } from 'react-scroll';

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----- Import icons

import { FaGithub } from "react-icons/fa";
import { FaPersonSkiing } from "react-icons/fa6";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { MdOutlineHomeWork, MdOutlineAutoAwesome } from "react-icons/md";
import ThemeToggle from "./ThemeToggle";
import { getAge } from "../utils/age";

type NavbarProps = {
    onLock: () => void;
    onShutdown: () => void;
};
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----- Define the navbar items

const navbarItems = [
    {
        name: "Welcome",
        icon: <AiOutlineHome style={{ marginBottom: "2px" }} />,
        to: "welcome",
    },
    {
        name: "About Me",
        icon: <AiOutlineUser style={{ marginBottom: "2px" }} />,
        to: "aboutme",
    },
    {
        name: "My Work",
        icon: <MdOutlineHomeWork style={{ marginBottom: "2px" }} />,
        to: "mywork",
    },
    {
        name: "Side Projects",
        icon: <MdOutlineAutoAwesome style={{ marginBottom: "2px" }} />,
        to: "sideprojects",
    },
    {
        name: "My Hobbies",
        icon: <FaPersonSkiing style={{ marginBottom: "2px" }} />,
        to: "hobbies",
    }
];

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----- Define the NavBar component

function NavBar({ onLock, onShutdown }: NavbarProps) {
    const [navColour, updateNavbar] = useState(false);
    const [startOpen, updateStartOpen] = useState(false);

    // Bind once: registering on every render leaked a listener per re-render.
    useEffect(() => {
        const scrollHandler = () => updateNavbar(window.scrollY >= 20);
        window.addEventListener("scroll", scrollHandler, { passive: true });
        scrollHandler();
        return () => window.removeEventListener("scroll", scrollHandler);
    }, []);

    return (
        <nav className={`navbar fixed inset-x-0 top-0 z-50 w-full px-3 py-2 text-[1.4rem] backdrop-blur-[18px] transition-all duration-300 ease-[ease-out] max-md:bg-paper shadow-[0_2px_0_color-mix(in_srgb,var(--surface)_90%,transparent),0_12px_28px_color-mix(in_srgb,var(--ink)_12%,transparent)] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:opacity-[0.72] before:content-[''] before:bg-[linear-gradient(90deg,transparent,color-mix(in_srgb,var(--secondary-color)_38%,transparent)_28%,color-mix(in_srgb,var(--sun)_44%,transparent)_72%,transparent)] md:px-4 md:py-[0.65rem] md:text-[1.2rem] md:bg-[linear-gradient(180deg,rgba(255,255,255,0.82)_0%,rgba(255,255,255,0.22)_13%,transparent_34%),linear-gradient(180deg,color-mix(in_srgb,var(--surface)_94%,var(--secondary-color))_0%,color-mix(in_srgb,var(--paper)_96%,var(--sun))_100%)] ${navColour ? "is-scrolled" : ""}`}>
            <div className="mx-auto grid w-full items-center justify-between gap-2 max-md:grid-cols-[minmax(0,1fr)_auto_auto] md:flex md:flex-wrap md:gap-3 md:px-6 desk:w-[60vw]">
                <a href="/" className="inline-flex items-center font-display max-md:min-w-0 text-[1.15rem] font-bold tracking-[-0.04em] text-ink [text-shadow:0_1px_0_rgba(255,255,255,.8)] md:text-[length:inherit]">
                    <span className="max-md:whitespace-nowrap"><span aria-hidden="true" className="mr-1 inline-block rotate-[-12deg] text-[0.8em] text-sun md:mr-2">✦</span>Dean Longstaff</span>
                    <span className="ml-3 hidden items-center gap-1.5 rounded border border-[color-mix(in_srgb,var(--secondary-color)_40%,var(--line))] px-[7px] py-[5px] font-mono text-[0.52rem] font-medium tracking-[0.08em] text-muted bg-[linear-gradient(180deg,color-mix(in_srgb,var(--surface)_94%,white),color-mix(in_srgb,var(--surface-soft)_62%,var(--surface)))] shadow-[1px_1px_0_rgba(255,255,255,.9),inset_0_1px_0_rgba(255,255,255,.85),inset_0_-1px_0_color-mix(in_srgb,var(--ink)_8%,transparent)] md:inline-flex">DEAN_OS <i className="text-[0.46rem] tracking-[0.1em] text-signal not-italic">ONLINE</i></span>
                </a>
                <div className="relative z-[21] md:ml-auto">
                    <button
                        type="button"
                        className={`inline-flex cursor-pointer items-center gap-1.5 rounded-[5px] border-2 border-ink px-2 py-1.5 font-mono text-[0.52rem] font-medium tracking-[0.08em] text-navy bg-[linear-gradient(180deg,color-mix(in_srgb,var(--sun)_88%,white)_0%,var(--sun)_44%,color-mix(in_srgb,var(--sun)_72%,var(--coral))_100%)] transition-[transform,box-shadow,filter] duration-[140ms] ease-[ease] hover:-translate-y-px hover:saturate-[1.12] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0_color-mix(in_srgb,var(--ink)_25%,transparent),inset_0_1px_0_rgba(255,255,255,.55)] md:px-2.5 md:py-2 md:text-[0.62rem] ${startOpen ? "translate-x-0.5 translate-y-0.5 shadow-[1px_1px_0_color-mix(in_srgb,var(--ink)_25%,transparent),inset_0_1px_0_rgba(255,255,255,.55)]" : "shadow-[3px_3px_0_color-mix(in_srgb,var(--ink)_25%,transparent),inset_0_2px_0_rgba(255,255,255,.82),inset_0_-2px_0_color-mix(in_srgb,var(--coral)_28%,transparent)]"}`}
                        aria-expanded={startOpen}
                        aria-controls="dean-os-start-menu"
                        onClick={() => updateStartOpen(!startOpen)}
                    >
                        <span aria-hidden="true" className="text-[0.85rem] text-signal">✦</span> START
                    </button>
                    {startOpen && (
                        <div className="animate-[os-menu-in_160ms_ease-out_both] absolute top-[calc(100%+7px)] right-0 w-[min(290px,calc(100vw-2rem))] overflow-hidden rounded-[7px] border-2 border-ink bg-surface shadow-[7px_8px_0_var(--primary-color),0_18px_30px_color-mix(in_srgb,var(--ink)_22%,transparent),inset_0_1px_0_rgba(255,255,255,.85)] md:top-[calc(100%+10px)]" id="dean-os-start-menu">
                            <div className="flex justify-between bg-[linear-gradient(135deg,var(--ink),color-mix(in_srgb,var(--ink)_76%,var(--secondary-color)))] px-3 py-[11px] font-mono text-[0.62rem] tracking-[0.08em] text-surface">
                                <span>DEAN_OS // NAVIGATOR</span>
                                <i className="text-sun not-italic">v{getAge()}</i>
                            </div>
                            <div className="flex items-center gap-[7px] px-3 pt-2.5 pb-[7px] font-mono text-[0.55rem] tracking-[0.08em] text-muted"><span className="size-[7px] rounded-[50%] bg-[#55bf7d] shadow-[0_0_0_3px_rgba(85,191,125,.16)]" /> SYSTEM READY</div>
                            <div className="px-2 pt-1 pb-[9px]">
                                {navbarItems.map(item => (
                                    <Link
                                        key={`start-${item.to}`}
                                        className="flex items-center cursor-pointer gap-2.5 rounded px-2 py-[9px] text-[0.82rem] font-semibold text-ink no-underline transition-[color,background,padding] duration-[120ms] ease-[ease] hover:bg-[color-mix(in_srgb,var(--primary-color)_12%,transparent)] hover:pl-3 hover:text-signal-deep"
                                        to={item.to}
                                        duration={1000}
                                        spy={true}
                                        onClick={() => updateStartOpen(false)}
                                    >
                                        <span className="grid w-[22px] place-items-center text-signal [&_svg]:size-4">{item.icon}</span>
                                        <span>{item.name}</span>
                                        <span className="ml-auto font-mono text-[1.2rem] leading-[.7] text-aqua">›</span>
                                    </Link>
                                ))}
                            </div>
                            <div className="grid grid-cols-[1fr_1.35fr] gap-1.5 px-2 pb-[9px]">
                                <button type="button" className="inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-[3px] border border-line px-[5px] py-[7px] font-mono text-[0.5rem] tracking-[0.06em] text-muted bg-[color-mix(in_srgb,var(--surface-soft)_58%,transparent)] transition-[color,background,transform] duration-[120ms] ease-[ease] hover:-translate-y-px hover:bg-[color-mix(in_srgb,var(--sun)_22%,var(--surface))] hover:text-signal-deep" onClick={() => { updateStartOpen(false); onLock(); }}>
                                    <span aria-hidden="true">▣</span> LOCK
                                </button>
                                <button type="button" className="inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-[3px] border border-line px-[5px] py-[7px] font-mono text-[0.5rem] tracking-[0.06em] text-muted bg-[color-mix(in_srgb,var(--surface-soft)_58%,transparent)] transition-[color,background,transform] duration-[120ms] ease-[ease] hover:-translate-y-px hover:bg-[color-mix(in_srgb,var(--sun)_22%,var(--surface))] hover:text-signal-deep hover:!bg-signal hover:!text-surface" onClick={() => { updateStartOpen(false); onShutdown(); }}>
                                    <span aria-hidden="true">⏻</span> SHUT DOWN
                                </button>
                            </div>
                            <div className="bg-ink px-3 py-[9px] font-mono text-[0.48rem] tracking-[0.07em] text-[color-mix(in_srgb,var(--surface)_78%,transparent)]">PRESS A DESTINATION TO CONTINUE</div>
                        </div>
                    )}
                </div>
                <div className="flex items-center gap-1 md:ml-3.5 md:gap-2.5">
                    <div className="flex h-8 items-center justify-center md:ml-3 md:h-auto md:justify-normal"><ThemeToggle /></div>
                    <div className="flex h-8 items-center text-[1.1em] md:h-[38px]">
                        <a href="https://github.com/deanlongstaff" target="_blank" rel="noopener noreferrer" className="grid size-8 shrink-0 cursor-pointer touch-manipulation place-items-center justify-center gap-1.5 rounded-[50%] p-1 align-middle text-[14px] leading-[1.4em] font-semibold text-ink select-none outline-signal outline-offset-2 bg-[linear-gradient(145deg,color-mix(in_srgb,var(--primary-color)_82%,white),var(--primary-color))] shadow-[0_3px_0_color-mix(in_srgb,var(--ink)_22%,transparent),inset_0_1px_0_rgba(255,255,255,.65)] transition-[color,background-color,border-color,box-shadow,transform] duration-200 ease-[cubic-bezier(0,0,0.2,1)] active:translate-y-0.5 active:shadow-[0_1px_0_color-mix(in_srgb,var(--ink)_22%,transparent),inset_0_1px_0_rgba(255,255,255,.45)] [&_svg]:m-auto [&_svg]:block md:size-[38px]" aria-label="GitHub">
                            <FaGithub aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
