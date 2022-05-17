import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/Pages/About/About';
import Appointment from './Components/Pages/Appointment/Appointment';
import Contact from './Components/Pages/Contact/Contact';
import RequireAuth from './Components/Pages/Login/RequireAuth';
import Login from './Components/Pages/Login/Login';
import SignUp from './Components/Pages/Login/SignUp';
import Navbar from './Components/Pages/Navbar/Navbar';
import Reviews from './Components/Pages/Reviews/Reviews';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import MyAppointments from './Components/Pages/Dashboard/MyAppointments';
import ReviewDash from './Components/Pages/Dashboard/ReviewDash';
import AllUsers from './Components/Pages/Dashboard/AllUsers';
import RequireAdmin from './Components/Pages/Login/RequireAdmin';
import AddDoctor from './Components/Pages/Dashboard/AddDoctor';
import ManageDoctors from './Components/Pages/Dashboard/ManageDoctors';

function App() {
  return (
    
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='about' element={<About></About>}></Route>


        <Route path='appoint' element={
          <RequireAuth>
            <Appointment></Appointment>
          </RequireAuth>
        }></Route>

        <Route path='dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path='review' element={<ReviewDash></ReviewDash>}></Route>
          <Route path='users' element={
            <RequireAdmin>
              <AllUsers></AllUsers>
            </RequireAdmin>
          }></Route>
          <Route path='addDoctor' element={
            <RequireAdmin>
              <AddDoctor></AddDoctor>
            </RequireAdmin>
          }></Route>
          <Route path='manageDoctor' element={
            <RequireAdmin>
              <ManageDoctors></ManageDoctors>
            </RequireAdmin>
          }></Route>
        </Route>

        <Route path='reviews' element={<Reviews></Reviews>}></Route>
        <Route path='contact' element={<Contact></Contact>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;