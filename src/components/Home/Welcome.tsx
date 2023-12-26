/**
 * DESCRIPTION: This is the welcome component that is used to display the welcome section on the home page.
 *
 * Author: Dean Longstaff
 */
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----- Import the required modules

import { Container, Row, Col } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import Tilt from "react-parallax-tilt";
import Particle from "../Particle";

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----- Import images

import photo from "../../assets/images/me.jpeg";
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// -- Custom Functions

// Type writer effect
function Type() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Software Developer",
                    "Open Source Contributor",
                    "Automation Engineer",
                    "DevOps Engineer",
                    "Cloud Engineer",
                    "Innovator",
                    "Tech Enthusiast",
                    "DIYer"
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 100,
            }}
        />
    );
};
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----- Define the Welcome component

function index() {
    return (
        <section id="welcome">
            <Particle />
            <Container fluid className="welcome-section" id="home">
                <div className="background-container"></div>
                <Container className="welcome-content">
                    <Row>
                        <Col md={7} className="welcome-header">
                            <h1 style={{ paddingBottom: 15 }} className="heading">
                                Hello!{" "}
                                <span className="wave" role="img" aria-labelledby="wave">
                                    👋
                                </span>
                            </h1>

                            <h1 className="heading-name">
                                I'M
                                <strong className="primary-color"> DEAN LONGSTAFF</strong>
                            </h1>

                            <div style={{ padding: 50, textAlign: "left" }}>
                                <Type />
                            </div>
                        </Col>
                        <Col md={5} style={{ paddingBottom: 20, paddingTop: 20, justifyContent: 'center', alignItems: 'center' }}>
                            <Tilt style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img
                                    src={photo}
                                    alt="Dean Longstaff"
                                    style={{
                                        width: '80%',
                                        height: 'auto',
                                        aspectRatio: '1 / 1', // Ensures the image is square
                                        borderRadius: '50%',
                                        objectFit: 'cover', // This ensures the image covers the area without being stretched
                                        padding: 5,
                                        margin: 5,
                                        boxShadow: '0 0 20px 8px rgba(0, 0, 0, 0.5)',
                                    }}
                                />
                            </Tilt>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section >
    );
};

export default index;