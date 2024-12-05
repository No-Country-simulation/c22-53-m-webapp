import { useForm } from 'react-hook-form';
import { Link,useNavigate} from 'react-router-dom';
import { UserLoginForm } from '../types/types';
import ErrorMessage from '../components/ErrorMessage';
import api from '../lib/axios';
import { isAxiosError } from 'axios';
import { toast } from 'react-toastify';

export default function LoginView() {

    const navigate=useNavigate()
    const initialValues: UserLoginForm = {
        email: "",
        password: ""
    }

    const { register, handleSubmit, formState: { errors } } = useForm<UserLoginForm>({ defaultValues: initialValues })


    const handleForm = async(formData: UserLoginForm) => {
        
        try {
            const {data}=await api.post("/auth/login",formData)
            localStorage.setItem("auth_token",data)
            toast.success("Logueado con éxito")
            navigate("/dashboard")
            
        } catch (error) {
            if (isAxiosError(error) && error.response) {
              toast.error(error.response.data.error)
            }
        }

    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 pt-20 ">
            <form
            onSubmit={handleSubmit(handleForm)}
             className="bg-white px-5 py-10 rounded-3xl border-2 border-gray-100 transform scale-10"
             >

                <h1
                    className="text-xl font-semibold">
                    Acceder a Mi Cuenta
                </h1>
                <div className="mt-6">
                    <div>
                        <label
                            className="text-sm font-medium"
                        >Email</label>
                        <input
                            type="text"
                            id="email"
                            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                            placeholder="Correo electrónico"
                            {
                                ...register("email",{
                                    required:"El email es obligatorio",
                                    pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message: "Email inválido",
                                    }
                                })
                            }

                        />
                        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage> }
                    </div>
                </div>
                <div className="mt-4">
                    <label className="text-sm font-medium">Contraseña</label>
                    <input
                        className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                        placeholder="Contraseña"
                        type="password" 
                        {
                            ...register("password",{
                                required:"El password es obligatorio"
                            })
                        }
                        
                        />
                         {errors.password && <ErrorMessage >{errors.password.message}</ErrorMessage> }
                </div>
                <div className="mt-6 flex justify-between items-center">
                    <div>
                        <input type="checkbox" id="remember" />
                        <label className="ml-2 font-medium text-sm" htmlFor="remember">
                            Guardar Usuario
                        </label>
                    </div>
                    <button
                        className="ml-2 font-medium text-sm text-cyan-600">
                        He olvidado mi contraseña
                    </button>
                </div>
                <div className="mt-6 flex flex-col gap-y-4">
                    <input
                        type="submit"
                        value="Iniciar Sesión"
                        className="cursor-pointer text-center active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-cyan-600 text-white text-sm font-bold" 
                      
                        
                        />



                    <div className="mt-6 flex justify-center items-center">
                        <p className="font-medium text-sm">¿Todavía no pertenece?</p>
                        <Link to="/auth/register">
                            <button className="text-cyan-600 text-sm font-medium ml-2">
                                Quiero registrarme
                            </button>
                        </Link>

                    </div>
                </div>
            </form>
        </div>
    );
};