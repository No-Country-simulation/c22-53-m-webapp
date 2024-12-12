import React from 'react'
import { Link } from 'react-router-dom'

export const Content = () => {
    return (
        <div className="bg-white mt-6 h-auto md:h-[350px] shadow-md z-50 flex flex-col md:flex-row items-center justify-between px-8 border border-gray-50 transform hover:scale-95 transition duration-75">
            {/* Contenedor de texto y botón */}
            <div className="flex flex-col items-start space-y-4 w-full md:w-1/2">
                <h6 className="text-2xl md:text-3xl font-bold text-cyan-600">
                    TeleMedicina
                </h6>
                <p className="text-cyan-600 overflow-hidden max-h-[4.5rem]">
                    Contactá con doctores expertos en cualquier momento y lugar, usando nuestro servicio de Chat privado o Videoconsulta.
                </p>
                <Link to="/Medical">
                    <button className="mt-4 px-4 py-2 w-full md:w-48 h-12 bg-cyan-600 text-white font-bold rounded">
                        Mira como funciona
                    </button>
                </Link>
            </div>

            {/* Imagen */}
            <div className="w-full md:w-1/2  justify-center hidden md:flex">
                <img
                    src="https://img.freepik.com/foto-gratis/doctor-que-trabaja-computadora-portatil-que-escribe-papeleo-fondo-hospital_1421-69.jpg"
                    className="h-[300px] object-contain border border-cyan-100 md:ml-6"
                    alt="Imagen de telemedicina"
                />
            </div>
        </div>

    )
}
