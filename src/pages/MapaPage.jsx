import React from 'react'
import Map from '../Components/Map'
import Footer from '../Components/Footer'

function MapaPage() {
  return (
    <div className='mt-24 bg-gradient-to-t from-tertiary to-white'>
      <h1 className='text-2xl justify-center text-center font-bold'>Mapa de proyectos en el país </h1>
      <p className='justify-normal m-10'>Te damos la bienvenida a nuestra sección de "Proyectos en el país", donde te invitamos a descubrir las diversas ubicaciones dentro de nuestro país donde hemos dejado nuestra marca. Cada región, cada ciudad es un testimonio de nuestro compromiso con la excelencia y la innovación en el ámbito nacional.</p>
      <div className='mb-5'>
        <Map/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default MapaPage