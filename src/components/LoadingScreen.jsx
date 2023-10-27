import React from "react";
import laoding from "../assets/loading.gif"
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
