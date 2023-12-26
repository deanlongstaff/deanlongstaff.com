/**
 * DESCRIPTION: This is the index file for the Home component. This combines all the Home components into one component.
 *
 * Author: Dean Longstaff
 */
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----- Import the sections of the Home component

import Welcome from "./Welcome";
import AboutMe from "./AboutMe";
import MyWork from "./MyWork";
import Hobbies from "./Hobbies";
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----- Define the Home component

function Home() {
    return (
        <section>
            <Welcome />
            <AboutMe />
            <MyWork />
            <Hobbies />
        </section>
    );
};

export default Home;