import express from 'express';
import * as boardService from './Service.js';

const router = express.Router();

router.get('/', (req, res) => {

    res.render('index', { 
        equipos: boardService.getEquipos() 
    });
});

router.post('/post/new', (req, res) => {

    let { teamName, vehiculo,  logo,  lugar, jefe,  president,chasis,motor, debut,campeonatos, carreras, victorias,podios,puntos, poles} = req.body;

    boardService.addEquipo({teamName, vehiculo,  logo,  lugar, jefe,  president,chasis,motor, debut,campeonatos, carreras, victorias,podios,puntos, poles});

    res.render('saved_post');
});



router.get('/post/:id', (req, res) => {

    let equipo = boardService.getEquipo(req.params.id);

    res.render('detalle', { equipo });
});

router.get('/post/:id/delete', (req, res) => {

    boardService.deleteEquipo(req.params.id);

    res.render('deleted_post');
});

router.get('/post/:id/put', (req, res) => {

    let { teamName, vehiculo,  logo,  lugar, jefe,  president,chasis,motor, debut,campeonatos, carreras, victorias,podios,puntos, poles} = req.body;

    boardService.putEquipo(req.params.id);

    res.render('puted_post');
});

router.post('/post/:id', (req, res) => {

    let { pilotName, imagenPiloto, numeroPiloto, championships, races, victories, podiums, points} = req.body;

    boardService.addPiloto({pilotName, imagenPiloto, numeroPiloto, championships, races, victories, podiums, points});

    res.render('detalle', {equipo});
});

export default router;