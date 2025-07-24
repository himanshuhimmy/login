import React, { useState } from "react";
import DialogB from "./DialogB";
import DialogA from "./DialogA";

const Content = () => {
  let style =
    "p-8 rounded-2xl m-5 border-solid shadow-gray-200 font-semibold bg-gray-400 w-[48%]";

  let [toggle, setToggle] = useState(false);
  let [toggleS, setToggleS] = useState(false);
  console.log(toggle);
  function StateHandle() {
    setToggle(!toggle);
  }
  function PortalHandle() {
    setToggleS(!toggleS);
  }

  return (
    <div className="flex flex-wrap w-full">
      {toggle && (
        <DialogB toggle={toggle}>
          <h1>you have selected State Dialol box</h1>
          <button
            className="bg-slate-600 border-fuchsia-500 rounded-3xl p-4 m-4"
            onClick={StateHandle}
          >
            Close
          </button>
        </DialogB>
      )}
      {toggle && (
        <DialogA toggle={toggleS} StateHandle={setToggleS}>
          <h1>you have selected Portal Dialol box</h1>
          <button onClick={PortalHandle}>Close</button>
        </DialogA>
      )}
      <div id="modal" className={` ${style}`}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur,
        dolore temporibus? Recusandae sint porro quod officia. Odio fugiat
        laboriosam ipsum, est ad aspernatur quia in? Odio beatae sunt velit
        modi.
      </div>
      <div className={style}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        deleniti non earum, facere voluptates aperiam sint. Amet quaerat
        exercitationem, cumque fugiat, eum est vel nam totam libero provident
        voluptatem quidem!
      </div>
      <div className={style}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
        veniam mollitia accusamus fugiat inventore cupiditate deserunt, rerum
        laborum saepe cumque rem molestiae fugit pariatur! Nesciunt porro vero
        molestias corporis perferendis!
      </div>
      <div className={style}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        deleniti non earum, facere voluptates aperiam sint. Amet quaerat
        exercitationem, cumque fugiat, eum est vel nam totam libero provident
        voluptatem quidem!
      </div>
      <div className={style}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
        veniam mollitia accusamus fugiat inventore cupiditate deserunt, rerum
        laborum saepe cumque rem molestiae fugit pariatur! Nesciunt porro vero
        molestias corporis perferendis!
      </div>
      <div className={style}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque velit
        labore earum quia itaque ipsum enim ipsa ullam laudantium totam magni
        hic explicabo nulla quaerat expedita, dolor consequuntur ex magnam!
      </div>
      <div className={style}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit vel,
        eligendi recusandae architecto facilis eos perspiciatis? Suscipit sint
        iure, eveniet quis, eligendi non enim ipsa, nobis aspernatur nihil quam
        reprehenderit?
      </div>
      <div className={style}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit vel,
        eligendi recusandae architecto facilis eos perspiciatis? Suscipit sint
        iure, eveniet quis, eligendi non enim ipsa, nobis aspernatur nihil quam
        reprehenderit?
      </div>
      <div className="m-auto">
        <button
          onClick={PortalHandle}
          className="p-4 bg-rose-600 rounded-3xl m-6"
        >
          Portal Dialog Box
        </button>
        <button
          onClick={StateHandle}
          className="p-4 bg-rose-900 rounded-3xl m-6"
        >
          State Dialog Box
        </button>
      </div>
    </div>
  );
};

export default Content;
