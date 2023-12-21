import { useEffect } from "react";
import imgInvernadero from "../img/Proyectos/49.png";
import { useInsoel } from "../Context/InsoelContext";
import logo from '../img/Logos/VerdeBlanco.png'

function InvernaderoPage() {
  const{setLogoColor, setTxtColor} = useInsoel()
  setLogoColor('verdeBlanco')
  setTxtColor('white')
  useEffect(() => {
    document.title = "INVERNADERO | INSOEL";
    return () => {
      document.title = "INSOEL";
    };
  }, []);
  return (
    <div className="bg-black min-h-screen  flex flex-col">
      <div className="mb-20">
      </div>
      <div>
        <img
          src={imgInvernadero}
          alt="Automatización de invernaderos"
          className="w-screen h-[80%] rounded-lg shadow-md p-5"
        />
      </div>
      <div className="text-white m-5">
        <h2 className="text-2xl">6 Diciembre, 2023</h2>
        <h1 className="text-4xl font-semibold">
          Automatización de invernaderos
        </h1>
        <br />
        <div className="md:columns-2 text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem quibusdam architecto tempore corrupti placeat amet
            qui in nesciunt ipsa, recusandae facilis culpa quidem delectus quod
            commodi perspiciatis itaque iste debitis.
          </p>
          <br />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat quis quo adipisci cumque ipsum, possimus cum accusantium. Rerum, numquam, sapiente molestiae quas debitis quidem nulla aliquid, voluptatum voluptatem ut deserunt!</p>
          <br />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum possimus totam nulla inventore libero id eaque nisi earum iusto maxime! Quaerat, laudantium? Neque ad deleniti velit dolorem vero, tempore quos!</p>
        </div>

        
        <div className="mt-10 flex justify-center items-center">
            <img className="h-8" src={logo} alt="logoInsoel" />
        </div>
      </div>
      
    </div>
  );
}

export default InvernaderoPage;
