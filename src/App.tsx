/**
 * DESCRIPTION: This is the main App component that is rendered to the DOM at runtime.
 *
 * Author: Dean Longstaff
 */
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----- Import the required modules

import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { clarity } from "react-microsoft-clarity";

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----- Import the app components

import ScrollToTop from "./components/ScrollToTop";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Home from "./components/Home/index";
import Footer from "./components/Footer";

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----- Import the app styles

import "./styles/index.css";
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----- Define the App component

function App() {
  const [load, upadateLoad] = useState(true);

  // -- Initialise Microsoft Clarity
  useEffect(() => {
    clarity.init("mqgrxsm7hq");
  }, []);

  // -- Set a timer to remove the preloader after 1.2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  // -- Render the App component
  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
