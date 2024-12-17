import React from 'react';
import { Link } from 'react-router-dom';

export const FormDoctor = () => {
  return (
    <form>
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="w-full max-w-lg bg-white px-8 py-10 mt-20 rounded-3xl border-2 border-gray-100">
          <h2 className="text-center text-2xl font-semibold text-gray-900">Registrarse</h2>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-8">
            <div className="sm:col-span-4">
              <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                Nombre
              </label>
              <div className="mt-2">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="sm:col-span-4">
              <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">
               Apellidos
              </label>
              <div className="mt-2">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email 
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="sm:col-span-4">
              <label htmlFor="city" className="block text-sm/6 font-medium text-gray-900">
                Ciudad
              </label>
              <div className="mt-2">
                <input
                  id="city"
                  name="city"
                  type="text"
                  autoComplete="address-level2"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="sm:col-span-8 grid grid-cols-4 gap-x-4">
              <div className="col-span-1">
                <label htmlFor="country-code" className="block text-sm/6 font-medium text-gray-900">
                  Codigo de Pais
                </label>
                <div className="mt-2">
                  <input
                    id="country-code"
                    name="country-code"
                    type="text"
                    placeholder="+1"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-600 sm:text-sm/6"
                  />
                </div>
              </div>
              <div className="col-span-3">
                <label htmlFor="phone-number" className="block text-sm/6 font-medium text-gray-900">
                  Numero Telefonico
                </label>
                <div className="mt-2">
                  <input
                    id="phone-number"
                    name="phone-number"
                    type="text"
                    placeholder="123-456-7890"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-600 sm:text-sm/6"
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-8">
              <label htmlFor="file" className="block text-sm/6 font-medium text-gray-900">
                Seleccionar archivo
              </label>
              <div className="mt-2">
                <input
                  id="file"
                  name="file"
                  type="file"
                  className="block w-full rounded-md px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-600 sm:text-sm/6" />
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6 sm:col-span-8">
              <Link to="/Login">
                <button type="button" className="text-sm/6 font-semibold text-gray-900">
                  Cancelar
                </button>
              </Link>
              <button
                type="submit"
                className="rounded-md bg-cyan-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600">Guardar</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
