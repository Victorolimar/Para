import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows, operadoresColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";


const Datatable = () => {
  const [data, setData] = useState(userRows);

  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "operadores"));
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          list.push({ id: doc.id, ...doc.data() });
          console.log(doc.id, " => ", doc.data());
        });
        setData(list);

        console.log(list);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
 

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  

  const actionColumn = [ 
    {
      field: "action",
      headerName: "Acciones",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/operadores/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">Ver</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Eliminar
            </div>
          </div>
        );
      },
    },
  ];
  return (<>
  
    
    <div className="datatable">
      

      <div className="datatableTitle">
        Operadores Registrados
        <Link to="/users/new" className="link">
          Agregar Nuevo
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={operadoresColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
    </>
    
  );
};

export default Datatable;
