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

  return (
    <InsoelContext.Provider value = {{
      logoColor,
      setLogoColor
    }}>
      {children}
    </InsoelContext.Provider>
  )

}
