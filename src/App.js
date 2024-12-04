import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Carrusel } from './components/Carrusel';
import { NavBar } from './components/NavBar';
import { Login } from './components/Login';
import { FormUser } from './components/FormUser';
import './index.css';

function App() {
  return (<BrowserRouter>
  <main className='px-4 pt-6'>
      <NavBar />
      <Routes>
      <Route path="/" element={<Carrusel/>} />
      <Route path="/Login" element={<Login/>} />  
      <Route path="/FormUser" element={<FormUser/>} /> 
      </Routes> 
    </main>
  
  </BrowserRouter>
    


  );
}

export default App;
