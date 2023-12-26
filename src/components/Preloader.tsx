/**
 * DESCRIPTION: This is the preloader component that is used to display a preloader when the page is loading.
 *
 * Author: Dean Longstaff
 */
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----- Define the Preloader component

function Preloader(props: any) {
    return <div id={props.load ? "preloader" : "preloader-none"}></div>;
}

export default Preloader;