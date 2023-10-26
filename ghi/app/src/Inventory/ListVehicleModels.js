import { useState, useEffect } from "react";

function ModelList() {
  const [model, setModel] = useState([]);

  const fetchModelData = async () => {
    const url = "http://localhost:8100/api/models/";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setModel(data.models);
    }
  };

  useEffect(() => {
    fetchModelData();
  }, []);

  return (
    <div>
      <h1>Models</h1>
      <table className="table table-striped">
        <thead>
          <tr className="table-success">
            <th>Name</th>
            <th>Manufacturer</th>
            <th>Picture</th>
          </tr>
        </thead>
        <tbody>
          {model?.map((models) => {
            return (
              <tr key={models.id} value={models.id}>
                <td>{models.name}</td>
                <td>{models.manufacturer.name}</td>
                <td>
                  <img src={models.picture_url} alt={models.name} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ModelList;
