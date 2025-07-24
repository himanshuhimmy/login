import { useRef, useState } from "react";
import Modal from "../Reusable/Modal";

const DataComp = ({ data, setData }) => {
  let [toggle, SetToggle] = useState(false);
  let [showModal, setShowModal] = useState(false);
  let [selectDelete, setSelectDelete] = useState(false);

  let Name = useRef();
  let Id = useRef();
  let EditLogin = useRef();

  let UpdateData = (event) => {
    event.preventDefault();
    let InputData = {
      login: Name.current.value,
      id: Id.current.value,
    };
    setData([...data, InputData]);
  };

  function ToggleEdit(id) {
    setSelectDelete(id);
    if (toggle) {
      let EditedName = {
        login: EditLogin.current.value,
        id,
      };
      // console.log(EditedName); //Getting data Correctly here]

      console.log(data);

      let updatedInput = data.map((el) =>
        el.id === id ? { ...el, login: EditedName.login } : el
      );

      console.log(updatedInput);
      setData(updatedInput);
    }

    SetToggle(!toggle);
  }

  function Delete(id) {
    setSelectDelete(id);
    setShowModal(true);
  }

  function CancelDelete() {
    setShowModal(false);
  }

  function ConfirmDelete(id) {
    let Filter = data.filter((el) => el.id !== id);
    setData(Filter);

    setShowModal(false);
  }

  return (
    <div className="w-full my-6 text-left">
      <div className="flex gap-3 justify-center mb-7">
        <form onSubmit={UpdateData}>
          <input
            ref={Name}
            className="rounded-xl mx-2 px-2 text-gray-900"
            required
            name="name"
            minLength={4}
            placeholder="Name"
            type="text"
          />
          <input
            ref={Id}
            className="rounded-xl mx-2 px-2  text-gray-900"
            required
            name="id"
            placeholder="id"
            type="number"
          />
          <button className=" hover:text-yellow-500">Add</button>
        </form>
      </div>
      <div className="w-[80%] m-auto flex gap-5 flex-wrap">
        {data.map((el) => {
          return (
            <div
              key={el.id}
              className="p-6 bg-slate-400 m-auto shadow-lg outline-blue-400 rounded-xl w-[30%]"
            >
              {showModal && selectDelete === el.id && (
                <Modal open={showModal}>
                  <div className="p-5 rounded-3xl border-gray-500">
                    <h1 className="mb-2 font-semibold">
                      Sure wanna Delete Selected Item ?
                    </h1>
                    <div className="flex justify-around">
                      <button
                        onClick={CancelDelete}
                        className="bg-green-300 px-4 hover:bg-green-700 duration-300 ease-in-out rounded-2xl p-1 font-extralight mx-3"
                      >
                        cancel
                      </button>
                      <button
                        onClick={() => ConfirmDelete(el.id)}
                        className="bg-red-300 px-4 hover:bg-red-500 duration-300 ease-in-out rounded-2xl p-1 font-extralight"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </Modal>
              )}

              {toggle && selectDelete === el.id ? (
                <h1 className="font-semibold">
                  Name :
                  <input
                    ref={EditLogin}
                    minLength={4}
                    required
                    className="w-[70%] rounded-xl p-1 text-gray-900"
                    placeholder={el.login}
                  ></input>
                </h1>
              ) : (
                <h1 className="font-semibold">Name : {el.login}</h1>
              )}
              <p className="font-extralight">Id : {el.id}</p>
              <p className="w-[80%]  my-3">
                <img className="w-full rounded-lg" src={el.avatar_url}></img>
              </p>
              <p className="hover:text-yellow-500  duration-300 ease-in-out">
                <a href={el.html_url}>Visit profile</a>
              </p>
              <button
                onClick={() => ToggleEdit(el.id)}
                className="bg-green-300 hover:bg-green-700 duration-300 ease-in-out rounded-2xl p-1 font-extralight mx-3"
              >
                {toggle && selectDelete === el.id ? `Done` : `Edit`}
              </button>
              <button
                disabled={toggle}
                onClick={() => Delete(el.id)}
                className="bg-red-300 hover:bg-red-500 duration-300 ease-in-out rounded-2xl p-1 font-extralight"
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DataComp;
