import axios from "axios";
import { useEffect, useState } from "react";
import Modal from "./Modal";
const PracticeHome = () => {
  let [recivedData, setRecivedData] = useState(null);
  let [editTogggle, setEditToggle] = useState(``);
  let [newData, setNewData] = useState({});

  let InputClass = "rounded-xl mx-4 p-1";

  useEffect(() => {
    let data = async () => {
      let response = await axios.get("http://localhost:4000/get");
      setRecivedData(response.data);
    };
    data();
  }, []);

  function HandeAddData(field, value) {
    setNewData((prev) => ({ ...prev, [field]: value }));
  }
  // console.log(newData);
  function OnSubmitData() {
    let data = async () => {
      axios.post(`http://localhost:4000/post`, newData);
      setNewData({});
    };
    data();
  }

  function handleEdit(value, field, id) {
    setRecivedData((prev) =>
      prev.map((client) =>
        client._id === id ? { ...client, [field]: value } : client
      )
    );
  }

  function handleToggleEdit(id) {
    if (id === editTogggle) {
      let filter = recivedData.find((el) => el._id === id);

      let data = async () => {
        await axios.put(`http://localhost:4000/update/${id}`, filter);
        setEditToggle(null);
      };
      data();
    } else {
      setEditToggle(id);
    }
  }

  function handleDelete(name) {
    let data = async () => {
      await axios.delete(`http://localhost:4000/delete/${name}`);
      let response = await axios.get("http://localhost:4000/get");
      setRecivedData(response.data);
    };
    data();
  }

  return (
    <div>
      <table className="w-full border">
        <tr className="p-4 bg-gray-500">
          <th className="p-4 "> Name </th>
          <th className="p-4"> Age </th>
          <th className="p-4"> Mobile </th>
          <th className="p-4"> Resides </th>
          <th className="p-4"> Edit </th>
          <th className="p-4"> Delete </th>
        </tr>
        {recivedData !== null &&
          recivedData.map((client) => {
            return (
              <tr>
                <td className="p-2">
                  {editTogggle === client._id ? (
                    <input
                      onChange={(e) =>
                        handleEdit(e.target.value, "name", client._id)
                      }
                      value={client.name}
                      type="text"
                    />
                  ) : (
                    <p>{client.name}</p>
                  )}
                </td>
                <td className="p-2">
                  {editTogggle === client._id ? (
                    <input
                      onChange={(e) =>
                        handleEdit(e.target.value, "age", client._id)
                      }
                      value={client.age}
                      type="text"
                    />
                  ) : (
                    <p>{client.age}</p>
                  )}
                </td>
                <td className="p-2">
                  {editTogggle === client._id ? (
                    <input
                      onChange={(e) =>
                        handleEdit(e.target.value, "mobile", client._id)
                      }
                      value={client.mobile}
                      type="text"
                    />
                  ) : (
                    <p>{client.mobile}</p>
                  )}
                </td>
                <td className="p-2">
                  {editTogggle === client._id ? (
                    <input
                      onChange={(e) =>
                        handleEdit(e.target.value, "resides", client._id)
                      }
                      value={client.resides}
                      type="text"
                    />
                  ) : (
                    <p>{client.resides}</p>
                  )}
                </td>
                <td className="p-2">
                  <button
                    onClick={() => handleToggleEdit(client._id)}
                    className="text-green-300 hover:text-green-600 transition-all duration-300"
                  >
                    {editTogggle === client._id ? "Done" : " Edit"}
                  </button>
                </td>
                <td className="p-2">
                  <button
                    onClick={() => handleDelete(client.name)}
                    className="text-red-300 hover:text-red-600 transition-all duration-300"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
      </table>
      <div>
        <form onSubmit={OnSubmitData}>
          <div className=" flex justify-center p-4 bg-slate-500">
            <input
              className={InputClass}
              required
              minLength={3}
              placeholder="Enter Name"
              type="text"
              onChange={(e) => HandeAddData("name", e.target.value)}
            />
            <input
              className={InputClass}
              required
              placeholder="Enter Age"
              type="text"
              onChange={(e) => HandeAddData("age", e.target.value)}
            />
            <input
              className={InputClass}
              required
              minLength={3}
              placeholder="Enter Mobile Type"
              type="text"
              onChange={(e) => HandeAddData("mobile", e.target.value)}
            />
            <input
              className={InputClass}
              required
              minLength={3}
              placeholder="Enter Recides"
              type="text"
              onChange={(e) => HandeAddData("resides", e.target.value)}
            />
            <button>Add</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PracticeHome;
