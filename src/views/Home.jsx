import { motion } from "framer-motion";
import React from "react";
import Typical from "react-typical";
import programming from "../assets/icons/programming.gif";
import { contactLinks } from "../constants";
import { v4 as uuidv4 } from "uuid";
import console from "../assets/icons/console.png";

const Home = () => {
  const handleButtonClick = () => {
    // Create a URL for the PDF file
    const pdfUrl = process.env.PUBLIC_URL + "/resume.pdf";

    // Create an anchor element
    const a = document.createElement("a");
    a.href = pdfUrl;

    // Set the download attribute with the desired file name
    a.download = "resume.pdf";

    // Programmatically click the anchor element to trigger the download
    a.click();
  };

  return (
    <>
      <div>
        <main
          className="mx-auto max-w-7xl px-4 sm:px-6 md:mt-0 lg:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between h-screen"
          id="/"
        >
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <div className="flex">
                <img src={console} alt="Ops.." className="h-16 mr-2"/>
                <motion.span className={" text-black"}>
                  Hi, I am Mohamed
                </motion.span>
              </div>

              <span className="block text-blue-500 z-0 lg:inline">
                <Typical
                  steps={[
                    "Front End Developer",
                    2000,
                    "Backend Developer",
                    2000,
                  ]}
                  loop={Infinity}
                />
              </span>
            </h1>
            <p
              className={
                "mt-3 text-base text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              }
            >
              I work as a Front-End / Full-Stack Developer in the technology
              industry, focusing on front-end development
            </p>
            <div className="flex md:justify-start ">
              {contactLinks.map((el) => (
                <a
                  key={uuidv4()}
                  href={el.link}
                  target="_blank"
                  className="mr-5 cursor-pointer mt-8 hover:scale-125 transition-transform duration-300 ease-in-out"
                >
                  <img alt="" src={el.url} />
                  {/* <p className="text-md mt-2 hover:hidden">{el.name}</p> */}
                </a>
              ))}
            </div>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="mt-3 sm:mt-0 cursor-pointer w-1/2">
                <button
                  onClick={handleButtonClick}
                  className="w-full flex items-center justify-center px-5 py-3 border-2 border-black-600 text-black font-medium text-black md:py-3 md:text-lg md:px-10 "
                >
                  Download cv
                </button>
              </div>
            </div>
          </div>
          <motion.img
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
            src={programming}
            alt=""
            className="md:w-3/6 hidden sm:block"
          />
        </main>
      </div>
    </>
  );
};

export default Home;
