import React, { useRef } from "react";

const UserForm = ({ inputClass, inputValue, data }) => {
  let userName = useRef();
  let password = useRef();

  function User() {
    let Newuser = userName.current.value;
    let Newpassword = password.current.value;
    setData((prev) => ({
      ...prev,
      username: Newuser,
      password: Newpassword,
    }));
  }

  return (
    <div className="flex flex-col">
      <input
        ref={userName}
        minLength={6}
        className={inputClass}
        required
        name="username"
        placeholder="Username"
        type="text"
      />
      <input
        ref={password}
        minLength={8}
        className={inputClass}
        required
        placeholder="Password"
        name="password"
        type="password"
      />
    </div>
  );
};

export default UserForm;
