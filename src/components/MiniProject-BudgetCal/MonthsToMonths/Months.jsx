import { useRef } from "react";

const Months = ({ setMonth }) => {
  let fromref = useRef();
  let toref = useRef();

  function onsubmitForm(event) {
    event.preventDefault();
    let MonthFrom = fromref.current.value;
    let monthTo = toref.current.value;
    setMonth({ from: MonthFrom, to: monthTo });
  }

  return (
    <div>
      <form className="flex" onSubmit={onsubmitForm}>
        <div>
          <p>select From month </p>
          <input ref={fromref} required type="month" />
        </div>
        <div>
          <p>select to month</p>
          <input ref={toref} required type="month" />
        </div>
        <button>Show</button>
      </form>
    </div>
  );
};

export default Months;
