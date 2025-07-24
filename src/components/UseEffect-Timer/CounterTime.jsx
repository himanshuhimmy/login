import React, { useEffect, useState } from "react";

const CounterTime = () => {
  let [timer, setTimer] = useState(0);
  let [start, setStart] = useState(false);
  let [reverse, setReverse] = useState(false);

  useEffect(() => {
    let Timestart = ``;

    if (start) {
      Timestart = setInterval(() => {
        setTimer((prev) => (reverse ? prev - 1 : prev + 1));
      }, 1000);
    }

    return () => clearInterval(Timestart);
  }, [start, reverse]);

  function UpHandle() {
    console.log(`Start`);
    setStart(true);
  }

  function DownHandle() {
    console.log(`reverse`);
    setReverse(true);
  }

  function handeleRest() {
    setReverse(false);
    setStart(false);
    setTimer(0);
  }

  return (
    <div>
      <h1> {timer}</h1>
      <div>
        <button onClick={DownHandle} className="p-3 mx-2">
          DOWN
        </button>
        <button onClick={handeleRest} className="p-3 mx-2">
          Reset
        </button>
        <button onClick={UpHandle} className="p-3 mx-2">
          UP
        </button>
      </div>
    </div>
  );
};

export default CounterTime;
