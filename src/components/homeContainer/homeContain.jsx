import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homeContain.scss";

const HomeContain = () => {
  return (
    <div className="home">
      
      <div className="homeContainer">
        <div className="welcomeMessage">
          <h2>Bienvenido al sistema de administradores, PARA!</h2>
          <p>Por favor, seleccione en la barra lateral izquierda el apartado que desea ver.</p>
        </div>
      </div>
    </div>
  );
};

export default HomeContain;
