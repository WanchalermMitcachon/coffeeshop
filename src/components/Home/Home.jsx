import React from "react";
import Hero from "./Hero";
import Collection from "./Collection";
import WhyChooseUs from "./WhyChooseUs";
import HowItworks from "./HowItworks";
function Home({ isOpenHamberger, setIsOpenHamberger }) {
  return (
    <div className="mt-[40px]">
      <Hero />
      {!isOpenHamberger && (
        <>
          {" "}
          <Collection />
          <WhyChooseUs />
          <HowItworks />
        </>
      )}
    </div>
  );
}

export default Home;
