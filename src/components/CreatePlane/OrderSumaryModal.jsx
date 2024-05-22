import React, { useRef, useEffect } from "react";

function OrderSumaryModal({
  isOpenModal,
  setIsOpenModal,
  selectedTypeTwo,
  selectedTypeOne,
  selectedTypeThree,
  selectedTypeFour,
  selectedTypeFive,
  priceEveryWeek,
  priceEveryTwoWeek,
  priceEveryMonth,
}) {
  const modalRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpenModal(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsOpenModal]);

  console.log("price", priceEveryWeek);
  console.log("priceEveryTwoWeek", priceEveryTwoWeek);
  console.log("priceEveryMonth", priceEveryMonth);

  return (
    <div
      className={`${
        isOpenModal
          ? "transform translate-y-[0%] duration-500 ease-in	"
          : "transform translate-y-[-100%]"
      }  flex items-center justify-center fixed inset-0 bg-black bg-opacity-70 `}
    >
      <div ref={modalRef} id="content" className={`w-[80%] md:w-[65%] `}>
        <div className="bg-darkGreyBlue py-8 px-5 bg-opacity-100 rounded-lg md:px-10">
          <h1 className="text-lightCream text-h4 font-bold leading-h4 md:text-h2 md:leading-h2">
            Order Summary
          </h1>
        </div>
        <div className="px-5 pt-12 pb-5 bg-white rounded-b-lg md:px-10 md:pt-10">
          <p className="font-h4 leading-[40px] font-bold text-grey ">
            “I drink coffee as{" "}
            <span className="text-darkCyan">{selectedTypeOne}</span>, with a{" "}
            <span className="text-darkCyan">{selectedTypeTwo}</span> type of
            bean. <span className="text-darkCyan"> {selectedTypeThree} </span>
            ground ala{" "}
            <span className="text-darkCyan"> {selectedTypeFour}</span>, sent to
            me <span className="text-darkCyan">{selectedTypeFive}</span>.”
          </p>
          <p className="font-barlow text-body leading-body">
            Is this correct? You can proceed to checkout or go back to plan
            selection if something is off. Subscription discount codes can also
            be redeemed at the checkout.
          </p>
          <div className="flex justify-center my-4  md:items-center md:justify-between md:my-12">
            <button className="mainButtonDefault text-[18px] md:hidden">
              Checkout-$
              {selectedTypeFive === "Every week"
                ? Number(priceEveryWeek) * 4
                : selectedTypeFive === "Every 2 weeks"
                ? Number(priceEveryTwoWeek) * 4
                : Number(priceEveryMonth) * 4}
              /mo
            </button>
            <h1 className="hidden md:block font-bold text-h3 leading-h3">
              ${" "}
              {selectedTypeFive === "Every week"
                ? Number(priceEveryWeek) * 4
                : selectedTypeFive === "Every 2 weeks"
                ? Number(priceEveryTwoWeek) * 4
                : Number(priceEveryMonth) * 4}
              / mo
            </h1>
            <button className="hidden md:block mainButtonDefault px-14">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSumaryModal;
