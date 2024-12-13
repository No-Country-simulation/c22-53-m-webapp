import React from 'react'

const employeds = [
  {
    id: 1,
    name: "Gladys Betancourt",
    specialty: "Tomas de Muestras Generales",
    image: "https://st.depositphotos.com/4678277/55706/i/450/depositphotos_557068658-stock-photo-photo-of-experienced-lady-virologist.jpg"
  },
  {
    id: 2,
    name: "Maria Gonzalez",
    specialty: "Oftalmologia",
    image: "https://static.vecteezy.com/system/resources/thumbnails/026/843/446/small_2x/portrait-of-young-doctor-or-nurse-female-with-uniform-on-studio-background-medical-woman-concept-ai-generated-free-photo.jpeg"
  },
  {
    id: 3,
    name: "Orlando Monroy",
    specialty: "Kinesiologia",
    image: "https://cdn.euroinnova.edu.es/img/subidasEditor/doctor-5871743_640-1610073541.webp"
  },
  {
    id: 4,
    name: "Maria Emilia",
    specialty: "Clinica Dental",
    image: "https://st2.depositphotos.com/3889193/8015/i/950/depositphotos_80150956-stock-photo-confident-female-doctor-at-office.jpg"
  },
  {
    id: 5,
    name: "Carmen Paez",
    specialty: "Procedimientos",
    image: "https://tecolotito.elsiglodedurango.com.mx/i/2024/04/1258249.jpeg"
  },
  {
    id: 6,
    name: "Cesar Usechi",
    specialty: "Radiologo",
    image: "https://www.shutterstock.com/image-photo/healthcare-medical-staff-concept-portrait-600nw-2281024823.jpg"
  },
  {
    id: 7,
    name: "Martha Rodriguez",
    specialty: "Dermatologo",
    image: "https://st3.depositphotos.com/4678277/13234/i/450/depositphotos_132340260-stock-photo-cheerful-female-doctor-in-white.jpg"
  },
  {
    id: 8,
    name: "Rodolgo Dominguez",
    specialty: "Medicina General",
    image: "https://st3.depositphotos.com/1743476/32257/i/450/depositphotos_322579018-stock-photo-smiling-doctor-standing-on-grey.jpg"
  },
  {
    id: 8,
    name: "Julieta Marin",
    specialty: "Medicina General",
    image: "https://img.freepik.com/fotos-premium/retrato-fotografico-joven-bella-mujer-morena-sonriente-positiva-emociones-sinceras-vistiendo-bata-blanca-medica_88135-26652.jpg?semt=ais_hybrid"
  },
]

export const Doctors = () => {
  return (

    <>
      <div>
        <picture>
          <source media="(max-width:640px)" />
          <source media="(min-width:641px)" />
          <img
            className="w-full mt-20"
            src="https://poonawallafincorp.com/pfca/assets/blog_banner/blog_banner-medical-equipment-types-desktop.jpg"
            alt="Articulo principal"
          />
        </picture>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full px-4 mt-8">
        {
          employeds.map(employed => (
            <div key={employed.id} className="border border-gray-200 w-full h-auto flex flex-col items-center justify-center shadow-md p-4 bg-white transform hover:scale-105 transition duration-300">
              <img
                src={employed.image}
                alt="image"
                className="w-full h-auto max-w-full border border-cyan-600 object-cover"
              />
              <h2 className="text-cyan-600 mt-4 text-lg sm:text-xl font-semibold">{employed.name}</h2>
              <p className="mt-2 text-gray-700 text-center text-sm sm:text-base">{employed.specialty}</p>
            </div>
          ))
        }
      </div>
    </>

  )
}
