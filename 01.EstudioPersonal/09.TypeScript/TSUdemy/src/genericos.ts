function log<T, V>(a: T, b:V):T{
    b = b
    return a
}

console.log(log<number, string>(12,"Ramiro Tello"))
console.log(log<string,number>("RamiroTello",7))

async function fetchData<T>(recurso:string): Promise<T>{
    const respuesta = await fetch(`${recurso}`)
    return respuesta.json()
}

type Usuario = {
    id: number
    nombre: string
}

async function usuario() {
    const user = fetchData<Usuario>('usuario')    
}

type Computador = {
    encender: () => void,
    apagar: () => void
}

type Aparato = {
    suspender : () => void
}

let obj = new Object();

class Programador<T>{
    computador:T;

    constructor(t:T){
        this.computador = t
    }

}

let progUno = new Programador<Computador>({encender: () => {}, apagar: () => {}})
let progDos = new Programador<Aparato>({suspender: () => {}})


interface UsuarioInter{
    id:number
    nombre:string
}

function print<T extends UsuarioInter>(t:T):T{
    console.log(t)
    return t;
}

print({id:15, nombre:"Ramiro Tello", hola:"string"})

class Equipos{
    constructor(public id:number, public nombre:string){}
}

function printEquipos<T extends Equipos>(eq:T):T{
    console.log(eq)
    return eq
}

printEquipos({id:52, nombre:"chivas", ciudad:"Gdl"})

class Estado<T>
{
    protected data: T[] = [];
    agregar(t:T){
        this.data.push(t)
    }  
    getEstado(){
        return this.data
    }
}

type ObjID = {id:number}

class EliminarEstado<T extends ObjID> extends Estado<T>{
    eliminar(id: number){
        this.data = this.data.filter(x => x.id !== id)
    }
}

class EstadoUsuarios extends Estado<Usuario>{
    reiniciarContrasenia(){
        //
    }
}

const ReCsenia = new EstadoUsuarios()
ReCsenia.reiniciarContrasenia();

const Est = new EliminarEstado<Usuario>()

Est.getEstado()

type Calendario = {
    id:number;
    fuente: string;
    duenio: string;
}

const calendario: Calendario = {id:15, fuente:"google", duenio:"yo"}

function getProp<T>(objeto: T, property: keyof T): unknown{
    return objeto[property]
}

getProp<Calendario>(calendario, 'id')
getProp<Calendario>(calendario, 'fuente')

const obje = getProp<Calendario>(calendario, 'fuente')
console.log(obje)

type punto = {
    x: number;
    y: number;
    desc?: string
}

type puntoOpcionalesTodo = Partial<punto>
type puntoRequereidoTodo = Required<punto>

const keyVal: Record<string, number> = {
    'String' : 42
}

type kv = {[key:string]: number}
 
const p: Omit<punto, 'desc'> = {
    x: 1,
    y: 65,
}

const p2: Pick<punto, 'x'> = {
    x : 2
} 


const p3: Pick<punto, 'y'> = {
    y : 2
} 


const p4: Pick<punto, 'x' | 'y'> = {
    x : 2,
    y : 4
} 

const p5: Readonly<punto>= {
    x:1,
    y:2,
    desc :"variable"
}