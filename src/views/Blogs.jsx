import axios from "axios";
import React, { useEffect, useState } from "react";
import no_data from "../assets/no_data.png";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/blogs")
      .then((res) => setBlogs(res.data))
      .catch((err) => console.log(err));
  }, []);

  const openModal = (blog) => {
    setSelectedBlog(blog);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedBlog(null);
    setShowModal(false);
  };

  return (
    <div id="blogs" className={"bg-white text-black"}>
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4  pt-24 pb-12 border mt-8">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">Blogs</h2>
        <div className="my-16">
          {blogs.length > 0 ? (
            blogs.map((blog, index) => (
              <div
                className="p-6 my-2 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700"
                key={index}
              >
                <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                  {blog.title}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                <div dangerouslySetInnerHTML={{ __html: blog.description }}></div>
                </p>
                <div className="flex justify-end">
                  <button
                    className="border-gradient-to-r border-2 border-blue-500 border-pink-500 text-pink-500 font-bold py-2 px-4 rounded bg-transparent hover:text-white hover:bg-pink-500 hover:no-underline transition ease-in-out delay-150 cursor-pointer"
                    onClick={() => openModal(blog)}
                  >
                    Read more
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="flex justify-center items-center text-center bg-gray-50 w-full my-4 border py-16">
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

      // ...

{showModal && (
  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70 z-50">
    <div className="w-full h-full flex justify-center">
      <div className="bg-white px-16 py-8 w-full mx-4 rounded-lg shadow-lg">
        <button
          className="capitalize absolute top-2 right-2 text-white bg-pink-500 rounded-md px-4 py-2"
          onClick={closeModal}
        >
          Close
        </button>
        <div className="">
        <h1 className="capitalize text-6xl font-bold text-gray-900 dark:text-white mb-16">
          {selectedBlog.title}
        </h1>
        <div dangerouslySetInnerHTML={{ __html: selectedBlog.description }}></div>
        </div>
      </div>
    </div>
  </div>
)}

// ...

    </div>
  );
};

export default Blogs;
