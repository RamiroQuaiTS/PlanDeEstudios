"use strict";
class Perro {
    constructor(_nombre) {
        this.nombre = _nombre;
    }
    caminar() {
        console.log("Perro caminando");
    }
    comer() {
        console.log("Perro comiendo");
    }
    ruido() {
        console.log("Guau");
    }
}
class Gato {
    constructor(_nombre) {
        this.nombre = _nombre;
    }
    caminar() {
        console.log("Gato caminando");
    }
    comer() {
        console.log("Gato comiendo");
    }
    ruido() {
        console.log("Miau");
    }
}
class DicionarioDatos {
    constructor() {
        this.nombre = "Diccionario de datos";
    }
}
let diccionarioDatos = new DicionarioDatos();
diccionarioDatos['a1'] = "usaurioUno";
diccionarioDatos['a2'] = "usaurioDos";
diccionarioDatos.a3 = "usaurioTres";
console.log(diccionarioDatos);
class Product {
    constructor(_id, _nombre) {
        this.id = _id;
        this.nombre = _nombre;
    }
}
function fetchPrducto() {
    return {
        key: 1,
        value: { id: 1, nombre: "Celular" }
    };
}
function fetchStock() {
    return {
        key: 1,
        value: { cantidad: 500 }
    };
}
console.log(fetchPrducto());
console.log(fetchStock());
//# sourceMappingURL=interfaces.js.map