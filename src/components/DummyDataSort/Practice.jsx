import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import { data } from "react-router-dom";

const Practice = () => {
  const [recivedData, setRecivedData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/get");
        setRecivedData(response.data);
        console.log("Fetched data:", response.data); // ✅ Logs the actual data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this runs only once

  if (!recivedData) {
    return <div>Loading...</div>;
  }

  // ✅ Render the fetched data
  return (
    <div>
      {Array.isArray(recivedData) ? (
        recivedData.map((item) => (
          <div key={item._id}>
            <h3>
              {item.brand} {item.model}
            </h3>
            <p>Price: {item.price}</p>
            <p>Year: {item.year}</p>
          </div>
        ))
      ) : (
        <pre>{JSON.stringify(recivedData, null, 2)}</pre>
      )}
    </div>
  );
};

export default Practice;
