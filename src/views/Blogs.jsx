import React, { useEffect, useState } from "react";
import axios from "axios"

const Blogs = () => {

  const [blogs,setBlogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/blogs')
       .then((res) => setBlogs(res.data))
       .catch((err) => console.log(err))
  },[]);

  return (
    <div id="blogs" className={"bg-white text-black"}>
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4  pt-24 pb-12 border mt-8">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">Blogs</h2>
        <div className="my-16">
          {blogs.map((blog, index) => (
            <div class="p-6 my-2 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700" key={index}>
              <h5 class="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                {blog.title}
              </h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {blog.description}
              </p>
              <div className="flex justify-end">
                <a
                  href={blog.linkUrl}
                  className="inline-flex items-center m-1 py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 hover:bg-blue-600 hover:no-underline hover:text-white transition ease-in-out delay-200"
                >
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
