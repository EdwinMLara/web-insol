import React from 'react'
import Img2 from "../../img/Proyectos/Banco_Uat/01.jpg";
import Img3 from "../../img/Proyectos/Banco_Uat/02.jpg";
import Img4 from "../../img/Proyectos/Banco_Uat/12.jpg";

function ApkLectoraQrPage() {
  return (
    <div className='bg-gray-200 '><div class="grid grid-cols-3 ">
    
    <div class="relative">
      <img src={Img4} alt="Imagen 1" class="w-[32rem] h-[32rem] rounded"/>
      <div class="absolute top-0 left-0  bg-black text-white">Caption 1</div>
    </div>

   
    <div class="relative">
      <img src={Img2} alt="Imagen 2" class="w-[32rem] h-[32rem] rounded"/>
      <div class="absolute top-0 left-0  bg-black text-white">Caption 2</div>
    </div>

   
    <div class="relative">
      <img src={Img3} alt="Imagen 3" class="w-[32rem] h-[32rem] rounded"/>
      <div class="absolute top-0 left-0  bg-black text-white">Caption 3</div>
    </div>

    

  </div></div>
  )
}

export default ApkLectoraQrPage