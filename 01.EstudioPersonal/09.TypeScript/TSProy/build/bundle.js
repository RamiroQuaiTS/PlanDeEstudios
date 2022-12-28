"use strict";
var ClienteTS;
(function (ClienteTS) {
    function saluda() {
        return "Hola desde cliente";
    }
    ClienteTS.saluda = saluda;
})(ClienteTS || (ClienteTS = {}));
class Pais {
    constructor() {
    }
    Ruido() {
        console.log("Miau");
    }
}
let pais = new Pais();
pais.Ruido();
var EmpleadoTS;
(function (EmpleadoTS) {
    function saluda() {
        return "Hola desde empleado";
    }
    EmpleadoTS.saluda = saluda;
})(EmpleadoTS || (EmpleadoTS = {}));
let prueba = { entero: 25, nombre: "Hola" };
class Utilidad {
    Sumar(numUno, numDos) {
        this.total = numUno + numDos;
        return this.total;
    }
    Restar(numUno, numDos) {
        return numUno - numDos;
    }
}
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
let tuple = ["", true, 0];
console.log(tuple[1]);
tuple = ["ramiro", false, 36];
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
let juego = {
    nombre: "Megal gear",
    consolas: "Play station",
    anio: 200
};
let carro = {
    color: "Rojo",
    marca: "VW",
    anio: 1992
};
let agrupar = Object.assign(Object.assign({}, juego), carro);
console.log(agrupar);
function obtenerValor(objecto) {
    let { nombre, cantidad } = objecto;
    console.log(nombre);
    console.log(cantidad);
}
let juegoObj = {
    nombre: "metalgear",
    //cantidad: 5
};
obtenerValor(juegoObj);
function saludar(nombre, genero = "SG") {
    console.log("tu nombres es: " + nombre + " y tu genero es: " + genero);
}
saludar("Ramiro", "MA");
class Consola {
    constructor(_color, _nombre, _empresa, _anio) {
        this._color = _color;
        this.nombre = "Play Station 5";
        this._color = _color;
        this.nombre = _nombre;
        this.empresa = _empresa;
        this.anio = _anio;
    }
}
let consola = new Consola("gris", "Play Station 4", "Sony", 1990);
console.log(consola);
class Persona {
    constructor(_nombre, _apellido, _edad) {
        this.nombre = _nombre;
        this.apellido = _apellido;
        this.edad = _edad;
    }
    ObtenerNombre() {
        return this.nombre;
    }
    ImprimirNombre() {
        return this.nombre;
    }
}
class Empleado extends Persona {
    constructor(_idEmpleado, _nombre, _apellido, _edad) {
        super(_nombre, _apellido, _edad);
        this.idEmpleado = _idEmpleado;
    }
}
class Estudiante extends Persona {
    constructor(_idEstudiante, _nombre, _apellido, _edad) {
        super(_nombre, _apellido, _edad);
        this.idEstudiante = _idEstudiante;
    }
}
let empleado = new Empleado(1, "Ramiro desde clase con variable privada", "Tello", 36);
console.log(empleado.ImprimirNombre());
class Cliente {
    get nombre() {
        if (this._nombre) {
            return this._nombre;
        }
        return "Valor por defecto";
    }
    set nombre(v) {
        this._nombre = v;
    }
    constructor(nombreCliente) {
        this._nombre = nombreCliente;
    }
}
let cliente = new Cliente();
console.log(cliente.nombre);
///Abstracto
class Animal {
}
class Gato extends Animal {
    Ruido() {
        console.log("Miau");
    }
}
class Perro extends Animal {
    Ruido() {
        console.log("Guau");
    }
    brinca() {
    }
}
let perro = new Perro();
perro.Ruido();
///<reference path="ClienteNS.ts" />
///<reference path="EmpleadoNS.ts" />
let saludo = ClienteTS.saluda();
console.log(saludo);
let saludo2 = EmpleadoTS.saluda();
console.log(saludo2);
