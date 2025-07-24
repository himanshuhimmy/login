import { useEffect, useState } from "react";
import DataComp from "./DataComp";

const FetchData = () => {
  let [dataFetch, setDataFetch] = useState(false);
  let [errorData, setErrorData] = useState(false);

  useEffect(() => {
    let Users = async () => {
      try {
        let response = await fetch(`https://api.github.com/users`);
        let dataFetched = await response.json();
        if (!response.ok) {
          throw new Error(`failed to fetch data`);
        }
        setDataFetch(dataFetched);
      } catch (error) {
        setErrorData({ message: error.message || `could not fetch Data` });
      }
    };
    Users();
  }, []);

  return (
    <div>
      {dataFetch ? (
        <div>
          <DataComp data={dataFetch} setData={setDataFetch} />
        </div>
      ) : (
        <h1>Fetching your Data</h1>
      )}
      {errorData && <h1>{errorData}</h1>}
    </div>
  );
};

export default FetchData;
