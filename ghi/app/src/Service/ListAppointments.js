import { useEffect, useState } from "react";

function ListAppointments () {
  const [appointments, setAppointments] = useState([])
  const [autos, setAutos] = useState([])

  const getData = async () => {
    const response = await fetch('http://localhost:8080/api/appointments/')
    const autosResponse = await fetch('http://localhost:8080/api/automobiles/')
    if (response.ok) {
      const data = await response.json();
      setAppointments(data.appointments);
    }
    if (autosResponse.ok) {
      const data = await autosResponse.json()
      setAutos(data.automobiles)
    }
  }

  async function handleCancel(appointmentId) {
    const fetchOptions = {
        method: "PUT"
    }
    const request = await fetch(`http://localhost:8080/api/appointments/${appointmentId}/cancel/`, fetchOptions)
    if (request.ok) {
        getData()
    }
  }

  async function handleFinish(appointmentId) {
    const fetchOptions = {
        method: "PUT"
    }
    const request = await fetch(`http://localhost:8080/api/appointments/${appointmentId}/finish/`, fetchOptions)
    if (request.ok) {
        getData()
    }
  }

  const updatedAppointments = appointments.map(appointment => {
    const isVip = autos.some(item => item.vin === appointment.vin);
    return {
      ...appointment,
      vip: isVip ? "yes" : "no"
    };
  });

  useEffect(() => {
    getData();
  }, []);

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>VIN</th>
          <th>VIP?</th>
          <th>Customer</th>
          <th>Date</th>
          <th>Time</th>
          <th>Technician</th>
          <th>Reason</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {updatedAppointments.map(appointment => {
          if(appointment.status === 'pending')
            return (
              <tr key={appointment.id}>
                <td>{appointment.vin}</td>
                <td>{appointment.vip}</td>
                <td>{appointment.customer}</td>
                <td>{new Date(appointment.date_time).toDateString()}</td>
                <td>{new Date(appointment.date_time).toLocaleTimeString()}</td>
                <td>{appointment.technician}</td>
                <td>{appointment.reason}</td>
                <td>
                  <button className="btn btn-danger"onClick={() => handleCancel(appointment.id)}>Cancel</button>
                  <button className="btn btn-success"onClick={() => handleFinish(appointment.id)}>Finish</button>
                </td>
                </tr>
            )
        })}
      </tbody>
    </table>
  );
}

export default ListAppointments;
