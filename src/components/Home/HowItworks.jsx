import React from "react";
import { Link } from "react-router-dom";

const data = [
  {
    number: "01",
    title: "Pick your coffee",
    detail:
      "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.",
  },
  {
    number: "02",
    title: "Choose the frequency",
    detail:
      "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.",
  },
  {
    number: "03",
    title: "Receive and enjoy!",
    detail:
      "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.",
  },
];

function HowItworks() {
  return (
    <div className="mt-[40rem] md:mt-[28rem] lg:mt-[22.5rem] md:max-w-[80%] lg:ml-[8rem] ">
      <h1 className="text-grey font-bold text-h4 text-center md:text-start">
        How it works
      </h1>
      {/* <div className="flex mt-10 lg:mt-16">
        <div className="hidden md:block">
          <div className=" hidden md:flex w-6 h-6 rounded-full border-2 border-sky-500"></div>
          <div>
            <hr
              className="min-w-[280px] translate-y-[-0.75rem] translate-x-6 border border-solid border-paleOrange
            lg:w-[400px]"
            ></hr>
          </div>
        </div>
        <div className="hidden md:block md:pl-6 ">
          <div className=" hidden md:flex w-6 h-6 rounded-full border-2 border-sky-500"></div>
          <div>
            <hr className="min-w-[230px]  translate-y-[-0.75rem] translate-x-6 border border-solid border-paleOrange lg:w-[350px] "></hr>
          </div>
        </div>
        <div className="hidden md:block md:ml-6">
          <div className=" hidden md:flex w-6 h-6 rounded-full border-2 border-sky-500"></div>
          <div></div>
        </div>
      </div> */}
      <div className="md:flex md:space-x-10">
        {data.map((item, idx) => {
          return (
            <div
              className="flex flex-col items-center space-y-5 my-14 
              md:items-start md:w-[35%] lg:w-[30%]"
              key={idx}
            >
              <div className="hidden md:block w-[105%]">
                <div className="h-9 w-9 rounded-full border-2 bg-white z-20 bordersky-500 translate-y-[-2rem] translate-x-[-1rem]"></div>
                {idx !== data.length - 1 && (
                  <hr className="border-2  translate-y-[-3.15rem] translate-x-[21px] z-10 " />
                )}{" "}
              </div>
              <h1 className="text-h1 font-bold text-paleOrange leading-h1 ">
                {item.number}
              </h1>
              <p
                className="text-[28px] text-center font-bold leading-h4 md:text-start
              lg:text-h3 lg:leading-h3"
              >
                {item.title}
              </p>
              <p className="text-body text-center font-barlow md:text-start lg:pr-12">
                {item.detail}
              </p>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center my-20 md:justify-start md:my-0">
        <Link to="/createyourplan">
          <button className="mainButtonDefault hover:mainButtonHover">
            Create your plan
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HowItworks;
