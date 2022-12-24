console.log("Hola desde app.js aquí se hará un for con una lista");
let lista:string[] = ["Play", "Switch", "xbox"];
for (const iterator of lista) {
    console.log(iterator);
}

let estadoCivil : boolean = false;
estadoCivil = obtenerEstadoCivil();

function obtenerEstadoCivil(){
    return true;
}

if (estadoCivil) {
    console.log("Casado");
} else {
    console.log("Solero");
}

let numero:number = 12.8;
let edad:number;

edad = obtenerEdad();

if (edad>18) {
    console.log("Mayor de edad");
}
else{
    console.log("Menor de edad");
}

function obtenerEdad(){
    return 18;
}

let nombre:string = "Ramiro";
let appellido:string = "Tello Santoscoy"
let nombreCompleto:string = `${nombre} ${appellido}`;

console.log(nombreCompleto);

let numeros = [1,2,3,4,5,6];
numeros.push(7);

let juegos = ["Play", "Switch", "xbox"];
juegos.push("steam");

console.log(`${juegos[0]} ${numeros[4]}`);

let tuple : [string , boolean, number] = ["", true, 0];
console.log(tuple[1]);
tuple = ["ramiro", false, 36];
console.log(tuple[0])

enum estado{
    activo = 1,
    inactivo = 0,
    espera = 2,
    borrado = 3
}

console.log (estado.inactivo);

let cualquerValor;

cualquerValor = true;
console.log(cualquerValor);
cualquerValor = "Ramiro";

console.log(cualquerValor);