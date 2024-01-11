import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1143155,
      Direcciondestino: "Calle 12",
      Direccionrecogida: "Cale 23",
      conductor: "Pedro Pech",
 
      
     
    },
   
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Direccion Destino</TableCell>
            <TableCell className="tableCell">Direccion Recogida</TableCell>
            <TableCell className="tableCell">Conductor</TableCell>
            
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              
              <TableCell className="tableCell">{row.Direcciondestino}</TableCell>
              <TableCell className="tableCell">{row.Direccionrecogida}</TableCell>
              <TableCell className="tableCell">{row.conductor}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
