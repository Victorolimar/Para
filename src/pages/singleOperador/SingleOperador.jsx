import "./operador.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import { useParams, useLocation } from "react-router-dom";
import Datatable from "../../components/datatableViajes/Datatable"
import "./operador.scss";


const SingleOperador = () => {
  const { state } = useLocation();

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            
            <h1 className="title">Información</h1>
            <div className="item">
              <img
                src={state?.foto}
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{state?.nombre}</h1>
                <h1 className="itemTitle">{state?.apellidos}</h1>
                
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
                <div className="detailItem">
                  <span className="itemKey">Número de teléfono:</span>
                  <span className="itemValue">
                  {state?.numero}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Calificación:</span>
                  <span className="itemValue">
                  {state?.calificacion}
                  </span>
                </div>
                
                
              </div>
            </div>
          </div>
          <div className="derecha">
          <div id="miSeccion" class="singleContainer">
          <h1 className="title">Datos del Vehiculo</h1>
          <div className="details">
                <h1 className="itemTitle">Detalles</h1>
                <div className="detailItem">
                  <span className="itemKey">Nûmero de Placa:</span>
                  <span className="itemValue">{state?.placa}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Color del Vehiculo:</span>
                  <span className="itemValue">{state?.color}</span>
                </div>
                
           </div>
           
          </div>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default SingleOperador;
