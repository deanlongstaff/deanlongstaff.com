/**
 * DESCRIPTION: This is the my hobbies component that is used to display my hobbies on the home page.
 *
 * Author: Dean Longstaff
 */
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----- Import the required modules

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----- Import images

import skiing from "../../assets/images/me-skiing.jpeg";
import programming from "../../assets/images/programming.jpeg";
import diy from "../../assets/images/diy.jpeg";
import rex from "../../assets/images/rex.jpeg";
import rc_car from "../../assets/images/rc_car.jpeg";
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----- Define the Hobbies to be displayed

const hobbies = [
  {
    image: skiing,
    title: "Skiing",
    description: "Occasional mountain menace. I ski for the views, the adrenaline, and the optimistic belief that I can definitely stop.",
  },
  {
    image: programming,
    title: "Programming",
    description: "My favourite hobby is turning “this should be easy” into a weekend project with documentation.",
  },
  {
    image: diy,
    title: "DIY",
    description: "If it can be measured, drilled, glued or painted, I’ll probably make it harder than necessary.",
  },
  {
    image: rex,
    title: "Rex",
    description: "Chief morale officer, tennis-ball consultant and full-time snack detector. Management is mostly paws-off.",
  },
  {
    image: rc_car,
    title: "Remote Control Anything",
    description: "Cars, drones, boats, If it has a remote, I want to drive it. Rex remains my most enthusiastic crash-test dummy.",
  },
];
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// -- Custom Functions

// Hobby card
function HobbyCard(props: any) {
  return (
    <article className="hobbies-card-view card">
      <img src={props.image} alt={props.title} className="hobbies-card-img card-img-top" />
      <div className="card-body">
        <h3 className="card-title">{props.title}</h3>
        <p className="card-text">{props.description}</p>
        {"\n"}
        {"\n"}
      </div>
    </article>
  );
}

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----- Define the Hobbies component

function index() {
  return (
    <section id="hobbies">
      <div className="hobbies-section">
        <div className="mx-auto max-w-7xl">
          <span className="hobbies-eyebrow">
            When the laptop is closed
            <span className="hobbies-eyebrow-correction">Just kidding, it's always open</span>
          </span>
          <h1 className="main-heading">
            My <strong className="primary-color">Hobbies </strong>
          </h1>
          <p>
            The things that keep me curious, make me laugh, and occasionally leave me covered in sawdust.
          </p>
          <div className="flex flex-wrap items-start justify-center pb-2.5">
            {hobbies.map((hobby, index) => (
              <div key={index} className={`hobbies-card hobby-card-${index + 1} md:w-1/3`}>
                <HobbyCard image={hobby.image} title={hobby.title} description={hobby.description} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default index;
