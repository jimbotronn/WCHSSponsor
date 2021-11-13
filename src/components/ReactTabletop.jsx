import React, { useEffect, useState, Fragment } from "react";
import Tabletop from "tabletop";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Tabletop.init({
      key: "1uvpXlt2M66ulGV-uadHZVAbMguLKruRMxFhLK6lxuYY",
      simpleSheet: true
    })
      .then((data) => setData(data))
      .catch((err) => console.warn(err));
  }, []);

  return (
    <>
      <h1>data from google sheets</h1>
      <ul>
      {data.map((item, i) => (
        <Fragment key={i}>
          <li>URL -- {item.VID}</li>
          <li>Email - {item.Name}</li>
          <li>Token - {item.Category}</li>
          <li>Token - {item.OfferTitle}</li>
          <li>Token - {item.OfferDescription}</li>
          <li>Token - {item.Link}</li>
          <br />
        </Fragment>
      ))}
    </ul>
    </>
  );
}