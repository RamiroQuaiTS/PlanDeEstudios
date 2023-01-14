"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function log(a, b) {
    b = b;
    return a;
}
console.log(log(12, "Ramiro Tello"));
console.log(log("RamiroTello", 7));
function fetchData(recurso) {
    return __awaiter(this, void 0, void 0, function* () {
        const respuesta = yield fetch(`${recurso}`);
        return respuesta.json();
    });
}
function usuario() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = fetchData('usuario');
    });
}
let obj = new Object();
class Programador {
    constructor(t) {
        this.computador = t;
    }
}
let progUno = new Programador({ encender: () => { }, apagar: () => { } });
let progDos = new Programador({ suspender: () => { } });
function print(t) {
    console.log(t);
    return t;
}
print({ id: 15, nombre: "Ramiro Tello", hola: "string" });
class Equipos {
    constructor(id, nombre) {
        this.id = id;
        this.nombre = nombre;
    }
}
function printEquipos(eq) {
    console.log(eq);
    return eq;
}
printEquipos({ id: 52, nombre: "chivas", ciudad: "Gdl" });
class Estado {
    constructor() {
        this.data = [];
    }
    agregar(t) {
        this.data.push(t);
    }
    getEstado() {
        return this.data;
    }
}
class EliminarEstado extends Estado {
    eliminar(id) {
        this.data = this.data.filter(x => x.id !== id);
    }
}
class EstadoUsuarios extends Estado {
    reiniciarContrasenia() {
    }
}
const ReCsenia = new EstadoUsuarios();
ReCsenia.reiniciarContrasenia();
const Est = new EliminarEstado();
Est.getEstado();
const calendario = { id: 15, fuente: "google", duenio: "yo" };
function getProp(objeto, property) {
    return objeto[property];
}
getProp(calendario, 'id');
getProp(calendario, 'fuente');
const obje = getProp(calendario, 'fuente');
console.log(obje);
const keyVal = {
    'String': 42
};
const p = {
    x: 1,
    y: 65,
};
const p2 = {
    x: 2
};
const p3 = {
    y: 2
};
const p4 = {
    x: 2,
    y: 4
};
const p5 = {
    x: 1,
    y: 2,
    desc: "variable"
};
//# sourceMappingURL=genericos.js.map