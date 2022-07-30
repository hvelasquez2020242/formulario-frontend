import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#03a9f4',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein,a, e) {
  return { name, calories, fat, carbs, protein,a ,e };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0,0,0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3 ,0,0),

];

export default function CustomizedTables() {
   
      const { id } = useParams();
    const [persona, setPersona] = useState([])
    useEffect(() => {
        obtenerDatos()
        console.log(id);
      
    }, [])
    function obtenerDatos(){
        let genero = 'epico'
        axios
        .get("http://localhost:3000/api/obtenerReporte/" + id)
        .then((res) => {
          console.log(res.data.reporte);
          setPersona(res.data.reporte)
        })
        .then()
        .catch((error) => {
          console.log(error.response.data.mensaje);
         
        });
  
    }
  return (
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nombre completo</StyledTableCell>
            <StyledTableCell align="right">direccion</StyledTableCell>
            <StyledTableCell align="right">genero</StyledTableCell>
            <StyledTableCell align="right">telefono</StyledTableCell>
            <StyledTableCell align="right">genero de poesia</StyledTableCell>
            <StyledTableCell align="right">fecha de inscripcion</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {persona.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {row.nombreCompleto}
              </StyledTableCell>
              <StyledTableCell align="right">{row.direccion}</StyledTableCell>

              <StyledTableCell align="right">{row.genero}</StyledTableCell>
              <StyledTableCell align="right">{row.telefono}</StyledTableCell>
              <StyledTableCell align="right">{row.generoDePoesia}</StyledTableCell>
              <StyledTableCell align="right">{row.fechaDeInscripcion}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
