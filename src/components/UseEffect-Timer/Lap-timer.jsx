import { useEffect, useState } from "react";

const LapTimer = () => {
  let lapObj = [];

  let [timer, setTimer] = useState(0);
  let [start, setStart] = useState(false);
  let [reverse, setReverse] = useState(false);
  let [lap, setLap] = useState(false);
  let [lapData, setLapData] = useState(lapObj);

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
    setLap(false);
    setLapData([]);
    setTimer(0);
  }

  function LapTimer(lap) {
    setLap(true);
    let latestLap = {
      time: lap,
    };

    setLapData([...lapData, latestLap]);
  }

  function handleChange(event) {
    let currentValue = event.target.value;

    if (currentValue === `up`) {
      UpHandle();
      setStart(true);
    }

    if (currentValue === `down`) {
      DownHandle();
    }
  }

  function ToggleStart() {
    setStart(!start);
  }

  return (
    <div>
      <h1> {timer}</h1>

      <div>
        <select
          onChange={handleChange}
          className="bg-slate-600 p-2 rounded-xl my-4 flex "
        >
          <option value="select">select</option>
          <option value="up">up</option>
          <option value="down">down</option>
        </select>

        <button
          onClick={ToggleStart}
          className="bg-yellow-300 rounded-3xl p-3 font-semibold mx-3"
        >
          {start ? `Stop` : `Start`}
        </button>

        <button
          className="bg-red-400 rounded-3xl p-3 font-serif"
          onClick={handeleRest}
        >
          Reset
        </button>

        <button
          className="bg-green-400 rounded-2xl p-3 font-serif"
          onClick={() => LapTimer(timer)}
          disabled={!start}
        >
          Lap
        </button>
      </div>
      <div>
        {lap && (
          <div className="mx-3 ">
            {lapData.map((el, no) => (
              <div className="flex  my-2">
                <h1 className="font-semibold">Lap {no} </h1>
                <p className="text-red-400">time {el.time}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LapTimer;
