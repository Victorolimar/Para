import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows, operadoresColumns } from "../../datatablesource";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { utils, writeFile } from "xlsx";
import { useCallback } from "react";
import Swal from "sweetalert2";

const Datatable = () => {
  const [data, setData] = useState(userRows);
  const [totalClientes, setTotalClientes] = useState(0); // Nuevo estado para el total de clientes
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const response = await fetch("http://34.234.66.51/api/v1/driver/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        list = data.data;
        list = list.map((item) => {
          return {
            id: item._id,
            foto: item.profile_picture.url,
            nombre: item.name,
            apellidos: item.last_name,
            correo: item.email,
            numero: item.phone_number,
            contraseña: item.password,
            calificacion: item.rating,
            disponibilidad: item.availability,
            direccion: item.address,
            placa: item.license_plate,
            color: item.vehicle_color,
          };
        });

        console.log("API response:", list);

        // Actualiza el total de clientes
        setTotalClientes(list.length);
      } catch (error) {
        console.error("Error fetching data from API:", error);
      }

      setData(list);
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás deshacer esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, borrarlo",
    });

    if (result.isConfirmed) {
      try {
        const response = await fetch(
          `http://34.234.66.51/api/v1/driver/${id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        setData((prevData) => prevData.filter((item) => item.id !== id));

        await Swal.fire("¡Eliminado!", "El elemento ha sido eliminado.", "success");
      } catch (error) {
        console.error("Error deleting client:", error);
        await Swal.fire("Error", "Hubo un problema al eliminar el elemento.", "error");
      }
    }
  };

  const exportarDriver = useCallback(() => {
    const exdata = utils.json_to_sheet(data);
    const newB = utils.book_new();
    utils.book_append_sheet(newB, exdata, "Operadores");

    writeFile(newB, "Operadores.xlsx");
  }, [data]);

  const actionColumn = [
    {
      field: "action",
      headerName: "Acciones",
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

  return (
    <>
      <div className="datatable">
        <div className="datatableTitle">
          
          <span>Operadores Registrados: {totalClientes}</span>
          <Link className="Exportar" onClick={exportarDriver}>
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
