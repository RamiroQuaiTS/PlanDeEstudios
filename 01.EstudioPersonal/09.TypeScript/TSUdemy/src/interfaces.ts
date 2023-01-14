interface Animal
{
    nombre:string,
    caminar():void,
    comer():void,
    ruido():void
}

class Perro implements Animal{
    nombre:string

    constructor(_nombre:string){
        this.nombre = _nombre;
    }
    caminar(): void {
        console.log("Perro caminando")
    }
    comer(): void {
        console.log("Perro comiendo")
    }
    ruido(): void {
        console.log("Guau")
    }
}

class Gato implements Animal{
    nombre:string

    constructor(_nombre:string){
        this.nombre = _nombre;
    }
    caminar(): void {
        console.log("Gato caminando")
    }
    comer(): void {
        console.log("Gato comiendo")
    }
    ruido(): void {
        console.log("Miau")
    }
}

class DicionarioDatos{
    nombre:string="Diccionario de datos";
    [id:string]:string    
}

let diccionarioDatos = new DicionarioDatos()
diccionarioDatos['a1'] = "usaurioUno"
diccionarioDatos['a2'] = "usaurioDos"
diccionarioDatos.a3 = "usaurioTres"

console.log(diccionarioDatos)

interface KeyValue<T,V>{
    key : T,
    value : V
}

class Product{
    id: number
    nombre: string
    
    constructor(_id:number, _nombre:string){
        this.id = _id
        this.nombre = _nombre
    }
}

interface Stock{
    cantidad:number
}

function fetchPrducto() : KeyValue<number, Product>{
    return{
        key: 1,
        value:{id: 1, nombre: "Celular"}
    }
}

function fetchStock() : KeyValue<number, Stock>{
    return{
        key: 1,
        value:{cantidad:500}
    }
}

console.log(fetchPrducto())
console.log(fetchStock())