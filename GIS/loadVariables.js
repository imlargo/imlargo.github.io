//Definir funcion de carga

/*
async function load(path) {
    try {
        const response = await fetch(path);
        return await response.json();
    } catch (error) {
        console.log('Error:', error);
        throw error;
    }
}
*/

function load(path) {
    return fetch(path)
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.log(error);
            return null;
        });
}


let CapaBloquePetrolero;
let LayerPlano;
let capaDepartamentos;
let FondoLayer;
let cpaPdet;
let PozosPretoleros;
let reservasCap;
let resguardos;
let TitulosMineros;
let densidadCoca;
let capaFluvialIlegal;
let capaRutaArmas;
let capaContrabando;
let capaPuntosNarcotrafico;
let capaRutaMigrantes;


//Cargar las variables de cada base de datos (Luego se puede cambiar a algo mas eficiente)
//Layers
load('./layers/BloquePetrolero.json').then(data => { CapaBloquePetrolero = data });
load('./layers/Croquis.json').then(data => { LayerPlano = data });
load('./layers/Departamentos.json').then(data => { capaDepartamentos = data });
load('./layers/Fondo.json').then(data => { FondoLayer = data });
load('./layers/MunicipiosPDET.json').then(data => { cpaPdet = data });
load('./layers/PozosPet.json').then(data => { PozosPretoleros = data });
load('./layers/ReservasCap.json').then(data => { reservasCap = data });
load('./layers/Resguardos.json').then(data => { resguardos = data });
load('./layers/TitulosMin.json').then(data => { TitulosMineros = data });

//ECOIlegal
load("./layers/ECOIlegal/desidadCoca.json").then(data => { densidadCoca = data });
load("./layers/ECOIlegal/FluvilesIlegal.json").then(data => { capaFluvialIlegal = data });
load("./layers/ECOIlegal/IngArmas.json").then(data => { capaRutaArmas = data });
load("./layers/ECOIlegal/PuntosContrabando.json").then(data => { capaContrabando = data });
load("./layers/ECOIlegal/PuntosNarcotrafico.json").then(data => { capaPuntosNarcotrafico = data });
load("./layers/ECOIlegal/RutaMigrantes.json").then(data => { capaRutaMigrantes = data });


/*
//Cargar las variables de cada base de datos (Luego se puede cambiar a algo mas eficiente)
(async () => { 
    //Layers
    CapaBloquePetrolero = await load('./layers/BloquePetrolero.json');
    LayerPlano = await load('./layers/Croquis.json');
    capaDepartamentos = await load('./layers/Departamentos.json');
    FondoLayer = await load('./layers/Fondo.json');
    cpaPdet = await load('./layers/MunicipiosPDET.json');
    PozosPretoleros = await load('./layers/PozosPet.json');
    reservasCap = await load('./layers/ReservasCap.json');
    resguardos = await load('./layers/Resguardos.json');
    TitulosMineros = await load('./layers/TitulosMin.json');   
    
    //ECOIlegal
    densidadCoca = await load("./layers/ECOIlegal/desidadCoca.json");
    capaFluvialIlegal = await load("./layers/ECOIlegal/FluvilesIlegal.json");
    capaRutaArmas = await load("./layers/ECOIlegal/IngArmas.json");
    capaContrabando = await load("./layers/ECOIlegal/PuntosContrabando.json");
    capaPuntosNarcotrafico = await load("./layers/ECOIlegal/PuntosNarcotrafico.json");
    capaRutaMigrantes = await load("./layers/ECOIlegal/RutaMigrantes.json");
})();
*/
//Los archivos en los que se dividio la informacion ambiental inicializan 3 variables q tienen informacion en formato de string
//luego se concadenan en la variable ambiental y se convierten en el objeto con toda la informacion
//Hace lo mismo que tener el archivo gigante, pero se dividio la informacion por el uso del servidor
let ambiental = JSON.parse(("{" + data1 + data2 +  data3 + "}"));

















