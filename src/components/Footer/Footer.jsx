import React from "react";
import { Link } from "react-router-dom";
import coffeelogoTwo from "/assets/shared/desktop/logoTwo.svg";
import facebook from "/assets/shared/desktop/icon-facebook.svg";
import twitter from "/assets/shared/desktop/icon-twitter.svg";
import instagram from "/assets/shared/desktop/icon-instagram.svg";

function Footer() {
  return (
    <div className="bg-darkGreyBlue w-full p-12 my-12 md:mt-28 lg:flex lg:justify-around lg:p-0">
      <img
        src={coffeelogoTwo}
        alt={coffeelogoTwo}
        className="mx-auto lg:mx-0 lg:object-contain	"
      />
      <div
        className="font-barlow font-bold flex flex-col items-center space-y-5
       text-grey my-12 md:flex-row md:items-center md:justify-center md:space-x-10 
       md:space-y-0 "
      >
        <Link to="/">
          <h1>HOME</h1>
        </Link>
        <Link to="/about">
          <h1>ABOUT US</h1>
        </Link>
        <Link to="/createyourplan">
          <h1>CREATE YOUR PLAN</h1>
        </Link>
      </div>
      <div className="flex justify-center space-x-6 md:my-6 ">
        <img src={facebook} alt="facebook " className="lg:object-contain"/>
        <img src={twitter} alt="twitter" className="lg:object-contain"/>
        <img src={instagram} alt="instagram"  className="lg:object-contain"/>
      </div>
    </div>
  );
}

export default Footer;
