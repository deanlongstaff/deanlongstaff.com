/**
 * DESCRIPTION: Combines all the home page sections into one component.
 *
 * Author: Dean Longstaff
 */
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----- Import the sections of the Home component

import Welcome from "./Welcome";
import AboutMe from "./AboutMe";
import MyWork from "./MyWork";
import SideProjects from "./SideProjects";
import Hobbies from "./Hobbies";
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----- Define the Home component

function Home() {
    return (
        <section>
            <Welcome />
            <AboutMe />
            <MyWork />
            <SideProjects />
            <Hobbies />
        </section>
    );
};

export default Home;
