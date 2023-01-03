"use strict";
class Personaje {
    constructor(id, nombre, nivel, hp) {
        this.id = id;
        this.nombre = nombre;
        this.nivel = nivel;
        this.hp = hp;
    }
    subirNivel() {
        this.nivel++;
    }
    subirHP(aumentoHP) {
        this.hp = this.hp + aumentoHP;
    }
}
const personaje = new Personaje(1, "Ramiro", 0, 100);
personaje.subirNivel();
personaje.subirHP(100);
console.log(personaje);
//# sourceMappingURL=index.js.map