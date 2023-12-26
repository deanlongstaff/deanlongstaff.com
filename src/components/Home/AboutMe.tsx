/**
 * DESCRIPTION: This is the AboutMe component that is used to display the about me section on the home page.
 *
 * Author: Dean Longstaff
 */
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----- Import the required modules

import React from "react";
import { Container, Row } from "react-bootstrap";
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----- Define the AboutMe component

function index() {
  return (
    <section id="aboutme" className="aboutme-section">
      <Container fluid id="about">
        <h1 className="main-heading">
          About <strong className="primary-color">Me</strong>
        </h1>
        <Container className="aboutme-description">
          <Row>
            <p className="aboutme-body">
              I'm the Swiss Army knife of tech - sharp, handy, and a tad bit quirky.
              <br />
              Jack of all trades, master of <b>one</b> - where versatility meets mastery.
              <br />
              <br />
              Coding? <b className="primary-color">Check</b>. Innovating? <b className="primary-color">Always</b>. DIY projects? <b className="primary-color">Bring 'em on</b>.
              <br />
              <br />
              I dive into development with a splash of creativity and a toolbox full of skills. My mantra: Why just play one tune when you can rock the whole concert?
              <br />
              <br />
              Stick around for a mix of tech magic, crafty coding, and the occasional robot I built from a toaster. It's not just about making things work - it's about making them awesome!
              <br />
              <br />
              Yes, I am a <b className="ryobi">Ryobi</b> fanboy. No, I will not apologize for it.
            </p>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default index;