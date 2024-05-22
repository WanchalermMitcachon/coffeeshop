import React, { useEffect, useState } from "react";
import downArrow from "/assets/plan/desktop/icon-arrow.svg";
import upArrow from "/assets/plan/desktop/icon-arrow-up.svg";
import OrderSumary from "./OrderSumary";

const AccordionItem = ({
  title,
  type,
  onToggle,
  isOpen,
  selectedType,
  onSelectType,
  disabled,
}) => {
  const handleTypeClick = (itemTitle) => {
    onSelectType(itemTitle);
  };
  console.log("ispoen", isOpen);
  return (
    <div>
      <button
        className={`w-full text-left px-2 py-2 text-gray-800 focus:outline-none mt-12 md:mt-10 ${
          disabled ? "cursor-not-allowed opacity-50" : ""
        }`}
        onClick={disabled ? null : onToggle}
        disabled={disabled}
      >
        <div className="flex justify-between items-center lg:mr-12">
          <span
            className={`font-bold text-h4 leading-h4 text-grey md:text-h3 md:leading-[48px] lg:text-h2`}
          >
            {title}
          </span>
          <img src={isOpen ? upArrow : downArrow} alt="Arrow" className="" />
        </div>
      </button>
      <div className="md:flex md:space-x-3 ">
        {isOpen && (
          <>
            {type.map((item, idx) => {
              const isSelected = selectedType === item.title;
              return (
                <div
                  className={`p-4 rounded-lg text-gray-600 space-y-3 my-4 cursor-pointer md:px-8 md:pt-6 md:pb-24 ${
                    isSelected
                      ? "bg-darkCyan"
                      : "bg-[#F4F1EB] hover:bg-paleOrange "
                  }`}
                  key={idx}
                  onClick={() => handleTypeClick(item.title)}
                >
                  <h1
                    className={`${
                      isSelected && "text-lightCream "
                    } text-h4 font-bold leading-h4`}
                  >
                    {item.title}
                  </h1>
                  <p
                    className={`${
                      isSelected && "text-lightCream"
                    } font-barlow text-body text-darkGreyBlue my-3`}
                  >
                    {item.detail}
                  </p>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

function HowDrink({
  selectedTypeOne,
  selectedTypeTwo,
  selectedTypeThree,
  selectedTypeFour,
  selectedTypeFive,
  setSelectedTypeOne,
  setSelectedTypeTwo,
  setSelectedTypeThree,
  setSelectedTypeFour,
  setSelectedTypeFive,
}) {
  const [openItems, setOpenItems] = useState({});
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 768);

  const [priceEveryWeek, setPriceEveryWeek] = useState("");
  const [priceEveryTwoWeek, setPriceEveryTwoWeek] = useState("");
  const [priceEveryMonth, setPriceEveryMonth] = useState("");

  const items = [
    {
      title: "How do you drink your coffee?",
      type: [
        {
          title: "Capsule",
          detail: "Compatible with Nespresso systems and similar brewers",
        },
        {
          title: "Filter",
          detail:
            "For pour over or drip methods like Aeropress, Chemex, and V60",
        },
        {
          title: "Espresso",
          detail:
            "Dense and finely ground beans for an intense, flavorful experience",
        },
      ],
    },
    {
      title: "What type of coffee?",
      type: [
        {
          title: "Single origin",
          detail:
            "Distinct, high quality coffee from a specific family-owned farm",
        },
        {
          title: "Decaf",
          detail:
            "Just like regular coffee, except the caffeine has been removed",
        },
        {
          title: "Blended",
          detail:
            "Combination of two or three dark roasted beans of organic coffees",
        },
      ],
    },
    {
      title: "How much would you like?",
      type: [
        {
          title: "250g",
          detail:
            "Perfect for the solo drinker. Yields about 12 delicious cups.",
        },
        {
          title: "500g",
          detail:
            "Perfect option for a couple. Yields about 40 delectable cups.",
        },
        {
          title: "1000g",
          detail:
            "Perfect for offices and events. Yields about 90 delightful cups.",
        },
      ],
    },
    {
      title: "Want us to grind them?",
      type: [
        {
          title: "Wholebean",
          detail: "Best choice if you cherish the full sensory experience.",
        },
        {
          title: "Filter",
          detail:
            " For drip or pour-over coffee methods such as V60 or Aeropress.",
        },
        {
          title: "Cafetiére",
          detail:
            "Course ground beans specially suited for french press coffee.",
        },
      ],
    },
    {
      title: "How often should we deliver?",
      type: [
        {
          title: "Every week",
          detail: `${priceEveryWeek} per shipment. Includes free first-class shipping.`,
        },
        {
          title: "Every 2 weeks",
          detail: `${priceEveryTwoWeek} per shipment. Includes free priority shipping.`,
        },
        {
          title: "Every month",
          detail: `${priceEveryMonth} per shipment. Includes free priority shipping.`,
        },
      ],
    },
  ];

  const handleToggle = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  useEffect(() => {
    if (selectedTypeOne === "Capsule") {
      setOpenItems((prev) => ({
        ...prev,
        3: false,
      }));
      setSelectedTypeFour(null);
    }
    if (
      selectedTypeOne === "Capsule" &&
      selectedTypeTwo &&
      selectedTypeThree &&
      !selectedTypeFour
    ) {
      setOpenItems((prev) => ({
        ...prev,
        3: false,
        4: true,
      }));
      setSelectedTypeFive(null);
    }
    if (
      (selectedTypeOne === "Filter" || selectedTypeOne === "Espresso") &&
      !selectedTypeFour
    ) {
      setOpenItems((prev) => ({
        ...prev,
        4: false,
      }));
      setSelectedTypeFive(null);
    }
  }, [selectedTypeOne]);

  useEffect(() => {
    if (selectedTypeThree === "250g") {
      setPriceEveryWeek("7.20");
      setPriceEveryTwoWeek("9.60");
      setPriceEveryMonth("12.00");
    } else if (selectedTypeThree === "500g") {
      setPriceEveryWeek("13.00");
      setPriceEveryTwoWeek("17.50");
      setPriceEveryMonth("22.00");
    } else if (selectedTypeThree === "1000g") {
      setPriceEveryWeek("22.00");
      setPriceEveryTwoWeek("32.00");
      setPriceEveryMonth("42.00");
    }
  }, [
    selectedTypeOne,
    selectedTypeTwo,
    selectedTypeThree,
    selectedTypeFour,
    selectedTypeFive,
  ]);

  const handleSelectType = (index, itemTitle) => {
    if (index === 0) setSelectedTypeOne(itemTitle);
    if (index === 1) setSelectedTypeTwo(itemTitle);
    if (index === 2) setSelectedTypeThree(itemTitle);
    if (index === 3) setSelectedTypeFour(itemTitle);
    if (index === 4) setSelectedTypeFive(itemTitle);
  };

  // console.log("open items,", openItems);
  console.log("selectedType", {
    selectedTypeOne: selectedTypeOne,
    selectedTypeTwo: selectedTypeTwo,
    selectedTypeThree: selectedTypeThree,
    selectedTypeFour: selectedTypeFour,
    selectedTypeFive: selectedTypeFive,
  });

  return (
    <div className="lg:grid lg:grid-cols-[35%_65%]">
      <div className="hidden lg:flex lg:flex-col text-grey mt-[2.5rem]">
        <div
          className={`text-h4 font-bold flex space-x-5 ${
            selectedTypeOne && "text-darkGreyBlue"
          }`}
        >
          <h1>01</h1>
          <h1>Performance</h1>
        </div>
        <hr className="my-6 w-[60%] border-2" />
        <div
          className={`text-h4 font-bold flex space-x-5 ${
            selectedTypeTwo && "text-darkGreyBlue"
          }`}
        >
          {" "}
          <h1>02</h1>
          <h1>Bean Type</h1>
        </div>
        <hr className="my-6 w-[60%] border-2" />
        <div
          className={`text-h4 font-bold flex space-x-5 ${
            selectedTypeThree && "text-darkGreyBlue"
          }`}
        >
          {" "}
          <h1>03</h1>
          <h1>Quanity</h1>
        </div>
        <hr className="my-6 w-[60%] border-2" />
        <div
          className={`text-h4 font-bold flex space-x-5 ${
            selectedTypeFour && "text-darkGreyBlue"
          }`}
        >
          {" "}
          <h1>04</h1>
          <h1>Grind Option</h1>
        </div>{" "}
        <hr className="my-6 w-[60%] border-2" />
        <div
          className={`text-h4 font-bold flex space-x-5 ${
            selectedTypeFive && "text-darkGreyBlue"
          }`}
        >
          {" "}
          <h1>05</h1>
          <h1>Deliveries</h1>
        </div>
      </div>
      <div>
        <div>
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              type={item.type}
              selectedTypeOne={selectedTypeOne}
              isOpen={openItems[index]}
              setOpenItems={setOpenItems}
              isWideScreen={isWideScreen}
              onToggle={() => handleToggle(index)}
              selectedType={
                index === 0
                  ? selectedTypeOne
                  : index === 1
                  ? selectedTypeTwo
                  : index === 2
                  ? selectedTypeThree
                  : index === 3
                  ? selectedTypeFour
                  : selectedTypeFive
              }
              onSelectType={(itemTitle) => handleSelectType(index, itemTitle)}
              disabled={
                (index !== 0 && !selectedTypeOne && index === 1) ||
                (index === 2 && !selectedTypeTwo) ||
                (index === 3 &&
                  (!selectedTypeThree || selectedTypeOne === "Capsule")) ||
                (index === 4 && !selectedTypeOne) ||
                (index === 4 && selectedTypeOne && !selectedTypeTwo) ||
                (index === 4 &&
                  selectedTypeOne &&
                  selectedTypeTwo &&
                  !selectedTypeThree) ||
                (index === 4 &&
                  (selectedTypeOne === "Filter" ||
                    selectedTypeOne === "Expresso)") &&
                  selectedTypeTwo &&
                  selectedTypeThree &&
                  !selectedTypeFour)
              }
            />
          ))}
        </div>
        <OrderSumary
          selectedTypeOne={selectedTypeOne}
          selectedTypeTwo={selectedTypeTwo}
          selectedTypeThree={selectedTypeThree}
          selectedTypeFour={selectedTypeFour}
          selectedTypeFive={selectedTypeFive}
          priceEveryWeek={priceEveryWeek}
          priceEveryTwoWeek={priceEveryTwoWeek}
          priceEveryMonth={priceEveryMonth}
        />
      </div>
    </div>
  );
}

export default HowDrink;
