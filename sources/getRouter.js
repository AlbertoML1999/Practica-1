import express from 'express';
import * as servidor from './servidor';

const router = express.Router();

router.get('/', (req, res) => {
    const elemento = servidor.getElemento(0, 15);
    res.render('index', { elemento: elemento });
});

router.get('/nuevo', (req, res) => {
    res.render('nuevoElemento');
});

router.post('/nuevoElemento', (req, res) => {
    console.log(req.bady);
    let { nombre, vehiculo, logo, location, teamChief, president, chassis, motor, debur, championships, races, victories, podiums, points, poles } = req.body;
    servidor.elemento({ nombre, vehiculo, logo });
    res.render('Guardado')
});

//Sirve para obtener un cantante específico por su ID
router.get('/detalle/:id', (req, res) => {
    let elemento = servidor.elemento(req.params.id);
    console.log(elemento);
    res.render('detalle', { elemento });
});

export default router; 