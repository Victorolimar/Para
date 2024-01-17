import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows, operadoresColumns } from "../../datatablesource";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { read, utils, writeFile, writeFileXLSX } from 'xlsx';
import { useCallback } from 'react';
import Swal from 'sweetalert2';





const Datatable = () => {
  const [data, setData] = useState(userRows);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        // Replace the following block with the API call using the fetch function
        const response = await fetch('http://34.234.66.51/api/v1/driver/',  {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json', // Adjust headers as needed
            // Add any additional headers if required
          },
          // You can add query parameters here if needed
          // For example: http://34.234.66.51/api/v1/client/?param1=value1&param2=value2
        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        // Assuming the response is in JSON format
        const data = await response.json();
    
        // Process the data as needed
        list = data.data; // Update this line based on the actual structure of the API response
        list = list.map((item) => {
          return {
            id: item._id,
            foto: item.profile_picture.url,
            nombre: item.name,
            apellidos: item.last_name,
            correo: item.email,
            numero: item.phone_number,
            calificacion: item.rating,
            disponibilidad: item.availability,
            direccion: item.address,
            placa: item.license_plate,
            color: item.vehicle_color

          }
 


        });
    
        console.log('API response:', list);
      } catch (error) {
        console.error('Error fetching data from API:', error);
      }
    
      // Continue with the rest of your code
      setData(list);
    };
    fetchData();
  }, []);
 

  const handleDelete = async (id) => {
    // Mostrar ventana de confirmación
    const result = await Swal.fire({
      title: '¿Estás seguro?',
      text: '¡No podrás deshacer esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, borrarlo'
    });
  
    // Si se confirma la eliminación
    if (result.isConfirmed) {
      try {
        const response = await fetch(`http://34.234.66.51/api/v1/driver/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        // Eliminar el elemento del estado
        setData((prevData) => prevData.filter((item) => item.id !== id));
  
        // Mostrar mensaje de éxito
        await Swal.fire(
          '¡Eliminado!',
          'El elemento ha sido eliminado.',
          'success'
        );
      } catch (error) {
        console.error('Error deleting client:', error);
  
        // Mostrar mensaje de error
        await Swal.fire(
          'Error',
          'Hubo un problema al eliminar el elemento.',
          'error'
        );
      }
    }
  };

  const exportarDriver = useCallback(() => {
    const exdata = utils.json_to_sheet(data);
    const newB = utils.book_new();
    utils.book_append_sheet(newB, exdata, "Operadores");

    writeFile(newB, "Operadores.xlsx");

  },[data]);

  

  const actionColumn = [
    {
      field: 'action',
      headerName: 'Acciones',
      width: 200,
      renderCell: (params) => (
        <div className="cellAction">
          <div
            className="viewButton"
            onClick={() => navigate(`/operadores/${params.row.id}`, { state: params.row })}
          >
            Ver
          </div>
          <div className="deleteButton" onClick={() => handleDelete(params.row.id)}>
            Eliminar
          </div>
        </div>
      ),
    },
  ];
  return (<>
  
    
    <div className="datatable">
      

      <div className="datatableTitle">
        Operadores Registrados
      
      
        <Link  className="Exportar" onClick={exportarDriver} >
          Exportar
        </Link>

        <Link to="/users/new" className="link">
          Agregar Nuevo
        </Link>

      </div>
      <DataGrid
   
          className="datagrid"
          rows={data}
          columns={userColumns.concat(actionColumn)}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection
        />
     
    </div>
    </>
    
  );
};

export default Datatable;