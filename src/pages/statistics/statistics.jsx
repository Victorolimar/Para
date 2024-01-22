import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import GraficUsuario from "../../components/grafics/graficUsuario"
import PieType from "../../components/grafics/graficas"



const Stadistic = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <div className="separador">
          <div className="listContainer2">
          <PieType/>
          </div>
          <div className="listContainer2">
          <GraficUsuario/>
          </div>

          

        </div>
      </div>

      
      
    
    </div>
  )
}

export default Stadistic;