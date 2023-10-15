import React, { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../themeProvider";

const Contact = () => {
  const form = useRef();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

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
      );
  };

  const closeSuccessMessage = () => {
    setIsSuccess(false);
  };

  const closeErrorMessage = () => {
    setIsError(false);
  };

  return (
    <div
      id="contact"
      className={"bg-black pt-24 text-white md:h-screen"
      }
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center z-0">
          Contact
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
        <form ref={form} onSubmit={sendEmail}>
          <div className="my-6">
            <label
              for="name"
              className={"block mb-2 text-lg font-medium text-white"
              }
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              for="email"
              className={"block mb-2 text-lg font-medium text-white"
              }
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              for="message"
              className={"block mb-2 text-lg font-medium text-white"
              }
            >
              Message
            </label>
            <textarea
              id="message"
              className="bg-gray-50 border border-gray-300 text-gray-900 h-28 w-full text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray
                  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your message"
              required
              name="message"
            />
          </div>
          <div className="flex justify-between ">
            <button className="bg-indigo-500 text-white px-4 py-2 w-40 rounded-md hover:bg-indigo-400">
              Submit
            </button>
          </div>
        </form>
        <div className="mt-5 sm:mt-8">
          <div className="mt-3 sm:mt-0 w-full flex">
            <p className="text-base text-gray-500">
              <span className="font-bold">Email: </span>mohamedng098@gmail
              //&nbsp;
            </p>
            <p className="text-base text-gray-500">
              &nbsp;<span className="font-bold">Address: </span>
              <a className="text-decoration-line: underline" href="https://www.google.com/maps/place/Rabat/data=!4m2!3m1!1s0xda76b871f50c5c1:0x7ac946ed7408076b?sa=X&ved=2ahUKEwi-m_7_-fKBAxXRfKQEHVCSDUQQ8gF6BAgKEAA&ved=2ahUKEwi-m_7_-fKBAxXRfKQEHVCSDUQQ8gF6BAgLEAI" target="_blank">
                Rabat, Morocco
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
