import React, { useState } from "react"; import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from "axios";
import Swal from "sweetalert2";
import {
    ButtonGroup
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Formulario } from "../Formulario/Formulario";
function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();
function parent() {
    return (
        <Formulario />
    );
}

export default function SignUp() {
    const [currency, setCurrency] = useState('');
    const [generoPoesia, setGeneroPoesia] = useState('')
    const [genero, setGenero] = useState('')
    var navigate = useNavigate();

    const handleChange = (event) => {
        console.log(event.target.value);
        setGenero(event.target.value)
    };
    const handleChange2 = (event) => {
        console.log(event.target.value);
        setGeneroPoesia(event.target.value)
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let usuario = {
            name: data.get('nombre'),

        }
        const fecha = new Date(data.get('fechaDeNacimiento'))
        console.log(getEdad(fecha));
        if (getEdad(fecha) >= 18) {
            let formulario = {
                carnet: data.get('carnet'),
                nombres: data.get('nombres'),
                apellidos: data.get('apellidos'),
                genero: generoPoesia,
                generoDePoesia: genero,
                direccion: data.get('direccion'),
                fechaDeNacimiento: data.get('fechaDeNacimiento'),
                telefono: data.get('telefono'),
                 carreraDelEstudiante: data.get('carreraDelEstudiante')
            }
            axios
                .post("http://localhost:3000/api/agregarFormulario", formulario)
                .then((res) => {
                    setTimeout(function () {
                        localStorage.setItem('fecha', res.data.formulario.fechaDeDeclamacion)
                        Swal.fire({
                            icon: "success",
                            title: "Exito",
                            text: "Te has registrado exitosamente.",
                        });
                        parent()
                        navigate("/fecha")
                    },1500)
                    
                })
                .then()
                .catch((error) => {
                    console.log(error);
                    Swal.fire({
                        icon: "error",
                        title: error.response.data.mensaje,
                    });
                });
        } else {
            Swal.fire({
                icon: "error",
                title: 'Tiene que ser mayor de 17 años',
            });
        }

    };
    function getEdad(dateString) {
        let hoy = new Date()
        let fechaNacimiento = new Date(dateString)
        let edad = hoy.getFullYear() - fechaNacimiento.getFullYear()
        let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth()
        if (
            diferenciaMeses < 0 ||
            (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
        ) {
            edad--
        }
        return edad
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="md">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <FormatAlignJustifyIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Formulario
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="nombres"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="Nombres"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="apellido"
                                    label="Apellido"
                                    name='apellidos'
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    required
                                    fullWidth
                                    label="Carnet"
                                    name='carnet'
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth>

                                    <InputLabel id="demo-simple-select-label">Genero</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Genero"
                                        value={currency}
                                        onChange={handleChange2}

                                    >
                                        <MenuItem value={'Masculino'}>Masculino</MenuItem>
                                        <MenuItem value={'Femenino'}>Femenino</MenuItem>

                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    required
                                    fullWidth
                                    label="Direccion"
                                    name='direccion'
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="apellido"
                                    label="Telefono" type="number" name='telefono'
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    required
                                    fullWidth
                                    type="date"
                                    name="fechaDeNacimiento"
                                    defaultValue="2017-05-24"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="apellido"
                                    label="Carrera del estudiante" name='carreraDelEstudiante'
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <FormControl fullWidth>

                                    <InputLabel id="demo-simple-select-label">Genero de poesia</InputLabel>

                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Gener"
                                        onChange={handleChange}
                                        value={currency}
                                        fullWidth
                                    >
                                        <MenuItem value={"Lirica"}>Lirica</MenuItem>
                                        <MenuItem value={"epico"}>Epica</MenuItem>
                                        <MenuItem value={"dramatico"}>Dramatica</MenuItem>

                                    </Select>
                                </FormControl>
                            </Grid>


                        </Grid>
                        <ButtonGroup size="large" variant="outlined" aria-label="large button group" fullWidth sx={{ marginTop: '20px' }} >
                            <Button endIcon={<HighlightOffIcon />}>
                                Cancelar
                            </Button>
                            <Button
                                endIcon={<CheckCircleOutlineIcon />}
                                type="submit"
                                fullWidth
                                variant="contained"
                            >
                                Enviar
                            </Button>

                        </ButtonGroup>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="#" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
}