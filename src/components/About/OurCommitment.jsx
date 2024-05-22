import React, { useState, useEffect } from "react";
import imageCommitmentMobile from "/assets/about/mobile/image-commitment.jpg";
import imageCommitmentTablet from "/assets/about/tablet/image-commitment.jpg";
import imageCommitmentDesktop from "/assets/about/desktop/image-commitment.jpg";

function OurCommitment() {
  const [imageSrc, setImageSrc] = useState(imageCommitmentMobile);

  const updateImageSrc = () => {
    if (window.innerWidth >= 768 && window.innerWidth < 1280) {
      setImageSrc(imageCommitmentTablet);
    } else if (window.innerWidth < 768) {
      setImageSrc(imageCommitmentMobile);
    } else {
      setImageSrc(imageCommitmentDesktop);
    }
  };

  useEffect(() => {
    updateImageSrc();
    window.addEventListener("resize", updateImageSrc);
    return () => window.removeEventListener("resize", updateImageSrc);
  }, []);

  return (
    <div
      className="flex flex-col px-0 md:grid md:grid-cols-[40%_60%] md:space-x-16 
    lg:space-x-16"
    >
      <div className="">
        <img
          src={imageSrc}
          alt="image-commitment"
          className="rounded-lg object-cover lg:mx-auto lg: "
        />
      </div>
      <div className="my-10 md:mb-0 md:my-3 lg:pr-[15rem]">
        <h1 className="text-h3 font-bold text-center my-5 md:text-start md:my-0 md:mb-8
         lg:text-h2 lg:leading-h2 lg:mt-16 ">
          Our commitment
        </h1>
        <p className="font-barlow text-body leading-body text-center md:text-start">
          We’re built on a simple mission and a commitment to doing good along
          the way. We want to make it easy for you to discover and brew the
          world’s best coffee at home. It all starts at the source. To locate
          the specific lots we want to purchase, we travel nearly 60 days a year
          trying to understand the challenges and opportunities in each of these
          places. We collaborate with exceptional coffee growers and empower a
          global community of farmers through with well above fair-trade
          benchmarks. We also offer training, support farm community
          initiatives, and invest in coffee plant science. Curating only the
          finest blends, we roast each lot to highlight tasting profiles
          distinctive to their native growing region.
        </p>
      </div>
    </div>
  );
}

export default OurCommitment;
