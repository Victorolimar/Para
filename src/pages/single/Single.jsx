import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useParams, useLocation } from "react-router-dom";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
const Single = () => {
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
                  {/* ...otros detalles */}
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            {/*<Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />*/}
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Historial de viajes</h1>
          <List/>

        </div>
      </div>
    </div>
  );
};

export default Single;
