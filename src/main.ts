interface Grupo_musical {
    nombre_grupo: string;
    año_fundacion: number;
    activo: boolean;
    genero: string;
}

const negritayfondoverde = "font-size: 20px; font-weight: bold; background-color: green;";

const grupo1: Grupo_musical = {
    nombre_grupo:'The Beatles',
    año_fundacion: 1960,
    activo: true,
    genero: "Pop Rock",
};

const grupo2: Grupo_musical = {
    nombre_grupo: "Queen",
    año_fundacion: 1970,
    activo: false,
    genero: "Rock",

};

const grupo3: Grupo_musical = {
    nombre_grupo: "AC DC",
    año_fundacion: 1973,
    activo: true,
    genero: "Hard Rock",
}

const grupo4: Grupo_musical = {
    nombre_grupo: "Ludwig van Beethoven",
    año_fundacion: 1770,
    activo: false,
    genero: "Clásica",
}

const grupo5: Grupo_musical = {
    nombre_grupo: "The Rolling Stones",
    año_fundacion:1962,
    activo:true,
    genero: "Rock",
}

console.log ('• '+`%c${grupo1.nombre_grupo}`,negritayfondoverde, '/', `${grupo1.año_fundacion}`, '/', "Activo:", `${grupo1.activo}`, '/', `${grupo1.genero}`);
console.log ('• '+`%c${grupo2.nombre_grupo}`,negritayfondoverde, '/', `${grupo2.año_fundacion}`, '/', "Activo:", `${grupo2.activo}`, '/', `${grupo2.genero}`);
console.log ('• '+`%c${grupo3.nombre_grupo}`,negritayfondoverde, '/', `${grupo3.año_fundacion}`, '/', "Activo:", `${grupo3.activo}`, '/', `${grupo3.genero}`);
console.log ('• '+`%c${grupo4.nombre_grupo}`,negritayfondoverde, '/', `${grupo4.año_fundacion}`, '/', "Activo:", `${grupo4.activo}`, '/', `${grupo4.genero}`);console.log ('• '+`%c${grupo5.nombre_grupo}`,negritayfondoverde, '/', `${grupo5.año_fundacion}`, '/', "Activo:", `${grupo5.activo}`, '/', `${grupo5.genero}`);



    