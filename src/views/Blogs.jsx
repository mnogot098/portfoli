import React, { useContext } from "react";
import Card from "../components/Card";
import { ThemeContext } from "../themeProvider";

const Blogs = () => {
  return (
    <div
      id="blogs"
      className={"bg-white text-black"}
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4  pt-24 pb-12 border mt-8">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
          Blogs
        </h2>
        <h4 className="mt-16 text-2xl font-semibold text-blue-600">
          My blog
        </h4>
        <div className="mt-8 flex justify-between items-stretch flex-wrap">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
