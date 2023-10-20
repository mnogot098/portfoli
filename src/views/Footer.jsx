import React from "react";

import email from "../assets/email.png";
import phone from "../assets/phone.png";
import location from "../assets/location.png";
import { v4 as uuidv4 } from "uuid";
import { contactLinks } from "../constants";

const Footer = () => {
  return (
    <div
      id="footer"
      className=" flex justify-center py-20 text-black border-t-2 border-gray weight-lg"
    >
      <div className="flex items-center py-2 mx-4 hover:border-b hover:border-gray-500 transition duration-300 ">
        <img src={email} alt="not found" className="h-10 mr-2" />
        <span>mohamedng098@gmail.com</span>
      </div>
      <div className="flex items-center mx-4 py-2 hover:border-b hover:border-gray-500 transition duration-300">
        <img src={phone} alt="not found" className="h-9 mx-2" />
        <span>(+217) 7 52 74 87 20</span>
      </div>
      <div className="flex items-center mx-4 py-2 hover:border-b hover:border-gray-500 transition duration-300">
        <img src={location} alt="not found" className="h-9 mx-2" />
        <span>Rabat, Morocco</span>
      </div>
      <div className="flex ml-12">
        {contactLinks.map((el) => (
          <a
            key={uuidv4()}
            href={el.link}
            target="_blank"
            className="mr-5 cursor-pointer hover:scale-125 transition-transform duration-300 ease-in-out"
          >
            <img alt="" src={el.url} className="h-8 mt-3" />
            {/* <p className="text-md mt-2 hover:hidden">{el.name}</p> */}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
