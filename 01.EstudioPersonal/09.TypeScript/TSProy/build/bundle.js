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
console.log("Hola desde app2.js");
