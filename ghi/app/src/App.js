import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";
import ListCustomers from "./Sales/ListCustomers";
import CustomerForm from "./Sales/CustomerForm";
import ListSalesPeople from "./Sales/ListSalesPeople";
import SalespersonForm from "./Sales/SalespersonForm";
import SaleForm from "./Sales/SaleForm";
import ListAllSales from "./Sales/ListAllSales";
import SalespersonHistory from "./Sales/SalespersonHistory";
import ListTechnicians from "./Service/ListTechnicians";
import TechnicianForm from "./Service/TechnicianForm";
import ListAppointment from "./Service/ListAppointments";
import AppointmentForm from "./Service/AppointmentForm";
import ListServiceHistory from "./Service/ServiceHistory";
import ListManufacturers from "./Inventory/ListManufacturers";
import ListVehicleModels from "./Inventory/ListVehicleModels";
import ManufacturerForm from "./Inventory/ManufacturerForm";
import VehicleModelForm from "./Inventory/VehicleModelForm";
import ListAutomobiles from "./Inventory/ListAutomobiles";
import CreateAutomobileForm from "./Inventory/CreateAutomobileForm";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="customers">
            <Route index element={<ListCustomers />} />
            <Route path="new" element={<CustomerForm />} />
          </Route>
          <Route path="salespeople">
            <Route index element={<ListSalesPeople />} />
            <Route path="new" element={<SalespersonForm />} />
          </Route>
          <Route path="sales">
            <Route index element={<ListAllSales />} />
            <Route path="new" element={<SaleForm />} />
            <Route path="history" element={<SalespersonHistory />} />
          </Route>
          <Route path="technicians">
            <Route index element={<ListTechnicians />} />
            <Route path="new" element={<TechnicianForm />} />
          </Route>
          <Route path="appointments">
            <Route index element={<ListAppointment />} />
            <Route path="history" element={<ListServiceHistory />} />
            <Route path="new" element={<AppointmentForm />} />
          </Route>
          <Route path="manufacturers">
            <Route index element={<ListManufacturers />} />
            <Route path="new" element={<ManufacturerForm />} />
          </Route>
          <Route path="models">
            <Route index element={<ListVehicleModels />} />
            <Route path="new" element={<VehicleModelForm />} />
          </Route>
          <Route path="automobiles">
            <Route index element={<ListAutomobiles />} />
            <Route path="new" element={<CreateAutomobileForm />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
