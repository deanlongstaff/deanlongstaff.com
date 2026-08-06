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
    description:
      "An Infrequent but Thrilling Adventure - When the rare opportunity arises, I hit the slopes with friends, immersing myself in the exhilarating world of skiing. It's more than just a hobby; it's a cherished passion that awakens with every snowy trail and heart-pounding descent. These moments, though few, are always cherished and unforgettable.",
  },
  {
    image: programming,
    title: "Programming",
    description:
      "A Creative Outlet - I'm a programmer, and I love it. I'm always on the lookout for new projects and challenges, and I'm constantly learning new skills and languages. It's a creative outlet that allows me to explore new ideas and concepts, and it's a hobby that I'll never get tired of.",
  },
  {
    image: diy,
    title: "DIY",
    description:
      "The Art of Creation - I'm a DIYer at heart. I love building things with my hands, and I'm always on the lookout for new projects. Whether it's a new piece of furniture, a new gadget, or building a beautiful deck and pergola as shown above. I'm always looking for a new challenge and new ways to improve my skills.",
  },
  {
    image: rex,
    title: "Rex",
    description:
      "My Labrador Sidekick - Our hobbies include endless games of fetch that test both our agility and patience, daily walks that are as much about exploration as exercise, and the occasional beach escapade where the sand and waves add to our adventurous spirit. Together, we embrace the simple joys of play and the outdoors.",
  },
  {
    image: rc_car,
    title: "Remote Control Anything",
    description:
      "High-Speed Thrills - My Traxxas XRT delivers endless entertainment, whether tearing across trails or watching Rex sprint after it with pure joy. Remote control anything captures my fascination; cars, drones or boats. Though I'm no hardcore enthusiast, the simple pleasure of piloting these machines never gets old, especially when Rex decides he's part of the action.",
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
          <span className="hobbies-eyebrow">When the laptop is closed</span>
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
