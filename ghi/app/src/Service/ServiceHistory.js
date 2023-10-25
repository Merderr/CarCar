import { useEffect, useState } from 'react'

function ListServiceHistory () {
  const [appointments, setAppointments] = useState([])

  const getData = async () => {
    const response = await fetch('http://localhost:8080/api/appointments/')

    if (response.ok) {
      const data = await response.json()
      setAppointments(data.appointments)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <table className='table table-striped'>
      <thead>
        <tr>
          <th>VIN</th>
          <th>Customer</th>
          <th>Date</th>
          <th>Time</th>
          <th>Technician</th>
          <th>Reason</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {appointments.map(appointment => {
          return (
            <tr key={appointment.id}>
              <td>{appointment.vin}</td>
              <td>{appointment.customer}</td>
              <td>{new Date(appointment.date_time).toDateString()}</td>
              <td>{new Date(appointment.date_time).toLocaleTimeString()}</td>
              <td>{appointment.technician}</td>
              <td>{appointment.reason}</td>
              <td>{appointment.status}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default ListServiceHistory
