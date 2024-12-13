import React from 'react'

export const Medical = () => {
    return (
        <>
            <div className="relative pt-10 md:pt-20 transform hover:scale-95 transition duration-75">
                <picture>
                    <source media="(max-width:640px)" />
                    <source media="(min-width:641px)" />
                    <img
                        className="w-full"
                        src="https://medipro.cl/wp-content/uploads/2022/06/Banner-Telemedicina-1-2.png"
                        alt="Artículo principal"
                    />
                </picture>
            </div>

            {/* Tarjetas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 px-4">
                <div className="border border-gray-200 w-full h-auto flex flex-col items-center justify-center shadow-md p-4 bg-white transform hover:scale-105 transition duration-300">
                    <img src="https://storage.googleapis.com/td360-newprod-public/assets/images/landings/telemedicine/ico_header_patients_01.svg" alt="avatar" className="w-20 h-20" />
                    <p className="text-center mt-3 text-gray-800">Contactá con los mejores médicos especialistas</p>
                </div>
                <div className="border border-gray-200 w-full h-auto flex flex-col items-center justify-center shadow-md p-4 bg-white transform hover:scale-105 transition duration-300">
                    <img src="https://storage.googleapis.com/td360-newprod-public/assets/images/landings/telemedicine/ico_header_patients_02.svg" alt="avatar" className="w-20 h-20" />
                    <p className="text-center mt-3 text-gray-800">Consulta médica en cualquier momento y lugar</p>
                </div>
                <div className="border border-gray-200 w-full h-auto flex flex-col items-center justify-center shadow-md p-4 bg-white transform hover:scale-105 transition duration-300">
                    <img src="https://storage.googleapis.com/td360-newprod-public/assets/images/landings/telemedicine/ico_header_02.svg" alt="avatar" className="w-20 h-20" />
                    <p className="text-center mt-3 text-gray-800">Entorno seguro y privado</p>
                </div>
                <div className="border border-gray-200 w-full h-auto flex flex-col items-center justify-center shadow-md p-4 bg-white transform hover:scale-105 transition duration-300">
                    <img src="https://storage.googleapis.com/td360-newprod-public/assets/images/landings/telemedicine/ico_header_patients_04.svg" alt="avatar" className="w-20 h-20" />
                    <p className="text-center mt-3 text-gray-800">Servicio multidispositivo</p>
                </div>
            </div>

            {/* Información adicional */}
            <div className="text-center mb-6 mt-8 px-4">
                <h1 className="text-2xl md:text-4xl font-semibold text-cyan-600 ">Chat privado y videoconsulta</h1>
                <h3 className="text-lg mt-2 text-gray-600">Estos dos servicios permiten realizar las consultas médicas que necesités de forma rápida y cómoda. También podrás compartir imágenes, exámenes médicos y videos con tu médico especialista.</h3>
            </div>

            {/* ¿Cómo funciona? */}
            <div className="flex flex-col md:flex-row items-center justify-between mt-10 space-y-6 md:space-y-0 md:space-x-10 border border-gray-50 shadow-md p-4 transform hover:scale-105 transition duration-300">
                {/* Contenedor de texto */}
                <div className="w-full md:w-1/2">
                    <h1 className="text-3xl md:text-4xl font-bold text-cyan-600 mb-6">¿Cómo Funciona?</h1>
                    <ul className="list-decimal list-inside space-y-4 text-gray-800 text-lg">
                        <li>Encontrá al mejor especialista con el servicio de Telemedicina activado.</li>
                        <li>Seleccioná el servicio de chat privado o videoconsulta.</li>
                        <li>Comenzá la consulta médica con el doctor desde cualquier lugar.</li>
                        <li>Valorá el servicio.</li>
                    </ul>
                </div>

                {/* Imagen */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src="https://storage.googleapis.com/td360-newprod-public/assets/images/landings/telemedicine/img_patients_how_it_works.png"
                        alt="Cómo funciona la Telemedicina"
                        className="w-full max-w-md object-contain"
                    />
                </div>
            </div>
        </>
    )
}
