import express from 'express';
import * as boardService from './Service.js';

const router = express.Router();

router.get('/', (req, res) => {

    res.render('index', { equipos: boardService.getEquipos(0,3)});
});

router.get('/Service', (req, res) => {

    const from = parseInt(req.query.from);
    const to = parseInt(req.query.to);

    const equipos = boardService.getEquipos(from,to);

    res.render('equipos', { equipos: equipos });
});

router.post('/post/new', (req, res) => {
    const requiredFields = ['teamName', 'vehiculo', 'logo', 'lugar', 'jefe', 'president', 'chasis', 'debut', 'campeonatos', 'carreras', 'victorias', 'podios', 'puntos', 'poles'];

    for (const field of requiredFields) {
        if (!req.body[field]) {
            const errorMessage = `Por favor, rellene el campo de ${field} antes de guardar.`;
            res.send(`<script>alert("${errorMessage}"); window.history.back();</script>`);
            return; // Detener la ejecución si falta un campo
        }
    }

    // Si todos los campos requeridos están presentes, continuar con el procesamiento
    let { teamName, vehiculo, logo, lugar, jefe, president, chasis, motor, debut, campeonatos, carreras, victorias, podios, puntos, poles } = req.body;
    let pilotos = [];
    let id = boardService.addEquipo({ teamName, vehiculo, logo, lugar, jefe, president, chasis, motor, debut, campeonatos, carreras, victorias, podios, puntos, poles, pilotos });
    let equipo = boardService.getEquipo(id);

    res.render('detalle', { equipo });
});



router.get('/post/:id', (req, res) => {

    let equipo = boardService.getEquipo(req.params.id);
    
    res.render('detalle', { equipo });
});

router.get('/delete/:id', (req, res) => {

    boardService.deleteEquipo(req.params.id);

    res.render('index', { 
        equipos: boardService.getEquipos(0,3) 
    });
});

router.get('/post/:id/edit', (req, res) => {

    let equipo = boardService.getEquipo(req.params.id);

    res.render('editarElemento', { equipo });

});

router.post('/post/:id/edit/save', (req, res) => {
    
    const requiredFields = ['teamName', 'vehiculo', 'logo', 'lugar', 'jefe', 'president', 'chasis', 'debut', 'campeonatos', 'carreras', 'victorias', 'podios', 'puntos', 'poles'];

    for (const field of requiredFields) {
        if (!req.body[field]) {
            const errorMessage = `Por favor, rellene el campo de ${field} antes de guardar.`;
            res.send(`<script>alert("${errorMessage}"); window.history.back();</script>`);
            return;
        }
    }

    let { teamName, vehiculo,  logo,  lugar, jefe,  president,chasis,motor, debut,campeonatos, carreras, victorias,podios,puntos, poles} = req.body;
     
    let pilotos = boardService.getPilotos(req.params.id);

    boardService.editEquipo(req.params.id,{teamName, vehiculo,  logo,  lugar, jefe,  president,chasis,motor, debut,campeonatos, carreras, victorias,podios,puntos, poles, pilotos});

    let equipo = boardService.getEquipo(req.params.id);

    res.render('detalle', { equipo });

});

router.post('/post/:id/newPilot', (req, res) => {

    const requiredFields = ['pilotName', 'imagenPiloto', 'numeroPiloto', 'championships', 'races', 'victories', 'podiums', 'points'];

    for (const field of requiredFields) {
        if (!req.body[field]) {
            const errorMessage = `Por favor, rellene el campo de ${field} antes de guardar.`;
            res.send(`<script>alert("${errorMessage}"); window.history.back();</script>`);
            return; // Detener la ejecución si falta un campo
        }
    }

    let { pilotName, imagenPiloto, numeroPiloto, championships, races, victories, podiums, points} = req.body;

    boardService.addPiloto(req.params.id, {pilotName, imagenPiloto, numeroPiloto, championships, races, victories, podiums, points});

    let equipo = boardService.getEquipo(req.params.id);

    res.render('detalle', { equipo });
});

router.get('/search', (req, res) => {
    const query = req.query.q.toLowerCase();

    // Filtrar equipos que coincidan con la consulta
    const filteredTeams = Array.from(boardService.equipos.values()).filter(equipo =>
        equipo.teamName.toLowerCase().includes(query)
    );

    // Renderizar la plantilla de resultados de búsqueda
    res.render('searchResults', { equipos: filteredTeams });
});


export default router;