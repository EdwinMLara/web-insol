import {motion} from 'framer-motion'

function Animaciones() {
  return (
    <div className="flex items-center justify-center h-screen">
      {/* Utiliza el componente motion para aplicar animaciones */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        className="bg-blue-500 p-8 rounded-md shadow-md"
      >
        <h1 className="text-4xl text-white font-bold">¡Hola, Framer Motion!</h1>
        <p className="text-white">Este es un ejemplo básico de animación.</p>
      </motion.div>
    </div>
  )
}

export default Animaciones