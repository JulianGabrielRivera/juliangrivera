import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { motion } from "framer-motion";

function App() {
  const [show, setShow] = useState(false);
  const [hamburgerToggle, setHamburgerToggle] = useState(false);
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* <div className="sideBar">
        <>
          <a
            href="https://github.com/JulianGabrielRivera"
            style={{
              color: "white",
              marginTop: "50px",
              marginBottom: "40px",
            }}
          >
            <i class="fa-brands fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/julian-g-rivera"
            style={{ color: "white" }}
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </>
      </div> */}

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>

        <Route path="/projects" element={<Projects />}></Route>
      </Routes>
    </>
  );
}

export default App;
