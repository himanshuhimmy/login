import { useEffect, useRef, useState } from "react";
import img1 from "../../Assets(all)/Wall/Goku.jpg";
import img2 from "../../Assets(all)/Wall/Majin Vegeta.jpg";
import img3 from "../../Assets(all)/Wall/download.jpg";
import img4 from "../../Assets(all)/Wall/download (1).jpg";
import img5 from "../../Assets(all)/Wall/vegeta.jpg";
import DButton from "./Reusabel/DButton";

const Practice = () => {
  let [no, setNo] = useState(0);
  let imgs = [
    { image: img1 },
    { image: img2 },
    { image: img3 },
    { image: img4 },
    { image: img5 },
  ];

  useEffect(() => {
    let time = setInterval(() => {
      if (imgs.length - 1 === no) {
        setNo(0);
      } else {
        setNo(no + 1);
      }
    }, 2000);
    return () => clearInterval(time);
  }, [no]);

  function NextHAndle() {
    if (imgs.length - 1 === no) {
      setNo(0);
    } else {
      setNo(no + 1);
    }
  }
  function PrevHandle() {
    if (no === 0) {
      setNo(imgs.length - 1);
    } else {
      setNo(no - 1);
    }
  }

  return (
    <div>
      <div className="p-9">
        <div className="w-full flex gap-3">
          <div className="w-[50%] m-auto ">
            <img
              className="transition-all duration-500"
              src={imgs[no].image}
              alt=""
            />
          </div>
        </div>
        {no}
        <div>
          <DButton onClick={PrevHandle}>Prev</DButton>
          <DButton onClick={NextHAndle}>Next</DButton>
        </div>
      </div>
    </div>
  );
};

export default Practice;
