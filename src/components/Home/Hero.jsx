import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div
        className="bg-hero-coffeepressMobile bg-cover bg-center bg-no-repeat rounded-lg pb-10 py-12 
      md:bg-hero-coffeepressTablet md:px-16 md:py-20 
      lg:bg-hero-coffeepressDesktop "
      >
        <div className="flex flex-col items-center pt-[60px] px-5 md:items-start">
          <h1
            className=" text-white text-[40px] text-center fraunces leading-10
          md:w-[420px] md:text-start md:text-[48px] md:font-bold md:leading-h2
          lg:text-h1 lg:w-[450px] lg:leading-h1"
          >
            Great coffee made simple.
          </h1>
          <p
            className="text-body font-barlow  text-center text-grey leading-body
           mt-9 md:text-start md:w-[420px] leading-body"
          >
            Start your mornings with the world’s best coffees. Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.
          </p>
          <Link to="/createyourplan">
            <button className="mainButtonDefault hover:mainButtonHover my-8 lg:mt-12">
              Create your plan
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Hero;
