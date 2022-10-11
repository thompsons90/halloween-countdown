import React, { useState } from "react";
import "./index.css";
import { h1Primary, halloweenDate } from "./utils/utils";

export const Timer = ({
  timerDays,
  timerHours,
  timerMinutes,
  timerSeconds,
}) => {
  const d = new Date();
  const cst_offset = d.getTimezoneOffset();
  console.log(halloweenDate - cst_offset);
  const containerStyle = "text-lg";
  return (
    <div>
      <h1 className={h1Primary}>Timer</h1>
      <div className="timer-container">
        <div>
          <section>
            <p className={containerStyle}>Days : </p>
            <p>{timerDays}</p>
          </section>

          <section>
            <p>Hours : </p>
            <p>{timerHours}</p>
          </section>

          <section>
            <p>Minutes : </p>

            <p>{timerMinutes}</p>
          </section>
          <section>
            <p>Seconds : </p>

            <p>{timerSeconds}</p>
          </section>
        </div>
      </div>
    </div>
  );
};

// default placeholders
Timer.defaultProps = {
  timerDays: 10,
  timerHours: 10,
  timerMinutes: 10,
  timerSeconds: 10,
};
