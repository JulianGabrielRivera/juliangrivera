import "./Home.css";
import { Sky, Cloud, Stars, SpotLight } from "@react-three/drei";
import { Canvas } from "react-three-fiber";
import { Link, NavLink } from "react-router-dom";
import Typewriter from "typewriter-effect";
import useMediaQuery from "../hooks/useMediaQuery";

import { v4 as uuidv4 } from "uuid";
import { useState, useEffect, useMemo, useRef } from "react";
import {
  motion,
  Reorder,
  useMotionValue,
  MotionValue,
  animate,
  useDragControls,
  AnimatePresence,
} from "framer-motion";

const Home = () => {
  const [show, setShow] = useState(true);
  const [hamburgerToggle, setHamburgerToggle] = useState(false);
  const inactiveShadow = "5px 5px 10px rgba(0,0,0,0.3)";
  console.log(useMediaQuery);
  const skills = ["MongoDB", "Express", "React", "Node"];
  const skills2 = ["HTML", "CSS", "Axios", "Bootstrap"];
  const project2Skills = [
    "MongoDB",
    "Express",
    "Node",
    "Handlebars",
    "CSS",
    "HTML",
  ];
  const ref = useRef(null);
  const refTwo = useRef(null);
  const ref3 = useRef(null);
  console.log(ref, refTwo, ref3);
  const handleProjectsClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleHomeClick = () => {
    refTwo.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleAboutClick = () => {
    ref3.current?.scrollIntoView({ behavior: "smooth" });
  };

  // const skills2 = [
  //   { skill: "HTML", id: 5 },
  //   { skill: "CSS", id: 6 },
  //   { skill: "Axios", id: 7 },
  //   { skill: "Bootstrap", id: 8 },
  // ];
  const [items, setItems] = useState(skills);
  const [items2, setItems2] = useState(skills2);

  const boxShadow = useMotionValue(inactiveShadow);
  console.log(items);
  const isMobile = useMediaQuery();
  // useEffect(() => {
  //   let isActive = false;
  //   y.onChange((latest) => {
  //     const wasActive = isActive;
  //     if (latest !== 0) {
  //       isActive = true;
  //       if (isActive !== wasActive) {
  //         animate(boxShadow, "5px 5px 10px rgba(0,0,0,0.3)");
  //       }
  //     } else {
  //       isActive = false;
  //       if (isActive !== wasActive) {
  //         animate(boxShadow, inactiveShadow);
  //       }
  //     }
  //   });
  // }, [y, boxShadow]);

  return (
    <main>
      <div className="headerContainer z-10">
        <div className="myName">
          <motion.div
            initial={{ x: -200 }}
            animate={{ x: 30 }}
            transition={{ ease: "easeOut", duration: 2 }}
          >
            <h1 className="text-3xl">Julian Gabriel Rivera</h1>
          </motion.div>
        </div>

        <motion.div
          className="navBar"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 2 }}
        >
          {/* <div className="navBar2"> */}
          <button ref={refTwo} onClick={handleHomeClick} className="navLi">
            Home
          </button>
          <button ref={ref3} onClick={handleAboutClick} className="navLi">
            About
          </button>
          <button ref={ref} onClick={handleProjectsClick} className="navLi">
            Projects
          </button>
          {/* </div> */}
        </motion.div>
        <div className="dropDiv">
          {!show ? (
            <div
              className="hamburgerMenu"
              onClick={() => {
                setShow(!show);
                setHamburgerToggle(!hamburgerToggle);
              }}
            >
              <div
                className={
                  !hamburgerToggle ? "hamburgerItem" : "hamburgerItemX"
                }
              ></div>
              <div
                className={
                  !hamburgerToggle ? "hamburgerItem" : "hamburgerItemXSecond"
                }
              ></div>
              <div
                className={
                  !hamburgerToggle ? "hamburgerItem" : "hamburgerItemXLast"
                }
              ></div>

              <ul class="dropdown-menu">
                <li>
                  {/* <button class="dropdown-item" type="button"> */}
                  <Link to="/" class="item" onClick={handleHomeClick}>
                    Home
                  </Link>
                  {/* </button> */}
                </li>
                <li>
                  <Link to="" class="item" onClick={handleProjectsClick}>
                    Projects
                  </Link>
                </li>
                <li>
                  {/* <button class="dropdown-item" type="button"> */}
                  <Link to="/" className="item" onClick={handleAboutClick}>
                    About
                  </Link>
                  {/* </button> */}
                </li>
              </ul>
            </div>
          ) : (
            <div
              className="hamburgerMenu"
              onClick={() => {
                setShow(!show);
                setHamburgerToggle(!hamburgerToggle);
              }}
            >
              <div
                className={
                  !hamburgerToggle ? "hamburgerItem" : "hamburgerItemX"
                }
              ></div>
              <div
                className={
                  !hamburgerToggle ? "hamburgerItem" : "hamburgerItemXSecond"
                }
              ></div>
              <div
                className={
                  !hamburgerToggle ? "hamburgerItem" : "hamburgerItemXLast"
                }
              ></div>
            </div>
            // <button
            //   class="dropDownButton "
            //   onClick={() => {
            //     setShow(!show);
            //   }}
            // >
            //   {/* Explore */}
            // </button>
          )}
        </div>
      </div>
      <div
        style={{
          height: "100vh",
          display: "flex",

          alignItems: "center",
        }}
      >
        <section className="pictureHere" ref={refTwo}>
          {/* <div
            style={{
              width: "100vw",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
            }}
          > */}
          <div
          // style={{ visibility: "hidden" }}
          // className={useMediaQuery && "myImage"}
          ></div>
          {/* </div> */}
          {/* <img src="../images/side.png" alt="" id="julian" /> */}
          {/* <div className="fullStack"> */}
          <div className="insidePictureHere">
            <div className="insidePictureHereFirst">
              <div className="insidePictureHereSecond">
                <div
                  className="rounded-md cursor-grab w-100  "
                  style={{ textAlign: "left", width: "100%" }}
                >
                  <Typewriter
                    options={{
                      strings: ["A Full Stack Web Developer"],
                      autoStart: true,
                      wrapperClassName: "typewriterName",
                      delay: 60,
                      pauseFor: 10000000000,
                      cursor: "...",
                    }}
                  />
                </div>

                <p className="frontPageP" style={{ fontSize: "0.8rem" }}>
                  With a passion for developing responsive and interactive full
                  stack web applications using the MERN stack.
                </p>
                <button
                  className="rounded-md cursor-grab  boxShadowItems"
                  style={{
                    // position: "absolute",
                    width: "30%",
                    background: "white",
                    color: "black",
                    // top: "350px",
                    // left: "219px",
                    fontSize: "0.8rem",
                    fontWeight: "none",
                  }}
                >
                  Hire me
                </button>

                <div
                  style={{
                    alignSelf: "left",
                    display: "flex",
                    justifyContent: "space-between",
                    width: "15%",
                  }}
                >
                  <i
                    style={{ cursor: "pointer" }}
                    class="fa-brands fa-github-square"
                    onClick={() => {
                      window.open(
                        "https://github.com/JulianGabrielRivera",
                        "_blank"
                      );
                    }}
                    // style={{
                    //   position: "absolute",
                    //   left: "240px",
                    //   top: "230px",
                    // }}
                  ></i>
                  <i
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      window.open(
                        "https://www.linkedin.com/in/julian-g-rivera/",
                        "_blank"
                      );
                    }}
                    class="fa-brands fa-linkedin"
                    // style={{
                    //   position: "absolute",
                    //   left: "270px",
                    //   top: "230px",
                    // }}
                  ></i>
                  <i
                    style={{ cursor: "pointer" }}
                    class="fa-sharp fa-regular fa-envelope"
                    // style={{
                    //   position: "absolute",
                    //   left: "300px",
                    //   top: "230px",
                    // }}
                  ></i>
                </div>
              </div>
              {/* </div> */}
              {/* <div style={{ width: "49%" }}>
            <img
              style={{ borderRadius: "5%" }}
              src="../images/portfoliopic.jpg"
              alt=""
            />
          </div> */}
            </div>
          </div>
          {/* <p>A Full Stack Web Developer</p>
        <p className="aboutMe">
          Julian Gabriel Rivera, born in Puerto Rico but raised in Florida. My
          top hobbies are going to the gym, coding, and sometimes gaming. I
          started my journey as a junior developer on March 2022 by taking the
          IronHack Bootcamp where I learned how to create Full Stack
          applications and graduated on May 2022. One month after I got hired at
          IronHack as a Web Developer Teaching Assistant and have been helping
          students graduate and create Full Stack applications for 8 months now.
          Now my dream is to work with a group of other developers with
          experience, especially Senior developers so that I can continue
          growing and learning as a Junior Developer.
        </p> */}
        </section>
      </div>
      <section className="projects">
        <div className="cards">
          <motion.div
            className={isMobile ? "cardAgain" : "card"}
            // style={
            //   !isMobile
            //     ? { transform: "rotate(-15deg)" }
            //     : { transform: "none" }
            // }
            /**
             * Setting the initial keyframe to "null" will use
             * the current value to allow for interruptable keyframes.
             */
            whileHover={
              isMobile
                ? ""
                : {
                    scale: [null, 1.0, 1.1],
                    rotate: "-3deg",
                    zIndex: "1",
                  }
            }
          >
            <h4 className="text-2xl font-bold underline">Numinous</h4>
            <img src="../images/numious.jpeg" alt="" />
            <p>
              Has two roles, one admin and one guest. Only admins can create new
              places and only admins can delete places. If guests want more info
              they have to sign up in order to see more details.
            </p>
            <section className="skills">
              {/* <Reorder.Group
                values={items}
                onReorder={setItems}
                className=" flex flex-wrap flex-col  flex-1"
              > */}
              {/* {items.map((skill) => {
                return (
                  // <Reorder.Item
                  //   key={skill}
                  //   value={skill}
                  //   style={{ boxShadow }}
                  //   className="rounded-md w-32 m-3 cursor-grab"
                  // >
                  <button
                    // style={{ boxShadow }}
                    className="rounded-md w-32 m-3 cursor-grab boxShadowItems"
                  >
                    {skill}
                  </button>
                  // </Reorder.Item>
                );
              })} */}
              {/* </Reorder.Group> */}
              {/* <Reorder.Group
                axis="y"
                values={items2}
                onReorder={setItems2}
                className=" flex flex-wrap flex-col  flex-1"
              > */}
              {/* {items2 &&
                items2.map((skill) => {
                  return (
                    // <Reorder.Item
                    //   key={skill}
                    //   value={skill}
                    //   style={{ boxShadow }}
                    //   className="rounded-md cursor-grab w-32 m-3"
                    // >
                    <button className="rounded-md cursor-grab w-32 m-3 boxShadowItems">
                      {skill}
                    </button>
                    // close reorder item here
                  );
                })} */}
              {/* </Reorder.Group> */}
            </section>

            <div className="cardButton">
              <button
                onClick={() => {
                  window.open("https://numinoustravels.netlify.app/", "_blank");
                }}
              >
                Click to See
              </button>
            </div>
          </motion.div>
          <motion.div
            className={isMobile ? "cardAgain" : "card2"}
            /**
             * Setting the initial keyframe to "null" will use
             * the current value to allow for interruptable keyframes.
             */
            whileHover={
              isMobile
                ? ""
                : {
                    scale: [null, 1.0, 1.1],
                    rotate: "10deg",
                    zIndex: "1",
                  }
            }
          >
            <h4>Fitnessa</h4>
            <img src="../images/fitnessa.png" alt="" />
            <p>
              Full-Stack web app made to make it easy to find other like-minded
              people in their area who are into fitness or trying to lead a more
              healthy lifestyle so that they could match to go to the gym and
              help each other on the journey.
            </p>
            <section className="skills">
              {/* {project2Skills.map((skill) => {
                return (
                  // <Reorder.Item
                  //   key={skill}
                  //   value={skill}
                  //   style={{ boxShadow }}
                  //   className="rounded-md cursor-grab w-32 m-3"
                  // >
                  <button className="rounded-md cursor-grab w-32 m-3 boxShadowItems">
                    {skill}
                  </button>
                  // close reorder item here
                );
              })} */}
            </section>
            <div className="cardButton">
              <button
                onClick={() => {
                  window.open("https://fitnessa.fly.dev", "_blank");
                }}
              >
                Click to See
              </button>
            </div>
          </motion.div>
          <motion.div
            className={isMobile ? "cardAgain" : "card3"}
            /**
             * Setting the initial keyframe to "null" will use
             * the current value to allow for interruptable keyframes.
             */
            whileHover={
              isMobile
                ? ""
                : {
                    scale: [null, 1.0, 1.1],
                    rotate: "2deg",
                    zIndex: "1",
                  }
            }
          >
            <h4>Wordle</h4>
            <img src="../images/wordle.jpeg" alt="" />
            <p>
              Game project using HTML, CSS, and Javascript. A clone of wordle
              but with some differences using DOM manipulation.
            </p>
            <div className="cardButton">
              <button
                onClick={() => {
                  window.open(
                    "https://juliangabrielrivera.github.io/wordgame/",
                    "_blank"
                  );
                }}
              >
                Click to See
              </button>
            </div>
          </motion.div>
          <motion.div
            className={isMobile ? "cardAgain" : "card4"}
            /**
             * Setting the initial keyframe to "null" will use
             * the current value to allow for interruptable keyframes.
             */
            whileHover={
              isMobile
                ? ""
                : {
                    scale: [null, 1.0, 1.1],
                    rotate: "6deg",
                    zIndex: "1",
                  }
            }
          >
            <h4>Space Between</h4>
            <img src="../images/spacebetween.png" alt="" />
            <p>
              My game project, designed with vanilla Javascript. Example of DOM
              manipulation, using class constructors, pushing images into an
              array, using velocity, math random math floor, adjusted frames so
              each level it gets harder and also attached event listener to
              listen to our WASD press down
            </p>
            <div className="cardButton">
              <button
                onClick={() => {
                  window.open(
                    "https://juliangabrielrivera.github.io/SpaceBetween/",
                    "_blank"
                  );
                }}
              >
                Click to See
              </button>
            </div>
          </motion.div>
          {/* </section> */}
        </div>
        <div className="deckOfApps" ref={ref}>
          <Typewriter
            options={{
              strings: ["My deck of applications"],
              autoStart: true,
              wrapperClassName: "typewriterName",
              delay: 60,
              pauseFor: 10000000000,
              cursor: "...",
            }}
          />
          <p style={{ marginRight: "15%" }}>
            These are my deck of applications which were built using HTML, CSS,
            OOP, Javascript, Handlebars, Bootstrap, MongoDB, React, Express,
            SQL, PostgreSQL, AWS, Redux, Tailwind, Material UI, Puppeteer,
            Socket.io, Typescript, Docker and Kubernetes.
          </p>
        </div>
      </section>

      {/* <div className="footerContainer">
        <p>juliangabrielriveradev@gmail.com</p>
        <p>linkedin.com/in/julian-g-rivera/</p>
      </div> */}
      {/* <section className="aboutMe"> */}
      <div className="whoamI" ref={ref3}>
        <div className="aboutI">
          <Typewriter
            style={{ width: "98vw" }}
            options={{
              strings: ["A little about myself"],
              autoStart: true,
              wrapperClassName: "typewriterName",
              delay: 60,
              pauseFor: 10000000000,
              cursor: "...",
            }}
          />
        </div>
        <p>
          Born in Puerto Rico, raised in Orlando Florida. My pastimes are going
          to the gym, coding, and sometimes gaming. I started my journey as a
          Junior Developer on March 2022 and I currently work as a Software
          Developer Instructor for Ironhack where I take part in building
          multiple Full Stack applications.
        </p>
      </div>
      {/* </section> */}
    </main>
  );
};

export default Home;
