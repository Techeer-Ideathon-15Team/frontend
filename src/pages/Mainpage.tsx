import React from "react";
import logo from "../assets/logo.svg";
import family from "../assets/family.svg";
import freind from "../assets/freind.svg";
import girlf from "../assets/girlf.svg";
import profe from "../assets/profe.svg";

const Mainpage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="m-20">
        <img src={logo} />
      </div>
      <div>
        <button className="mx-10 shadow-2xl">
          <img src={profe} />
        </button>
        <button className="mx-10 shadow-2xl">
          <img src={girlf} />
        </button>
        <button className="mx-10 shadow-2xl">
          <img src={family} />
        </button>
        <button className="mx-10 shadow-2xl">
          <img src={freind} />
        </button>
      </div>
    </div>
  );
};

export default Mainpage;
