import "./operador.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import DriveEtaIcon from '@mui/icons-material/DriveEta';


const SingleOperador = () => {
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
                src="https://blog.uber-cdn.com/cdn-cgi/image/width=2160,quality=80,onerror=redirect,format=auto/wp-content/uploads/2017/12/UberIM_001928-large.jpg"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Pedro</h1>
                <div className="detailItem">
                  <span className="itemKey">Correo :</span>
                  <span className="itemValue">pedroSS@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Celular:</span>
                  <span className="itemValue">9992765654</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Direccion:</span>
                  <span className="itemValue">
                    Calle 76 #131 x16 y 18
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
                  <span className="itemValue">wxsw121</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Modelo:</span>
                  <span className="itemValue">Mototaxi</span>
                </div>
           </div>
           <DriveEtaIcon className="icon" style={{color:'#722f37', fontSize: 40}}  />
            {/*<Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />*/}
          </div>
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

export default SingleOperador;
