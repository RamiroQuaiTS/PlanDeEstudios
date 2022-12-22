"use strict";
console.log("Hola desde app.js aquí se hará un for con una lista");
let lista = ["Play", "Switch", "xbox"];
for (const iterator of lista) {
    console.log(iterator);
}
let estadoCivil = false;
estadoCivil = obtenerEstadoCivil();
function obtenerEstadoCivil() {
    return true;
}
if (estadoCivil) {
    console.log("Casado");
}
else {
    console.log("Solero");
}
let numero = 12.8;
let edad;
edad = obtenerEdad();
if (edad > 18) {
    console.log("Mayor de edad");
}
else {
    console.log("Menor de edad");
}
function obtenerEdad() {
    return 18;
}
let nombre = "Ramiro";
let appellido = "Tello Santoscoy";
let nombreCompleto = `${nombre} ${appellido}`;
console.log(nombreCompleto);
let numeros = [1, 2, 3, 4, 5, 6];
numeros.push(7);
let juegos = ["Play", "Switch", "xbox"];
juegos.push("steam");
console.log(`${juegos[0]} ${numeros[4]}`);
let tuple = ["", false, 0];
console.log(tuple[1]);
tuple = ["ramiro", true, 36];
console.log(tuple[0]);
var estado;
(function (estado) {
    estado[estado["activo"] = 1] = "activo";
    estado[estado["inactivo"] = 0] = "inactivo";
    estado[estado["espera"] = 2] = "espera";
    estado[estado["borrado"] = 3] = "borrado";
})(estado || (estado = {}));
console.log(estado.inactivo);
let cualquerValor;
cualquerValor = true;
console.log(cualquerValor);
cualquerValor = "Ramiro";
console.log(cualquerValor);
function Saluda() {
    console.log("Hola desde una funcion void");
}
Saluda();
let cadena = "Esto es una cadena";
let longitud = cadena.length;
let longitud2 = cadena.length;
console.log(longitud);
const NOMBREUSUSARIO = "Ramiro";
if (true) {
    const NOMBREUSUSARIO = "ramiro2";
}
let juegoss = ["MGS", "GoW", "LoU"];
let [juegUno, Juego2, Juego3] = juegoss;
console.log(juegUno);
let persona;
persona = [["Ramiro", "Tello"], 36, "Hombre", ["Jugar", "Carros"]];
let [nombreP, edadP, generoP, interesP] = persona;
console.log(nombreP[1]);
console.log(interesP);
let personaObjeto = {
    nombrePO: ["Ramiro", "Tello"],
    edadPO: 35,
    generoPO: "Hombre",
    interesPO: ["Jugar", "Pegarle a la pera"]
};
let { nombrePO: nombreCompletoObjeto, edadPO, generoPO, interesPO } = personaObjeto;
console.log(nombreCompletoObjeto);
