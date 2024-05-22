import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

function NavigationModal({ isOpenHamberger, setIsOpenHamberger }) {
  const updateImageSrc = () => {
    if (window.innerWidth >= 768) {
      setIsOpenHamberger(false);
    }
  };

  useEffect(() => {
    updateImageSrc();
    window.addEventListener("resize", updateImageSrc);
    return () => window.removeEventListener("resize", updateImageSrc);
  }, []);

  return (
    <div
      className={`  flex flex-col items-center space-y-4 py-14 
      absolute top-[5rem] w-screen  h-[550px]
       bg-gradient-to-b from-lightCream via-lightCream to-transparent md:w-screen opacity-100 ${
         isOpenHamberger
           ? "transform translate-y-[5%] duration-500 	"
           : "transform translate-y-[-140%]"
       }`}
    >
      <NavLink
        to="/"
        activeClassName
        onClick={() => setIsOpenHamberger(!isOpenHamberger)}
      >
        {" "}
        <h1 className="text-h4 font-bold">Home</h1>
      </NavLink>
      <NavLink
        to="/about"
        activeClassName
        onClick={() => setIsOpenHamberger(!isOpenHamberger)}
      >
        <h1 className="text-h4 font-bold">About Us</h1>
      </NavLink>
      <NavLink
        to="/createyourplan"
        activeClassName
        onClick={() => setIsOpenHamberger(!isOpenHamberger)}
      >
        <h1 className="text-h4 font-bold">Create Your Plan</h1>
      </NavLink>
    </div>
  );
}

export default NavigationModal;
