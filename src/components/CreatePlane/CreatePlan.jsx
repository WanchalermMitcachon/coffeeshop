import React, { useState } from "react";
import Hero from "./Hero";
import Manual from "./Manual";
import HowDrink from "./HowDrink";

function CreatePlan({ isOpenHamberger }) {
  const [selectedTypeOne, setSelectedTypeOne] = useState(null);
  const [selectedTypeTwo, setSelectedTypeTwo] = useState(null);
  const [selectedTypeThree, setSelectedTypeThree] = useState(null);
  const [selectedTypeFour, setSelectedTypeFour] = useState(null);
  const [selectedTypeFive, setSelectedTypeFive] = useState(null);
  return (
    <div className="">
      <Hero />
      {!isOpenHamberger && (
        <>
          <Manual
            selectedTypeOne={selectedTypeOne}
            selectedTypeTwo={selectedTypeTwo}
            selectedTypeThree={selectedTypeThree}
            selectedTypeFour={selectedTypeFour}
            selectedTypeFive={selectedTypeFive}
          />
          <HowDrink
            selectedTypeOne={selectedTypeOne}
            selectedTypeTwo={selectedTypeTwo}
            selectedTypeThree={selectedTypeThree}
            selectedTypeFour={selectedTypeFour}
            selectedTypeFive={selectedTypeFive}
            setSelectedTypeOne={setSelectedTypeOne}
            setSelectedTypeTwo={setSelectedTypeTwo}
            setSelectedTypeThree={setSelectedTypeThree}
            setSelectedTypeFour={setSelectedTypeFour}
            setSelectedTypeFive={setSelectedTypeFive}
          />
        </>
      )}
    </div>
  );
}

export default CreatePlan;
