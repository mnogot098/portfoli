import React from "react";
import { motion } from "framer-motion";

const Card = ({ imageUrl, title, description, linkUrl }) => {
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      className="flex max-w-xl bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 my-8 p-1"
    >
      <a href={linkUrl}>
        <img
          className="h-full"
          src={imageUrl}
          alt=""
        />
      </a>
      <div className="p-5">
        <a href={linkUrl}>
          <h5 className="p-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal p-2 text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <div className="flex justify-end">
          <a
            href={linkUrl}
            className="border-gradient-to-r border-2 border-blue-500 border-pink-500 text-pink-500 font-bold py-2 px-4 rounded bg-transparent hover:text-white hover:bg-pink-500 hover:no-underline transition ease-in-out delay-150 cursor-pointer"
          >
            Read more
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
