import React, { useEffect, useState } from "react";

function ManufacturersList() {
  const [manufacturer, setManufacturers] = useState([]);

  async function loadManufacturers() {
    const response = await fetch("http://localhost:8100/api/manufacturers/");
    if (response.ok) {
      const data = await response.json();
      setManufacturers(data.manufacturers);
    }
  }

  useEffect(() => {
    loadManufacturers();
  }, []);

  return (
    <div>
      <h1>Manufacturers</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {manufacturer?.map((manufacturers) => {
            return (
              <tr key={manufacturers.id}>
                <td>{manufacturers.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ManufacturersList;
