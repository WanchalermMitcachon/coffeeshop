import React, { useEffect, useState } from "react";
import imageQualityMobile from "/assets/about/mobile/image-quality.jpg";
import imageQualityTablet from "/assets/about/tablet/image-quality.jpg";
import imageQualityDesktop from "/assets/about/desktop/image-quality.jpg";

function Quality() {
  const [imageSrc, setImageSrc] = useState(imageQualityMobile);

  const updateImageSrc = () => {
    if (window.innerWidth >= 768 && window.innerWidth < 1280) {
      setImageSrc(imageQualityTablet);
    } else if (window.innerWidth < 768) {
      setImageSrc(imageQualityMobile);
    } else {
      setImageSrc(imageQualityDesktop);
    }
  };

  useEffect(() => {
    updateImageSrc();
    window.addEventListener("resize", updateImageSrc);
    return () => window.removeEventListener("resize", updateImageSrc);
  }, []);
  return (
    <div className="bg-darkGreyBlue rounded-lg mt-32 md:mt-[18rem] lg:flex lg:flex-row-reverse	 ">
      <div className="relative lg:flex-1">
        <img
          src={imageSrc}
          alt={imageSrc}
          className="rounded-lg w-[80%] mx-auto  absolute right-[2.25rem] top-[-4.5rem] 
          md:top-[-11rem] md:w-[85%] md:right-[3.75rem] lg:static lg:w-[75%] lg:translate-y-[-6rem] 
          "
        />
      </div>
      <div className="px-5 pt-[30%] pb-[3.5rem] text-lightCream md:pt-[33%] lg:flex-1 lg:pt-12">
        <h1 className=" my-10 text-center font-bold text-h4 leading-body md:text-h3 md:leading-h2 lg:text-h2">
          {" "}
          Uncompromising quality
        </h1>
        <p className="leading-h4 font-barlow text-body text-center md:px-12 lg:px-20 lg:leading-[26px] lg:text-start">
          Although we work with growers who pay close attention to all stages of
          harvest and processing, we employ, on our end, a rigorous quality
          control program to avoid over-roasting or baking the coffee dry. Every
          bag of coffee is tagged with a roast date and batch number. Our goal
          is to roast consistent, user-friendly coffee, so that brewing is easy
          and enjoyable.
        </p>
      </div>
    </div>
  );
}

export default Quality;
