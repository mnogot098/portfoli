import React from "react";
import email from "../assets/icons/email.png";
import phone from "../assets/icons/phone.png";
import location from "../assets/icons/location.png";

const Footer = () => {
  return (
    <div id="footer" className="bg-gray-600 flex justify-center py-20 text-black border-t-2 border-gray weight-lg">
      <div className="flex items-center py-2 mx-4 hover:border-b hover:border-gray-500 transition duration-300 ">
        <img src={email} alt="not found" className="h-10 mr-2"/>
        <span>mohamedng098@gmail.com</span>
      </div>
      <div className="flex items-center mx-4 py-2 hover:border-b hover:border-gray-500 transition duration-300">
        <img src={phone} alt="not found" className="h-9 mx-2"/>
        <span>(+217) 7 52 74 87 20</span>
      </div>
      <div className="flex items-center mx-4 py-2 hover:border-b hover:border-gray-500 transition duration-300">
        <img src={location} alt="not found" className="h-9 mx-2"/>
        <span>Rabat, Morocco</span>
      </div>
    </div>
  );
};

export default Footer;
