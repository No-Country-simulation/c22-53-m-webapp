import React from 'react'

const centers = [
    {
        id: 1,
        name: "IntegraMédica Independencia",
        comment: "Integramédica, Profesor Alberto Zañartu 1121, Población Los Castaños, Independencia, Santiago Metropolitan Region",
        image: "https://www.integramedica.cl/integramedica/site/artic/20240417/imag/foto_0000001320240417150630/blog_caja_banner.jpg",
        ubication: "Metro Estación Hospitales"
    },
    {
        id: 2,
        name: "IntegraMédica Irarrázaval",
        comment: "Centro médico Ñuñoa, Avenida Irarrázaval 2401, Barrio Villaseca, Ñuñoa, Santiago Metropolitan Region.",
        image: "https://media.istockphoto.com/id/185252146/es/foto/edificio-de-oficinas.jpg?s=612x612&w=0&k=20&c=eXO-kpgCepRsSkJDvfjbU7UR3rMs1ALYJ_yj9q_fUGs=",
        ubication: "Metro Estación Ñuñoa L6"
    },
    {
        id: 3,
        name: "IntegraMédica Pajaritos",
        comment: "Avenida Los Pajaritos 1605, Los Renovales, Maipú, Santiago Metropolitan Region.",
        image: "https://abriendohorizontesinversiones.com/wp-content/uploads/2019/09/abrir-una-cl%C3%ADnica-privada-exitosa.jpg",
        ubication: "Plaza Maipú L5"
    },
    {
        id: 4,
        name: "IntegraMédica Copiapó",
        comment: "Falabella, Maipú 110, Rosario, Copiapó, Atacama Region",
        image: "https://www.clinica-atenea.com/wp-content/uploads/2023/09/01-scaled.jpg",
        ubication: "Mallplaza Copiapó"
    },
    {
        id: 5,
        name: "IntegraMédica Apoquindo - Laboratorio",
        comment: "Avenida Apoquindo, El Golf, Las Condes, Santiago Metropolitan Region",
        image: "https://www.redclinica.cl/Portals/_default/Skins/Skin_HCUCH_17_03/images/gb_sectores_descripcion/bg_admision_central.jpg",
        ubication: "Metro Alcántara"

    },
    {
        id: 6,
        name: "IntegraMédica Alto Las Condes - Centro Médico y Dental",
        comment: "Alto Las Condes, Avenida Presidente Kennedy 9001, Las Condes, Santiago Metropolitan Region",
        image: "https://anagarciainteriorista.com/wp-content/uploads/2020/10/B0829285-90C6-4DDA-9F3B-596966454BFF-1.jpeg",
        ubication: "Mall Alto Las Condes"
    },
]

export const Center = () => {
    return (
        <>
            <div className="relative bg-gray-100">
                <div className="absolute inset-0 flex flex-col justify-center items-center font-bold text-cyan-600 px-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-center">Encuentra tu Centro Médico</h1>
                    <p className="text-lg md:text-2xl font-semibold mt-6 text-center">Nuestros centros médicos ubicados en puntos estratégicos, privilegian un atendimiento oportuno y de calidad, buscando cubrir todas tus necesidades y expectativas. Descubre los centros médicos más cerca de ti.</p>
                </div>
                <picture>
                    <source media="(max-width:640px)" />
                    <source media="(min-width:641px)" />
                    <img
                        className="w-full h-auto mt-20 object-cover"
                        src="https://www.shutterstock.com/image-photo/medical-physician-doctor-hands-healthcare-600nw-261024704.jpg"
                        alt="Artículo principal"
                    />
                </picture>
            </div>
            <div className="flex flex-col items-center justify-center py-10 bg-gray-100">
                <div className="text-center mb-6">
                    <h1 className="text-2xl md:text-4xl font-semibold text-cyan-600">Centros Médicos</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full px-4">
                    {
                        centers.map(center => (
                            <div key={center.id} className="border border-gray-200 w-full h-[450px] flex flex-col items-center justify-center shadow-md p-4 bg-white transform hover:scale-110 transition duration-10">
                                <img src={center.image} alt="image" className="w-full h-[200px] border border-cyan-600 object-cover" />
                                <h2 className="text-cyan-600 mt-4 text-lg font-semibold">{center.name}</h2>
                                <p className="mt-2 text-gray-700 text-center text-sm md:text-base">{center.comment}</p>
                                <p className="mt-2 text-gray-500 text-center text-sm md:text-base">{center.ubication}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

        </>
    )
}
