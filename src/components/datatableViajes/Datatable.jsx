import "./datable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { tripColumns, userRows } from "../../datatablesource"; // Asegúrate de importar tripColumns y userRows si se utilizan
import { Link } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { utils, writeFile } from 'xlsx';

const Datatable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [response, clientResponse, placeResponse, driverResponse] = await Promise.all([
          fetch('http://34.234.66.51/api/v1/trip/'),
          fetch('http://34.234.66.51/api/v1/client/'),
          fetch('http://34.234.66.51/api/v1/place'),
          fetch('http://34.234.66.51/api/v1/driver'),
        ]);

        if (!response.ok || !clientResponse.ok || !placeResponse.ok || !driverResponse.ok) {
          throw new Error(`HTTP error! Status: ${response.status}, Client Status: ${clientResponse.status}, Place Status: ${placeResponse.status}, Driver Status: ${driverResponse.status}`);
        }

        const [apiData, clientData, originData, driverData] = await Promise.all([
          response.json(),
          clientResponse.json(),
          placeResponse.json(),
          driverResponse.json(),
        ]);

        const list = apiData.data.map((item) => {
          const client = clientData.data.find((clientItem) => clientItem._id === item.user);
          const origen = originData.data.find((origenItem) => origenItem._id === item.origin.place);
          const destino = originData.data.find((destinoItem) => destinoItem._id === item.destination.place);
          const driver = driverData.data.find((driverItem) => driverItem._id === item.driver);

          return {
            id: item._id,
            origen: origen.title,
            destino: destino.title,
            usuario: client ? client.name : 'Cliente no disponible',
            conductor: driver ? `${driver.name} ${driver.last_name}` : 'conductor no encontrado',
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
    utils.book_append_sheet(newViajes, exviajes, "Viajes");
    writeFile(newViajes, "Viajes.xlsx");
  }, [data]);

  return (
    <>
      <div className="datatable">
        <div className="datatableTitle">
          Viajes Registrados
          <Link className="Exportar" onClick={exportViajes}>
            Exportar
          </Link>
        </div>
        <DataGrid
          className="datagrid"
          rows={data}
          columns={tripColumns} // Asegúrate de que tripColumns esté definido
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection
        />
      </div>
    </>
  );
};

export default Datatable;
