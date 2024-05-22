import React from "react";
import hamberger from "/assets/shared/mobile/icon-hamburger.svg";
import close from "/assets/shared/mobile/icon-close.svg";
import coffeelogo from "/assets/shared/desktop/logo.svg";
import NavigationModal from "./NavigationModal";
import { Link, NavLink } from "react-router-dom";

function Topbar({ isOpenHamberger, setIsOpenHamberger }) {
  return (
    <div className="flex flex-col w-full">
      <div
        className="flex justify-between mt-[32.31px] fraunces w-full 
      "
      >
        <div>
          <img src={coffeelogo} alt="coffeelogo" className="" />
        </div>
        <div>
          <div
            className="hidden md:flex md:font-barlow md:text-[12px] 
          md:leading-body md:space-x-8 md:text-grey md:tracking-[0.92px] "
          >
            <NavLink to="/" activeClassName>
              {" "}
              <h1 className=" ">HOME</h1>
            </NavLink>
            <NavLink to="/about" activeClassName>
              <h1 className="">ABOUT US</h1>
            </NavLink>
            <NavLink to="/createyourplan" activeClassName>
              <h1 className="">CREATE YOUR PLAN</h1>
            </NavLink>
          </div>

          <img
            src={isOpenHamberger ? close : hamberger}
            alt="hamberger"
            className="md:hidden cursor-pointer  hover:scale-110 px-2"
            onClick={() => setIsOpenHamberger(!isOpenHamberger)}
          ></img>
        </div>
      </div>
      <div className="md:w-full ">
        <NavigationModal
          isOpenHamberger={isOpenHamberger}
          setIsOpenHamberger={setIsOpenHamberger}
        />
      </div>
    </div>
  );
}

export default Topbar;
