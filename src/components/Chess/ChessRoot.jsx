import { useState } from "react";

import ChessBox from "./ChessBox";

const ChessRoot = () => {
  let Num = [1, 2, 3, 4, 5, 6, 7, 8];

  let [toggle, setToggle] = useState(false);

  function onclickHandle(id) {
    if (toggle === id) {
      setToggle(false);
    } else {
      setToggle(id);
    }
  }

  function WhiteFirst({ preFix }) {
    return Num.map((el) =>
      el % 2 ? (
        <ChessBox
          colour="white"
          postFix={el}
          preFix={preFix}
          toggle={toggle}
          onclickHandle={onclickHandle}
        />
      ) : (
        <ChessBox
          colour="black"
          postFix={el}
          preFix={preFix}
          toggle={toggle}
          onclickHandle={onclickHandle}
        />
      )
    );
  }
  function BlackFirst({ preFix }) {
    return Num.map((el) =>
      el % 2 ? (
        <ChessBox
          colour="black"
          postFix={el}
          preFix={preFix}
          toggle={toggle}
          onclickHandle={onclickHandle}
        />
      ) : (
        <ChessBox
          colour="white"
          postFix={el}
          preFix={preFix}
          toggle={toggle}
          onclickHandle={onclickHandle}
        />
      )
    );
  }

  return (
    <div className="bg-orange-300   p-24">
      {Num.map((el) => {
        return (
          <div className="flex justify-center">
            {el % 2 ? <WhiteFirst preFix={el} /> : <BlackFirst preFix={el} />}
          </div>
        );
      })}
    </div>
  );
};

export default ChessRoot;
