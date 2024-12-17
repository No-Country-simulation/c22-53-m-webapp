
import React from 'react'

const doctors = [
    {
        id: 1,
        name: "Ramon Cardenas",
        comment: "Solo tengo palabras de agradecimiento al Dr. Glovinski. Su trato hacia el paciente ha sido excelente.",
        image: "https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
    },
    {
        id: 2,
        name: "Luisa Fernandez",
        comment: "Excelente atención por parte del doctor y del servicio de Top Doctors.",
        image: "https://i.pinimg.com/564x/30/24/f8/3024f8d283b734bd6b7e4fc5531fe2e9.jpg"
    },
    {
        id: 3,
        name: "Mireya Sanchez",
        comment: "Muy amable en el trato, clara y precisa al explicarme el tratamiento a realizarme.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMrGabqGs2BewLyivOm2hAmQfJ_ZbhKSkct8xFOzezuLECXhu5iyLBo3uynv1022AbtDw&usqp=CAU"
    },
    {
        id: 4,
        name: "Jhon Mendoza",
        comment: "Excelente trato, instalaciones y diagnostico",
        image: "https://img.freepik.com/vector-gratis/sonriente-nino-dibujos-animados-pelirrojo_1308-174709.jpg?semt=ais_hybrid"
    },
    {
        id: 5,
        name: "Marina Buritica",
        comment: "Muy cálido y claro en los conceptos el dr González Mariano!!",
        image: "https://img.freepik.com/vector-premium/ilustracion-vector-avatar-anciana-hippie_621685-62.jpg"
    },
    {
        id: 6,
        name: "Madeleine Monroy",
        comment: "Medico dedicado, meticuloso y muy profesional ,humano, gracias doctor!!!",
        image: "https://img.freepik.com/psd-gratis/ilustracion-3d-avatar-linea_23-2151303097.jpg"
    },
]

export const Reviews = () => {
    return (
        <>
            <div className="text-center mb-6 mt-8 px-4">
                <h1 className="text-2xl md:text-4xl font-semibold text-cyan-600">Valoraciones reales de pacientes verificados</h1>
                <h3 className="text-sm mt-2 text-cyan-600">Valoraciones solo de pacientes reales que sí han tenido una consulta con el médico.</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 px-4 ">
                {
                    doctors.map(doctor => (
                        <div key={doctor.id} className="border border-gray-200 w-full h-auto flex flex-col items-center justify-center shadow-md p-4 bg-white transform hover:scale-110 transition duration-10">
                            <img src={doctor.image} alt="avatar" className="w-[80px] h-[80px] rounded-full border border-cyan-600" />
                            <h2 className="text-cyan-600 mt-2 text-lg font-semibold">{doctor.name}</h2>
                            <p className="mt-2 text-gray-700 text-center text-sm">{doctor.comment}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
