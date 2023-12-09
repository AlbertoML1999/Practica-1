//importar libreria
const express = require("express");

//objetos para llamar a los metodos de express
const app = express();

//ruta de archivos estaticos
app.use(express.static("public"));

//configurar puerto usado para el servidor local
app.listen(3000,function(){
    console.log("El servidor es http://localhost:3000");
});