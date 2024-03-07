import React from 'react'
import LogoAmarilloBlanco from "../img/Logos/AmarilloBlanco.png";

function Registrarse() {
  return (
    <div className='bg-black h-screen flex justify-center items-center'>
      <div className="bg-gradient-to-b from-secondary to-tertiary p-8 rounded shadow-md w-80">
        <div className='text-center'> 
        <img src={LogoAmarilloBlanco} className=" w-[14rem] mx-auto" />
        </div>  
        <h2 className="text-xl font-semibold mb-4">Registrarse</h2> 
        <form>
            <div className="mb-4">
                <label for="nombre" className="block text-sm font-medium">Nombre</label>
                <input type="nombre" id="nombre" name="nombre" className="mt-1 p-2 w-full border rounded-md" placeholder="Tu nombre completo"/>
            </div>
            <div className="mb-4">
                <label for="email" className="block text-sm font-medium">Correo electrónico</label>
                <input type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded-md" placeholder="Tu correo electrónico"/>
            </div>
            <div className="mb-4">
                <label for="password" className="block text-sm font-medium ">Contraseña</label>
                <input type="password" id="password" name="password" className="mt-1 p-2 w-full border rounded-md" placeholder="Tu contraseña"/>
            </div>
            <div className="mb-4">
                <button type="submit" className="bg-primary text-black py-2 px-4 rounded-md hover:bg-darkPrimary hover:text-white">Iniciar sesión</button>
            </div>
        </form>
    </div>
    </div>
  )
}

export default Registrarse