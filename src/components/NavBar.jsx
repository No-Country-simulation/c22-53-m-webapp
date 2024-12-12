import React, { useState } from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white py-2 fixed top-0 left-0 right-0 shadow-md z-50">
      <div className="flex items-center justify-between px-4">
        <button onClick={() => setOpen(!open)} className="md:hidden">
          <i className="fa-solid fa-bars"></i>
        </button>
        <Link to="/">
          <div>
            <img
              className="w-auto h-[50px] md:h-[80px]"
              src="https://png.pngtree.com/png-clipart/20200727/original/pngtree-health-logo-design-logo-for-the-clinic-pharmaceutical-company-logo-of-png-image_5156715.jpg"
              alt="Logo"
            />
          </div>
        </Link>
        <ul className="hidden md:flex space-x-6 ml-4">
          <li className="hover:text-cyan-600">
            <Link to="/">Inicio</Link>
          </li>
          <li className="hover:text-cyan-600">
            <Link to="/Center">Centros</Link>
          </li>
          <li className="hover:text-cyan-600">
            <Link to="/Doctors">Doctores</Link>
          </li>
          <li className="hover:text-cyan-600">
            <Link to="/Medical">Telemedicina</Link>
          </li>
        </ul>

        {/* Contenedor para los botones */}
        <div className="flex items-center space-x-4">
          <Link to="/login">
            <button className="bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition duration-300">
              <i className="fa-regular fa-user"></i>
            </button>
          </Link>
        </div>
      </div>

      {/* Overlay para el menú móvil */}
      <div
        className={`${!open && "hidden"} bg-blue-900/50 min-h-screen w-full fixed top-0 left-0 backdrop-blur-sm z-40`}
        onClick={() => setOpen(false)}
      ></div>
      <div
        className={`${open ? "w-64" : "w-0"} bg-white min-h-screen shadow-md fixed top-0 left-0 transition-all duration-300 overflow-hidden z-50`}
      >
        <div className="pt-3">
          <button
            className="ml-4 text-black mb-6"
            onClick={() => setOpen(false)}
          >
            <i className="fa-solid fa-xmark text-black"></i>
          </button>
          <div className="text-center">
            <ul>
              <li className="text-black-400 text-m hover:bg-cyan-600 cursor-pointer py-2">
                <Link to="/como-pedir-cita">Inicio</Link>
              </li>
              <li className="text-black-400 text-m hover:bg-cyan-600 cursor-pointer py-2">
                <Link to="/telemedicina">Telemedicina</Link>
              </li>
              <li className="text-black-400 text-m hover:bg-cyan-600 cursor-pointer py-2">
                <Link to="/doctores">Doctores</Link>
              </li>
              <li className="text-black-400 text-m hover:bg-cyan-600 cursor-pointer py-2">
                <Link to="/centros">Centros</Link>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </div>
  );
};
