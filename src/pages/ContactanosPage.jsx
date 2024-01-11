import { useEffect } from "react";
import { useInsoel } from "../Context/InsoelContext";
import Formulario from "../Components/Formulario";
import Footer from "../Components/Footer";
function ContactanosPage() {
  const { setLogoColor, setTxtColor } = useInsoel();
  setLogoColor("amarilloBlanco");
  setTxtColor("white");
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
