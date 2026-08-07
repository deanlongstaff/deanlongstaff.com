/**
 * DESCRIPTION: Preloader shown while the page loads, plus the lock/shutdown screens.
 *
 * Author: Dean Longstaff
 */
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----- Import Images

import { useEffect, useState } from "react";
import photo from "../assets/images/me.jpeg";

// ----- Define the Preloader component

type PreloaderProps = {
    load: boolean;
    mode?: "ready" | "locked" | "shutdown";
    onWake?: () => void;
};

// -- Must stay in sync with the progress bar's CSS animation duration/easing (Preloader.css)
const PRELOAD_DURATION_MS = 4000;
const PRELOAD_EASING: [number, number, number, number] = [0.25, 0.8, 0.25, 1];

// -- Evaluate a cubic-bezier(x1, y1, x2, y2) easing curve at time fraction t, matching CSS
function cubicBezierEase(t: number, [x1, y1, x2, y2]: [number, number, number, number]) {
    const cx = 3 * x1;
    const bx = 3 * (x2 - x1) - cx;
    const ax = 1 - cx - bx;
    const cy = 3 * y1;
    const by = 3 * (y2 - y1) - cy;
    const ay = 1 - cy - by;

    const sampleX = (u: number) => ((ax * u + bx) * u + cx) * u;
    const sampleY = (u: number) => ((ay * u + by) * u + cy) * u;

    let u = t;
    for (let i = 0; i < 8; i++) {
        const x = sampleX(u) - t;
        if (Math.abs(x) < 1e-4) break;
        const derivative = (3 * ax * u + 2 * bx) * u + cx;
        if (Math.abs(derivative) < 1e-6) break;
        u -= x / derivative;
    }

    return sampleY(u);
}

// -- How long the "SHUTTING DOWN..." card sits before the CRT-off animation plays
const SHUTDOWN_WINDOW_MS = 1400;
// -- Must match the crt-off keyframe duration below
const CRT_OFF_DURATION_MS = 480;
// -- Must match the crt-on keyframe duration below
const CRT_ON_DURATION_MS = 520;
// -- Must match the container's own opacity transition duration (the `duration-[360ms]` below)
const PRELOADER_FADE_MS = 360;

function Preloader({ load, mode = "ready", onWake }: PreloaderProps) {
    const visible = load || mode !== "ready";
    const isLocked = mode === "locked";
    const isShutdown = mode === "shutdown";
    const [progress, setProgress] = useState(0);
    const [shutdownPhase, setShutdownPhase] = useState<"window" | "collapsing" | "off" | "poweron">("window");

    // -- Sequence the shutdown screen: card, then CRT collapse, then a dark "no signal" screen
    useEffect(() => {
        if (mode !== "shutdown") return;

        const toCollapse = setTimeout(() => setShutdownPhase("collapsing"), SHUTDOWN_WINDOW_MS);
        const toOff = setTimeout(() => setShutdownPhase("off"), SHUTDOWN_WINDOW_MS + CRT_OFF_DURATION_MS);

        return () => {
            clearTimeout(toCollapse);
            clearTimeout(toOff);
        };
    }, [mode]);

    // -- Once we've left shutdown mode, hold the current shutdown visual (rather than snapping
    // back to the startup card) until the container's own fade-out has finished, so waking up
    // reads as one continuous dissolve instead of a jump-cut.
    useEffect(() => {
        if (mode === "shutdown" || shutdownPhase === "window") return;

        const toReset = setTimeout(() => setShutdownPhase("window"), PRELOADER_FADE_MS);
        return () => clearTimeout(toReset);
    }, [mode, shutdownPhase]);

    // -- Play the CRT power-on flash before actually waking the site
    useEffect(() => {
        if (shutdownPhase !== "poweron") return;

        const toWake = setTimeout(() => onWake?.(), CRT_ON_DURATION_MS);
        return () => clearTimeout(toWake);
    }, [shutdownPhase, onWake]);

    const handlePowerOn = () => {
        if (shutdownPhase !== "off") return;
        setShutdownPhase("poweron");
    };

    const isOff = shutdownPhase === "off" || shutdownPhase === "poweron";

    // -- Count the progress label up to 100% using the same duration/easing as the progress bar
    useEffect(() => {
        const start = performance.now();
        let frame: number;

        const tick = (now: number) => {
            const t = Math.min(1, (now - start) / PRELOAD_DURATION_MS);
            const percent = Math.round(cubicBezierEase(t, PRELOAD_EASING) * 100);
            setProgress(Math.min(100, Math.max(0, percent)));

            if (t < 1) {
                frame = requestAnimationFrame(tick);
            }
        };

        frame = requestAnimationFrame(tick);

        return () => cancelAnimationFrame(frame);
    }, []);

    return (
        <div
            id={visible ? "preloader" : "preloader-none"}
            className={`fixed top-0 left-0 z-[999999] grid size-full place-items-center overflow-hidden transition-[opacity,visibility,background] duration-[360ms] ease-[ease] ${isOff ? "bg-black" : "bg-[radial-gradient(circle_at_50%_42%,color-mix(in_srgb,var(--secondary-color)_19%,transparent),transparent_25rem),linear-gradient(135deg,color-mix(in_srgb,var(--paper)_88%,var(--secondary-color)),var(--paper))]"} ${visible ? "" : "invisible pointer-events-none opacity-0"}`}
            aria-hidden={!visible}
        >
            {isOff ? (
                shutdownPhase === "off" ? (
                    <ShutdownOffScreen onWake={handlePowerOn} />
                ) : (
                    <PowerOnFlash />
                )
            ) : (
                <>
                    {/* Slowly rotating dashed ring behind the window. */}
                    <div className="pointer-events-none absolute size-[min(65vw,42rem)] animate-[preloader-spin_18s_linear_infinite] rounded-[50%] border border-dashed border-[color-mix(in_srgb,var(--primary-color)_45%,transparent)] motion-reduce:animate-none" aria-hidden="true" />
                    {/* CRT scanlines. */}
                    <div className="pointer-events-none absolute inset-0 opacity-[.55] bg-[repeating-linear-gradient(0deg,transparent_0_3px,color-mix(in_srgb,var(--ink)_4%,transparent)_4px_5px)]" aria-hidden="true" />
                    <div className="absolute inset-0 opacity-[.14] bg-[radial-gradient(color-mix(in_srgb,var(--ink)_13%,transparent)_.7px,transparent_.7px)] bg-[length:5px_5px]" aria-hidden="true" />
                    <div className={`relative z-[1] w-[min(90vw,610px)] overflow-hidden rounded-[14px] border-2 border-[color-mix(in_srgb,var(--ink)_75%,transparent)] bg-surface shadow-[0_8px_0_color-mix(in_srgb,var(--ink)_25%,transparent),0_25px_55px_color-mix(in_srgb,var(--ink)_24%,transparent),inset_0_1px_0_rgba(255,255,255,.9)] motion-reduce:animate-none ${shutdownPhase === "collapsing" ? "animate-[crt-off_480ms_cubic-bezier(.4,0,1,1)_forwards]" : "[transform:rotate(-1.2deg)] animate-[preloader-window-in_560ms_cubic-bezier(.2,.8,.2,1)_both]"}`} role="status" aria-label={isLocked ? "Dean OS is locked" : isShutdown ? "Dean OS is shutting down" : "Loading Dean Longstaff's website"}>
                        <div className="flex min-h-[37px] items-center gap-2 bg-[linear-gradient(180deg,var(--primary-color),var(--primary-deep))] px-3 font-mono text-[0.62rem] tracking-[0.08em] text-surface [text-shadow:0_1px_0_color-mix(in_srgb,var(--ink)_28%,transparent)]">
                            <span className="text-[1rem] text-sun">✦</span>
                            <span>{isLocked ? "DEAN_OS // LOCKED" : isShutdown ? "DEAN_OS // SHUTDOWN" : "DEAN_OS // STARTUP"}</span>
                            <span className="ml-auto flex gap-[5px]" aria-hidden="true">
                                <i className="size-[9px] rounded-[50%] border border-[color-mix(in_srgb,var(--ink)_38%,transparent)] bg-sun shadow-[inset_1px_1px_0_rgba(255,255,255,.7)]" />
                                <i className="size-[9px] rounded-[50%] border border-[color-mix(in_srgb,var(--ink)_38%,transparent)] bg-aqua shadow-[inset_1px_1px_0_rgba(255,255,255,.7)]" />
                                <i className="size-[9px] rounded-[50%] border border-[color-mix(in_srgb,var(--ink)_38%,transparent)] bg-coral shadow-[inset_1px_1px_0_rgba(255,255,255,.7)]" />
                            </span>
                        </div>

                        <div className="flex flex-col items-start gap-6 px-[26px] pt-[34px] pb-[30px] min-[561px]:flex-row min-[561px]:items-center min-[561px]:gap-[22px] min-[561px]:px-11 min-[561px]:pt-[42px] min-[561px]:pb-9">
                            <div className="relative grid h-[84px] w-[72px] basis-[72px] rotate-[5deg] place-items-center overflow-hidden rounded-[22px_30px_18px_32px] border-4 border-ink bg-[linear-gradient(145deg,var(--secondary-color),#258aa4)] font-display text-[1.65rem] font-bold tracking-[-.12em] text-surface shadow-[5px_6px_0_color-mix(in_srgb,var(--ink)_22%,transparent),inset_5px_5px_0_rgba(255,255,255,.28),inset_-5px_-6px_0_rgba(23,43,64,.14)] shrink-0 grow-0 min-[561px]:h-[108px] min-[561px]:w-auto min-[561px]:basis-[92px] min-[561px]:text-[2.05rem]" aria-hidden="true">
                                <span className="absolute -top-[21px] -right-3 animate-[preloader-bob_1.2s_ease-in-out_infinite] text-[1.7rem] text-coral [text-shadow:2px_2px_0_var(--ink)] motion-reduce:animate-none">✦</span>
                                <img src={photo} alt="" fetchPriority="high" decoding="sync" className="size-full rounded-[18px_26px_14px_28px] object-cover [object-position:center_bottom]" />
                            </div>
                            <div className="text-left">
                                <p className="m-0 mb-2.5 font-mono text-[0.66rem] font-medium tracking-[0.13em] text-signal-deep">{isLocked ? "PERSONAL WORKSPACE // DEAN.EXE NAPPING" : isShutdown ? "PERSONAL WORKSPACE // DEAN.EXE HAS LEFT THE CHAT" : "WELCOME, FELLOW CURIOUS HUMAN"}</p>
                                <h1 className="m-0 font-display text-[clamp(1.65rem,5vw,2.45rem)] leading-none tracking-[-.07em] text-ink [&_span]:text-signal">{isLocked ? <>Dean.exe <span>deactivated</span></> : isShutdown ? <>Dean.exe <span>taking five</span></> : <>Loading <span>Dean&apos;s world</span><b className="animate-[preloader-blink_.8s_steps(2,jump-none)_infinite] font-medium text-aqua motion-reduce:animate-none">_</b></>}</h1>
                                <p className="mt-4 mb-0 flex items-center gap-[7px] font-mono text-[0.72rem] text-muted"><span className="size-[7px] shrink-0 animate-[preloader-pulse_1s_ease-in-out_infinite] rounded-[50%] bg-aqua shadow-[0_0_0_4px_color-mix(in_srgb,var(--secondary-color)_20%,transparent)] motion-reduce:animate-none" /> {isLocked ? "waiting for a reason to exist..." : isShutdown ? "going dark..." : <>preparing to <span>shine</span>...</>}</p>
                                {isLocked && (
                                    <button type="button" className="mt-[18px] inline-flex cursor-pointer items-center gap-2 rounded border-2 border-ink bg-[linear-gradient(180deg,var(--sun),color-mix(in_srgb,var(--sun)_75%,var(--coral)))] px-3 py-[9px] font-mono text-[0.52rem] tracking-[0.08em] text-ink shadow-[3px_3px_0_color-mix(in_srgb,var(--ink)_22%,transparent),inset_0_1px_0_rgba(255,255,255,.7)] transition-[transform,box-shadow] duration-[120ms] ease-[ease] hover:-translate-y-px active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0_color-mix(in_srgb,var(--ink)_22%,transparent)] min-[561px]:text-[0.58rem]" onClick={onWake}>
                                        <span>{isLocked ? "↻" : "▶"}</span> {isLocked ? "WAKE DEAN.EXE" : "REBOOT THE CHAOS"}
                                    </button>
                                )}
                            </div>
                        </div>

                        <div className="px-[26px] pb-[22px] min-[561px]:px-11 min-[561px]:pb-[25px]">
                            <div className="mb-2 flex justify-between font-mono text-[0.62rem] tracking-[0.08em] text-muted">
                                <span>{isLocked ? "DEAN.EXE" : isShutdown ? "PUTTING DEAN.EXE TO BED" : "BOOTING DEAN.EXE"}</span>
                                <span>{isLocked || isShutdown ? "STOPPED" : `${progress}%`}</span>
                            </div>
                            <div className="h-4 rounded border-2 border-[color-mix(in_srgb,var(--ink)_26%,transparent)] bg-[color-mix(in_srgb,var(--ink)_8%,var(--surface))] p-[3px] shadow-[inset_0_2px_3px_color-mix(in_srgb,var(--ink)_15%,transparent)]" aria-hidden="true">
                                <span className="block size-full origin-left animate-[preloader-progress_4s_cubic-bezier(.25,.8,.25,1)_both] rounded-[1px] bg-[repeating-linear-gradient(135deg,var(--primary-color)_0_11px,var(--coral)_11px_22px)] shadow-[inset_0_1px_0_rgba(255,255,255,.35)] motion-reduce:animate-none" />
                            </div>
                        </div>

                        <div className="flex justify-between bg-ink px-[15px] py-[11px] font-mono text-[0.52rem] tracking-[0.08em] text-[color-mix(in_srgb,var(--surface)_82%,var(--ink))] min-[561px]:text-[0.62rem]">
                            <span>© 2001—{new Date().getFullYear()} DEAN LONGSTAFF</span>
                            <span className="text-sun">{isLocked ? "DO NOT DISTURB" : isShutdown ? "GOODNIGHT, INTERNET" : <>PLEASE WAIT<span className="animate-[preloader-blink_.8s_steps(2,jump-none)_infinite] motion-reduce:animate-none">...</span></>}</span>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

// -- Full black "no signal" screen shown once the CRT-off collapse finishes; click/tap to power back on
function ShutdownOffScreen({ onWake }: { onWake?: () => void }) {
    return (
        <div
            className="absolute inset-0 grid cursor-pointer place-items-center bg-black"
            role="button"
            tabIndex={0}
            aria-label="Dean OS is off. Press to power back on."
            onClick={onWake}
            onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") onWake?.();
            }}
        >
            {/* Faint CRT static flicker. */}
            <div className="pointer-events-none absolute inset-0 opacity-[.05] animate-[crt-static_140ms_steps(2)_infinite] bg-[repeating-linear-gradient(0deg,transparent_0_3px,white_4px_5px)] motion-reduce:animate-none" aria-hidden="true" />
            <div className="flex animate-[crt-off-glow-in_900ms_ease-out_1.1s_both] flex-col items-center gap-3 motion-reduce:animate-none motion-reduce:opacity-100">
                <span className="size-[3px] animate-[preloader-pulse_2.2s_ease-in-out_infinite] rounded-[50%] bg-[color-mix(in_srgb,white_70%,transparent)] shadow-[0_0_14px_4px_color-mix(in_srgb,white_45%,transparent)] motion-reduce:animate-none" aria-hidden="true" />
                <p className="m-0 font-mono text-[0.56rem] tracking-[0.14em] text-[color-mix(in_srgb,white_38%,transparent)]">UNPLUGGED - CLICK TO POWER BACK ON</p>
            </div>
        </div>
    );
}

// -- CRT power-on: the off-screen dot flashes and expands back into a full bright screen, mirroring crt-off
function PowerOnFlash() {
    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
            {/* Faint CRT static flicker, same texture as the off screen. */}
            <div className="absolute inset-0 opacity-[.05] animate-[crt-static_140ms_steps(2)_infinite] bg-[repeating-linear-gradient(0deg,transparent_0_3px,white_4px_5px)] motion-reduce:animate-none" />
            <div className="absolute inset-0 origin-center animate-[crt-on_520ms_cubic-bezier(.2,.8,.2,1)_both] bg-white shadow-[0_0_90px_30px_rgba(255,255,255,.55)] motion-reduce:animate-none" />
        </div>
    );
}

export default Preloader;
