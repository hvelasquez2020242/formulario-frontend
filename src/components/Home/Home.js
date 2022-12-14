import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Modal from '@mui/material/Modal';
import ButtonGroup from '@mui/material/ButtonGroup';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import axios from "axios";
import {
    TextField
} from "@mui/material";
import { useState, useEffect } from "react";
import Cloud from '@mui/icons-material/Cloud';
import Container from '@mui/material/Container';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
export const Home = () => {
    const [currency, setCurrency] = useState('');
    const [open, setOpen] = React.useState(false);
    const [carrera, setCarrera] = useState([]);
    const [generoPoesia, setGeneroPoesia] = useState('')
    const [buscar, setBuscar] = useState('')
    useEffect(() => {
        obtenerDatos()
    }, [])

    const handleChange3 = (event) => {
        setBuscar(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        setCarrera(data.get('carrera'))
    };
    const handleChange2 = (event) => {
        console.log(event.target.value);
        setGeneroPoesia(event.target.value)
    };
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    function obtenerDatos() {
        axios
            .get("http://localhost:3000/api/obtenerCarreras")
            .then((res) => {

                console.log(res.data.carreras);
                setCarrera(res.data.carreras)
            })
            .then()
            .catch((error) => {
                console.log(error.response.data.mensaje);

            });

    }
    return (
        <>
            <Grid container spacing={{ xs: 1, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}  >
                <Grid item xs={4} sm={4} md={4}>

                    <Card sx={{ maxWidth: 500, marginTop: '30px', minHeight: 550, marginLeft: '15px' }}>
                        <CardMedia
                            component="img"
                            height="250"
                            image="https://images.greelane.com/proxy?url=https%3A%2F%2Fwww.thoughtco.com%2Fthmb%2F38n2888G65M0qCYuSQuJA3IyjQo%3D%2F3000x2007%2Ffilters%3Afill%28auto%2C1%29%2FPortrait-of-Josephine-Budayevskaya-CROPPED-Getty464438561-5c11da79c9e77c0001541f89.jpg&width=750"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Poesia lirica
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                La poesia lirica es la forma po??tica que expresa tradicionalmente un sentimiento intenso o una profunda reflexi??n, ambas ideas como manifestaciones
                                de la experiencia del yo. Para los griegos antiguos la lira era un instrumento musical creado por Hermes o Polimnia y de cuya ejecuci??n, entre otros, se encargaba Erato, la musa griega
                                de la poes??a. Arist??teles, en su Po??tica
                                (ca. 330 a. C.), hace menci??n a la poes??a l??rica (para ser cantada junto a la c??tara) junto a la dram??tica, la epopeya, la danza y la pintura como otras formas de mimesis.
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ marginBottom: '10px' }}>
                            <Button size="small" component={Link} to={"/Reporte/" + 'Lirica'}>Ver reportes</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={4} sm={4} md={4}>

                    <Card sx={{ maxWidth: 500, marginTop: '30px', minHeight: 550 }}>
                        <CardMedia
                            component="img"
                            height="250"
                            image="https://www.lifeder.com/wp-content/uploads/2018/04/Aquiles-escena-Iliada-lifeder-min-1024x681.jpg"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Poesia epica
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                La epopeya es un relato ??pico o narrativo, escrito la mayor parte de las veces en verso largo (hex??metro) o prosa, que consiste en la narraci??n extensa de acciones trascendentales o dignas de memoria
                                para un pueblo en torno a la figura de un h??roe representativo de sus virtudes de m??s estima. Se trata de uno de los subg??neros literarios m??s antiguos dentro del m??s general de la ??pica o narrativa.
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ marginTop: '40px' }}>
                            <Button size="small" component={Link} to={"/Reporte/" + 'epico'}>Ver reportes</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={4} sm={4} md={4}>

                    <Card sx={{ maxWidth: 500, marginTop: '30px', minHeight: 550 }}>
                        <CardMedia
                            component="img"
                            height="250"
                            image="https://www.ecured.cu/images/thumb/3/31/Drama.jpg/1200px-Drama.jpg"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Poesia dramatica
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Los poemas dram??ticos son textos literarios que tienen di??logos escritos en verso y que se escribieron con la finalidad de ser representados ante un p??blico. Por ejemplo: Los siete contra de Tebas de Esquilo.
                                Los poemas dram??ticos son muy extensos, ya que son las primeras obras de teatro. En el presente es m??s com??n que las obras de teatro se escriban en prosa, por lo que dejaron de ser poemas (aunque en la ??pera se siguen representando poemas dram??ticos).
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ marginTop: '25px' }}>
                            <Button size="small" component={Link} to={"/Reporte/" + 'dramatico'}>Ver reportes</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>

            <Paper sx={{ marginTop: '40px', direction: "column", alignItems: "center", justifyContent: "center" }} >
                <MenuList>
                    <MenuItem>
                        <Typography variant="h6" color="inherit" noWrap>
                            Reportes
                        </Typography>
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleOpen}>
                        <ListItemIcon>
                            <Cloud fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Por carrera</ListItemText>
                    </MenuItem>
                    <Divider />


                    <MenuItem component={Link} to={"/ReporteFecha"}>
                        <ListItemIcon>
                            <Cloud fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>fecha de declamacion</ListItemText>
                    </MenuItem>
                    <Divider />

                    <MenuItem component={Link} to={"/ReporteEdad"}>
                        <ListItemIcon>
                            <Cloud fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>fecha de nacimiento</ListItemText>
                    </MenuItem>
                </MenuList>
            </Paper>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginTop: '250px'
                }}
            >

                <Box
                    component="footer"
                    sx={{
                        py: 3,
                        px: 2,
                        mt: 'auto',
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[200]
                                : theme.palette.grey[800],
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography variant="body1">
                            My sticky footer can be found here.
                        </Typography>
                    </Container>
                </Box>
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} >
                    <Grid component="form" onSubmit={handleSubmit}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Ingrese la carrera que desea buscar
                        </Typography>
                        <TextField sx={{ marginTop: '20px' }} fullWidth id="outlined-basic" label="carrera" name='carrera' variant="outlined" onChange={(event) => setCarrera(event.target.value)} />

                        <ButtonGroup variant="outlined" aria-label="outlined button group">
                            <Button type="submit" component={Link} to={"/Reportes/" + carrera}
                            >Buscar</Button>
                            <Button>Cancelar</Button>
                        </ButtonGroup>
                    </Grid>
                </Box>
            </Modal>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} >
                    <Grid component="form" onSubmit={handleSubmit}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Seleccione  la carrera
                        </Typography>
                        <FormControl fullWidth sx={{ height: '100px' }}>

                            <InputLabel id="demo-simple-select-label">Carrera</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Genero"
                                value={buscar}
                                onChange={handleChange3}
                            >{carrera.map((carr, index) => {
                                return (
                                    <MenuItem key={index} value={carr.nombre} label={buscar}>
                                        {carr.nombre}
                                    </MenuItem>
                                )
                            })

                                }
                            </Select>
                        </FormControl>
                        <ButtonGroup variant="outlined" aria-label="outlined button group">
                            <Button type="submit" component={Link} to={"/Reportes/" + buscar}
                            >Buscar</Button>
                            <Button>Cancelar</Button>
                        </ButtonGroup>
                    </Grid>
                </Box>
            </Modal>
        </>

    )
}
