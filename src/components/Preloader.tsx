/**
 * DESCRIPTION: This is the preloader component that is used to display a preloader when the page is loading.
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

function Preloader({ load, mode = "ready", onWake }: PreloaderProps) {
    const visible = load || mode !== "ready";
    const isLocked = mode === "locked";
    const isShutdown = mode === "shutdown";
    const [progress, setProgress] = useState(0);

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
            className="preloader-shell"
            aria-hidden={!visible}
        >
            <div className="preloader-noise" aria-hidden="true" />
                <div className="preloader-window" role="status" aria-label={isLocked ? "Dean OS is locked" : isShutdown ? "Dean OS is shut down" : "Loading Dean Longstaff's website"}>
                    <div className="preloader-titlebar">
                        <span className="preloader-titlebar-icon">✦</span>
                        <span>{isLocked ? "DEAN_OS // LOCKED" : isShutdown ? "DEAN_OS // SHUTDOWN" : "DEAN_OS // STARTUP"}</span>
                    <span className="preloader-titlebar-lights" aria-hidden="true">
                        <i />
                        <i />
                        <i />
                    </span>
                </div>

                <div className="preloader-screen">
                    <div className="preloader-brandmark" aria-hidden="true">
                        <span className="preloader-brandmark-star">✦</span>
                        <img src={photo} alt="" className="preloader-brandmark-photo" />
                    </div>
                    <div className="preloader-copy">
                        <p className="preloader-kicker">{isLocked ? "PERSONAL WORKSPACE // DEAN.EXE NAPPING" : isShutdown ? "PERSONAL WORKSPACE // DEAN.EXE HAS LEFT THE CHAT" : "WELCOME, FELLOW CURIOUS HUMAN"}</p>
                        <h1>{isLocked ? <>Dean.exe <span>deactivated</span></> : isShutdown ? <>Dean.exe <span>taking five</span></> : <>Loading <span>Dean&apos;s world</span><b className="preloader-cursor">_</b></>}</h1>
                        <p className="preloader-status"><span className="preloader-status-dot" /> {isLocked ? "waiting for someone to press the big button..." : isShutdown ? "the pixels are having a lie down..." : <>assembling the <span>DEAN.EXE</span> experience...</>}</p>
                        {(isLocked || isShutdown) && (
                            <button type="button" className="preloader-action" onClick={onWake}>
                                <span>{isLocked ? "↻" : "▶"}</span> {isLocked ? "WAKE DEAN.EXE" : "REBOOT THE CHAOS"}
                            </button>
                        )}
                    </div>
                </div>

                <div className="preloader-progress-wrap">
                    <div className="preloader-progress-label">
                        <span>{isLocked ? "PUTTING DEAN.EXE TO BED" : isShutdown ? "PUTTING FUN.EXE TO BED" : "BOOTING DEAN.EXE"}</span>
                        <span>{isLocked || isShutdown ? "READY" : `${progress}%`}</span>
                    </div>
                    <div className="preloader-progress-track" aria-hidden="true">
                        <span className="preloader-progress-bar" />
                    </div>
                </div>

                <div className="preloader-footer">
                    <span>© 2001—{new Date().getFullYear()} DEAN LONGSTAFF</span>
                    <span className="preloader-footer-blink">{isLocked ? "DO NOT DISTURB" : isShutdown ? "GOODNIGHT, INTERNET" : <>PLEASE WAIT<span>...</span></>}</span>
                </div>
            </div>
        </div>
    );
}

export default Preloader;
