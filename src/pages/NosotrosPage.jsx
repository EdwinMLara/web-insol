import { useEffect } from 'react';
import { useInsoel } from '../Context/InsoelContext'
import Nosotros from '../Components/Nosotros';
import Footer from '../Components/Footer';

function NosotrosPage() {
  const {setLogoColor, setTxtColor} = useInsoel();
  setLogoColor('amarilloBlanco')
  setTxtColor('white')
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