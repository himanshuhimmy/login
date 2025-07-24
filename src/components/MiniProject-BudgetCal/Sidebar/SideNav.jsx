import { useRef, useState } from "react";
import Modal from "../Reusable/Modal";

const SideNav = () => {
  let [months, setMonths] = useState([
    // {
    //   month: ``,
    //   // outcome:``
    // },
  ]);

  let monthRef = useRef();

  let [toggle, setToggle] = useState(false);

  function toggleButton() {
    console.log(toggle);
    setToggle(!toggle);
  }

  function canacel() {
    setToggle(!toggle);
  }

  function submit(event) {
    event.preventDefault();
    setToggle(!toggle);

    let selectedMonth = monthRef.current.value;

    setMonths((prev) => [...prev, { month: selectedMonth }]);
  }

  return (
    <div className="w-[20%] p-4 bg-teal-400 rounded-r-2xl h-screen">
      <h1 className="text-slate-700 font-semibold text-4xl  mb-4 p-3">
        Montly Data
      </h1>

      <div>
        <button
          onClick={toggleButton}
          className="p-4  bg-yellow-50 rounded-xl hover:bg-yellow-200 text-green-400  transition-colors duration-500"
        >
          + ADD MONTH
        </button>
      </div>
      {toggle && (
        <Modal state={toggle}>
          <form
            className="p-6 flex flex-col justify-between m-9"
            action=""
            onSubmit={submit}
          >
            <h1 className="text-4xl font-bold mb-4"> Select Month</h1>
            <input
              ref={monthRef}
              className="p-3 m-3"
              required
              placeholder="Enter Month"
              type="month"
            />
            <div className="flex justify-around mt-4">
              <button className="p-3 rounded-md bg-green-200 hover:bg-green-400 transition-colors duration-500">
                Sumbit
              </button>
              <button
                onClick={canacel}
                className="p-3 rounded-md bg-red-200 hover:bg-red-400 transition-colors duration-500"
              >
                {" "}
                Cancel
              </button>
            </div>
          </form>
        </Modal>
      )}

      {months === `` ? (
        <div className="text-slate-600 font-semibold text-2xl">
          Please Select The Month
        </div>
      ) : (
        <div className="mt-5 ">
          <ol>
            {months.map((el) => {
              const readableMonth = new Date(`${el.month}-01`).toLocaleString(
                "default",
                {
                  month: "long",
                  year: "numeric",
                }
              );
              return (
                <li className="m-3 font-semibold text-xl">
                  <button className="p-4 bg-slate-200 rounded-xl  hover:bg-slate-300 transition-colors  duration-1000">
                    {readableMonth}
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      )}
    </div>
  );
};

export default SideNav;
