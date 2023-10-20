import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import "rsuite/dist/rsuite.min.css";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const About = () => {

  const [experiences,setExperiences] = useState([]);
  const [techs,settechs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/experiences')
       .then((res) => setExperiences(res.data))
       .catch((err) => console.log(err))

    axios.get('http://localhost:8000/techs')
       .then((res) => settechs(res.data))
       .catch((err) => console.log(err))
  },[]);
  return (
    <div id="about" className={"bg-white"}>
      <div className=" max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-12 border">
        <h2
          className={
            "text-5xl font-bold px-4 md:px-0 text-center text-black my-4"
          }
        >
          About
        </h2>
        <div>
          <motion.div>
            <div className="mt-4 px-4">
              <h4 className="uppercase mt-12 text-2xl font-semibold text-blue-500">
                A bit about me
              </h4>
              <p className={"mt-4 text-xl text-justify text-black px-6"}>
                I'm a self-taught Full-Stack Developer with a passion for
                crafting web applications. My expertise spans the entire
                software development lifecycle, from conceptualizing new
                features to implementing wireframes and design flows into
                high-performance software solutions. I prioritize the user
                experience while writing clean, reusable, and efficient code.
              </p>
            </div>

            <div className="my-8 px-4">
              <h4 className="mt-12 text-2xl font-semibold text-blue-500">
                EXPERIENCE
              </h4>
              {experiences.map((experience, index) => (
                <div
                  key={index}
                  className="flex my-8 p-6 bg-white shadow-md"
                >
                  <div className="flex flex-col">
                    <h2 className="text-2xl font-semibold text-indigo-700">
                      {experience.company}
                    </h2>
                    <div className=" flex items-center justofy-center space-x-4 font-bold">
                      <p className="text-gray-600 text-xl pt-1">{experience.title}</p>
                      <p className="text-gray-500 text-xl">{experience.duration}</p>
                    </div>

                    <p className="mt-4 text-gray-700 text-lg">
                      {experience.description}
                    </p>
                  </div>
                </div>
              ))}

              {/* 
              <div className="flex my-8">
                <img src={matious} className="h-15 ml-" alt="Matious Logo" />
                <div className="ml-2">
                  <h2 className="font-bold text-lg">
                    Matious - Backend developer intern
                  </h2>
                  <p>01/03/2022 - 01/0</p>
                  <p className="whitespace-pre-line">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley.
                  </p>
                </div>
              </div> */}
            </div>
          </motion.div>
          <motion.div></motion.div>
          <motion.div>
            <h4 className="mt-12 text-2xl font-semibold text-blue-500">
              Technologies and Tools
            </h4>
            <p className={"mt-4 text-xl text-justify text-black px-6"}>
              Using a combination of cutting-edge technologies and reliable
              open-source software I build user-focused, performant apps and
              websites for smartphones, tablets, and desktops.
            </p>
          </motion.div>
          <motion.div className="flex flex-wrap mt-8 flex flex-wrap justify-between">
            {techs.map((el, index) => (
              <motion.div
                key={uuidv4()}
                initial="hidden"
                whileInView={"visible"}
                variants={{
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                    },
                  },
                  hidden: { opacity: 1, y: 80 },
                }}
                className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 md:w-48 w-40 border"
              >
                <img alt="" src={el.link} className="w-12" />
                <h4 className="text-md ml-4">{el.name}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
