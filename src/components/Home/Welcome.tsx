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
        strings: ["Software Developer", "Open Source Contributor", "Automation Engineer", "DevOps Engineer", "Cloud Engineer", "Innovator", "Tech Enthusiast", "DIYer", "Problem Solver"],
        autoStart: true,
        loop: true,
        deleteSpeed: 100,
        cursor: "|",
      }}
    />
  );
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----- Define the Welcome component

function index() {
  return (
    <section id="welcome">
      <Particle />
      <Container fluid className="welcome-section" id="home">
        <div className="background-container"></div>
        <Container className="welcome-content">
          <Row className="align-items-center">
            <Col xs={12} md={7} className="welcome-header order-1 order-md-1">
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

              <div className="d-none d-md-block" style={{ paddingLeft: 50, paddingTop: 20, paddingBottom: 40, height: "50px" }}>
                <Type />
              </div>
            </Col>
            <Col xs={12} md={5} className="order-2 order-md-2 mb-4 mb-md-0" style={{ paddingBottom: 20, paddingTop: 20, display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Tilt style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", maxWidth: "350px" }}>
                <img
                  src={photo}
                  alt="Dean Longstaff"
                  style={{
                    width: "100%",
                    height: "auto",
                    aspectRatio: "1 / 1",
                    borderRadius: "50%",
                    objectFit: "cover",
                    padding: 5,
                    margin: 5,
                    boxShadow: "0 0 20px 8px rgba(0, 0, 0, 0.5)",
                  }}
                />
              </Tilt>
            </Col>
            <Col xs={12} className="order-3 d-md-none">
              <div style={{ padding: "20px 20px", textAlign: "center", height: "50px" }}>
                <Type />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default index;
