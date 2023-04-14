import "./Home.css";
import "./Project.css";
import {
  motion,
  Reorder,
  useMotionValue,
  MotionValue,
  animate,
  useDragControls,
  AnimatePresence,
} from "framer-motion";
import { useState } from "react";
const Projects = () => {
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
  // const skills2 = [
  //   { skill: "HTML", id: 5 },
  //   { skill: "CSS", id: 6 },
  //   { skill: "Axios", id: 7 },
  //   { skill: "Bootstrap", id: 8 },
  // ];
  const [items, setItems] = useState(skills);
  const [items2, setItems2] = useState(skills2);
  return (
    <>
      {/* <img src="../images/side.png" alt="" id="julian" /> */}

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
      <section className="projects">
        <div className="deck">
          <motion.div
            className="card"
            /**
             * Setting the initial keyframe to "null" will use
             * the current value to allow for interruptable keyframes.
             */
            whileHover={{
              scale: [null, 1.0, 1.1],
              transform: "rotate(-15deg)",
              zIndex: "1",
            }}
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
              {items.map((skill) => {
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
              })}
              {/* </Reorder.Group> */}
              {/* <Reorder.Group
                axis="y"
                values={items2}
                onReorder={setItems2}
                className=" flex flex-wrap flex-col  flex-1"
              > */}
              {items2 &&
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
                })}
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
            className="card2"
            /**
             * Setting the initial keyframe to "null" will use
             * the current value to allow for interruptable keyframes.
             */
            whileHover={{
              scale: [null, 1.0, 1.1],
              transform: "rotate(-5deg)",
              zIndex: "1",
            }}
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
              {project2Skills.map((skill) => {
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
              })}
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
            className="card3"
            /**
             * Setting the initial keyframe to "null" will use
             * the current value to allow for interruptable keyframes.
             */
            whileHover={{
              scale: [null, 1.0, 1.1],
              transform: "rotate(7deg)",
              zIndex: "1",
            }}
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
            className="card4"
            /**
             * Setting the initial keyframe to "null" will use
             * the current value to allow for interruptable keyframes.
             */
            whileHover={{
              scale: [null, 1.0, 1.1],
              transform: "rotate(17deg)",
              zIndex: "1",
            }}
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
        <div style={{ width: "40%", textAlign: "left", marginTop: "75px" }}>
          <h1>My Deck of...</h1>
          <p>Full Stack applications</p>
        </div>
      </section>
    </>
  );
};
export default Projects;
