import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import "./index.css";

export const Animation = () => {
  const container = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./halloweenLottie.json"),
    });
    // return clean up function here
    return () => Lottie.destroy();
  }, []);

  return (
    <div
      className="container rounded border-4 border-black drop-shadow-2xl"
      ref={container}
      style={{ width: "275px" }}
    >
      <h1>Lottie Demo</h1>
    </div>
  );
};
