import Clientes from '../Components/Clientes'
import { useInsoel } from '../Context/InsoelContext'

function ClientesPage() {
    const {setTxtColor} = useInsoel()
    setTxtColor('white')
  return (
    <div className='mt-20'>
        <Clientes />
    </div>
  )
}

export default ClientesPage