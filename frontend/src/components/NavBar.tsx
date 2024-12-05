import { useState } from 'react';
import { Link } from 'react-router-dom'
import { User } from '../types/types';
import { useQueryClient } from '@tanstack/react-query';

export default function NavBar() {

  const [open, setOpen] = useState(false);

  const queryClient = useQueryClient()
  const data: User = queryClient.getQueryData(["user"])!

  console.log(data)
  return (
    <div className="bg-white py-2 fixed top-0 left-0 right-0 shadow-md z-50">
      <div className="flex items-center justify-between px-4">
        <button onClick={() => setOpen(!open)} className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
          </svg>

        </button>
        <Link to="/">
          <div>
            <img
              className="w-auto h-[50px] md:h-[80px]"
              src="https://png.pngtree.com/png-clipart/20200727/original/pngtree-health-logo-design-logo-for-the-clinic-pharmaceutical-company-logo-of-png-image_5156715.jpg"
              alt="Logo" />
          </div>

        </Link>
        <ul className="hidden md:flex space-x-6 ml-4">
          <li className="hover:text-cyan-600">
            <Link to="/">Inicio</Link>
          </li>
          <li className="hover:text-cyan-600">
            <Link to="#">Doctores y Centros</Link>
          </li>
          <li className="hover:text-cyan-600">
            <Link to="#">Especialidades</Link>
          </li>
          <li className="hover:text-cyan-600">
            <Link to="#">Enfermedades</Link>
          </li>
        </ul>
        <Link to="/auth/login" className='flex items-center'>
          {
            data ? <p className="bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition duration-300">Hola {data.name}</p> :
              <button className="bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                </svg>

              </button>
          }


        </Link>

      </div>
      <div
        className={`${!open && "hidden"} bg-blue-900/50 min-h-screen w-full fixed top-0 left-0 backdrop-blur-sm z-40`}
        onClick={() => setOpen(false)}></div>
      <div className={`${open ? "w-64" : "w-0"} bg-white min-h-screen shadow-md fixed top-0 left-0 transition-all duration-300 overflow-hidden z-50`}>
        <div className="pt-3">
          <button
            className="ml-4 text-black mb-6"
            onClick={() => setOpen(false)}>
            <i className="fa-solid fa-xmark text-black"></i>
          </button>
          <div className="text-center">
            <ul>
              <li className="text-black-400 text-m hover:bg-cyan-600 cursor-pointer py-2">
                <a href="#">Como pedir una cita</a>
              </li>
              <li className="text-black-400 text-m hover:bg-cyan-600 cursor-pointer py-2">
                <a href="#">Telemedicina</a>
              </li>
              <li className="text-black-400 text-m hover:bg-cyan-600 cursor-pointer py-2">
                <a href="#">Doctores</a>
              </li>
              <li className="text-black-400 text-m hover:bg-cyan-600 cursor-pointer py-2">
                <a href="#">Centros</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
