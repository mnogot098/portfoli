import { motion } from "framer-motion";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { techStack } from "../constants";

const About = () => {
  return (
    <div id="about" className={"bg-gray-900"}>
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-12">
        <h2
          className={"text-5xl font-bold px-4 md:px-0 text-center text-white"}
        >
          About Me
        </h2>
        <div>
          <motion.div>
            <h4 className="mt-12 text-2xl font-semibold text-blue-500">
              A bit about me
            </h4>
            <p className={"mt-4 text-xl text-justify text-white"}>
              I'm a self-taught Full-Stack Developer with a passion for crafting
              web applications. My expertise spans the entire software
              development lifecycle, from conceptualizing new features to
              implementing wireframes and design flows into high-performance
              software solutions. I prioritize the user experience while writing
              clean, reusable, and efficient code.
            </p>
          </motion.div>
          <motion.div>
            <h4 className="mt-12 text-2xl font-semibold text-blue-500">
              Technologies and Tools
            </h4>
            <p className={"mt-4 text-xl text-justify text-white"}>
              Using a combination of cutting-edge technologies and reliable
              open-source software I build user-focused, performant apps and
              websites for smartphones, tablets, and desktops.
            </p>
          </motion.div>
          <motion.div className="flex flex-wrap mt-8 flex flex-wrap justify-between ">
            {techStack.map((el, index) => (
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
                className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 md:w-48 w-40"
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
