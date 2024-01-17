function cuentasDistintas(provincias){
    let distintas = new Set(provincias);
    
    return distintas.size;
}

let provincias = ['Toledo','Madrid','Sevilla','Madrid','Sevilla','Valencia','Barcelona','Madrid'];

let distintas = cuentasDistintas(provincias);

console.log('Hay ${distitnas} provinvias distintas');