import React, { useEffect, useState } from 'react'

function SalespersonHistory(){
  const [sales, setSales] = useState([])
  const [salespersons, setSalesperson] = useState([]);
  const [salesPerson, setSalesPerson] = useState('');


  async function loadSales() {
    const response = await fetch('http://localhost:8090/api/sales/')
    if (response.ok){
      const data = await response.json()
      setSales(data.sales)
    }
  }

  async function loadSalespersons() {
    const response = await fetch('http://localhost:8090/api/salespeople/');
    if (response.ok) {
      const data = await response.json();
      setSalesperson(data.salespeople)
    }
  }

  const filteredSales = sales.filter(
    (sale) => sale.sales_person.employee_id === salesPerson
  );

  const handleSalesPersonChange = (event) => {
    const value = event.target.value;
    setSalesPerson(value);
  }

  useEffect(() => {
    loadSales()
    loadSalespersons()
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = {}
    data.sales_person = salesPerson
    const salesUrl = 'http://localhost:8090/api/sales/'
    const fetchConfig = {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      }
    }
    const sale = await fetch(salesUrl, fetchConfig)
    if (sale.ok) {
      setSalesperson('');
    }
  }

  return (
    <>
    <h1>Salesperson History</h1>
    <div className="form-floating mb-3">
      <select onChange={handleSalesPersonChange} placeholder="sales_person" type="text" name="sales_person"  id="sales_person" className="form-control">
        <option value="">Choose a Salesperson</option>
        {salespersons?.map(salespeople => {
          return (
          <option key={salespeople.id} value={salespeople.employee_id}>{salespeople.first_name} {salespeople.last_name}</option>)
          })
          }
          </select>
    </div>
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Salesperson</th>
          <th>Customer</th>
          <th>VIN</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {filteredSales.map(sale => {
          return (
            <tr key={sale.id}>
              <td>{ sale.sales_person.first_name } { sale.sales_person.last_name }</td>
                <td>{ sale.customer.first_name } { sale.customer.last_name }</td>
                <td>{ sale.automobile.vin }</td>
                <td>${sale.price}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
    </>
  )
}

export default SalespersonHistory
