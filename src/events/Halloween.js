import React, { useEffect, useRef, useState } from "react";
import "../index.css";
import { Timer } from "../components/Timer";
import { halloweenDate } from "../utils/utils";
import spooky from "../utils/spookyBorder.png";
import { Animation } from "../Lottie";

export const Halloween = () => {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;
  const startTimer = () => {
    const countDownDate = new Date(halloweenDate).getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));

      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        // stop timer
        clearInterval(interval.current);
      } else {
        // update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });

  return (
    <div className="flex justify-center flex-wrap text-center ">
      <img src={spooky} className=" object-cover absolute" />
      <h1 className="text-6xl text-purple-800 font-bold pt-10">
        Countdown to Halloween!
      </h1>
      <div className="drop-shadow-2xl">
        <Animation />
      </div>
      <div className="w-9/12">
        <Timer
          timerDays={timerDays}
          timerHours={timerHours}
          timerMinutes={timerMinutes}
          timerSeconds={timerSeconds}
        />
      </div>
    </div>
  );
};
