import { useEffect } from "react";
import { useInsoel } from "../Context/InsoelContext";
import Formulario from "../Components/Formulario";
import Footer from "../Components/Footer";
function ContactanosPage() {
  const { setLogoColor, setTxtColor, setProyectColor } = useInsoel();
  setLogoColor("amarilloBlanco");
  setTxtColor("white");
  setProyectColor('bg-tertiary')
  useEffect(() => {
    document.title = "Contáctanos | INSOEL";
    return () => {
      document.title = "INSOEL";
    };
  }, []);
  return (
    <>
    <div className="min-h-screen z-10">
      <Formulario />
    </div>
    <div>
      <Footer/>
    </div>
    </>

  );
}

export default ContactanosPage;
