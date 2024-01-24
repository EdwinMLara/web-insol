import {createContext, useState, useContext, useEffect} from 'react'

const InsoelContext = createContext();

export const useInsoel = () =>{
  const context = useContext (InsoelContext);
  if (!context) {
    throw new Error("useInsoel must be used with, a Insoelprovider");
  }
  return context;
}

export function InsoelProvider({children}) {
  const [logoColor, setLogoColor] = useState('amarilloNegro');
  const [txtColor, setTxtColor] = useState('white')
  const [proyectColor, setProyectColor] = useState('bg-tertiary bg-opacity-75')

  return (
    <InsoelContext.Provider value = {{
      logoColor,
      setLogoColor,
      txtColor,
      setTxtColor,
      proyectColor,
      setProyectColor
    }}>
      {children}
    </InsoelContext.Provider>
  )

}
