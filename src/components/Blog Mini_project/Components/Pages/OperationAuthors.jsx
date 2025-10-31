import React, { useContext, useEffect, useState } from "react";
import BlogsContext from "../../Store-Context/BlogsContext";
import axios from "axios";
import { ReactComponent as Gmail } from "../../svg/gmail.svg";
import { ReactComponent as Insta } from "../../svg/insta.svg";
import { NavLink } from "react-router-dom";
import Modal from "../../Reusable/Modal";

const OperationAuthors = () => {
  let [currentAuthor, setCurrentAuthor] = useState(null);
  let [toggle, setToggle] = useState(false);
  let { activeAuthorId } = useContext(BlogsContext);

  useEffect(() => {
    let data = async () => {
      let response = await axios.get("http://localhost:7000/fetchAuthors");
      setCurrentAuthor(response.data);
    };
    data();
  }, []);

  function ModalToggle() {
    setToggle(!toggle);
  }

  function handleDelete(id) {
    let data = async () => {
      await axios.delete(`http://localhost:7000/deleteAuthor/${id}`);
    };
    data();
    setToggle(!toggle);
  }

  let AuthorFilter =
    currentAuthor !== null &&
    currentAuthor.filter((el) => el._id === activeAuthorId);

  return (
    <div>
      {currentAuthor !== null ? (
        <div>
          {AuthorFilter.map((el) => {
            return (
              <div className="bg-slate-300 rounded-xl m-3 p-4">
                {toggle === true && (
                  <Modal status={toggle}>
                    <div className="p-5 bg-teal-400 rounded-2xl">
                      <h1 className="text-xl font-semibold">
                        Delete This Author ?
                      </h1>

                      <div className="mt-4">
                        <button
                          className="bg-red-200 rounded-xl py-2 px-3 mx-2"
                          onClick={() => handleDelete(el._id)}
                        >
                          Delete
                        </button>
                        <button
                          className="bg-green-200 rounded-xl py-2 px-3 mx-2"
                          onClick={ModalToggle}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </Modal>
                )}
                <div className="flex p-3">
                  <div className="w-[60%] ">
                    <h1 className="text-center text-xl font-semibold mb-4">
                      {el.name}
                    </h1>
                    <div
                      className="text-left p-2"
                      dangerouslySetInnerHTML={{ __html: el.description }}
                    />
                  </div>
                  <img className="w-[40%]" src={el.image} alt="" />
                </div>

                <div className="flex justify-evenly w-[50%] m-auto py-3">
                  <h1> connect Author on - </h1>

                  <Gmail width={20} height={20}>
                    insta
                  </Gmail>

                  <Insta width={20} height={20}>
                    Mail
                  </Insta>
                </div>
                <div className="text-center">
                  <NavLink to={`/EditAuthor/${el._id}`}>
                    <button className="bg-green-200 rounded-xl py-2 px-3 mx-2">
                      Edit
                    </button>
                  </NavLink>
                  <button
                    onClick={ModalToggle}
                    className="bg-red-200 rounded-xl py-2 px-3 mx-2"
                  >
                    Delete
                  </button>
                </div>
                <div className="text-center mt-4">
                  <NavLink to={".."}>
                    <button>Back</button>
                  </NavLink>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <h1 className="text-center font-extrabold text-3xl text-red-600">
          Author Not Found
        </h1>
      )}
    </div>
  );
};

export default OperationAuthors;
