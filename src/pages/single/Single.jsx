import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useParams, useLocation } from "react-router-dom";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import Datatable from "../../components/datatableViajes/Datatable";
import { Link, useNavigate } from "react-router-dom";


const Single = () => {
  const { state } = useLocation();
  const navigate = useNavigate();


  const handleEditClick = () => {
    navigate(`/clientes/${state?.id}/UpdateClienteId`, { state: state });
  };

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
          <div className="editButton" onClick={handleEditClick}>Editar</div>            
            <h1 className="title">Información</h1>
            <div className="item">
              <img
                src={state?.foto}
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{state?.nombre} {state?.apellidos}</h1>
                <div className="detailItem">
                  <span className="itemKey">Correo :</span>
                  <span className="itemValue">{state?.correo}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Celular: </span>
                  <span className="itemValue">{state?.numero}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Contraseña:</span>
                  <span className="itemValue">
                  {state?.contraseña}
                  </span>
                </div>
          

                <div className="detailItem">
                  {/* ...otros detalles */}
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            {/*<Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />*/}
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Single;
