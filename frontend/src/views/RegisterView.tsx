import { useForm } from "react-hook-form"
import { UserRegisterForm } from "../types/types"
import ErrorMessage from "../components/ErrorMessage"
import api from "../lib/axios"
import { isAxiosError } from "axios"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

export default function RegisterView() {

    const navigate=useNavigate()

       const initialValues: UserRegisterForm = {
        name: "",
        last_name: "",
        email: "",
        email_confirmation: "",
        password: "",
        password_confirmation: ""
    }

    const { register, handleSubmit, watch, formState: { errors } } = useForm({ defaultValues: initialValues })

    const email = watch("email")
    const password = watch("password")

    const handleForm = async (formData: UserRegisterForm) => {

        try {

            const {data}=await api.post("/auth/medic-register",formData)
            navigate("/auth/login")
            toast.success(data)
        } catch (error) {
            if (isAxiosError(error) && error.response) {
                toast.error(error.response.data.error)
              }
        }

    }






    return (
        <form
            onSubmit={handleSubmit(handleForm)}
            className="mt-10">
            <div className="flex items-center justify-center min-h-screen bg-gray-50">
                <div className="w-full max-w-lg bg-white px-8 py-10 mt-20 rounded-3xl border-2 border-gray-100">
                    {/* Encabezado centrado */}
                    <h2 className="text-center text-2xl font-semibold text-gray-900">Registrarse</h2>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-8">
                        <div className="sm:col-span-4">
                            <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                                Nombre
                            </label>
                            <div className="mt-2">
                                <input
                                    id="name"
                                    type="text"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-600 sm:text-sm/6"
                                    {
                                    ...register("name", {
                                        required: "Ingresar nombre"
                                    })
                                    }

                                />
                                {
                                    errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>
                                }
                            </div>
                        </div>


                        <div className="sm:col-span-4">
                            <label htmlFor="last_name" className="block text-sm/6 font-medium text-gray-900">
                                Apellido
                            </label>
                            <div className="mt-2">
                                <input
                                    id="last_name"
                                    type="text"
                                    autoComplete="family-name"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-600 sm:text-sm/6"
                                    {
                                    ...register("last_name", {
                                        required: "Ingresar apellido"
                                    })
                                    }

                                />
                                {
                                    errors.last_name && <ErrorMessage>{errors.last_name.message}</ErrorMessage>
                                }
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                Email
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    type="email"
                                    autoComplete="email"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-600 sm:text-sm/6"
                                    {
                                    ...register("email", {
                                        required: "El email es obligatorio",
                                        pattern: {
                                            value: /\S+@\S+\.\S+/,
                                            message: "Email inválido",
                                        }
                                    })
                                    }
                                
                                />
                                {
                                    errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>
                                }
                            </div>
                            
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                Confirmar Email
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email_confirmation"
                                    type="email"
                                    autoComplete="email"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-600 sm:text-sm/6"
                                    {
                                        ...register("email_confirmation", {
                                            required: "Es necesario confirmar el email",
                                            validate:(value)=>value===email || "El email no coincide"
                                                               
                                            })
                                        }
                              
                              />
                                {
                                    errors.email_confirmation && <ErrorMessage>{errors.email_confirmation.message}</ErrorMessage>
                                }
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                Contraseña
                            </label>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    type="password"
                                    autoComplete="password"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-600 sm:text-sm/6"
                                    {
                                        ...register("password", {
                                            required: "Ingresar contraseña",
                                            minLength:{
                                                value:6,
                                                message:"La contraseña debe contener al menos 6 caracteres"
                                            }})
                                        }
                               
                               />
                               {
                                    errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>
                                }
                            </div>
                        </div>
                        <div className="sm:col-span-4">
                            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                Confirmar Contraseña
                            </label>
                            <div className="mt-2">
                                <input
                                    id="password_confirmation"
                                    type="password"
                                    autoComplete="password"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-600 sm:text-sm/6"
                                 {
                                        ...register("password_confirmation", {
                                            required: "Confirmar la contraseña",
                                            validate:(value)=>value===password || "La contraseña no coincide"
                                                               
                                            })
                                        }/>
                                        {
                                    errors.password_confirmation && <ErrorMessage>{errors.password_confirmation.message}</ErrorMessage>
                                }
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="country" className="block text-sm/6 font-medium text-gray-900">
                                Country
                            </label>
                            <div className="mt-2 grid grid-cols-1">
                                <select
                                    id="country"
                                    name="country"
                                    autoComplete="country-name"
                                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-600 sm:text-sm/6"
                                >
                                    <option>United States</option>
                                    <option>Canada</option>
                                    <option>Mexico</option>
                                </select>
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="city" className="block text-sm/6 font-medium text-gray-900">
                                City
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

                        <div className="sm:col-span-4 sm:col-start-1">
                            <label htmlFor="region" className="block text-sm/6 font-medium text-gray-900">
                                State / Province
                            </label>
                            <div className="mt-2">
                                <input
                                    id="region"
                                    name="region"
                                    type="text"
                                    autoComplete="address-level1"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="postal-code" className="block text-sm/6 font-medium text-gray-900">
                                ZIP / Postal code
                            </label>
                            <div className="mt-2">
                                <input
                                    id="postal-code"
                                    name="postal-code"
                                    type="text"
                                    autoComplete="postal-code"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-600 sm:text-sm/6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-8">
                            <label className="block text-sm/6 font-medium text-gray-900">Fecha de Nacimiento</label>
                            <div className="mt-2 flex space-x-4">
                                <input
                                    id="anio"
                                    name="anio"
                                    type="number"
                                    placeholder="YYYY"
                                    className="w-1/3 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-600 sm:text-sm/6"
                                    min="1900" max="2100"
                                />
                                <input
                                    id="mes"
                                    name="mes"
                                    type="number"
                                    placeholder="MM"
                                    className="w-1/3 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                    min="1" max="12"
                                />
                                <input
                                    id="dia"
                                    name="dia"
                                    type="number"
                                    placeholder="DD"
                                    className="w-1/3 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                    min="1" max="31"
                                />
                            </div>
                        </div>


                        <div className="sm:col-span-8">
                            <label className="block text-sm/6 font-medium text-gray-900">Género</label>
                            <div className="mt-2 flex items-center space-x-6">
                                <label className="inline-flex items-center">
                                    <input type="checkbox" id="masculino" name="genero" value="masculino"
                                        className="h-4 w-4 rounded text-cyan-600 focus:ring-cyan-600" />
                                    <span className="ml-2 text-sm text-gray-600">Masculino</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input type="checkbox" id="femenino" name="genero" value="femenino"
                                        className="h-4 w-4 rounded text-cyan-600 focus:ring-cyan-600" />
                                    <span className="ml-2 text-sm text-gray-600">Femenino</span>
                                </label>
                            </div>
                            <div className="mt-6 text-center gap-x-6">

                                <input
                                    value="Registarse"
                                    type="submit"
                                    className=" text-center cursor-pointer rounded-md bg-cyan-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
                                />

                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </form>
    )
}
