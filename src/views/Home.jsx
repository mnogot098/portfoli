import React, { useState } from "react";
import { motion } from "framer-motion";
import Typical from "react-typical";
import consoleImage from "../assets/icons/console.png";
import programmingImage from "../assets/icons/programming.gif";
import { contactLinks } from "../constants";

const Home = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleButtonClick = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <div>
      <main
        className="mx-auto max-w-7xl px-4 sm:px-6 md:mt-0 lg:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between h-screen"
        id="/"
      >
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <div className="flex">
              <img
                src={consoleImage}
                alt="Console Icon"
                className="h-16 mr-2"
              />
              <motion.span className="text-black">Hi, I am Mohamed</motion.span>
            </div>

            <span className="block text-blue-500 z-0 lg:inline">
              <Typical
                steps={["Front End Developer", 2000, "Backend Developer", 2000]}
                loop={Infinity}
              />
            </span>
          </h1>
          <p className="mt-3 text-base text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            I work as a Front-End / Full-Stack Developer in the technology
            industry, focusing on front-end development.
          </p>

          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="mt-3 sm:mt-0 cursor-pointer">
              <div className="flex relative font-light leading-relaxed text-blue-gray-500 antialiased">
                <button className="rounded-md mr-4 py-2 px-8 font-sans hover:bg-orange-600  hover:text-white transition duration-300 ease-in-out font-bold text-orange-400 text-md border-2 border-orange-600">
                  CV French
                </button>
                <button className="rounded-md center mr-4 py-2 px-8 font-sans hover:bg-blue-600  hover:text-white transition duration-300 ease-in-out font-bold text-blue-400 text-md border-2 border-blue-600">
                  CV English
                </button>
              </div>
              {/* <button
                onClick={handleButtonClick}
                className="middle none center mr-4 rounded-md bg-gradient-to-tr from-pink-600 to-pink-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Download CV
              </button> */}
              {/* {isDialogOpen && (
                <div className="fixed inset-0 z-50 grid h-screen w-screen place-items-center bg-black bg-opacity-60 backdrop-blur-sm">
                  <div className="relative m-4 w-2/5 min-w-[40%] max-w-[40%] rounded-lg bg-white font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased shadow-2xl">
                    <div className="text-center relative border-t border-b border-t-blue-gray-100 border-b-blue-gray-100 p-4 font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased">
                      <button
                        className="middle none center mr-4 bg-gradient-to-tr from-green-400 to-green-300 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all disabled:opacity-50 disabled:shadow-none"
                      >
                        French
                      </button>
                      <button
                        className="middle none center mr-4 bg-gradient-to-tr from-blue-400 to-blue-300 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all disabled:shadow-none"
                      >
                        English
                      </button>
                    </div>
                    <div className="flex shrink-0 flex-wrap items-center justify-end  text-blue-gray-500">
                      <button
                        onClick={handleCloseDialog}
                        className="middle none center rounded-lg py-3 px-6 font-sans text-xs font-bold uppercase text-red-500 transition-all"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              )} */}
            </div>
          </div>
        </div>
        <motion.img
          initial="hidden"
          whileInView="visible"
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
          src={programmingImage}
          alt="Programming Image"
          className="md:w-3/6 hidden sm:block"
        />
      </main>
    </div>
  );
};

export default Home;
