import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";

export const Annimation = () => {
  const container = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./halloweenLottie.json"),
    });
  }, []);

  return (
    <div className="container" ref={container}>
      <h1>Lottie Demo</h1>
    </div>
  );
};
