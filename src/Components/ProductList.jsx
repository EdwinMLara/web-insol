import React from "react";
import producto from "../img/Productos/producto1.jpg";

const ProductList = ({ products, onSelectProduct }) => {
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-5 md:ml-12 md:mt-5">
      {products.map((product) => (
        <div
          key={product.id}
          className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 md:z-10"
        >
          <a href="#">
            <img className="rounded-t-lg" src={product.image} alt={product.name} />
          </a>

          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {product.name}
              </h5>
            </a>
            <p className="dark:text-white" >
              {product.descripcion}
            </p>

          </div>
          <div className="flex justify-end p-5">
          <a
              href={"/web-insol/tienda/DetalleProducto"}
              //href={`/web-insol/tienda/${product.id}`}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-blacks bg-primary rounded-lg hover:bg-darkPrimary focus:ring-4 focus:outline-none justify-end"
            >
              Ver productos
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
