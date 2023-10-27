import axios from "axios";
import React, { useEffect, useState } from "react";
import no_data from "../assets/no_data.png";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/blogs")
      .then((res) => setBlogs(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div id="blogs" className={"bg-white text-black"}>
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4  pt-24 pb-12 border mt-8">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">Blogs</h2>
        <div className="my-16">
          {blogs.length > 0 ? (
            blogs.map((blog, index) => (
              <div
                class="p-6 my-2 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700"
                key={index}
              >
                <h5 class="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                  {blog.title}
                </h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {blog.description}
                </p>
                <div className="flex justify-end">
                  <a
                    href={blog.linkUrl}
                    className="border-gradient-to-r border-2 border-blue-500 border-pink-500 text-pink-500 font-bold py-2 px-4 rounded bg-transparent hover:text-white hover:bg-pink-500 hover:no-underline transition ease-in-out delay-150 cursor-pointer"
                  >
                    Read more
                  </a>
                </div>
              </div>
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
  );
};

export default Blogs;
