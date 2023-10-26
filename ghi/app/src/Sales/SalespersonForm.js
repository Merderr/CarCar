import React, { useState } from "react";

function SalespersonForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [employeeId, setEmployeeId] = useState("");

  const handleFirstNameChange = (event) => {
    const value = event.target.value;
    setFirstName(value);
  };

  const handleLastNameChange = (event) => {
    const value = event.target.value;
    setLastName(value);
  };

  const handleEmployeeIdChange = (event) => {
    const value = event.target.value;
    setEmployeeId(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {};
    data.first_name = firstName;
    data.last_name = lastName;
    data.employee_id = employeeId;

    const salesPersonUrl = "http://localhost:8090/api/salespeople/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(salesPersonUrl, fetchConfig);
    if (response.ok) {
      setFirstName("");
      setLastName("");
      setEmployeeId("");
    }
  };

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Add a Salesperson</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input
                value={firstName}
                onChange={handleFirstNameChange}
                placeholder="First Name"
                required
                type="text"
                id="first_name"
                name="first_name"
                className="form-control"
              />
              <label>First Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                value={lastName}
                onChange={handleLastNameChange}
                placeholder="Last Name"
                required
                type="text"
                id="last_name"
                name="last_name"
                className="form-control"
              />
              <label>Last Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                value={employeeId}
                onChange={handleEmployeeIdChange}
                placeholder="EmployeeId"
                type="number"
                id="employee_Id"
                name="employee_Id"
                className="form-control"
              />
              <label>Employee ID</label>
            </div>
            <button className="btn btn-primary">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SalespersonForm;
