import React, { useState } from "react";
import "../index.css";
import { halloweenDate, textSecondary, textTertiary } from "../utils/utils";

export const Timer = ({
  timerDays,
  timerHours,
  timerMinutes,
  timerSeconds,
}) => {
  return (
    <div>
      <div className="flex justify-between box-border ">
        <section>
          <p className="text-3xl text-green-800 font-bold drop-shadow-lg">
            {timerDays}
          </p>
        </section>

        <section>
          <p className="text-3xl text-green-800 font-bold drop-shadow-lg">
            {timerHours}
          </p>
        </section>

        <section>
          <p className="text-3xl text-green-800 font-bold drop-shadow-lg">
            {timerMinutes}
          </p>
        </section>
        <section>
          <p className="text-3xl text-green-800 font-bold drop-shadow-lg">
            {timerSeconds}
          </p>
        </section>
      </div>
      <div className="w-full flex justify-between box-border ">
        <p className="text-md text-orange-500 font-bold drop-shadow-lg">Days</p>
        <p className="text-md text-orange-500 font-bold drop-shadow-lg">
          Hours
        </p>
        <p className="text-md text-orange-500 font-bold drop-shadow-lg">Mins</p>
        <p className="text-md text-orange-500 font-bold drop-shadow-lg">
          Seconds
        </p>
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
