import { useState } from "react";
import BoxChess from "./BoxChess";

const ChessRoot = () => {
  let Num = [1, 2, 3, 4, 5, 6, 7, 8];

  let [toggle, setToggle] = useState(false);

  function active(id) {
    if (toggle === id) {
      setToggle(false);
    } else {
      setToggle(id);
    }
  }

  function WhiteFirst({ perfix }) {
    return Num.map((el) => {
      return (
        <BoxChess
          key={el}
          toggle={toggle}
          active={active}
          postfix={el}
          perfix={perfix}
          colour={el % 2 ? `black` : `white`}
        />
      );
    });
  }

  function BlackFirst({ perfix }) {
    return Num.map((el) => {
      return (
        <BoxChess
          key={el}
          toggle={toggle}
          active={active}
          postfix={el}
          perfix={perfix}
          colour={el % 2 ? `white` : `black`}
        />
      );
    });
  }

  return (
    <div className="bg-orange-200">
      {Num.map((el) => {
        return (
          <div key={el} className="flex">
            {el % 2 ? <BlackFirst perfix={el} /> : <WhiteFirst perfix={el} />}
          </div>
        );
      })}
    </div>
  );
};

export default ChessRoot;
