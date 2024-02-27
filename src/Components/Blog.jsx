import React from "react";

function Blog({ noticia }) {
  return (
    <div className="">
  <div className="bg-opacity-25 bg-darkPrimary  shadow-xl rounded-md p-4 relative">
    <img
      src={noticia.imagen}
      alt={noticia.titulo}
      className="w-full h-40 object-cover rounded-md mb-4"
    />
    <h2 className="text-xl text-justify text-secondary font-semibold mb-2">
      {noticia.titulo}
    </h2>
    <p className="text-gray-850 mb-4">{noticia.descripcion}</p>
    <div className="absolute bottom-4 right-4">
      <a href={noticia.enlace} className="text-secondary hover:text-black">
        Leer más
      </a>
    </div>
  </div>
</div>

  );
}

export default Blog;
