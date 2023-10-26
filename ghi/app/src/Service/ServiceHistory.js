import { useEffect, useState } from 'react'

function ListServiceHistory () {
  const [appointments, setAppointments] = useState([])
  const [searchVal, setSearchVal] = useState([])
  const [autos, setAutos] = useState([])
  const handleSearchChange = event => {
    const value = event.target.value
    setSearchVal(value)
  }

  const getData = async () => {
    const response = await fetch('http://localhost:8080/api/appointments/')
    const autosResponse = await fetch('http://localhost:8080/api/automobiles/')

    if (response.ok) {
      const data = await response.json()
      setAppointments(data.appointments)
    }
    if (autosResponse.ok) {
      const data = await autosResponse.json()
      setAutos(data.automobiles)
    }
  }

  const updatedAppointments = appointments.map(appointment => {
    const isVip = autos.some(item => item.vin === appointment.vin)
    return {
      ...appointment,
      vip: isVip ? 'yes' : 'no'
    }
  })

  const filteredAppointments = updatedAppointments.filter(appointment =>
    appointment.vin.includes(searchVal)
  )

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <h1 className='mb-3'>Service History</h1>
      <input
        value={searchVal}
        onChange={handleSearchChange}
        placeholder='Search by VIN...'
      ></input>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>VIN</th>
            <th>VIP?</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Time</th>
            <th>Technician</th>
            <th>Reason</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredAppointments.map(appointment => {
            return (
              <tr key={appointment.id}>
                <td>{appointment.vin}</td>
                <td>{appointment.vip}</td>
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
    </div>
  )
}

export default ListServiceHistory
