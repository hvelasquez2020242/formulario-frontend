import React from 'react'
import Navigation from '../Navigation/Navigation'
import {Formulario} from '../Formulario/Formulario'
import {Home} from '../Home/Home'
import Reporte from '../Reporte/Reporte'
import { Reportes } from '../Reportes/Reportes'
import { ReportesFecha } from '../Reportes/ReporteFecha'
import { ReportesEdad } from '../Reportes/ReporteEdad'
import Checkout from '../Reportes/Prueba'
import {
    Routes,
    Route,
    Navigate
} from "react-router-dom";
export const Main = () => {

    return (
        <>
         <Navigation/>

            <Routes>
                <Route path="/fecha" element={<Formulario/> } />
                <Route path="/" element={<Navigate to="/Inicio" replace />} />
                <Route path="/Inicio" element={<Home /> } />
                <Route path='/Reporte/:id' element={<Reporte/>}/>
                <Route path='/Reportes/:carrera' element={<Reportes/>}/>
                <Route path='/ReporteFecha' element={<ReportesFecha/>}/>
                <Route path='/formulario' element={<Checkout/>}/>
                <Route path='/ReporteEdad' element={<ReportesEdad/>}/>

            </Routes>

        </>

    )
}