import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const Single = () => {
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
                src="https://estudiantes.ucontinental.edu.pe/wp-content/uploads/2020/09/Madurez-emocional-7.jpg"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Frida</h1>
                <div className="detailItem">
                  <span className="itemKey">Correo :</span>
                  <span className="itemValue">janedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Celular: </span>
                  <span className="itemValue">9991767643</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Direccion:</span>
                  <span className="itemValue">
                  calle 6 x17a #421
                  </span>
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
