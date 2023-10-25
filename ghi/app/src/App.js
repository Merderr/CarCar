import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
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
