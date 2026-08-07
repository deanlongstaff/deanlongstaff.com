/**
 * DESCRIPTION: This is the main App component that is rendered to the DOM at runtime.
 *
 * Author: Dean Longstaff
 */
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----- Import the required modules

import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { clarity } from "react-microsoft-clarity";

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----- Import the app components

import ScrollToTop from "./components/ScrollToTop";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Home from "./components/Home/index";
import Footer from "./components/Footer";

type SystemMode = "ready" | "locked" | "shutdown";
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----- Define the App component

function App() {
  const [load, upadateLoad] = useState(true);
  const [systemMode, setSystemMode] = useState<SystemMode>("ready");

  // -- Initialise Microsoft Clarity
  useEffect(() => {
    clarity.init("mqgrxsm7hq");
  }, []);

  // -- Set a timer to remove the preloader after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  // -- Render the App component
  return (
    <Router>
      <Preloader load={load} mode={systemMode} onWake={() => setSystemMode("ready")} />
      <div className={`App ${load || systemMode !== "ready" ? "h-screen overflow-hidden" : ""}`}>
        <Navbar onLock={() => setSystemMode("locked")} onShutdown={() => setSystemMode("shutdown")} />
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
