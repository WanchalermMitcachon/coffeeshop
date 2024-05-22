import React from "react";
import Espresso from "/assets/home/desktop/image-gran-espresso.png";
import Planalto from "/assets/home/desktop/image-planalto.png";
import Piccollo from "/assets/home/desktop/image-piccollo.png";
import Danche from "/assets/home/desktop/image-danche.png";
const data = [
  {
    img: Espresso,
    name: "Gran Espresso",
    detail:
      "Light and flavorful blend with cocoa and black pepper for an intense experience",
  },
  {
    img: Planalto,
    name: "Planalto",
    detail:
      "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts",
  },
  {
    img: Piccollo,
    name: "Piccollo",
    detail:
      "Mild and smooth blend featuring notes of toasted almond and dried cherry",
  },
  {
    img: Danche,
    name: "Danche",
    detail:
      "Ethiopian hand-harvested blend densely packed with vibrant fruit notes",
  },
];

function Collection() {
  return (
    <div className="mt-[120px] px-4 ">
      <h2
        className="bg-gradient-to-b from-gray-500 to-white bg-clip-text 
         font-bold  text-transparent text-h2 text-center mx-auto md:text-[121px]
         lg:text-[180px]"
      >
        our collection
      </h2>
      <div className="md:translate-y-[-10rem] lg:flex">
        {data.map((item, idx) => {
          return (
            <div
              key={idx}
              className="flex flex-col items-center my-12 md:flex-row 
              md:w-[75%] md:space-x-24 md:ml-24 lg:flex-col lg:justify-center lg:items-center lg:space-x-0 "
            >
              <img
                src={item.img}
                alt={item.img}
                className="w-[200px] h-[151px]"
              />
              <div className="flex flex-col text-center md:text-center md:space-y-2 md:mb-8 lg:mt-8">
                <h1 className="my-5 text-h4 leading-h4 font-bold lg:text-center">
                  {item.name}
                </h1>
                <p className="lg:-indent-4 text-center font-barlow text-darkGreyBlue md:text-start lg:text-center">
                  {item.detail}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Collection;
