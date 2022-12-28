interface Ifigura{
    entero:Number,
    nombre:String
}

let prueba:Ifigura={entero:25,nombre:"Hola"};

interface IMatematicas{
    total?:number;
    Sumar(numUno:number, numDos:number):number;
    Restar(numUno:number, numDos:number):number;
}

class Utilidad implements IMatematicas{
    total?: number;
    public Sumar(numUno: number, numDos: number): number {
        this.total =numUno + numDos;
        return this.total;
    }
    public Restar(numUno: number, numDos: number): number {
        return numUno-numDos;
    }
}