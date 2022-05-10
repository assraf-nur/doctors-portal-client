import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/Pages/About/About';
import Appointment from './Components/Pages/Appointment/Appointment';
import Contact from './Components/Pages/Contact/Contact';
import Login from './Components/Pages/Login/Login';
import Navbar from './Components/Pages/Navbar/Navbar';
import Reviews from './Components/Pages/Reviews/Reviews';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/appoint' element={<Appointment></Appointment>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
