import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import detalles from "../img/Productos/1.jpg";

const ProductDetail = () => {
  return (
    <div className="min-h-screen mt-24 m-10 grid grid-cols-1  gap-8">
      <div className="flex items-center justify-center">
        <img src={detalles} alt="detalles" className="md:w-[50%] h-auto sm:w-full" />
      </div>
      <a
          href={"https://chat.whatsapp.com/HXk39RhC5XiHfsfO7IAt2i"}
          className="flex items-center justify-center bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 "
        >
          <FaWhatsapp className='mr-2 text-2xl'/> 
          Contáctanos por WhatsApp
        </a>
    </div>
  );
};

export default ProductDetail;
