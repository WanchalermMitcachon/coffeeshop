import React from "react";

function Hero() {
  return (
    <div
      className="bg-hero-createplanMobile bg-cover rounded-lg
     py-24 px-6 text-lightCream mt-10 md:bg-hero-createplanTablet lg:bg-hero-createplanDesktop"
    >
      <div className="text-center md:text-start md:ml-10 md:mt-10">
        <h1 className="text-h2  font-bold leading-h3 md:text-[48px] md:leading-h2 lg:text-h1 lg:leading-h1">
          Create a plan
        </h1>
        <p className="text-body font-barlow my-8 md:leading-body md:pr-56 lg:pr-[50rem]">
          {" "}
          Create a plan Build a subscription plan that best fits your needs. We
          offer an assortment of the best artisan coffees from around the globe
          delivered fresh to your door.
        </p>
      </div>
    </div>
  );
}

export default Hero;
