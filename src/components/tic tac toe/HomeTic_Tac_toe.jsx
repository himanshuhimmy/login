import Ximage from "../../Assets(all)/tic tac toe/x.png";
import Oimage from "../../Assets(all)/tic tac toe/0.png";
import { useEffect, useState } from "react";
import Dialog from "./modal/Dialog";

const HomeTic_Tac_toe = () => {
  let boxClass = "h-52 w-52 m-3 rounded-xl border border-solid";

  const [winCounts, setWinCounts] = useState(() => {
    const saved = localStorage.getItem("winCounts");
    return saved ? JSON.parse(saved) : { X: 0, O: 0 };
  });
  useEffect(() => {
    localStorage.setItem("winCounts", JSON.stringify(winCounts));
  }, [winCounts]);

  function manageWins(win) {
    win === `X`
      ? setWinCounts((prev) => ({ ...prev, X: prev.X + 1 }))
      : setWinCounts((prev) => ({ ...prev, O: prev.O + 1 }));
  }

  let [toggle, setToggle] = useState(false);
  let CurrentWin = false;

  let pattern = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];

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

  let [winner, setWinner] = useState(false);

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

  let filterdX = boxState.filter((fl) => fl.box == `X`).map((fl) => fl.id);
  let filterdO = boxState.filter((fl) => fl.box == `O`).map((fl) => fl.id);

  let Xwinner = pattern.find((p) => p.every((id) => filterdX.includes(id)));
  let Owinner = pattern.find((p) => p.every((id) => filterdO.includes(id)));
  useEffect(() => {
    if (Xwinner) {
      setWinner("X");
      manageWins("X");
    } else if (Owinner) {
      setWinner("O");
      manageWins("O");
    }
  }, [Xwinner, Owinner]);

  useEffect(() => {
    setWinner(CurrentWin);
  }, [CurrentWin]);

  function toggleDouble() {
    setdouble(false);
  }

  function boxClick(Nid) {
    setBoxState((prev) =>
      // prev.map((el) => {
      //   el.box === `X` || `O`;
      //   return setdouble(true);
      // }) ||
      prev.map((el) =>
        el.id === Nid
          ? {
              ...el,
              box: toggle ? "X" : "O",
            }
          : el
      )
    );
    setToggle(!toggle);
  }
  function CloseModal() {
    toggleDouble();
    setWinner(false);
    Reset();
  }
  return (
    <div className="w-full">
      <div className="w-[80%] m-auto bg-slate-500 p-8 rounded-3xl">
        <div className="text-center p-10 m-7">
          <h1 className="p-3 m-2 font-semibold text-6xl">wins</h1>
          <p className="p-3 m-2 font-semibold text-2xl">
            X = {winCounts.X} : O = {winCounts.O}
          </p>
        </div>
        {winner && (
          <Dialog winner={winner} double={double}>
            <h1 className="text-6xl font-bold text-red-950 p-9 mb-9">
              {winner} is the winner
            </h1>

            <button
              className="p-5 bg-green-700 rounded-xl m-3 font-semibold text-xl text-yellow-100"
              onClick={CloseModal}
            >
              Close
            </button>
          </Dialog>
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
