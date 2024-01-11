import "./datable.scss"
import {DataGrid} from "@mui/x-data-grid";
import{tripColumns, tripRows,userRows} from "../../datatablesource";
import { Link, useNavigate } from "react-router-dom";
import {useCallback,useEffect,useState} from "react"
import { read, utils, writeFile, writeFileXLSX } from 'xlsx';

const Datatable = () => {
    const [data, setData] = useState(tripRows);
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const [response, clientResponse, placeResponse] = await Promise.all([
            fetch('http://34.234.66.51/api/v1/trip/'),
            fetch('http://34.234.66.51/api/v1/client/'),
            fetch('http://34.234.66.51/api/v1/place'),
          ]);
    
          if (!response.ok || !clientResponse.ok || !placeResponse.ok) {
            throw new Error(`HTTP error! Status: ${response.status}, Client Status: ${clientResponse.status}, Place Status: ${placeResponse.status}`);
          }
    
          const [apiData, clientData, originData] = await Promise.all([
            response.json(),
            clientResponse.json(),
            placeResponse.json(),
          ]);
    
          const list = apiData.data.map((item) => {
            const client = clientData.data.find((clientItem) => clientItem._id === item.user);
            const origen = originData.data.find((origenItem) => origenItem._id === item.origin.place);
            const destino = originData.data.find((destinoItem) => destinoItem._id === item.destination.place);
    
            return {
              id: item._id,
              origen: origen.title,
              destino: destino.title,
              usuario: client.name,
              conductor: item.driver,
              tipo: item.travel_type,
              numero: item.number_of_passengers,
            };
          });
    
          console.log('API response:', list);
          setData(list);
        } catch (error) {
          console.error('Error fetching data from API:', error);
        }
      };
    
      fetchData();
    }, []);
    
    const exportViajes = useCallback(() => {
      const exviajes = utils.json_to_sheet(data);
      const newViajes = utils.book_new();
      utils.book_append_sheet(newViajes,exviajes,"Viajes")
      writeFile(newViajes,"Viajes.xlsx")
    },[data])

return (
    <>
      <div className="datatable">
        <div className="datatableTitle">
          Clientes Registrados
          <Link className="Exportar" onClick={exportViajes} >
            Exportar
          </Link>
        </div>
        <DataGrid
          className="datagrid"     
          rows={data}
          columns={tripColumns}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection
        />
      </div>
    </>
  );

}

export default Datatable;