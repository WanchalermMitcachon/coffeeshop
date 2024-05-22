import React from "react";

const data = [
  {
    number: "01",
    title: "Pick your coffee",
    detail:
      "Select from our evolving range of artisan coffees. Our beans are ethicallysourced and we pay fair prices for them. There's new coffees in all profilesevery month for you to try out.",
  },
  {
    number: "02",
    title: "Choose the frequency",
    detail:
      "Customize your order frequency, quantity, even your roast style and grind type.Pause, skip or cancel your subscription with no commitment through our online portal.",
  },
  {
    number: "03",
    title: "Receive and enjoy!",
    detail:
      " We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.",
  },
];

function Manual({}) {
  return (
    <div className="bg-darkGreyBlue my-24 py-6 rounded-lg md:my-28">
      <div className="md:flex mt-10 md:px-4">
        <div className="hidden md:block md:ml-6">
          <div></div>
        </div>
      </div>
      <div className="md:flex lg:space-x-[-5rem]">
        {data.map((item, idx) => {
          return (
            <div
              className="flex flex-col items-center space-y-5 my-16 px-5 md:items-start lg:px-16"
              key={idx}
            >
              <div className="hidden md:ml-8 md:block w-[105%]">
                <div className="h-9 w-9 rounded-full border-2 bg-white z-20 bordersky-500 translate-y-[-2rem] translate-x-[-1rem]"></div>
                {idx !== data.length - 1 && (
                  <hr className="border-2  translate-y-[-3.15rem] translate-x-[21px] z-10 " />
                )}{" "}
              </div>
              <h1 className="text-h1 font-bold text-paleOrange leading-h1 ">
                {item.number}
              </h1>
              <p className="text-[28px] text-lightCream text-center font-bold leading-h4 md:text-start">
                {item.title}
              </p>
              <p className="text-body text-lightCream  text-center font-barlow md:text-start md:leading-body lg:pr-10">
                {item.detail}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Manual;
