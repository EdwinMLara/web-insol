import React from 'react'

function NosotrosInformacion() {

    const numberOfLines = 20; // Adjust this number as needed

    const verticalLines = Array.from({ length: numberOfLines }).map((_, index) => (
        <React.Fragment key={index}>
          <div className="w-px h-64 bg-blue-500 mx-1 bg-gradient-to-t from-blue-500 to-blue-700 border-dotted border-t-2  animate-pulse"></div>
          <div className="w-0.5 h-80 bg-blue-500 mx-1 bg-gradient-to-t from-blue-500 to-blue-700 border-dotted border-t-2  animate-pulse"></div>
          <div className="w-px h-40 bg-blue-500 mx-1 bg-gradient-to-t from-blue-500 to-blue-700 border-dotted border-t-2  animate-pulse"></div>
          <div className="w-0.5 h-32 bg-blue-500 mx-1 bg-gradient-to-t from-blue-500 to-blue-700 border-dotted border-t-2  animate-pulse"></div>
          <div className="w-px h-48 bg-blue-500 mx-1 bg-gradient-to-t from-blue-500 to-blue-700 border-dotted border-t-2  animate-pulse"></div>
          <div className="w-px h-64 bg-blue-500 mx-1 bg-gradient-to-t from-blue-500 to-blue-700 border-dotted border-t-2  animate-pulse"></div>
          <div className="w-0.5 h-72 bg-blue-500 mx-1 bg-gradient-to-t from-blue-500 to-blue-700 border-dotted border-t-2  animate-pulse"></div>
          <div className="w-0.5 h-24 bg-blue-500 mx-1 bg-gradient-to-t from-blue-500 to-blue-700 border-dotted border-t-2  animate-pulse"></div>
        </React.Fragment>
      ));
  return (
    <div className='text-center mt-24'>
        <div className='text-black p-5'> "En INSOEL, somos arquitectos del progreso, pioneros en el ámbito de la automatización, donde la innovación se une a la eficiencia. Con un compromiso inquebrantable de dar forma al futuro, aprovechamos el poder de la tecnología de vanguardia para automatizar máquinas y programas, trascendiendo límites y redefinir lo que es posible. Nuestra incesante búsqueda de la excelencia permite a las industrias evolucionar, integrando perfectamente la automatización en el latido del progreso.  Donde cada línea de código y cada máquina revoluciona la forma en que funciona el mundo <br /><br />
        INSOEL — Automatización redefinida".
        <div className="flex items-end pt-[2rem]">
        {verticalLines}
      </div>
        </div>
        {/* Vertical Lines with Different Sizes */}
 
    </div>
  )
}

export default NosotrosInformacion