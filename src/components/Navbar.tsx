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

function NavBar() {
    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
            updateNavbar(true);
        } else {
            updateNavbar(false);
        }
    }

    window.addEventListener("scroll", scrollHandler);

    return (
        <nav className={`navbar ${navColour ? "sticky" : ""} fixed top-0 z-50 w-full`}>
            <div className="navbar-inner mx-auto flex max-w-screen-2xl flex-wrap items-center justify-between gap-3 px-6">
                <a href="/" className="navbar-brand inline-flex items-center">
                    <span>Dean Longstaff</span>
                </a>
                <button
                    type="button"
                    className="navbar-toggler md:hidden"
                    aria-controls="responsive-navbar-nav"
                    aria-expanded={expand}
                    aria-label="Toggle navigation"
                    onClick={() => updateExpanded(!expand)}
                >
                    <span></span><span></span><span></span>
                </button>
                <div id="responsive-navbar-nav" className={`${expand ? "flex" : "hidden"} w-full flex-col items-stretch md:flex md:w-auto md:flex-row md:items-center`}>
                    <div className="navbar-nav ml-auto flex flex-col items-stretch md:flex-row md:items-center md:gap-2">
                        {navbarItems.map(item => (
                            <Link
                                key={item.to}
                                className="nav-link"
                                to={item.to}
                                duration={1000}
                                spy={true}
                                activeClass="active-nav-link"
                                onClick={() => updateExpanded(false)}
                            >
                                {item.icon} {item.name}
                            </Link>
                        ))}
                        <div className="theme-btn"><ThemeToggle /></div>
                        <div className="github-btn">
                            <a href="https://github.com/deanlongstaff" target="_blank" rel="noopener noreferrer" className="github-btn-inner btn btn-primary btn-circle" aria-label="GitHub">
                                <FaGithub aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
