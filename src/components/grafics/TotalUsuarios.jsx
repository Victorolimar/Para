// TotalUsuarios.jsx
import React from "react";
import "./totalUsuarios.scss";

const TotalUsuarios = ({ totalUsers, totalDrivers }) => {
  return (
    <div className="total-users-drivers">
      <p>Total de Clientes: {totalUsers}</p>
      <p>Total de Conductores: {totalDrivers}</p>
    </div>
  );
};

export default TotalUsuarios;
