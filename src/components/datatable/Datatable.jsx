import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link, useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { read, utils, writeFile, writeFileXLSX } from 'xlsx';
import Swal from 'sweetalert2';


const Datatable = () => {
  const [data, setData] = useState(userRows);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://34.234.66.51/api/v1/client/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const apiData = await response.json();
        const list = apiData.data.map((item) => ({
          id: item._id,
          foto: item.profile_picture.url,
          nombre: item.name,
          apellidos: item.last_name,
          correo: item.email,
          numero: item.phone_number,
          contraseña: item.password,
        }));

        console.log('API response:', list);
        setData(list);
      } catch (error) {
        console.error('Error fetching data from API:', error);
      }
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
        const response = await fetch(`http://34.234.66.51/api/v1/client/${id}`, {
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
          'El cliente ha sido eliminado.',
          'success'
        );
      } catch (error) {
        console.error('Error deleting client:', error);
  
        // Mostrar mensaje de error
        await Swal.fire(
          'Error',
          'Hubo un problema al eliminar el cliente.',
          'error'
        );
      }
    }
  };

  const exportUsers = useCallback(() => {
    const exuser = utils.json_to_sheet(data);
    const newU = utils.book_new();
    utils.book_append_sheet(newU,exuser,"Usuarios")
    writeFile(newU,"Usuarios.xlsx")
  },[data])

  const actionColumn = [
    {
      field: 'action',
      headerName: 'Acciones',
      width: 200,
      renderCell: (params) => (
        <div className="cellAction">
          <div
            className="viewButton"
            onClick={() => navigate(`/clientes/${params.row.id}`, { state: params.row })}
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

  return (
    <>
      <div className="datatable">
        <div className="datatableTitle">
          Clientes Registrados
          <Link className="Exportar" onClick={exportUsers}>
            Exportar
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
