import { useState } from "react";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import { Route, Routes } from "react-router-dom";
import Topbar from "./components/Topbar/Topbar";
import Footer from "./components/Footer/Footer";
import CreatePlan from "./components/CreatePlane/CreatePlan";

function App() {
  const [isOpenHamberger, setIsOpenHamberger] = useState(false);
  return (
    <div className="main-container font-fraunces">
      <Topbar
        isOpenHamberger={isOpenHamberger}
        setIsOpenHamberger={setIsOpenHamberger}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              isOpenHamberger={isOpenHamberger}
              setIsOpenHamberger={setIsOpenHamberger}
            />
          }
        ></Route>
        <Route
          path="/about"
          element={<About isOpenHamberger={isOpenHamberger} />}
        />
        <Route
          path="/createyourplan"
          element={<CreatePlan isOpenHamberger={isOpenHamberger} />}
        />
      </Routes>
      {!isOpenHamberger && <Footer />}
    </div>
  );
}

export default App;
