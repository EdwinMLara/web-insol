import React, { useEffect } from 'react'
import LogoAmarilloBlanco from "../img/Logos/AmarilloBlanco.png";
import {useForm} from 'react-hook-form'
import {useNavigate, useParams} from 'react-router-dom'
import { useAuth } from '../Context/AuthContext';

function Registrarse() {
  const {register,handleSubmit, formState: {errors}} = useForm()

  const {signup, isAuthenticated, errors:RegisterErrors} = useAuth()

  const navigate = useNavigate()
  const params = useParams()

  /** 
  useEffect(()=>{
    if(isAuthenticated) navigate("/web-insol/panelControl")
  }, [isAuthenticated])
*/
const onSubmit = handleSubmit( async (values) =>{
  signup(values)
})

  return (
    <div className='bg-black h-screen flex justify-center items-center'>
      <div className="bg-gradient-to-b from-secondary to-tertiary p-8 rounded shadow-md w-80">
        <div className='text-center'> 
        <img src={LogoAmarilloBlanco} className=" w-[14rem] mx-auto" />
        </div>  
        <h2 className="text-xl font-semibold mb-4">Registrar nuevo usuario</h2> 
        <form onSubmit={onSubmit}>
            <div className="mb-4">
                <label for="nombre" className="block text-sm font-medium">Nombre</label>
                <input type="nombre" {...register("nombre", {required: true})} id="nombre" name="nombre" class="mt-1 p-2 w-full border rounded-md" placeholder="Tu nombre completo"/>
            </div>
            <div className="mb-4">
                <label for="email" class="block text-sm font-medium">Correo electrónico</label>
                <input type="email" {...register("correo", {required: true})} id="correo" name="correo" className="mt-1 p-2 w-full border rounded-md" placeholder="Tu correo electrónico"/>
            </div>
            <div className="mb-4">
                <label for="password" class="block text-sm font-medium ">Contraseña</label>
                <input type="password" {...register("password", {required: true})} id="password" name="password" className="mt-1 p-2 w-full border rounded-md" placeholder="Tu contraseña"/>
            </div>
            <div className="flex justify-end mb-4">
                <button type="submit" className="bg-primary text-black py-2 px-4 rounded-md hover:bg-darkPrimary hover:text-white">Iniciar sesión</button>
            </div>
        </form>
    </div>
    </div>
  )
}

export default Registrarse