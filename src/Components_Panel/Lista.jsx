import React, { useEffect } from 'react'
import { useInsoel } from '../Context/InsoelContext'

function Lista() {
    const {getProyectos, proyectos} = useInsoel()

    useEffect(() => {
        getProyectos();
      }, []);

      if(proyectos.length === 0) return(<h1>No hay Proyectos disponibles</h1>)
  return (
    <div>
        <table className=" w-full  shadow-md rounded-lg bg-white ">
          <thead className="bg-pink-500 text-white">
            <tr>
              <th className="py-2 px-4">Titulo</th>
              <th className="py-2 px-4">Contenido </th>
              <th className="py-2 px-4"> ver mas  </th>
            </tr>
          </thead>
        </table>
        
        <div className="overflow-y-auto h-80">
          <table className=" w-full shadow-md rounded-lg bg-white text-center">
            <tbody className="text-gray-700">
              {proyectos.map((registro) => (
                <tr className="py-2 px-4" key={registro._id}>
                  <th scope="row" className="py-2 px-4">
                    {registro.titulo}
                  </th>
                  <th scope="row" className="py-2 px-4">
                    {registro.contenido}
                  </th>
                  <td className="py-2 px-4 md:px-4 lg:px-6">
                    <div className="flex mx-1 md:mx-3">
                      <Link
                        onClick={() => {
                          console.log(registro._id)
                        }}
                        className="py-2 px-4 "
                      >
                        <BiEdit size={20} className="text-purple-600" />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default Lista