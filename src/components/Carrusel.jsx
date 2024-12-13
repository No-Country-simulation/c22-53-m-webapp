import React from 'react'
import { Link } from 'react-router-dom'
import { Content } from './Content'
import { Reviews } from './Reviews'

export const Carrusel = () => {
  return (
    <>
      <div className="relative pt-10 md:pt-20 transform hover:scale-95 transition duration-75">
        <div className="absolute inset-0 flex flex-col justify-center text-cyan-600 left-10">
          <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left">Reservá una hora con el mejor médico</h1>
          <p className="text-lg md:text-2xl mt-2 text-center md:text-left">Especialista para tu caso</p>
          <Link to="/Reserva">
            <button className="mt-4 px-4 py-2 w-40 h-10 bg-cyan-600 text-white font-bold rounded ">
              Pedir cita
            </button>
          </Link>
        </div>
        <picture>
          <source media="(max-width:640px)" />
          <source media="(min-width:641px)" />
          <img
            className="w-full"
            src="https://img.freepik.com/fotos-gratis/medico-surpreso-apontando-os-dedos-para-a-esquerda-e-olhando-para-o-banner-do-logotipo-mostrando-a-propaganda-da-clinica_1258-127424.jpg"
            alt="Articulo principal"
          />
        </picture>
      </div>
      <Content />
      <Reviews />
    </>

  )
}
