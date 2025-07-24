import React, { useRef, useState } from "react";

const CalcRoot = ({ login }) => {
  let userName = `Himanshu`;
  let password = `chauhan`;

  let user = useRef();
  let pass = useRef();

  let [errors, setErrors] = useState({
    userName: false,
    password: false,
  });

  function onSubmit(event) {
    let Nuser = user.current.value;
    let Npass = pass.current.value;

    event.preventDefault();
    if (Nuser != userName) {
      setErrors((prev) => ({ ...prev, userName: true }));
    } else if (Npass != password) {
      setErrors((prev) => ({ ...prev, password: true }));
    }

    if (Nuser === userName && Npass === password) {
      login(true);
      setErrors((prev) => ({ ...prev, password: true, userName: true }));
    }
  }

  let inputClass = "rounded-xl p-2 my-5";
  return (
    <div>
      <div className="w-full flex h-screen">
        <form
          className="w-[20%] m-auto flex flex-col text-cyan-400 p-7 rounded-3xl bg-slate-700 "
          onSubmit={onSubmit}
        >
          <p>Enter Your Login Details</p>
          <input
            ref={user}
            className={inputClass}
            placeholder="Username"
            required
            minLength={5}
            type="text"
          />
          {errors.userName && (
            <span className="text-red-600"> Enter Valid USERNAME</span>
          )}
          <input
            ref={pass}
            className={inputClass}
            required
            placeholder="Password"
            minLength={7}
            type="password"
          />
          {errors.password && (
            <span className="text-red-600"> Enter Valid PASSWORD</span>
          )}
          <button className="p-4 rounded-2xl bg-green-700 m-4">Login</button>
        </form>
      </div>
    </div>
  );
};

export default CalcRoot;
