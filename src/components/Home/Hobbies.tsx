/**
 * DESCRIPTION: This is the my hobbies component that is used to display my hobbies on the home page.
 *
 * Author: Dean Longstaff
 */
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----- Import the required modules

import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----- Import images

import skiing from "../../assets/images/me-skiing.jpeg";
import programming from "../../assets/images/programming.jpeg";
import diy from "../../assets/images/diy.jpeg";
import rex from "../../assets/images/rex.jpeg";
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----- Define the Hobbies to be displayed

const hobbies = [
  {
    image: skiing,
    title: "Skiing",
    description:
      "Skiing: An Infrequent but Thrilling Adventure - When the rare opportunity arises, I hit the slopes with friends, immersing myself in the exhilarating world of skiing. It's more than just a hobby; it's a cherished passion that awakens with every snowy trail and heart-pounding descent. These moments, though few, are always cherished and unforgettable.",
  },
  {
    image: programming,
    title: "Programming",
    description:
      "Programming: A Creative Outlet - I'm a programmer, and I love it. I'm always on the lookout for new projects and challenges, and I'm constantly learning new skills and languages. It's a creative outlet that allows me to explore new ideas and concepts, and it's a hobby that I'll never get tired of.",
  },
  {
    image: diy,
    title: "DIY",
    description:
      "DIY: The Art of Creation - I'm a DIYer at heart. I love building things with my hands, and I'm always on the lookout for new projects. Whether it's a new piece of furniture, a new gadget, or building a beautiful deck and pergola as shown above. I'm always looking for a new challenge and new ways to improve my skills.",
  },
  {
    image: rex,
    title: "Rex",
    description:
      "Rex, My Labrador Sidekick: Our hobbies include endless games of fetch that test both our agility and patience, daily walks that are as much about exploration as exercise, and the occasional beach escapade where the sand and waves add to our adventurous spirit. Together, we embrace the simple joys of play and the outdoors.",
  },
];
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// -- Custom Functions

// Hobby card
function HobbyCard(props: any) {
  return (
    <Card className="hobbies-card-view">
      <Card.Img variant="top" src={props.image} alt="card-img" className="hobbies-card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "center" }}>{props.description}</Card.Text>
        {"\n"}
        {"\n"}
      </Card.Body>
    </Card>
  );
}

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----- Define the Hobbies component

function index() {
  return (
    <section id="hobbies">
      <Container fluid className="hobbies-section">
        <Container>
          <h1 className="main-heading">
            My <strong className="primary-color">Hobbies </strong>
          </h1>
          <p style={{ color: "white" }}>
            My world isn't just about pixels and code. When I'm not conjuring up digital magic, I'm on a constant quest to discover new hobbies and experiences. It's all about embracing the unexpected and adding a dash of variety to life!
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {hobbies.map((hobby, index) => (
              <Col key={index} md={4} className="hobbies-card">
                <HobbyCard image={hobby.image} title={hobby.title} description={hobby.description} />
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default index;
