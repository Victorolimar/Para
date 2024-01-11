import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar" >
      <div className="top" style={{backgroundColor:"#772c4a"}} >
        <Link to="/" style={{ textDecoration: "none",  }}>
          <span className="logo" >Para!  </span>
        </Link>

      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" style={{color:'#722f37'}} />
            <span>Estadisiticas</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/clientes" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" style={{color:'#722f37'}} />
              <span>Clientes</span>
            </li>
          </Link>
          <Link to="/operadores" style={{ textDecoration: "none" }}>
            <li>
              <DriveEtaIcon className="icon" style={{color:'#722f37'}} />
              <span>Conductores</span>
            </li>
          </Link>
          <Link to="/viajes" style={{ textDecoration: "none" }}>
          <li>
            <LocalShippingIcon className="icon" style={{color:'#722f37'}} />
            <span>Viajes</span>
          </li>
          </Link>

         
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" style={{color:'#722f37'}} />
            <span>Perfil</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" style={{color:'#722f37'}}/>
            <span>Cerrar sesión</span>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default Sidebar;
