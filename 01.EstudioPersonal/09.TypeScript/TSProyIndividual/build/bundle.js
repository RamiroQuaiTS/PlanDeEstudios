"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function DecoradorClase(target) {
    target.prototype.PaisAleatorio = function () {
        console.log("Hola Argelia");
    };
}
function DecoradorMetodo(esModifcables) {
    return function (target, nombrePropiedad, desriptor) {
        desriptor.writable = esModifcables;
    };
}
function DecoradorPropiedad(esModifcables) {
    return function (target, nombrePropiedad) {
        let descriptor = {
            writable: esModifcables
        };
        return descriptor;
    };
}
let Pais = class Pais {
    constructor(_nombre) {
        this.nombre = _nombre;
    }
    EnviarMsj() {
        console.log("Enviano mensaje desde función con decorador de método");
    }
};
__decorate([
    DecoradorPropiedad(true)
], Pais.prototype, "nombre", void 0);
__decorate([
    DecoradorMetodo(true)
], Pais.prototype, "EnviarMsj", null);
Pais = __decorate([
    DecoradorClase
], Pais);
let pais = new Pais("Ramiro");
//pais.PaisAleatorio();
pais.EnviarMsj = function () {
    console.log("Se manda msj desde la función editada");
};
pais.EnviarMsj();
console.log(pais.nombre);
