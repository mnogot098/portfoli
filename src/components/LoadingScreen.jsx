import React from "react";
import laoding from "../assets/icons/connecting.gif"
const LoadingScreen = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <img
          src={laoding}
          alt=""
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
