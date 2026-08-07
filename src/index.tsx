/**
 * DESCRIPTION: Entry point. Renders the App component to the DOM.
 *
 * Author: Dean Longstaff
 */
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----- Import the required modules

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import photo from "./assets/images/me.jpeg";
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----- Import the app styles

import "./styles/index.css";
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----- Preload the preloader's photo so it appears immediately instead of popping in after the Preloader mounts

const preloadLink = document.createElement("link");
preloadLink.rel = "preload";
preloadLink.as = "image";
preloadLink.href = photo;
document.head.appendChild(preloadLink);
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----- Render the App component to the DOM

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);