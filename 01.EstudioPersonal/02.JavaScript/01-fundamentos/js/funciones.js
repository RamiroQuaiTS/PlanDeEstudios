const sumaFlecha = (a,b) =>{
    return a+b;
}

const sumaFlechaUnaLinea = (a,b) => (a+b) > 20 ? "mayor" : "menor";
console.log(sumaFlechaUnaLinea(51,5))

const getAleatorio = () => Math.random();
console.log(getAleatorio());

const concatenaNombre = (nombre, apellido) => ({nombre, apellido});
console.log(concatenaNombre("Ramiro", "Tello"));

const imprimeArgumentos = (...args) => ({args});

const argumentos = imprimeArgumentos(2, true, "Ramiroks");
console.log(argumentos);

const snake = {
    nombre: "Jhon",
    edad: 44,
    juegos: ["MGS1", "MGS2", "Snake eater"],
}

//destructuración lo cual es tomar el objeto y trabjar con sus svalores
const imprimePropiedades = ({nombre, edad = 19, juegos}) =>{
    console.log({nombre});
    console.log({edad});
    console.log({juegos});
}

imprimePropiedades(snake);

const frutas = ["Manzana","Plátano","Pera"];
const frutas2 = [...frutas];

frutas2.push("Piña");

console.table({frutas,frutas2})


const diaLetras = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sábado"];

const diasLetrasOBJ = {
    0:"Domingo",
    1:"Lunes",
    2:"Martes",
    3:"Miercoles",
    4:"Jueves",
    5:"Viernes",
    6:"Sábado",
}

console.log(diasLetrasOBJ[1]);

const regresaTrue = () =>{
    console.log("Regersa true");
    return true;
}

const regresaFalse = () => {
    console.log("Regresa false");
    return false;
}

const dia = 2;
const horaActual = 8;

const horaApertura = ([0,6].includes(dia)) ? 11 : 9;

const nensajeHora = (horaActual >= horaApertura) ? "Estamos abiertos" : "Esta cerrado";

console.log(horaApertura, nensajeHora);

const calificacion = 5;
const calificacionResultado = calificacion >= 9 ? "A+" :
                              calificacion >= 8 ? "A"  :
                              calificacion >= 7 ? "B+" :
                              calificacion >= 6 ? "C"  : "F"

console.log(calificacionResultado);