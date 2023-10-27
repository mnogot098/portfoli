import { SendOutlined } from "@ant-design/icons";
import React, { useRef, useState } from "react";

const Contact = () => {
  const form = useRef();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  /*const sendEmail = (e) => {
    e.preventDefault();
    console.log("form:"+e);
    emailjs
      .sendForm(
        "service_sf7ppoe",
        "template_54m0nkj",
        form.current,
        "V5lUQFFzJZSJGAWZ4"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSuccess(true);
          setIsError(false);
        },
        (error) => {
          console.error(error);
          setIsSuccess(false);
          setIsError(true);
        }
      );*/

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        setIsError(false);
        setFormData({
          name: '',
          email: '',
          message: '',
        });
        console.log('After reset:', formData);
      } else {
        setIsSuccess(false);
        setIsError(true);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const closeSuccessMessage = () => {
    setIsSuccess(false);
  };

  const closeErrorMessage = () => {
    setIsError(false);
  };

  return (
    <div id="contact" className={"text-black pt-24 md:h-screen"}>
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 border mt-4 py-8">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center z-0">
          Contact me
        </h2>
        {isSuccess && (
          <div className="bg-green-200 p-2 text-green-600 rounded mt-4 flex justify-between items-center">
            <span>Email sent successfully!</span>
            <button
              onClick={closeSuccessMessage}
              className="text-green-500 cursor-pointer mx-4"
            >
              X
            </button>
          </div>
        )}
        {isError && (
          <div className="bg-red-200 p-2 text-red-600 rounded mt-4 flex justify-between items-center">
            Error sending email. Please try again.{" "}
            <button
              onClick={closeErrorMessage}
              className="text-red-500 ml-2 cursor-pointer mx-4"
            >
              X
            </button>
          </div>
        )}
        <div></div>
        <form ref={form} onSubmit={handleSubmit}>
          <div className="my-2">
            <label
              for="name"
              className={"block mb-2 text-lg font-medium text-white"}
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name} 
              id="name"
              className=" text-gray-900 text-sm block w-full p-2.5 border border-gray-500"
              placeholder="Enter your name"
              required
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label
              for="email"
              className={"block mb-2 text-lg font-medium text-white"}
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="text-gray-900 text-sm block w-full p-2.5 border border-gray-500"
              placeholder="Enter your email"
              required
              onChange={handleChange}
              value={formData.email} 
            />
          </div>
          <div className="mb-4">
            <label
              for="message"
              className={"block mb-1 text-lg font-medium text-white"}
            >
              Message
            </label>
            <textarea
              id="message"
              className="text-gray-900 h-28 w-full text-sm block p-2.5 border border-gray-500"
              placeholder="Enter your message"
              required
              name="message"
              value={formData.message} 
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-end ">
            <button
              type="submit"
              className="border-gradient-to-r border-2 border-green-500 text-green-500 font-bold py-2 px-4 rounded bg-transparent hover:text-white hover:bg-green-500 transition ease-in-out delay-150"
            >
              <span className="mr-2">Send</span>
              <SendOutlined />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
