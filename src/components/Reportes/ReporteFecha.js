import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import axios from "axios";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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

export const ReportesFecha = () => {
    const { carrera } = useParams();
    const [persona, setPersona] = useState([])
    useEffect(() => {
        console.log(carrera);
        buscarPorCarrera()
    }, [])
    function buscarPorCarrera() {
        axios
            .get("http://localhost:3000/api/obtenerReporteFecha")
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
                        <StyledTableCell align="right">carrera</StyledTableCell>
                        <StyledTableCell align="right">telefono</StyledTableCell>
                        <StyledTableCell align="right">genero de poesia</StyledTableCell>
                        <StyledTableCell align="right">fecha de declamacion</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {persona.map((row, index) => (
                        <StyledTableRow key={index}>
                            <StyledTableCell component="th" scope="row">
                                {row.nombreCompleto}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.direccion}</StyledTableCell>
                            <StyledTableCell align="right">{row.carreraDelEstudiante}</StyledTableCell>

                            <StyledTableCell align="right">{row.telefono}</StyledTableCell>
                            <StyledTableCell align="right">{row.generoDePoesia}</StyledTableCell>
                            <StyledTableCell align="right">{row.fechaDeDeclamacion}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        )
}
