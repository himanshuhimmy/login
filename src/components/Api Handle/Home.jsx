import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [recivedData, setRecivedData] = useState(null);
  let [updatedData, setUpdatedData] = useState({});
  let InputClass = "rounded-xl mx-4 p-1";

  let [editToggle, setEditToggle] = useState(null);

  useEffect(() => {
    let data = async () => {
      const response = await axios.get("http://localhost:8000/get");
      setRecivedData(response.data);
      console.log("Fetched data:", response.data);
    };
    data();
  }, []);

  function HandleDelete(name) {
    let DeleteName = name;

    let data = async () => {
      await axios.delete(`http://localhost:8000/delete/${DeleteName}`);
      const response = await axios.get("http://localhost:8000/get");
      setRecivedData(response.data);
    };
    data();
  }

  function onChangeHandle(value, field) {
    setUpdatedData((prev) => ({ ...prev, [field]: value }));
  }
  function handleEdit(id) {
    if (editToggle === id) {
      const updatedRow = recivedData.find((client) => client._id === id);
      console.log(updatedRow);
      axios.put(`http://localhost:8000/put/${id}`, updatedRow);
      setEditToggle(null);
    } else {
      setEditToggle(id);
    }
  }

  function handleSubmit() {
    let data = async () => {
      await axios.post(`http://localhost:8000/post/`, updatedData);
      setUpdatedData({});
    };
    data();
  }

  function handleEditChange(value, id, field) {
    setRecivedData((prev) =>
      prev.map((client) =>
        client._id === id ? { ...client, [field]: value } : client
      )
    );
  }

  let searchedName = ``;

  function handleSearch(e) {
    e.preventDefault();
    let initalSate = [...recivedData];

    let SearchedData = initalSate.filter(
      (cleint) => cleint.name === searchedName
    );

    if (SearchedData != false) {
      setRecivedData(SearchedData);
    }
  }
  function handleSearcChange(vlaue) {
    searchedName = vlaue;

    if (vlaue === ``) {
      let data = async () => {
        const response = await axios.get("http://localhost:8000/get");
        setRecivedData(response.data);
      };
      data();
    }
  }

  return (
    <div>
      <table className="w-full border">
        <tr className="p-3 bg-gray-500">
          <th className="p-4 mx-5"> Name </th>
          <th className="p-4"> Age </th>
          <th className="p-4"> Mobile </th>
          <th className="p-4"> Resides </th>
          <th className="p-4"> Edit </th>
          <th className="p-4"> Delete </th>
        </tr>
        {recivedData != null &&
          recivedData.map((client) => {
            return (
              <tr className="p-5">
                <td>
                  {editToggle === client._id ? (
                    <input
                      className={InputClass}
                      onChange={(e) =>
                        handleEditChange(e.target.value, client._id, "name")
                      }
                      value={client.name}
                      type="text"
                    />
                  ) : (
                    <p>{client.name}</p>
                  )}
                </td>
                <td>
                  {editToggle === client._id ? (
                    <input
                      onChange={(e) =>
                        handleEditChange(e.target.value, client._id, "age")
                      }
                      value={client.age}
                      type="text"
                      className={InputClass}
                    />
                  ) : (
                    <p>{client.age}</p>
                  )}
                </td>
                <td>
                  {editToggle === client._id ? (
                    <input
                      onChange={(e) =>
                        handleEditChange(e.target.value, client._id, "mobile")
                      }
                      value={client.mobile}
                      type="text"
                      className={InputClass}
                    />
                  ) : (
                    <p> {client.mobile}</p>
                  )}
                </td>
                <td>
                  {editToggle === client._id ? (
                    <input
                      onChange={(e) =>
                        handleEditChange(e.target.value, client._id, "resides")
                      }
                      value={client.resides}
                      type="text"
                      className={InputClass}
                    />
                  ) : (
                    <p> {client.resides}</p>
                  )}
                </td>
                <td>
                  <button
                    className=" p-2 text-green-500 hover:text-green-700 transition-all duration-300"
                    onClick={() => handleEdit(client._id)}
                  >
                    {editToggle === client._id ? "Done" : "Edit"}
                  </button>
                </td>
                <td>
                  <button
                    className=" p-2 text-red-500 hover:text-red-700 transition-all duration-300"
                    onClick={() => HandleDelete(client.name)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
      </table>

      <div className="bg-slate-600 p-7">
        <form onSubmit={handleSearch}>
          <div className=" flex justify-center ">
            <input
              required
              className={InputClass}
              placeholder="Enter Name"
              type="text"
              onChange={(e) => handleSearcChange(e.target.value)}
            />
            <button className=" p-2 text-white bg-green-500 hover:bg-green-700 transition-all duration-300 rounded-xl">
              Search
            </button>
          </div>
        </form>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex justify-center p-7 ">
          <input
            required
            minLength={3}
            className={InputClass}
            placeholder="Enter Name"
            type="text"
            onChange={(e) => onChangeHandle(e.target.value, "name")}
          />
          <input
            required
            className={InputClass}
            placeholder="Enter Age"
            type="number"
            onChange={(e) => onChangeHandle(e.target.value, "age")}
          />
          <input
            required
            minLength={4}
            className={InputClass}
            placeholder="Mobile Type"
            type="text"
            onChange={(e) => onChangeHandle(e.target.value, "mobile")}
          />
          <input
            required
            minLength={3}
            className={InputClass}
            placeholder="Enter Resides"
            type="text"
            onChange={(e) => onChangeHandle(e.target.value, "resides")}
          />
          <button className=" p-2 text-white bg-green-500 hover:bg-green-700 transition-all duration-300 rounded-xl">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Home;
