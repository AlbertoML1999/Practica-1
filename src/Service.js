const equipos = new Map();
let nextId = 0;

addEquipo({
    teamName: "Aston Martin",
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
    pilotos: [{
        pilotName: "Fernando Alonso",
        imagenPiloto: "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2023/02/25/16773183133860.jpg",
        numeroPiloto: "14",
        championships: "2",
        races: "380",
        victories: "32",
        podiums: "106",
        points: "2267",
    },
    {
        pilotName: "Lance Stroll",
        imagenPiloto: "https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/stroll.jpg.img.1536.high.jpg",
        numeroPiloto: "18",
        championships: "0",
        races: "140",
        victories: "0",
        podiums: "3",
        points: "247",
    }],
});

addEquipo({
    teamName: "Red Bull",
    vehiculo: "https://cdn-6.motorsport.com/images/amp/6n9RnBeY/s6/red-bull-racing-rb18-1.jpg",
    logo: "https://th.bing.com/th?id=OIP.JE5lQeQFTIDRx7xOAWzt6QHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    lugar: "Milton Keynes, United Kingdom",
    jefe: "Christian Horner",
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
    pilotos: [{
        pilotName: "Max Verstappen",
        imagenPiloto: "https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/verstappen.jpg.img.1920.medium.jpg/1701270073824.jpg",
        numeroPiloto: "1",
        championships: "3",
        races: "185",
        victories: "54",
        podiums: "98",
        points: "2586",
    }],
});

addEquipo({ teamName: "Mercedes", 
    vehiculo: "https://images.daznservices.com/di/library/DAZN_News/f2/60/w14-mercedes-f1_fs0cocejgchr1o8478ja45hbi.jpeg?t=1448604182&w=800", 
    logo: "https://th.bing.com/th?id=OIP.kviyo2rSw0Kopf5UJ5K0kAHaHW&w=250&h=249&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2", 
    lugar: "Alemania", 
    jefe: "Toto Wolff", 
    president: "Toto Wolff",
    chasis: "W14",
     motor: "Mercedes", 
     debut: "1954",
     campeonatos: "8",
      carreras: "281", 
      victorias: "125",
      podios: "286",
       puntos: "6808", 
       poles: "137",
       pilotos: [],
});


addEquipo({ teamName: "Ferrari", 
    vehiculo: "https://e00-marca.uecdn.es/multimedia/graficos/motor/2023/presentacion-ferrari/trescuartos2023.jpg", 
    logo: "https://th.bing.com/th/id/OIP.W_-Z_VKsFzObJ7HFQVfkVQHaEK?w=326&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7", 
    lugar: "Maranello, Italia", 
    jefe: "Frédéric Vasseur", 
    president: "Enrico Cardile / Enrico Gualtieri",
    chasis: "SF-23",
     motor: "Ferrari", 
     debut: "1929",
     campeonatos: "16",
      carreras: "1062", 
      victorias: "243",
      podios: "802",
       puntos: "10694", 
       poles: "231",
       pilotos: [],
});
addEquipo({ teamName: "McLaren", 
    vehiculo:"https://img.remediosdigitales.com/04457e/mclaren-f1-2023/450_1000.jpeg" , 
    logo: "https://th.bing.com/th/id/OIP.rcwOil56Wb3xrdY4Eq3UCwHaEK?pid=ImgDet&rs=1", 
    lugar: "Woking, United Kingdom", 
    jefe: "	Andrea Stella", 
    president: "Zak Brown",
    chasis: "MCL60",
     motor: "Mercedes", 
     debut: "1963",
     campeonatos: "8",
      carreras: "863", 
      victorias: "183",
      podios: "487",
       puntos: "5937", 
       poles: "156",
       pilotos: [],
});
addEquipo({ teamName: "Alpine", 
    vehiculo: "https://cdn-2.motorsport.com/images/amp/6O1RVyJ2/s1000/formula-1-alpine-launch-2023-a-3.jpg", 
    logo: "https://th.bing.com/th/id/OIP.sXnYH9R04PixK-HdOG-SJgHaE8?w=266&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", 
    lugar: "Enstone, United Kingdom", 
    jefe: "Bruno Famin", 
    president: "Philippe Krief",
    chasis: "A523",
     motor: "Renault", 
     debut: "2021",
     campeonatos: "0",
      carreras: "44", 
      victorias: "1",
      podios: "3",
       puntos: "368", 
       poles: "0",
       pilotos: [],
});
addEquipo({ teamName: "Williams", 
    vehiculo: "https://cdn-1.motorsport.com/images/amp/2Qz51dvY/s1000/formula-1-williams-launch-2023-2.jpg", 
    logo: "https://th.bing.com/th/id/OIP.XytDVxONTeeVAZiu54cosAHaFc?w=271&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7", 
    lugar: "Grove, United Kingdom", 
    jefe: "James Vowles", 
    president: "Pat Fry",
    chasis: "FW45",
     motor: "Mercedes", 
     debut: "1977",
     campeonatos: "9",
      carreras: "685", 
      victorias: "114",
      podios: "302",
       puntos: "3590", 
       poles: "128",
       pilotos: [],
});
addEquipo({ teamName: "Alpha Tauri", 
    vehiculo:"https://img.remediosdigitales.com/aea0f8/alpha-tauri-f1-2022-2/1366_2000.jpeg", 
    logo: "https://cdn-9.motorsport.com/images/mgl/Y99JQR8Y/s8/scuderia-alphatauri-f1-logo-1.jpg", 
    lugar: "Faenza, Italy", 
    jefe: "Franz Tost", 
    president: "Jody Egginton",
    chasis: "AT04",
     motor: "Honda", 
     debut: "2019",
     campeonatos: "0",
      carreras: "79", 
      victorias: "1",
      podios: "2",
       puntos: "294", 
       poles: "0",
       pilotos: [],
});
addEquipo({ teamName: "Alfa Romeo", 
    vehiculo: "https://cdn-7.motorsport.com/images/amp/68yN5e80/s6/alfa-romeo-c43-1.jpg", 
    logo: "https://th.bing.com/th/id/OIP.meOInLqPERnpRCzL4TSVBAHaFO?w=287&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7", 
    lugar: "Hinwil, Switzerland", 
    jefe: "Alessandro Alunni Bravi", 
    president: "James Key",
    chasis: "C43",
     motor: "Ferrari", 
     debut: "1950",
     campeonatos: "0",
      carreras: "110", 
      victorias: "10",
      podios: "26",
       puntos: "180", 
       poles: "12",
       pilotos: [],
});
addEquipo({ teamName: "Haas F1 Team", 
    vehiculo: "https://cdn-1.motorsport.com/images/amp/Y99dz3XY/s6/haas-vf-23-1.jpg", 
    logo: "https://th.bing.com/th/id/OIP.p6Pv1qVw8ftP_SflahUboAHaE7?w=233&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", 
    lugar: "Kannapolis, United States", 
    jefe: "Guenther Steiner", 
    president: "Simone Resta",
    chasis: "VF-23",
     motor: "Ferrari", 
     debut: "2014",
     campeonatos: "0",
      carreras: "166", 
      victorias: "0",
      podios: "0",
       puntos: "234", 
       poles: "1",
       pilotos: [],
});

export function addEquipo(equipo) {

    let id = nextId++;
    equipo.id = id.toString();
    equipos.set(equipo.id, equipo);
    return equipo.id;
}

export function addPiloto(id, piloto) {

    const equipo = equipos.get(id);
    equipo.pilotos.push(piloto);

}


export function deleteEquipo(id){
    equipos.delete(id);
}

export function getEquipos(from, to){
    let values = [...equipos.values()];
    if(from !== undefined) {
        return values.slice(from, to);
    } else {
        return values;
    }
}

export function getEquipo(id){
    return equipos.get(id);
}

export function editEquipo(id, equipo){

    equipo.id = id.toString();
    equipos.delete(equipo.id);
    equipos.set(equipo.id, equipo);

}

export function getPilotos(id) {
    let equipo = equipos.get(id);
    return equipo.pilotos;
}