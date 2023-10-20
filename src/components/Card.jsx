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
            className="inline-flex items-center m-1 py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 hover:bg-blue-600 hover:no-underline hover:text-white transition ease-in-out delay-200"
          >
            Read more
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
