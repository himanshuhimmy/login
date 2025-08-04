import React from "react";

const Months = () => {
  return (
    <div>
      <form className="flex">
        <div>
          <p>select From month </p>
          <input required type="month" />
        </div>
        <div>
          <p>select to month</p>
          <input required type="month" />
        </div>
        <button>Show</button>
      </form>
    </div>
  );
};

export default Months;
