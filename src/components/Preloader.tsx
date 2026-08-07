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

function Preloader({ load }: PreloaderProps) {
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
            id={load ? "preloader" : "preloader-none"}
            className="preloader-shell"
            aria-hidden={!load}
        >
            <div className="preloader-noise" aria-hidden="true" />
            <div className="preloader-window" role="status" aria-label="Loading Dean Longstaff's website">
                <div className="preloader-titlebar">
                    <span className="preloader-titlebar-icon">✦</span>
                    <span>DEAN_OS // STARTUP</span>
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
                        <p className="preloader-kicker">WELCOME, FELLOW CURIOUS HUMAN</p>
                        <h1>Loading <span>Dean's world</span><b className="preloader-cursor">_</b></h1>
                        <p className="preloader-status"><span className="preloader-status-dot" /> assembling the <span>DEAN.EXE</span> experience...</p>
                    </div>
                </div>

                <div className="preloader-progress-wrap">
                    <div className="preloader-progress-label">
                        <span>BOOTING DEAN.EXE</span>
                        <span>{progress}%</span>
                    </div>
                    <div className="preloader-progress-track" aria-hidden="true">
                        <span className="preloader-progress-bar" />
                    </div>
                </div>

                <div className="preloader-footer">
                    <span>© 2001—{new Date().getFullYear()} DEAN LONGSTAFF</span>
                    <span className="preloader-footer-blink">PLEASE WAIT<span>...</span></span>
                </div>
            </div>
        </div>
    );
}

export default Preloader;
