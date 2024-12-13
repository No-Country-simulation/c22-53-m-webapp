import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Carrusel } from './components/Carrusel';
import { NavBar } from './components/NavBar';
import { Login } from './components/Login';
import { FormUser } from './components/FormUser';
import { FormDoctor } from './components/FormDoctor';
import { Reserva } from './components/Reserva';
import { Footer } from './components/Footer';
import { Center } from './components/Center';
import { Medical } from './components/Medical';
import { Doctors } from './components/Doctors';
import './index.css';

function App() {
  return (<BrowserRouter>
    <main className='px-4 pt-6'>
      <NavBar />
      <Routes>
        <Route path="/" element={<Carrusel />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/FormUser" element={<FormUser />} />
        <Route path="/FormDoctor" element={<FormDoctor />} />
        <Route path="/Reserva" element={<Reserva />} />
        <Route path="/Center" element={<Center />} />
        <Route path="/Medical" element={<Medical />} />
        <Route path="/Doctors" element={<Doctors />} />
      </Routes>
      <Footer />
    </main>

  </BrowserRouter>



  );
}

export default App;
