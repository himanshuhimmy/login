const BoxChess = ({ postfix, perfix, colour, toggle, active }) => {
  let no = `${perfix}${postfix}`;

  return (
    <div
      onClick={() => active(no)}
      className={`h-24 w-24 text-red-400 ${
        colour === `white` ? `white` : `black`
      }  ${toggle === no ? `golden` : ``}  `}
    >
      {no}
    </div>
  );
};

export default BoxChess;
