const equipos = new Map();
const pilotos= new Map();
let nextId = 0;
let nextIdPiloto = 0;

addEquipo({ teamName: "Aston Martin", 
    vehiculo: "https://images.daznservices.com/di/library/DAZN_News/7a/1a/amr23-aston-martin-f1_171pyy6wslhfp1cpqkadmri7j2.jpeg?t=1279078694", 
    logo: "https://th.bing.com/th?id=OIP.oIO6fi_SPw9ko1UeKAqrzgHaDt&w=350&h=175&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2", 
    lugar: "Silverstone, Reino Unido", 
    jefe: "Mike Krack", 
    president: "Lawrence Stroll",
    chasis: "AMR23",
     motor: "Mercedes", 
     debut: "2018",
     campeonatos: "0",
      carreras: "135", 
      victorias: "0",
      podios: "8",
       puntos: "35", 
       poles: "0",
});
addEquipo({ teamName: "Red Bull", 
    vehiculo: "https://cdn-6.motorsport.com/images/amp/6n9RnBeY/s6/red-bull-racing-rb18-1.jpg", 
    logo: "https://th.bing.com/th?id=OIP.JE5lQeQFTIDRx7xOAWzt6QHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2", 
    lugar: "Milton Keynes, United Kingdom", 
    jefe: "	Christian Horner", 
    president: "Pierre Waché",
    chasis: "RB19",
     motor: "Honda", 
     debut: "2005",
     campeonatos: "6",
      carreras: "344", 
      victorias: "100",
      podios: "247",
       puntos: "6205", 
       poles: "84",
});

addPiloto({ pilotName: "Red Bull", 
    imagenPiloto: "https://cdn-6.motorsport.com/images/amp/6n9RnBeY/s6/red-bull-racing-rb18-1.jpg", 
    numeroPiloto: "12", 
     championships: "6",
      races: "344", 
      victories: "100",
      podiums: "247",
       points: "6205", 
});


export function addEquipo(equipo) {
    let id = nextId++;
    equipo.id = id.toString();
    equipos.set(equipo.id, equipo);
}
export function addPiloto(piloto) {
    let id = nextIdPiloto++;
    piloto.id = id.toString();
    pilotos.set(piloto.id, piloto);
}


export function deleteEquipo(id){
    equipos.delete(id);
}

export function getEquipos(){
    return [...equipos.values()];
}

export function getEquipo(id){
    return equipos.get(id);
}
export function putEquipo(id){
     equipos.put(id);
}