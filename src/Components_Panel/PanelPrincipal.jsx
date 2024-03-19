import React from 'react'
import LogoAmarilloBlanco from "../img/Logos/AmarilloBlanco.png";

function PanelPrincipal() {
  return (
    <div className='flex justify-center items-center h-screen'>
    <div className="p-8 max-w-screen-lg rounded-lg">
        <div className="text-center">
            <img src={LogoAmarilloBlanco} className="w-[20rem] mx-auto" alt="Logo" />
        </div>
    </div>
</div>

  )
}

export default PanelPrincipal