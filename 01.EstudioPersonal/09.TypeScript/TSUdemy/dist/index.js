"use strict";
class Personaje {
    constructor(id, nombre, _nivel, _hp) {
        this.id = id;
        this.nombre = nombre;
        this._nivel = _nivel;
        this._hp = _hp;
    }
    subirNivel() {
        this._nivel++;
    }
    subirHP(aumentoHP) {
        this._hp = this._hp + aumentoHP;
    }
    static aumentarPersonaje() {
        Personaje.numeroPesonajes++;
    }
    get hp() {
        return this._hp;
    }
    static getNumeroPersonajes() {
        return Personaje.numeroPesonajes;
    }
    set hp(hpNuevo) {
        this._hp += hpNuevo;
    }
}
Personaje.numeroPesonajes = 0;
const personaje = new Personaje(1, "Ramiro", 0, 100);
personaje.subirNivel();
personaje.subirHP(100);
Personaje.aumentarPersonaje();
Personaje.aumentarPersonaje();
Personaje.aumentarPersonaje();
Personaje.aumentarPersonaje();
console.log(personaje);
console.log(personaje.hp);
personaje.hp = 12;
console.log(personaje.hp);
const personajeNuevo = new Personaje(2, "Diego", 10, 100);
console.log(Personaje.getNumeroPersonajes());
//# sourceMappingURL=index.js.map