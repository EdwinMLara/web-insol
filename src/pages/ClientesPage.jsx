import { useInsoel } from '../Context/InsoelContext'
import Clientes from '../components/Clientes'
import Nosotros from '../components/Nosotros'
function ClientesPage() {
    const {setTxtColor} = useInsoel()
    setTxtColor('black')
  return (
    <div className='mt-20'>
        <Clientes />
    </div>
  )
}

export default ClientesPage