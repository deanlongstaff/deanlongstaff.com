/**
 * DESCRIPTION: This is the navbar component that is used to display the navbar on the page.
 *
 * Author: Dean Longstaff
 */
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----- Import the required modules

import { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from 'react-scroll';

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----- Import icons

import { FaGithub } from "react-icons/fa";
import { FaPersonSkiing } from "react-icons/fa6";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { MdOutlineHomeWork } from "react-icons/md";
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
        <Navbar
            expanded={expand}
            fixed="top"
            expand="md"
            className={navColour ? "sticky" : "navbar"}
        >
            <Container>
                <Navbar.Brand href="/" className="d-flex">
                    <span>Dean Longstaff</span>
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    onClick={() => {
                        updateExpanded(expand ? false : true);
                    }}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto" defaultActiveKey="#home">
                        {navbarItems.map(item => (
                            <Nav.Item key={item.to}>
                                <Nav.Link
                                    as={Link}
                                    to={item.to}
                                    duration={1000}
                                    spy={true}
                                    activeClass="active-nav-link"
                                    onClick={() => updateExpanded(false)}
                                >
                                    {item.icon} {item.name}
                                </Nav.Link>
                            </Nav.Item>
                        ))}

                        <Nav.Item className="github-btn">
                            <Button
                                href="https://github.com/deanlongstaff"
                                target="_blank"
                                className="github-btn-inner"
                            >
                                <FaGithub style={{
                                    fontSize: "1.2em",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    paddingBottom: "2px"
                                }}
                                />
                            </Button>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
