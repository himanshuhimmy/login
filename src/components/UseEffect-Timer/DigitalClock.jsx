import { useEffect, useState } from "react";

const now = new Date();
let currentSec = now.getSeconds();
let currentMin = now.getMinutes();
let currentHour = now.getHours();

const DigitalClock = () => {
  let [timer, setTimer] = useState({
    secs: currentSec,
    mins: currentMin,
    hour: currentHour,
  });

  let NewTime = { secs: 0, mins: 0, hour: 0 };
  console.log(NewTime);

  useEffect(() => {
    let clock = setInterval(() => {
      setTimer((prev) => {
        NewTime.secs = prev.secs + 1;
        NewTime.mins = prev.mins;
        NewTime.hour = prev.hour;

        if (NewTime.secs === 60) {
          NewTime.secs = 0;
          NewTime.mins = prev.mins + 1;
          console.log(` min ${NewTime.mins}`);
        }

        if (NewTime.mins === 60) {
          NewTime.mins = 0;
          NewTime.hour = prev.hour + 1;
          console.log(NewTime.hour);
        }

        if (NewTime.hour === 24) {
          NewTime.hour = 0;
        }

        return NewTime;
      });
    }, 1000);
    return () => clearInterval(clock);
  }, [timer]);

  return (
    <div>
      <>
        {timer.hour} : {timer.mins} : {timer.secs}
      </>
    </div>
  );
};

export default DigitalClock;
