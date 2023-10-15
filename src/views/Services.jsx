import { motion } from "framer-motion";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { serviceData } from "../constants";

const Services = () => {
  return (
    <div
      style={{
        marginLeft: "5px",
      }}
      // style={{backgroundImage: `url('https://i.pinimg.com/originals/b0/b1/f5/b0b1f5d33de00e3c21ad29bbba25e31b.gif')`}}>
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 px-4 pt-20"
        id="services"
      >
        <h2
          className={"text-5xl font-bold px-4 md:px-0 text-center text-white"}
        >
          Services
        </h2>
        <div className="">
          <h4 className="mt-16 text-2xl font-semibold text-blue-500">
            What I Provide
          </h4>
          <div className="mt-8 flex md:flex-row justify-between flex-col md:items-stretch items-center ">
            {serviceData.map((el) => (
              <motion.div
                key={uuidv4()}
                style={{
                  marginLeft: "10px",
                  border: "grey 1px solid",
                }}
                initial="hidden"
                whileInView={"visible"}
                variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 0 },
                }}
                className={
                  "md:w-96 p-4 bg-gray-100 flex items-center flex-col mt-8"
                }
              >
                <img src={el.img} alt="" width={60} />
                <h4 className="text-xl font-bold mt-4 text-cente">{el.name}</h4>
                <p className="text-lg mt-2 text-center">{el.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
