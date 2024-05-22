import React from "react";

function Hero() {
  return (
    <div
      className="bg-hero-aboutusMobile bg-cover px-8 py-24 mt-12 mb-28 
    text-white rounded-lg md:bg-hero-aboutusTablet md:px-16 md:pr-60 
    lg:bg-hero-aboutusDesktop lg:pr-[45rem]"
    >
      <h1
        className="text-center my-8 text-[28px] font-bold 
      md:text-start md:text-h3 md:leading-[40px] lg:text-h2 lg:leading-h3"
      >
        About Us
      </h1>
      <p
        className="text-center font-barlow leading-body text-lightCream 
       md:text-start"
      >
        {" "}
        Coffeeroasters began its journey of exotic discovery in 1999,
        highlighting stories of coffee from around the world. We have since been
        dedicated to bring the perfect cup - from bean to brew - in every
        shipment.
      </p>
    </div>
  );
}

export default Hero;
