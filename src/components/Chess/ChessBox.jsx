const ChessBox = ({ preFix, colour, postFix, toggle, onclickHandle }) => {
  let MainNo = `${preFix}${postFix}`;

  console.log(MainNo === toggle);
  return (
    <div
      onClick={() => onclickHandle(MainNo)}
      className={`${colour === "white" ? "white" : "black"}  ${
        toggle === MainNo ? `golden` : ``
      } h-24 w-24 text-indigo-700  `}
    >
      {MainNo}
    </div>
  );
};

export default ChessBox;
