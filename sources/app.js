import express from 'express';
import mustacheExpress from 'mustache-express';
import { __dirname } from './dirname';
import { router } from './getRouter';
import { fileURLToPath } from 'url';
import { bodyParser } from 'body-parser';


//pongo la pagina a escuchar peticiones en el puerto 3000
const app = express();
app.listen(3333, () => { console.log('El servidor se encuentra en el puerto 3333') });

//Configuro mustache 
app.set('mustaches', join(__dirname + '/../mustaches'));
app.set('view engine', 'mustache');
app.engine('mustache', mustacheExpress());

//Sirve para permitir a node analizar datos de formularios cuando está en true 
app.use(bodyParser.urlencoded({ extended: true }));

//Sire para que la web pueda usar los archivos de la carpeta public
app.use(express.static(join(__dirname + '/../loloo')));

//Añado el router
app.use('/', router);

//Directorio actual 
const __filename = fileURLToPath(import.meta.url);
const __dirname = __dirname(__filename); 