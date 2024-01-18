import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import HomeContain from "../../components/homeContainer/homeContain";

const Home = () => {
  return (
    <div className="home">
      
      <Sidebar />
      <div className="homeCon">
        <HomeContain/>
        
        
        
      </div>
    </div>
  );
};

export default Home;
