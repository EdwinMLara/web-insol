import React, { useEffect } from "react";
import LogoAmarilloBlanco from "../img/Logos/AmarilloBlanco.png";
import { useAuth } from "../Context/AuthContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signin, errors: signinErrors, isAuthenticated} = useAuth();
  const navigate = useNavigate()

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  useEffect(() => {
    if (isAuthenticated) {
      console.log("llegue estoy autenticado")
      navigate("/web-insol/panelControl");
    } else {
      navigate("/web-insol/login");
    }
  }, [isAuthenticated]);

  return (
    <div className="bg-black h-screen flex justify-center items-center">
      <div className="bg-gradient-to-b from-secondary to-tertiary p-8 rounded shadow-md w-80">
        <div className="text-center">
          <img src={LogoAmarilloBlanco} className=" w-[14rem] mx-auto" />
        </div>
        <h2 className="text-xl font-semibold mb-4"></h2>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label  className="block text-sm font-medium">
              Correo electrónico
            </label>
            <input
              type="email"
              {...register("correo", { required: true })}
              id="correo"
              name="correo"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Tu correo electrónico"
            />
            {errors.correo && (<p className="text-red-500">El correo es requerido</p>)}
          </div>
          <div className="mb-4">
            <label  className="block text-sm font-medium ">
              Contraseña
            </label>
            <input
              type="password"
              {...register("password", { required: true })}
              id="password"
              name="password"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Tu contraseña"
            />
            {errors.password && (<p className="text-red-500">La contraseña es requerida</p>)}
          </div>
          <div className="flex justify-end mb-4 ">
            <button
              type="submit"
              class="bg-primary text-black py-2 px-4 rounded-md hover:bg-darkPrimary hover:text-white ml-auto"
            >
              Iniciar sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
