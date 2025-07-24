import React, { useEffect, useState } from "react";

const TimerTow = () => {
  let [timer, setTimer] = useState(5000);

  useEffect(() => {
    setTimeout(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
  }, [timer]);

  return (
    <div>
      {Math.floor(timer / 3600)} : {Math.floor((timer % 3600) / 60)} :
      {Math.floor(timer % 60)}
    </div>
  );
};

export default TimerTow;
