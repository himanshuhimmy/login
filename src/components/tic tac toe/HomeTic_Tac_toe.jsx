import Ximage from "../../Assets(all)/tic tac toe/x.png";
import Oimage from "../../Assets(all)/tic tac toe/0.png";
import { useState } from "react";

const HomeTic_Tac_toe = () => {
  let boxClass = "h-52 w-52 m-3 rounded-xl border border-solid";

  let [toggle, setToggle] = useState(false);

  let [boxState, setBoxState] = useState([
    { box: null, id: 1 },
    { box: null, id: 2 },
    { box: null, id: 3 },
    { box: null, id: 4 },
    { box: null, id: 5 },
    { box: null, id: 6 },
    { box: null, id: 7 },
    { box: null, id: 8 },
    { box: null, id: 9 },
  ]);
  let [double, setdouble] = useState(false);
  console.log(boxState);

  function Reset() {
    setBoxState([
      { box: null, id: 1 },
      { box: null, id: 2 },
      { box: null, id: 3 },
      { box: null, id: 4 },
      { box: null, id: 5 },
      { box: null, id: 6 },
      { box: null, id: 7 },
      { box: null, id: 8 },
      { box: null, id: 9 },
    ]);
  }

  boxState.map((el) => {
    if (
      (el.box === `X` && el.id === 1,
      el.box === `X` && el.id === 2,
      el.box === `X` && el.id === 3)
    ) {
      console.log(`X wins`);
    }
  });

  function boxClick(Nid) {
    setBoxState((prev) =>
      prev.map((el) =>
        el.id === Nid && el.box === null
          ? {
              ...el,
              box: toggle ? "X" : "O",
            }
          : el
      )
    );
    setToggle(!toggle);
  }

  return (
    <div className="w-full">
      <div className="w-[80%] m-auto bg-slate-500 p-8 rounded-3xl">
        {double && (
          <samp className="text-3xl text-red-500 font-semibold">
            Please select the empty box
          </samp>
        )}
        <div className="flex flex-wrap w-[700px] m-auto">
          {boxState.map(({ box, id }) => (
            <div key={id} onClick={() => boxClick(id)} className={boxClass}>
              {box === "X" && <img src={Ximage} className="w-full h-full" />}
              {box === "O" && <img src={Oimage} className="w-full h-full" />}
            </div>
          ))}
        </div>
        <button
          className="p-5 bg-zinc-300 rounded-xl m-2 font-semibold"
          onClick={Reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default HomeTic_Tac_toe;
