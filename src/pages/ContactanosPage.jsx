import { useEffect } from "react";
import Formulario from "../components/Formulario";
import { useInsoel } from "../Context/InsoelContext";
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
    <div className="mt-20">
      <Formulario />
    </div>
  );
}

export default ContactanosPage;
