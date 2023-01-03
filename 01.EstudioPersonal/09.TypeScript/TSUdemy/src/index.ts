// let mensaje = "ramiro"
// console.log(mensaje);

// mensaje ="Ramiro Tello Santoscoy";
// console.log(mensaje);

// console.log(typeof []);

// /**
//  * Tipos de datos
//  * number
//  * string 
//  * boolean
//  * null
//  * undefined
//  * object (arreglo)
//  * function
//  * 
//  * Tipos de datos TS
//  * any (usar lo menos posible)
//  * unknown
//  * never
//  * arrays
//  * tuplas
//  * enums
//  * 
//  * tipos inferdidos que son los que ya TpyeScrips ya sabe que tipo es esto se hace al inicializar la variable 
//  * let numero = 3;
//  */

// const enum EstatusPeticin {Espera, Leyendo, Correcto, Error}

// const estatus = EstatusPeticin.Error;
// console.log(estatus)

// const funcion:(Nu:number) => number = (numeroUno:number) =>{
//     return numeroUno;
// }

// function calcula(edad:number):string{
//     if (edad >= 18) {
//         return "Mayor de edad"
//     }
//     return "Menor de edad"
// }

// let msjCalcula:string = calcula(18);
// console.log(msjCalcula);

// function sumaNumero(nUno: number | string):number{
//     if (typeof nUno === 'number') {
//         return nUno + 2
//     }
//     return parseInt(nUno) + 2
// }

// console.log(sumaNumero(2))
// console.log(sumaNumero(3))

// function getUsuario(id:number){
//     if (id > 0) {
//         return {
//             id: 1,
//             nombre: 'Ramiro',
//             fechaAlta: new Date()
//         }
//     }
//     return null
// }

// const usuario = getUsuario(1)

// console.log("El usuario " , usuario?.nombre , " se dio de alta el ", usuario?.fechaAlta)

class Personaje{
    readonly id: number;
    nombre: string;
    private _nivel: number;
    private _hp: number;
    rango?: string;

    constructor(id:number, nombre:string, nivel:number, hp:number){
        this.id = id;
        this.nombre = nombre;
        this._nivel = nivel;
        this._hp = hp;
    }

    subirNivel():void {
        this._nivel++;
    }

    subirHP(aumentoHP:number){
        this._hp = this._hp + aumentoHP;
    }

}

const personaje = new Personaje(1, "Ramiro", 0, 100);
personaje.subirNivel()
personaje.subirHP(100)
console.log(personaje);