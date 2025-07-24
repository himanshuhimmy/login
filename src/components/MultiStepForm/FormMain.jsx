import { useState } from "react";
import NameForm from "./forms/NameForm";
import PersonalForm from "./forms/PersonalForm";
import UserForm from "./forms/UserForm";

const FormMain = ({}) => {
  let [sucess, setSuccess] = useState(false);

  let [data, setData] = useState({
    firstName: ``,
    lastName: ``,
    email: ``,
    phone: ``,
    birth: ``,
    username: ``,
    password: ``,
  });

  let [step, setStep] = useState(1);

  function nextStep(event) {
    event.preventDefault();
    if (step < 3) {
      setStep((prev) => prev + 1);
    } else {
      setStep(0);
      setSuccess(true);
    }
  }
  function inputValue(el, name) {
    setData((prev) => ({ ...prev, [name]: el }));
  }

  function Previous() {
    setStep((prev) => prev - 1);
    console.log(`clicked`);
  }

  let inputClass = "rounded-xl p-2 my-5";

  function ConfirmSucc() {
    setSuccess(false);
    setData((prev) => ({
      ...prev,
      firstName: ``,
      lastName: ``,
      email: ``,
      birth: ``,
      username: ``,
      password: ``,
      phone: ``,
    }));
    setStep(1);
  }

  return (
    <form className="text-blue-800 " onSubmit={nextStep}>
      {sucess && (
        <div>
          <h1 className="text-green-400 font-bold">Success Info recived</h1>
          <button
            type="button"
            className="bg-green-950 text-white rounded-2xl p-4 my-5"
            onClick={ConfirmSucc}
          >
            close
          </button>
        </div>
      )}
      {step === 1 && (
        <NameForm inputClass={inputClass} inputValue={inputValue} data={data} />
      )}
      {step === 2 && (
        <PersonalForm
          inputClass={inputClass}
          inputValue={inputValue}
          data={data}
        />
      )}
      {step === 3 && (
        <UserForm inputClass={inputClass} inputValue={inputValue} data={data} />
      )}
      {!sucess && (
        <div className="flex justify-center">
          <button
            type="button"
            onClick={Previous}
            className="p-3 bg-slate-800 m-3 rounded-lg"
            disabled={step === 1}
          >
            Previous
          </button>
          <button className="p-3 bg-green-400 m-3 rounded-lg">
            {step === 3 ? `Done` : `Next`}
          </button>
        </div>
      )}
    </form>
  );
};

export default FormMain;
