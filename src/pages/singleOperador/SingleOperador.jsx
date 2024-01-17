import "./operador.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import { useParams, useLocation } from "react-router-dom";


const SingleOperador = () => {
  const { state } = useLocation();

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Editar</div>
            <h1 className="title">Información</h1>
            <div className="item">
              <img
                src={state?.foto}
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{state?.nombre}</h1>
                <div className="detailItem">
                  <span className="itemKey">Correo :</span>
                  <span className="itemValue">{state?.correo}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Celular:</span>
                  <span className="itemValue">{state?.numero}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Direccion:</span>
                  <span className="itemValue">
                  {state?.direccion}
                  </span>
                </div>
                
              </div>
            </div>
          </div>
          <div className="derecha">
          <div id="miSeccion" class="singleContainer">
          <h1 className="title">Datos del Vehiculo</h1>
          <div className="details">
                <h1 className="itemTitle">Detalle</h1>
                <div className="detailItem">
                  <span className="itemKey">Placa:</span>
                  <span className="itemValue">{state?.placa}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Color:</span>
                  <span className="itemValue">{state?.color}</span>
                </div>
           </div>
           <DriveEtaIcon className="icon" style={{color:'#722f37', fontSize: 40}}  />
            {/*<Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />*/}
          </div>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default SingleOperador;
