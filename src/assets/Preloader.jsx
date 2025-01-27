import React, { useEffect } from "react";
import { preLoaderAnim } from "../animations";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Under</span>
        <span>maintainance</span>
      </div>
    </div>
  );
};

export default PreLoader;