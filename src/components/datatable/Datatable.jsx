import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
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
        // Replace the following block with the API call using the fetch function
        const response = await fetch('http://34.234.66.51/api/v1/client/', {
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
            <Link to="/clientes/test" style={{ textDecoration: "none" }}>
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
        Clientes Registrados
        <Link to="/users/new" className="link">
         
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



// const fetchData = async () => {
//   let list = [];
//   try {
//     const querySnapshot = await getDocs(collection(db, "clientes"));
//     querySnapshot.forEach((doc) => {
//       // doc.data() is never undefined for query doc snapshots
//       list.push({ id: doc.id, ...doc.data() });
//     });
//     setData(list);
//     console.log(list);
//   } catch (error) {
//     console.log(error);
//   }
// };