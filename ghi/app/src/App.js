import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ListCustomers from './Sales/ListCustomers'
import CustomerForm from './Sales/CustomerForm'
import ListSalesPeople from './Sales/ListSalesPeople'
import SalespersonForm from './Sales/SalespersonForm'
import SaleForm from './Sales/SaleForm'
import ListAllSales from './Sales/ListAllSales'
import SalespersonHistory from './Sales/SalespersonHistory'
import ListTechnicians from './Service/ListTechnicians';
import TechnicianForm from './Service/TechnicianForm'
import ListAppointment from './Service/ListAppointments'
import AppointmentForm from './Service/AppointmentForm'
import ListServiceHistory from './Service/ServiceHistory';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="customers/list/" element={<ListCustomers />} />
          <Route path="customers/" element={<CustomerForm />} />
          <Route path="salespeople/list/" element={<ListSalesPeople />} />
          <Route path="salespeople/" element={<SalespersonForm />} />
          <Route path="sales/" element={<SaleForm />} />
          <Route path="sales/list/" element={<ListAllSales />} />
          <Route path="sales/history/" element={<SalespersonHistory />} />
          <Route path="technicians">
            <Route index element={<ListTechnicians />} />
            <Route path="new" element={<TechnicianForm />}/>
          </Route>
          <Route path="appointments">
            <Route index element={<ListAppointment />} />
            <Route path="history" element={<ListServiceHistory />}/>
            <Route path="new" element={<AppointmentForm />}/>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
