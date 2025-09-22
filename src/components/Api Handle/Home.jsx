import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [recivedData, setRecivedData] = useState(null);
  let [updatedData, setUpdatedData] = useState({});
  let InputClass = "rounded-xl mx-4 p-1";

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

  function handleSubmit() {
    let data = async () => {
      await axios.post(`http://localhost:8000/post/`, updatedData);
      setUpdatedData({});
    };
    data();
  }

  return (
    <div>
      <table className="m-auto">
        <tr>
          <th className="p-4 mx-5"> Name </th>
          <th className="p-4"> Age </th>
          <th className="p-4"> Mobile </th>
          <th className="p-4"> Resides </th>
          <th className="p-4"> Edit </th>
          <th className="p-4"> Delete </th>
        </tr>
        {recivedData != null &&
          recivedData.map((client) => {
            let no = 0;
            return (
              <tr id={no + 1}>
                <td>{client.name}</td>
                <td>{client.age}</td>
                <td>{client.mobile}</td>
                <td>{client.resides}</td>
                <td>
                  <button>Edit</button>
                </td>
                <td>
                  <button onClick={() => HandleDelete(client.name)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
      </table>

      <div className="bg-slate-600 p-7">
        <div className=" flex justify-center ">
          <input className={InputClass} placeholder="Enter Name" type="text" />
          <button className=" p-2 text-white bg-green-500 hover:bg-green-700 transition-all duration-300 rounded-xl">
            Search
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex justify-between">
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
