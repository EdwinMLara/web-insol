import React, { useEffect } from "react";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

function PanelControlPage() {
  const { logout, isAuthenticated} = useAuth();
  const navigate = useNavigate()
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/web-insol/panelControl");
    } else {
      navigate("/web-insol/login");
    }
  }, [isAuthenticated]);
  return (
    <div>
      <button
        onClick={(e) => {
          console.log("hola");
          logout();
          console.log(isAuthenticated)
        }}
        className="text-xl"
      >
        Cerrar sesion
      </button>
    </div>
  );
}

export default PanelControlPage;
