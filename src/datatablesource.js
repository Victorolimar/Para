//Usuarios
export const userColumns = [
  { field: "id", headerName: "ID", width: 150 },
  {
    field: "foto",
    headerName: "Imagen",
    width: 120,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.foto} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "nombre",
    headerName: "Nombre",
    width: 120,
  },

  {
    field: "apellidos",
    headerName: "Apellidos",
    width: 150,
  },
  {
    field: "correo",
    headerName: "Correo",
    width: 180,
  },
  {
    field: "numero",
    headerName: "Numero de telefono",
    width: 150,
  },

  
  // {
  //   field: "calificacion_promedio",
  //   headerName: "Calificacion",
  //   width: 160
  // },
];

//Conductores
export const operadoresColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "foto",
    headerName: "Imagen",
    width: 120,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.foto} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "nombre",
    headerName: "Nombre",
    width: 120,
  },

  {
    field: "apellidos",
    headerName: "Apellidos",
    width: 150,
  },
  {
    field: "correo",
    headerName: "Correo",
    width: 100,
  },

  {
    field: "calificacion",
    headerName: "Calificacion",
    width: 160
  },
  {
    field: "disponibilidad",
    headerName: "Disponibilidad",
    width: 160,
    
  }
];

//Viajes
export const tripColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field:"origen", headerName:"Origen", width:150
  },
  {
    field:"destino", headerName:"Destino", width:150
  },
  {
    field:"usuario", headerName:"Usuario", width:150
  },
  {
    field:"conductor", headerName:"Conductor", width:150
  },
  {
    field:"tipo", headerName:"Tipo de Viaje", width:150
  },
  {
    field:"numero", headerName:"numero de pasajeros", width:150
  }
];



//temporary data
export const userRows = [

];

//datos de los viajes 
export const tripRows = [
  
];
