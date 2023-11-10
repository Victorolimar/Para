export const userColumns = [
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
    width: 150,
  },

  
  {
    field: "calificacion_promedio",
    headerName: "Calificacion",
    width: 160
  },
];


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
    field: "calificacion_promedio",
    headerName: "Calificacion",
    width: 160
  },
  {
    field: "disponibilidad",
    headerName: "Disponibilidad",
    width: 160,
    
  }
];
//temporary data
export const userRows = [

];
