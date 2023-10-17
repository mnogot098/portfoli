import { motion } from "framer-motion";
import React from "react";
import Typical from "react-typical";
import consoleImage from "../assets/icons/console.png";
import programmingImage from "../assets/icons/programming.gif";
import { FilePdfOutlined } from "@ant-design/icons";

const Home = () => {
  const pdfUrlEnglish = process.env.PUBLIC_URL + "/resume_english.pdf";
  const pdfUrlFrench = process.env.PUBLIC_URL + "/resume_french.pdf";

  const downloadFile = (url, filename) => {
    // Create a link element
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;

    // Trigger a click on the link element
    link.click();
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
                <button
                  onClick={() =>
                    downloadFile(pdfUrlFrench, "resume_french.pdf")
                  }
                  className="rounded-md mr-4 py-2 px-8 font-sans hover:bg-orange-600 flex items-center  hover:text-white transition duration-300 ease-in-out font-bold text-orange-400 text-md border-2 border-orange-600"
                >
                  <FilePdfOutlined className="mr-2"/>
                  CV French
                </button>
                <button
                  onClick={() =>
                    downloadFile(pdfUrlEnglish, "resume_english.pdf")
                  }
                  className="rounded-md center mr-4 py-2 px-8 font-sans hover:bg-blue-600 flex items-center hover:text-white transition duration-300 ease-in-out font-bold text-blue-400 text-md border-2 border-blue-600"
                >
                   <FilePdfOutlined className="mr-2"/>
                  CV English
                </button>
              </div>
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
