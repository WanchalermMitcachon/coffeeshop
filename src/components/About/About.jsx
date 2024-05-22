import React from "react";
import Hero from "./Hero";
import OurCommitment from "./OurCommitment";
import Quality from "./Quality";
import OurHeadquarters from "./OurHeadquarters";

function About({ isOpenHamberger }) {
  return (
    <div className="">
      <Hero />
      {!isOpenHamberger && (
        <>
          <OurCommitment />
          <Quality />
          <OurHeadquarters />
        </>
      )}
    </div>
  );
}

export default About;
