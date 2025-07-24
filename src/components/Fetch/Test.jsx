import { useState } from "react";

const Data = [
  { id: 1, name: "Alice Johnson", email: "alice.johnson@example.com" },
  { id: 2, name: "Bob Smith", email: "bob.smith@example.com" },
  { id: 3, name: "Charlie Davis", email: "charlie.davis@example.com" },
  { id: 4, name: "Diana Moore", email: "diana.moore@example.com" },
  { id: 5, name: "Ethan Clark", email: "ethan.clark@example.com" },
  { id: 6, name: "Fiona Lewis", email: "fiona.lewis@example.com" },
  { id: 7, name: "George Hall", email: "george.hall@example.com" },
  { id: 8, name: "Hannah Young", email: "hannah.young@example.com" },
  { id: 9, name: "Ian Allen", email: "ian.allen@example.com" },
  { id: 10, name: "Jasmine Scott", email: "jasmine.scott@example.com" },
  { id: 11, name: "Kevin King", email: "kevin.king@example.com" },
  { id: 12, name: "Laura Wright", email: "laura.wright@example.com" },
  { id: 13, name: "Mike Green", email: "mike.green@example.com" },
  { id: 14, name: "Nina Adams", email: "nina.adams@example.com" },
  { id: 15, name: "Oscar Baker", email: "oscar.baker@example.com" },
  { id: 16, name: "Paula Nelson", email: "paula.nelson@example.com" },
  { id: 17, name: "Quentin Carter", email: "quentin.carter@example.com" },
  { id: 18, name: "Rachel Mitchell", email: "rachel.mitchell@example.com" },
  { id: 19, name: "Sam Rogers", email: "sam.rogers@example.com" },
  { id: 20, name: "Tina Perez", email: "tina.perez@example.com" },
];

const Test = () => {
  let [newData, setNewData] = useState(Data);

  let Next = () => {
    if (t) {
    } else {
    }
  };

  let Prev = () => {};

  return (
    <div>
      <h1>Data</h1>
      <button>Prev</button>
      <button>Next</button>
      {newData.map((el) => {
        return (
          <>
            <ul key={el.id}>
              <li>{el.id}</li>
              <li>{el.name}</li>
              <li>{el.email}</li>
            </ul>
          </>
        );
      })}
    </div>
  );
};

export default Test;
