import React from "react";
import bestQuality from "/assets/home/desktop/icon-coffee-bean.svg";
import exclusiveBenefits from "/assets/home/desktop/icon-gift.svg";
import freeShipping from "/assets/home/desktop/icon-truck.svg";

const data = [
  {
    icon: bestQuality,
    title: "Best quality",
    detail:
      "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
  },
  {
    icon: exclusiveBenefits,
    title: "Exclusive benefits",
    detail:
      "Special offers and swag when you subscribe, including 30% off your first shipment.",
  },
  {
    icon: freeShipping,
    title: "Free shipping",
    detail:
      "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.",
  },
];

function WhyChooseUs() {
  return (
    <div className=" bg-darkGreyBlue rounded-lg px-4">
      <div className="pt-14 pb-8 lg:pb-0">
        <h1
          className="text-lightCream text-h3 font-bold text-center leading-h3 px-4 my-5 
        lg:text-[40px] leading-h2"
        >
          Why choose us?
        </h1>
        <p
          className="text-center text-body text-grey font-barlow md:px-16 
        lg:px-[22.5rem] "
        >
          {" "}
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>
      </div>
      <div className="bg-[#2C343E] md:bg-darkGreyBlue h-[38rem] md:h-[20rem]">
        <div className="mt-20 space-y-6 lg:flex lg:mt-0 lg:space-y-0 lg:translate-y-[7rem]">
          {data.map((item, idx) => {
            return (
              <div
                className="flex flex-col items-center bg-darkCyan rounded-lg md:mx-10
                 md:grid md:grid-cols-[30%_70%] 
                 lg:flex lg:flex-col lg:pt-20 lg:pb-0"
                key={idx}
              >
                <img
                  src={item.icon}
                  alt={item.icon}
                  className="mt-20 md:mt-0 mx-auto"
                />
                <div className="text-center md:text-start md:px-10">
                  <h1 className="text-lightCream text-h4 font-bold pt-10 lg:text-center">
                    {item.title}
                  </h1>
                  <p
                    className="text-body text-lightCream font-barlow text-center px-6 pt-6 pb-12 
                  md:text-start md:px-0 lg:text-center"
                  >
                    {item.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
