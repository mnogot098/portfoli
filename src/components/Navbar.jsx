import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { Link } from "react-scroll";
import { v4 as uuidv4 } from 'uuid';

const Navbar = () => {
  const links = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "About",
      route: "about",
    },
    {
      name: "Services",
      route: "services",
    },
    {
      name: "Projects",
      route: "projects",
    },
    {
      name: "Blogs",
      route: "blogs",
    },
    {
      name: "Contact",
      route: "contact",
    },
    {
      name: "Certifications",
      route: "contact",
    },
  ];

  return (
    <>
      <nav className={"bg-white z-50 md:px-8 px-1 fixed w-full top-0"}>
        <div className="flex justify-between items-center py-2 md:py-4 md:px-2 pl-2 mx-auto">
          <div className="flex items-center cursor-pointer">
            <a
              href="/"
              className={
                "text-xl font-medium text-decoration-none whitespace-nowrap text-white"
              }
            >
              {`<MOHAMED NOGOT/>`}
            </a>
          </div>
          <div className="hidden justify-between items-center w-full md:flex md:w-auto ">
            <ul
              className={"flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium"}
            >
              {links.map((el) => (
                <li className="cursor-pointer" key={uuidv4()}>
                  <Link 
                    to={el.route}
                    activeClass={"text-white bg-blue-500"}
                    spy={true}
                    smooth={true}
                    className={"block py-2 px-3 text-black hover:no-underline hover:border-b-2"}
                  >
                    {el.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Mobile view nav bar */}
      </nav>
      <AnimatePresence>
        {1 && (
          <motion.div
            initial={{ x: 100 }}
            animate={{ x: 0, transition: { type: "spring" } }}
            exit={{ x: 200, transition: { type: "spring" } }}
            className={
              "bg-black py-2 px-2 md:p-0 z-50 fixed top-16 mt-2 rounded-lg shadow-lg right-2 block w-40"
            }
          >
            <ul className="md:hidden md:flex-row md:space-y-8 md:mt-0 md:text-md md:font-medium">
              {links.map((el) => (
                <Link key={uuidv4()}
                  to={el.route}
                  activeClass={"text-white bg-blue-500"}
                  className={
                    "hover:bg-blue-500 text-white block px-3 py-2 rounded-md text-base font-medium mt-1 hover:text-white"
                  }
                  spy={true}
                  smooth={true}
                >
                  <li>{el.name}</li>
                </Link>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
