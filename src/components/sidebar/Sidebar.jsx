import React, { useState } from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import { Link, useNavigate } from "react-router-dom";

import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";

const Sidebar = () => {
  
  const [logoutConfirmationOpen, setLogoutConfirmationOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    
    navigate("/login");
  };

  return (
    <div className="sidebar">
      <div className="top" style={{ backgroundColor: "#772c4a" }}>
        <Link to="/Home" style={{ textDecoration: "none" }}>
          <span className="logo">Para! </span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">PRINCIPAL</p>

          <Link to="/Estadistica" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" style={{ color: "#722f37" }} />
              <span>Estadísticas</span>
            </li>
          </Link>


          <p className="title">LISTAS</p>
          <Link to="/clientes" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" style={{ color: "#722f37" }} />
              <span>Clientes</span>
            </li>
          </Link>
          <Link to="/operadores" style={{ textDecoration: "none" }}>
            <li>
              <DriveEtaIcon className="icon" style={{ color: "#722f37" }} />
              <span>Conductores</span>
            </li>
          </Link>
          <Link to="/viajes" style={{ textDecoration: "none" }}>
            <li>
              <LocalShippingIcon className="icon" style={{ color: "#722f37" }} />
              <span>Viajes</span>
            </li>
          </Link>
          <p className="title">USER</p>
          <li onClick={() => setLogoutConfirmationOpen(true)}>
            <ExitToAppIcon className="icon" style={{ color: "#722f37" }} />
            <span>Cerrar sesión</span>
          </li>
        </ul>
      </div>

      {/* Componente de notificación para cerrar sesión */}
      <Dialog open={logoutConfirmationOpen} onClose={() => setLogoutConfirmationOpen(false)}>
        <DialogTitle>Confirmación</DialogTitle>
        <DialogContent>
          ¿Estás seguro de que deseas cerrar sesión?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setLogoutConfirmationOpen(false)}>No</Button>
          <Button onClick={handleLogout}>Sí</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Sidebar;
