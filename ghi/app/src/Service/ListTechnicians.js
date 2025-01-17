import { useEffect, useState } from 'react'

function ListTechnicians () {
  const [technicians, setTechnicians] = useState([])

  const getData = async () => {
    const response = await fetch('http://localhost:8080/api/technicians/')

    if (response.ok) {
      const data = await response.json()
      setTechnicians(data.technicians)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <table className='table table-striped'>
      <thead>
        <tr>
          <th>Employee Id</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
        {technicians.map(technician => {
          return (
            <tr key={technician.id}>
              <td>{technician.employee_id}</td>
              <td>{technician.first_name}</td>
              <td>{technician.last_name}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default ListTechnicians
