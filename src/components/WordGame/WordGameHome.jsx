import React, { useState } from "react";

const WordGameHome = () => {
  let fullWords = [
    { name: `pratik`, id: 0 },
    { name: `himanshu`, id: 1 },
    { name: `sai`, id: 2 },
  ];

  let halfNames = [
    ["p", "", "a", "", "i", ""],
    // ["h", "", "m", "", "n", "", "h", ""],
    // ["s", "", "i"],
  ];
  let initalLife = 3;
  let [life, setLife] = useState(initalLife);
  let [displayInput, setDisplayInput] = useState(halfNames);
  let [PlayerInput, setPlayerInput] = useState([
    { name: ``, id: 0, check: false },
    { name: ``, id: 1, check: false },
    { name: ``, id: 2, check: false },
  ]);

  function OnSubmit(event) {
    event.preventDefault();

    let filteredData = PlayerInput.filter(
      (input) =>
        fullWords.filter((word) => word.id === input.id && input.check).length >
        0
    );
    console.log(filteredData);

    fullWords.map((el) => {
      let correct = filteredData.map((fl) => el.name.includes(fl.name));
      console.log(filteredData.every((fl) => fl.name));

      if (correct) {
        console.log(`correct`);
      }
    });
  }

  function userInput(text, Nid) {
    let userAns = [...PlayerInput];
    userAns = userAns.map((el) =>
      el.id === Nid ? { ...el, name: el.name + text, check: true } : el
    );
    setPlayerInput(userAns);
    // console.log(userAns);
  }

  return (
    <div>
      <h1 className="text-3xl p-4">total Lives : {life}</h1>
      <div>
        <form onSubmit={OnSubmit}>
          {displayInput.map((words, bId) => {
            return words.map((text, id) => (
              <div key={id}>
                <input
                  className="p-2 bg-orange-200 w-auto text-center rounded-full m-2"
                  type="text"
                  placeholder={text}
                  value={text}
                  onChange={(e) => userInput(e.target.value, bId)}
                />
              </div>
            ));
          })}
          <button className="bg-green-300 rounded-sm p-2 m-2">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default WordGameHome;
