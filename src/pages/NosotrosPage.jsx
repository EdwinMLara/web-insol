import { useEffect } from 'react';
import { useInsoel } from '../Context/InsoelContext'
import Nosotros from '../Components/Nosotros';
import Footer from '../Components/Footer';

function NosotrosPage() {
  const {setLogoColor, setTxtColor, setProyectColor,setOpacidadColor} = useInsoel();
  setLogoColor('amarilloBlancoNosotros')
  setTxtColor('white')
  setProyectColor('bg-tertiary')
  setOpacidadColor('bg-opacity-75 bg-gradient-to-b from-grey-500 bottom-96')
  useEffect(() => {
    document.title = "Nosotros | INSOEL";
    return () => {
      document.title = "INSOEL";
    };
  }, []);
  return (
    // color del navbar bg-black
    <>
    <div className='min-h-screen'>
        <Nosotros />
    </div>
    <div>
      <Footer/>
    </div>
    
    </>
  )
}

export default NosotrosPage