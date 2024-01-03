import React, { useState, useEffect } from "react";

function NosotrosInformacion() {
  const [numberOfLines, setNumberOfLines] = useState(9);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      // Ajusta el número de líneas según el ancho de la pantalla
      if (screenWidth < 600) {
        setNumberOfLines(3);
      } else if (screenWidth < 800) {
        setNumberOfLines(4);
      } else {
        setNumberOfLines(9);
      }
    };

    // Agrega un event listener para el cambio de tamaño de la ventana
    window.addEventListener("resize", handleResize);

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Asegúrate de ejecutar el efecto solo una vez al montar el componente

  //const numberOfLines = 9; // Adjust this number as needed

  const verticalLines = Array.from({ length: numberOfLines }).map(
    (_, index) => (
      <React.Fragment key={index}>
        <div className="w-px h-64 bg-tertiary mx-1 bg-gradient-to-t from-black via-quaternary to-secondary border-dotted border-t-2 border-tertiary "></div>
        <div className="w-px h-80 bg-tertiary mx-1 bg-gradient-to-t from-black via-quaternary to-secondary border-dotted border-t-2 border-secondary "></div>
        <div className="w-px h-40 bg-tertiary mx-1 bg-gradient-to-t from-black via-quaternary to-secondary border-dotted border-t-2 border-tertiary "></div>
        <div className="w-px h-32 bg-tertiary mx-1 bg-gradient-to-t from-black via-quaternary to-secondary border-dotted border-t-2 border-secondary "></div>
        <div className="w-px h-48 bg-tertiary mx-1 bg-gradient-to-t from-black via-quaternary to-secondary border-dotted border-t-2 border-tertiary "></div>
        <div className="w-px h-64 bg-tertiary mx-1 bg-gradient-to-t from-black via-quaternary to-secondary border-dotted border-t-2 border-secondary "></div>
        <div className="w-px h-72 bg-tertiary mx-1 bg-gradient-to-t from-black via-quaternary to-secondary border-dotted border-t-2 border-tertiary "></div>
        <div className="w-px h-24 bg-tertiary mx-1 bg-gradient-to-t from-black via-quaternary to-secondary border-dotted border-t-2 border-secondary "></div>
        <div className="w-px h-64 bg-tertiary mx-1 bg-gradient-to-t from-black via-quaternary to-secondary border-dotted border-t-2 border-tertiary "></div>
        <div className="w-px h-80 bg-tertiary mx-1 bg-gradient-to-t from-black via-quaternary to-secondary border-dotted border-t-2 border-secondary "></div>
        <div className="w-px h-40 bg-tertiary mx-1 bg-gradient-to-t from-black via-quaternary to-secondary border-dotted border-t-2 border-tertiary "></div>
        <div className="w-px h-32 bg-tertiary mx-1 bg-gradient-to-t from-black via-quaternary to-secondary border-dotted border-t-2 border-secondary "></div>
        <div className="w-px h-48 bg-tertiary mx-1 bg-gradient-to-t from-black via-quaternary to-secondary border-dotted border-t-2 border-tertiary "></div>
        <div className="w-px h-64 bg-tertiary mx-1 bg-gradient-to-t from-black via-quaternary to-secondary border-dotted border-t-2 border-secondary "></div>
        <div className="w-px h-72 bg-tertiary mx-1 bg-gradient-to-t from-black via-quaternary to-secondary border-dotted border-t-2 border-tertiary "></div>
        <div className="w-px h-24 bg-tertiary mx-1 bg-gradient-to-t from-black via-quaternary to-secondary border-dotted border-t-2 border-secondary  "></div>
      </React.Fragment>
    )
  );
  // animate-pulse
  return (
    <div className="text-center mt-24">
      <div className="text-white pt-5 p-5 z-10 relative">
        {" "}
        "En INSOEL, somos arquitectos del progreso, pioneros en el ámbito de la
        automatización, donde la innovación se une a la eficiencia. Con un
        compromiso inquebrantable de dar forma al futuro, aprovechamos el poder
        de la tecnología de vanguardia para automatizar máquinas y programas,
        trascendiendo límites y redefinir lo que es posible. Nuestra incesante
        búsqueda de la excelencia permite a las industrias evolucionar,
        integrando perfectamente la automatización en el latido del progreso.
        Donde cada línea de código y cada máquina revoluciona la forma en que
        funciona el mundo <br />
        <br />
        INSOEL — Automatización redefinida".
        <div className="overflow-x-auto">
          <div className="flex items-end pt-[2rem]">{verticalLines}</div>
        </div>
      </div>
      {/* Vertical Lines with Different Sizes */}
    </div>
  );
}

export default NosotrosInformacion;
