import { useEffect } from 'react';
import { useInsoel } from '../Context/InsoelContext'
import Clientes from '../components/Clientes'
import Nosotros from '../components/Nosotros'
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
    <div className='mt-20'>
        <Nosotros/>
    </div>
  )
}

export default NosotrosPage