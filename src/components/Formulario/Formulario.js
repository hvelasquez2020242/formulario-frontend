import React, { useEffect, useState } from "react"; import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import { Link } from "react-router-dom";

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);



export const Formulario = () => {
  const [fecha, setFecha] = useState('')
  useEffect(() => {
    setFecha(localStorage.getItem('fecha'))
  },)
  return (
    <>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Grid item xs={4} sm={4} md={4}>

          <Card sx={{ maxWidth: 500, marginTop: '30px', minHeight: 550 }}>
            <CardMedia
              component="img"
              height="250"
              image="https://www.escueladeescritores.com/masalladeorion/wp-content/uploads/2019/11/address-book-2246457_1280-1280x640.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Poesia
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Tu dia de declamacion es {fecha}
              </Typography>
            </CardContent>

          </Card>
        </Grid>
      </Box>


    </>
  )
}
