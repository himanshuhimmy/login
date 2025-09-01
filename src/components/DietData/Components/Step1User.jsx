import React from "react";

const Step1User = ({
  name,
  inputBannerClass,
  inputClass,
  setName,
  setNoMeal,
}) => {
  return (
    <div>
      {name.map((el) => {
        return (
          <div className=" bg-cyan-200 w-[65%] m-auto p-7 rounded-3xl mb-4">
            <div className="flex-col ">
              <p className={inputBannerClass}>Enter Your Full Name</p>
              <input
                value={el.UserName === 0 ? `` : el.UserName}
                required
                minLength={3}
                className={inputClass}
                placeholder="Full Name"
                type="text"
                onChange={(e) => setName(e)}
              />
            </div>
            <div className="flex-col mb-4">
              <p className={inputBannerClass}>Total No Of Meals You Have ?</p>
              <input
                value={el.mealNo}
                required
                className={inputClass}
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
