"use strict";
class Generales {
    constructor(nombre, descri, feCrea, crePor) {
        this.nombre = nombre;
        this.descri = descri;
        this.feCrea = feCrea;
        this.crePor = crePor;
    }
    getFecha() {
        return this.feCrea.getFullYear();
    }
    descripCompleta() {
        return this.nombre + "-" + this.descri;
    }
}
class Producto extends Generales {
    constructor(stock, id, nombre, descri, feCrea, crePor) {
        super(nombre, descri, feCrea, crePor);
        this.stock = stock;
        this.id = id;
    }
    descripCompleta() {
        return "Este es un producto: " + super.descripCompleta();
    }
    obtenerFechaCreacion() {
        return super.feCrea;
    }
    obtenerCreadoPor() {
        return super.crePor;
    }
    guardar() {
    }
}
class Categoria extends Generales {
    constructor(nombre, descri, feCrea, crePor) {
        super(nombre, descri, feCrea, crePor);
        this.producto = [];
    }
    agregarProducto(prd) {
        this.producto.push(prd);
    }
    descripCompleta() {
        return "Este es una categoría: " + super.descripCompleta();
    }
    guardar() {
    }
}
let producto = new Producto(10, 1, "Huawei", "P30", new Date(), 19734);
let producto2 = new Producto(122, 1, "iPhone", "12", new Date(), 19734);
console.log(producto.getFecha());
let categori = new Categoria("Celular", "Todos los equipos de celular,", new Date(), 19734);
categori.agregarProducto(producto);
categori.agregarProducto(producto2);
console.log(producto);
console.log(categori);
console.log(producto.descripCompleta());
console.log(categori.descripCompleta());
//# sourceMappingURL=herencia.js.map