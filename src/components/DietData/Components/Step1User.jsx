import React from "react";
import InputField from "../Reusabel/InputField";

const Step1User = ({ name, inputBannerClass, setName, setNoMeal }) => {
  return (
    <div>
      {name.map((el) => {
        return (
          <div className=" bg-cyan-200 w-[65%] m-auto p-7 rounded-3xl mb-4">
            <div className="flex-col ">
              <p className={inputBannerClass}>Enter Your Full Name</p>
              <InputField
                value={el.UserName === 0 ? `` : el.UserName}
                required
                minLength={3}
                placeholder="Full Name"
                type="text"
                onChange={(e) => setName(e)}
              />
            </div>
            <div className="flex-col mb-4">
              <p className={inputBannerClass}>Total No Of Meals You Have ?</p>
              <InputField
                value={el.mealNo}
                required
                placeholder="Meals ?"
                type="number"
                onChange={(e) => setNoMeal(e)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Step1User;
