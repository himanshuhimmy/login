import { useState } from "react";

const DummyRoot = () => {
  const users = [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice@example.com",
      age: 28,
      status: "active",
    },
    {
      id: 2,
      name: "Bob Smith",
      email: "bob@example.com",
      age: 34,
      status: "inactive",
    },
    {
      id: 3,
      name: "Charlie Brown",
      email: "charlie@example.com",
      age: 22,
      status: "active",
    },
    {
      id: 4,
      name: "Diana Prince",
      email: "diana@example.com",
      age: 29,
      status: "active",
    },
    {
      id: 5,
      name: "Ethan Hunt",
      email: "ethan@example.com",
      age: 40,
      status: "inactive",
    },
    {
      id: 6,
      name: "Fiona Gallagher",
      email: "fiona@example.com",
      age: 31,
      status: "active",
    },
    {
      id: 7,
      name: "George Martin",
      email: "george@example.com",
      age: 26,
      status: "inactive",
    },
    {
      id: 8,
      name: "Hannah Williams",
      email: "hannah@example.com",
      age: 35,
      status: "active",
    },
    {
      id: 9,
      name: "Ian Curtis",
      email: "ian@example.com",
      age: 24,
      status: "inactive",
    },
    {
      id: 10,
      name: "Jane Doe",
      email: "jane@example.com",
      age: 30,
      status: "active",
    },
  ];

  let [userSate, setUserState] = useState(users);
  let [toggle, setToggle] = useState(false);
  let [searchedName, SetSearchedName] = useState();
  let [arrangeAge, setArrangeAge] = useState(false);
  let [notFound, setNotFound] = useState(false);
  //   false= assending true = decending
  function onChangeHandle(e) {
    SetSearchedName(e);
    if (e === ``) {
      setUserState(users);
      setNotFound(false);
    }
  }

  function onSubmitHandle(event) {
    event.preventDefault();
    let initalSate = [...userSate];

    const matches = initalSate.filter((el) => {
      let Splitname = el.name.split(" ");
      return Splitname[0] === searchedName;
    });

    if (matches != 0) {
      setUserState(matches);
    } else {
      setNotFound(true);
    }
  }

  function toggleHandle() {
    if (toggle) {
      setUserState(users);
      setToggle(false);
    } else {
      const activeUsers = users.filter((el) => el.status === "active");
      setUserState(activeUsers);
      setToggle(true);
    }
  }

  function sortAge() {
    let initalSate = [...userSate];
    if (arrangeAge === true) {
      let age = initalSate.sort((a, b) => a.age - b.age);
      setUserState(age);
      setArrangeAge(false);
    } else {
      let age = initalSate.sort((a, b) => b.age - a.age);
      setUserState(age);
      setArrangeAge(true);
    }
  }

  return (
    <div>
      <div>
        <div className="flex justify-center">
          <table className="w-full border">
            <tr className="bg-gray-100">
              <th className="px-6 py-3 ">Name</th>
              <th className="px-6 py-3 ">E-Mail</th>
              <th className="px-6 py-3 ">Age</th>
              <th className="px-6 py-3 ">Status</th>
            </tr>

            {!notFound &&
              userSate.map((user) => (
                <tr>
                  <td
                    className={`px-6 py-4 font-medium  ${
                      user.status === "active"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {user.name}
                  </td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">{user.age}</td>
                  <td
                    className={`px-6 py-4 font-semibold ${
                      user.status === "active"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {user.status}
                  </td>
                </tr>
              ))}
          </table>
        </div>
      </div>
      {notFound && (
        <div className="text-center pt-2 ">
          <h1 className="text-2xl font-semibold text-red-300">
            User Not Found
          </h1>
        </div>
      )}
      <div>
        <form onSubmit={onSubmitHandle}>
          <div className="p-5 ">
            <input
              className="p-1 bg-teal-100 rounded-lg mr-4"
              placeholder="Search Name"
              type="text"
              required
              onChange={(e) => onChangeHandle(e.target.value)}
            />
            <button className="p-2 bg-teal-500 text-white rounded-xl">
              Search
            </button>
          </div>
        </form>
        <div>
          <button
            onClick={toggleHandle}
            className="p-2 bg-teal-700 text-white rounded-xl ml-3"
          >
            {toggle === true ? `Active` : `All`}
          </button>
          <button
            onClick={sortAge}
            className="p-2 bg-teal-700 text-white rounded-xl ml-3"
          >
            {arrangeAge ? `Decending  order` : `Assending order`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DummyRoot;
