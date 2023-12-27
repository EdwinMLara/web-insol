import { useEffect } from "react";
import { useInsoel } from "../../Context/InsoelContext";
import imgBiorreactor from '../../img/Proyectos/49.png'
import logo from '../../img/Logos/AmarilloNegro.png'

function BiorreactorPage() {
  const { setLogoColor, setTxtColor } = useInsoel();
  setLogoColor("amarilloNegro");
  setTxtColor("black");
  useEffect(() => {
    document.title = "BIORREACTOR | INSOEL";
    return () => {
      document.title = "INSOEL";
    };
  }, []);
  return (
    <div className="bg-bajo min-h-screen  flex flex-col">
      <div className="mb-20">
      </div>
      <div>
        <img
          src={imgBiorreactor}
          alt="Biorreactor"
          className="w-full max-h-[80%] md:max-h-full rounded-lg shadow-md p-5"
        />
      </div>
      <div className="text-black m-5">
        <h2 className="text-2xl">14 Diciembre, 2023</h2>
        <h1 className="text-4xl font-semibold">
          Biorreactor
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
  )
}

export default BiorreactorPage;
