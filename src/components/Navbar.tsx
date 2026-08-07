/**
 * DESCRIPTION: This is the navbar component that is used to display the navbar on the page.
 *
 * Author: Dean Longstaff
 */
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----- Import the required modules

import { useState } from "react";
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

    function scrollHandler() {
        if (window.scrollY >= 20) {
            updateNavbar(true);
        } else {
            updateNavbar(false);
        }
    }

    window.addEventListener("scroll", scrollHandler);

    return (
        <nav className={`navbar ${navColour ? "is-scrolled" : ""} fixed top-0 z-50 w-full`}>
            <div className="navbar-inner mx-auto flex max-w-screen-2xl flex-wrap items-center justify-between gap-3 px-6">
                <a href="/" className="navbar-brand inline-flex items-center">
                    <span className="navbar-brand-name">Dean Longstaff</span>
                    <span className="navbar-brand-os">DEAN_OS <i>ONLINE</i></span>
                </a>
                <div className="os-start-launcher">
                    <button
                        type="button"
                        className={`os-start-button ${startOpen ? "is-open" : ""}`}
                        aria-expanded={startOpen}
                        aria-controls="dean-os-start-menu"
                        onClick={() => updateStartOpen(!startOpen)}
                    >
                        <span aria-hidden="true">✦</span> START
                    </button>
                    {startOpen && (
                        <div className="os-start-menu" id="dean-os-start-menu">
                            <div className="os-start-menu-title">
                                <span>DEAN_OS // NAVIGATOR</span>
                                <i>v{getAge()}</i>
                            </div>
                            <div className="os-start-menu-status"><span /> SYSTEM READY</div>
                            <div className="os-start-menu-items">
                                {navbarItems.map(item => (
                                    <Link
                                        key={`start-${item.to}`}
                                        className="os-start-menu-item"
                                        to={item.to}
                                        duration={1000}
                                        spy={true}
                                        onClick={() => updateStartOpen(false)}
                                    >
                                        <span className="os-start-menu-icon">{item.icon}</span>
                                        <span>{item.name}</span>
                                        <span className="os-start-menu-arrow">›</span>
                                    </Link>
                                ))}
                            </div>
                            <div className="os-start-menu-actions">
                                <button type="button" className="os-start-menu-action" onClick={() => { updateStartOpen(false); onLock(); }}>
                                    <span aria-hidden="true">▣</span> LOCK
                                </button>
                                <button type="button" className="os-start-menu-action os-start-menu-action-shutdown" onClick={() => { updateStartOpen(false); onShutdown(); }}>
                                    <span aria-hidden="true">⏻</span> SHUT DOWN
                                </button>
                            </div>
                            <div className="os-start-menu-footer">PRESS A DESTINATION TO CONTINUE</div>
                        </div>
                    )}
                </div>
                <div className="navbar-controls">
                    <div className="theme-btn"><ThemeToggle /></div>
                    <div className="github-btn">
                        <a href="https://github.com/deanlongstaff" target="_blank" rel="noopener noreferrer" className="github-btn-inner btn btn-primary btn-circle" aria-label="GitHub">
                            <FaGithub aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
