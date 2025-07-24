import { useRef, useState } from "react";

const LoginForm = () => {
  let UserName = `Himanshu`;
  let password = `password`;

  let name = useRef();
  let pass = useRef();

  let [loggedIn, setLoggedIn] = useState(false);

  let [checkIn, setCheckIn] = useState(false);

  let Valid = () => {
    setCheckIn(false);
  };

  let onSubmit = (event) => {
    event.preventDefault();

    let newData = {
      name: name.current.value,
      pass: pass.current.value,
    };
    console.log(newData);
    if (newData.name !== UserName || newData.pass !== password) {
      console.log(newData.name !== UserName);
      console.log(newData);
      return setCheckIn(true);
    }

    return setLoggedIn(true);
  };

  let logout = () => {
    setLoggedIn(false);
  };
  return (
    <div>
      {loggedIn ? (
        <>
          <h2>Welocome Loggend in</h2>
          <button onClick={logout}>logout</button>
        </>
      ) : (
        <form onSubmit={onSubmit}>
          <input
            ref={name}
            required
            minLength={6}
            name="user"
            placeholder="User Name"
          />
          <input
            ref={pass}
            required
            maxLength={8}
            type="password"
            name="password"
            placeholder="Password"
          />
          <button>Login</button>
        </form>
      )}
      {checkIn && (
        <>
          <p> please enter valid details</p>
          <button onClick={Valid}>ok</button>
        </>
      )}
    </div>
  );
};

export default LoginForm;
