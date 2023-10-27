import axios from "axios";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import no_data from "../assets/no_data.png";


const Services = () => {
  const [services, setservices] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/services")
      .then((res) => setservices(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 px-4 pt-20 border mt-8"
        id="services"
      >
        <h2
          className={"text-5xl font-bold px-4 md:px-0 text-center text-black"}
        >
          Services
        </h2>
        <div className="">
          <h4 className="mt-16 text-2xl font-semibold text-blue-500">
            What I Provide
          </h4>
          <div className="my-8 flex md:flex-row justify-between flex-col md:items-stretch items-center ">
            {services.length > 0 ? (
              services.map((el) => (
                <motion.div
                  key={uuidv4()}
                  initial="hidden"
                  whileInView={"visible"}
                  variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 },
                  }}
                  className={
                    "md:w-96 p-4 flex items-center flex-col mt-8 border mx-2 hover:shadow-md duration-300 ease-in-out"
                  }
                >
                  <img
                    src={process.env.PUBLIC_URL + el.image_url}
                    alt="not found"
                    width={"60rem"}
                    height="8rem"
                  />
                  <h4 className="text-xl font-bold mt-4 text-center">
                    {el.name}
                  </h4>
                  <p className="text-lg mt-2 text-center">{el.description}</p>
                </motion.div>
              ))
            ) : (
              <div class="flex justify-center items-center text-center bg-gray-50 w-full my-4 border py-16">
                <img
                  src={no_data}
                  alt="not found"
                  className="mx-2"
                  height="50px"
                  width="200px"
                />
                <h3>No data to display</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
