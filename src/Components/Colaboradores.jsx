import React, { useState } from "react";

import David from "../img/Colaboradores/37083.jpg";

function Colaboradores() {
  const [showH1, setShowH1] = useState(true);
  const [showH2, setShowH2] = useState(true);
  const [showH3, setShowH3] = useState(true);
  const [showH4, setShowH4] = useState(true);

  return (
    <div>
      <h1 className="text-white text-center text-2xl mt-14 ">COLABORADORES</h1>
      <div className="sm:flex sm:space-x-40 mt-24 sm:flex-col items-center">
        <div className="sm:flex sm:space-x-24">
          {/* Persona 1 */}
          <div className="flex flex-col items-center group mb-8 sm:mb-0 relative">
            <div className="relative flex flex-col items-center">
              <img
                src={David}
                alt="Foto de la persona 1"
                className="w-[14rem] h-[14rem] object-cover outline outline-offset-2 outline-white rounded-lg mb-4 hover:outline-quaternary"
                onMouseEnter={() => setShowH2(false)}
                onMouseLeave={() => setShowH2(true)}
              />
              <div className="hidden group-hover:block sm:absolute top-1/2 left-full transform -translate-y-2/2   sm:-translate-y-1/2 sm:m-5 p-4 shadow-lg z-10 w-96 sm:w-[32rem] sm:h-[28rem] text-black py-3 px-8 bottom-16 rounded-lg bg-gradient-to-t from-quaternary to-primary mt-2 border-2 border-black/50 ">
                <h2 className="text-3xl text-center mb-2 font-bold"></h2>
                <h2 className="text-xl mb-2"></h2>
                <p className="text-lg text-justify leading-relaxed indent-8"></p>
              </div>

              {showH2 && (
                <h1 className="text-center text-white relative hidden sm:block">
                  ...
                </h1>
              )}
            </div>
          </div>

          {/* Persona 2 */}
          <div className="flex flex-col items-center group mb-8 sm:mb-0">
            <div className="relative flex flex-col items-center">
              <img
                src={David}
                alt="Foto de la persona 2"
                className="w-[14rem] h-[14rem] object-cover outline outline-offset-2 outline-white rounded-lg mb-4 hover:outline-quaternary"
                onMouseEnter={() => setShowH1(false)}
                onMouseLeave={() => setShowH1(true)}
              />
              <div className="hidden group-hover:block sm:absolute top-1/2 left-full transform -translate-y-2/2   sm:-translate-y-1/2 sm:m-5 p-4 shadow-lg z-10 w-96 sm:w-[28rem] sm:h-[28rem] text-black py-3 px-8 bottom-16 rounded-lg bg-gradient-to-t from-quaternary to-primary mt-2 border-2 border-black/50">
                <h2 className="text-3xl text-center mb-2 font-bold"></h2>
                <h2 className="text-xl mb-2"></h2>
                <p className="text-lg text-justify leading-relaxed indent-8"></p>
              </div>
              {showH1 && (
                <h1 className="text-center text-white relative hidden sm:block">
                  ...
                </h1>
              )}
            </div>
          </div>

          {/* Persona 3 */}
          <div className="flex flex-col items-center group mb-8 sm:mb-0">
            <div className="relative flex flex-col items-center">
              <img
                src={David}
                alt="Foto de la persona 3"
                className="w-[14rem] h-[14rem] object-cover outline outline-offset-2 outline-white rounded-lg mb-4 hover:outline-quaternary"
                onMouseEnter={() => setShowH3(false)}
                onMouseLeave={() => setShowH3(true)}
              />
              <div className="hidden group-hover:block sm:absolute top-1/2 right-full transform -translate-y-2/2   sm:-translate-y-1/2 sm:m-5 p-4 shadow-lg z-10 w-96 sm:w-[32rem] sm:h-[28rem] text-black py-3 px-8 bottom-16 rounded-lg bg-gradient-to-t from-quaternary to-primary mt-2 border-2 border-black/50">
                <h2 className="text-3xl text-center mb-2 font-bold"></h2>
                <h2 className="text-xl mb-2"></h2>
                <p className="text-lg text-justify leading-relaxed indent-8"></p>
              </div>
              {showH3 && (
                <h1 className="text-center text-white relative hidden sm:block">
                  ...
                </h1>
              )}
            </div>
          </div>

          {/* Persona 4 */}
          <div className="flex flex-col items-center group mb-8 sm:mb-0">
            <div className="relative flex flex-col items-center">
              <img
                src={David}
                alt="Foto de la persona 3"
                className="w-[14rem] h-[14rem] object-cover outline outline-offset-2 outline-white rounded-lg mb-4 hover:outline-quaternary"
                onMouseEnter={() => setShowH4(false)}
                onMouseLeave={() => setShowH4(true)}
              />
              <div className="hidden group-hover:block sm:absolute top-1/2 right-full transform -translate-y-2/2   sm:-translate-y-1/2 sm:m-5 p-4 shadow-lg z-10 w-96 sm:w-[32rem] sm:h-[28rem] text-black py-3 px-8 bottom-16 rounded-lg bg-gradient-to-t from-quaternary to-primary mt-2 border-2 border-black/50">
                <h2 className="text-3xl text-center mb-2 font-bold"></h2>
                <h2 className="text-xl mb-2"></h2>
                <p className="text-lg text-justify leading-relaxed indent-8"></p>
              </div>
              {showH4 && (
                <h1 className="text-center text-white relative hidden sm:block">
                  ...
                </h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Colaboradores;
