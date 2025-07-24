import { useEffect, useState } from "react";

const TimerSec = () => {
  let [time, setTime] = useState(5000);

  useEffect(() => {
    let interval = setInterval(() => {
      // if (prev === 5000) return 0;
      setTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {Math.floor(time / 3600)} : {Math.floor((time % 3600) / 60)} :
      <samp className="text-red-700"> {time % 60}</samp>
    </div>
  );
};

export default TimerSec;
