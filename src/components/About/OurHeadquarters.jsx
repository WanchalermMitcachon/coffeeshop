import React from "react";
import UK from "/assets/about/desktop/illustration-uk.svg";
import Canada from "/assets/about/desktop/illustration-canada.svg";
import Australia from "/assets/about/desktop/illustration-australia.svg";
const data = [
  {
    image: UK,
    countryName: "United Kingdom",
    road: "68 Asfordby Rd",
    city: "Alcaston",
    code: "SY6 1YA",
    phone: "+44 1241 918425",
  },
  {
    image: Canada,
    countryName: "Canada",
    road: "1528 Eglinton Avenue",
    city: "Toronto",
    code: "Ontario M4P 1A6",
    phone: "+1 416 485 2997",
  },
  {
    image: Australia,
    countryName: "Australia",
    road: "36 Swanston Street",
    city: "Kewell",
    code: "Victoria",
    phone: "+61 4 9928 3629",
  },
];

function OurHeadquarters() {
  return (
    <div className="my-20 md:my-28 lg:px-20">
      <h1
        className="text-grey text-h4 leading-h4 font-bold text-center my-8 
      md:text-start"
      >
        Our headquarters
      </h1>
      <div className="md:flex md:space-x-20 lg:space-x-[12.5rem]">
        {data.map((item, idx) => {
          return (
            <div className="flex flex-col items-center space-y-6 my-12  md:items-start">
              <img src={item.image} alt={item.image} />
              <h1 className="font-bold text-[28px] leading-h3 ">
                {item.countryName}
              </h1>
              <div className="flex flex-col leading-body ">
                <p className="font-barlow">{item.road}</p>
                <p className="font-barlow">{item.city}</p>
                <p className="font-barlow">{item.code}</p>
                <p className="font-barlow">{item.phone}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OurHeadquarters;
