import React, { useEffect, useState } from "react";
import OrderSumaryModal from "./OrderSumaryModal";

function OrderSumary({
  selectedTypeOne,
  selectedTypeTwo,
  selectedTypeThree,
  selectedTypeFour,
  selectedTypeFive,
  priceEveryWeek,
  priceEveryTwoWeek,
  priceEveryMonth,
}) {
  const [isDisable, setIsDisable] = useState(true);
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    if (
      (selectedTypeOne !== null &&
        selectedTypeTwo !== null &&
        selectedTypeThree !== null &&
        selectedTypeFour !== null &&
        selectedTypeFive !== null) ||
      (selectedTypeOne === "Capsule" &&
        selectedTypeTwo &&
        selectedTypeThree &&
        selectedTypeFive)
    ) {
      setIsDisable(false);
    } else if (
      (selectedTypeOne === "Filter" || selectedTypeOne === "Espresso") &&
      (!selectedTypeTwo ||
        !selectedTypeThree ||
        !selectedTypeFour ||
        !selectedTypeFive)
    ) {
      setIsDisable(true);
    }
  }, [
    selectedTypeOne,
    selectedTypeTwo,
    selectedTypeThree,
    selectedTypeFour,
    selectedTypeFive,
  ]);

  // console.log("isDisable", isDisable);
  return (
    <div className="my-32 ">
      <div className="bg-[#2C343E] px-6 py-10 text-lightCream rounded-lg md:py-5 md:px-12 lg:px-16">
        <p className="font-barlow text-body leading-body md:my-4 md:text-lightCream">
          ORDER SUMMARY
        </p>
        <p className="font-h4 font-bold leading-[40px] text-start ">
          " I drink coffee{" "}
          <span>{selectedTypeOne === "Capsule" ? <>using</> : <>as</>}</span>{" "}
          {selectedTypeOne ? (
            <span className="text-darkCyan"> {selectedTypeOne} </span>
          ) : (
            " _____ "
          )}
          , with a{" "}
          {selectedTypeTwo ? (
            <span className="text-darkCyan"> {selectedTypeTwo} </span>
          ) : (
            " _____ "
          )}{" "}
          type of bean.
          {selectedTypeThree ? (
            <span className="text-darkCyan"> {selectedTypeThree} </span>
          ) : (
            " _____ "
          )}{" "}
          ground ala
          {selectedTypeFour ? (
            <span className="text-darkCyan"> {selectedTypeFour} </span>
          ) : selectedTypeOne === "Capsule" ? (
            ""
          ) : (
            " _____ "
          )}
          , sent to me
          {selectedTypeFive ? (
            <span className="text-darkCyan"> {selectedTypeFive} </span>
          ) : (
            " _____ "
          )}
          ."
        </p>
      </div>
      <div className="flex justify-end my-12">
        <button
          disabled={isDisable}
          className={`${
            isDisable
              ? "mainButtonDisabled"
              : "mainButtonDefault  hover:mainButtonHover "
          }`}
          onClick={() => setIsOpenModal(true)}
        >
          Create my plan!
        </button>
      </div>
        <OrderSumaryModal
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
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
  );
}

export default OrderSumary;
