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
    let pilotos = [];
    boardService.addEquipo({teamName, vehiculo,  logo,  lugar, jefe,  president,chasis,motor, debut,campeonatos, carreras, victorias,podios,puntos, poles, pilotos});

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

router.get('/post/:id/edit', (req, res) => {

    let equipo = boardService.getEquipo(req.params.id);

    res.render('editarElemento', { equipo });

});

router.post('/post/:id/edit/save', (req, res) => {

    let { teamName, vehiculo,  logo,  lugar, jefe,  president,chasis,motor, debut,campeonatos, carreras, victorias,podios,puntos, poles} = req.body;

    boardService.editEquipo(req.params.id,{teamName, vehiculo,  logo,  lugar, jefe,  president,chasis,motor, debut,campeonatos, carreras, victorias,podios,puntos, poles});

    let equipo = boardService.getEquipo(req.params.id);

    res.render('detalle', { equipo });

});

router.post('/post/:id/newPilot', (req, res) => {

    let { pilotName, imagenPiloto, numeroPiloto, championships, races, victories, podiums, points} = req.body;

    boardService.addPiloto(req.params.id, {pilotName, imagenPiloto, numeroPiloto, championships, races, victories, podiums, points});

    let equipo = boardService.getEquipo(req.params.id);

    res.render('detalle', { equipo });
});

export default router;