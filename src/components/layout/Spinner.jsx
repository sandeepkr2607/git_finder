import React from "react";
import spinner from "./assets/spinner.svg";

const Spinner = () => {
  return (
    <div className="w-100 mt-20">
      <img
        width={200}
        className="text-center mx-auto"
        src={spinner}
        alt="Loading"
      />
    </div>
  );
};

export default Spinner;
