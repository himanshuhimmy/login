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
  //   false= assending true = decending
  function onChangeHandle(e) {
    let newNAme = [];
    newNAme.push(e);
    SetSearchedName(newNAme);
  }

  function onSubmitHandle(event) {
    event.preventDefault();
    let initalSate = [...userSate];

    //   console.log(initalSate.map((el) => searchedName.includes(el.name)));
  }

  function toggleHandle() {
    let initalSate = [...userSate];
    if (toggle === true) {
      let activeSataus = initalSate.filter((el) => el.status === `active`);
      setUserState(activeSataus);
      setToggle(false);
    } else {
      setUserState(users);
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
          <table>
            <tr className="p-3 text-xl ">
              <th>Name</th>
              <th>E-MAIL</th>
              <th>AGE</th>
              <th>STATUS</th>
            </tr>
            {userSate.map((User) => {
              return (
                <>
                  <tr className="font-semibold">
                    <th
                      className={
                        User.status === `active`
                          ? `text-green-700`
                          : `text-red-700`
                      }
                    >
                      <p> {User.name}</p>
                    </th>
                    <th>
                      <p>{User.email}</p>
                    </th>
                    <th>
                      <p>{User.age}</p>
                    </th>
                    <th
                      className={
                        User.status === `active`
                          ? `text-green-700`
                          : `text-red-700`
                      }
                    >
                      <p>{User.status}</p>
                    </th>
                  </tr>
                </>
              );
            })}
          </table>
        </div>
      </div>
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
            Toggle
          </button>
          <button
            onClick={sortAge}
            className="p-2 bg-teal-700 text-white rounded-xl ml-3"
          >
            {arrangeAge ? `Assending order` : `Decending order`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DummyRoot;
