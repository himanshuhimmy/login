import React, { useState } from "react";

const DummyPractice = () => {
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

  const [name, setName] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [found, setFound] = useState(false);
  function onSubmitHandle(e) {
    e.preventDefault();

    const matches = users.filter((el) => {
      let Splitname = el.name.split(" ");
      return Splitname[0] === name || Splitname[1] === name;
    });

    if (matches != 0) {
      setFilteredUsers(matches);
    } else {
      setFound(true);
    }
  }

  let totalNoOfUsers = 5;

  let [page, setPage] = useState(1);
  function RenderUser() {
    // let usersx = filteredUsers.map((el, id) => {});
    // console.log(usersx);

    if (page === 1) {
      let first5 = filteredUsers.filter((el) => el.id <= 5);
      console.log(first5);
    } else {
      let last5 = filteredUsers.filter((el) => el.id > 5);
      console.log(last5);
    }
  }
  RenderUser();
  return (
    <div>
      {found && (
        <div className="text-center pt-2 ">
          <h1 className="text-2xl font-semibold text-red-300">
            User Not Found
          </h1>
        </div>
      )}
      <div className="w-full p-3  m-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className=" font-semibold mb-2 bg-slate-300">
              <th className="px-6 py-2">Name</th>
              <th className="px-6 py-2">Email</th>
              <th className="px-6 py-2">Age</th>
              <th className="px-6 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td
                  className={`px-6 py-4 font-medium ${
                    user.status === "active" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {user.name}
                </td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.age}</td>
                <td
                  className={`px-6 py-4 font-semibold ${
                    user.status === "active" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {user.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="w-[90%] m-auto p-8 bg-slate-600">
        <form onSubmit={onSubmitHandle}>
          <input
            onChange={(e) => setName(e.target.value)}
            className="p-2"
            required
            type="text"
            value={name}
          />
          <button className="ml-2 p-2 bg-blue-500 text-white">done</button>
        </form>
      </div>
    </div>
  );
};

export default DummyPractice;
