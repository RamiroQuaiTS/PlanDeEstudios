class Persona{
    private nombre:string;
    apellido:string;
    edad:number;

    constructor(_nombre:string, _apellido:string, _edad:number){
        this.nombre = _nombre;
        this.apellido = _apellido;
        this.edad = _edad;
    }

    protected ObtenerNombre():String{
        return this.nombre;
    }

    ImprimirNombre():String{
        return this.nombre;
    }
}

class Empleado extends Persona{
    idEmpleado:number;

    constructor(_idEmpleado:number,_nombre:string, _apellido:string, _edad:number){
        super(_nombre, _apellido, _edad);
        this.idEmpleado = _idEmpleado;
        
    }

}

class Estudiante extends Persona{
    idEstudiante:number;
    constructor(_idEstudiante:number,_nombre:string, _apellido:string, _edad:number){
        super(_nombre, _apellido, _edad);
        this.idEstudiante = _idEstudiante;
    }
}

let empleado = new Empleado(1,"Ramiro desde clase con variable privada", "Tello", 36);
console.log( empleado.ImprimirNombre());

class Cliente {
    
    private _nombre? : string;
    public get nombre() : string {
        if (this._nombre) {
            return this._nombre;    
        }
        return "Valor por defecto";
        
    }
    public set nombre(v : string) {
        this._nombre = v;
    }
    
    constructor(nombreCliente?:string) {       
        this._nombre = nombreCliente; 
    }
}

let cliente =  new Cliente();
console.log(cliente.nombre);

///Abstracto
abstract class Animal{
    abstract Ruido():void;
}
class Gato extends Animal{
    Ruido(): void {
        console.log("Miau")
    }
}
class Perro extends Animal{
    Ruido(): void {
        console.log("Guau")
    }
    brinca(){

    }
}

let perro = new Perro()
perro.Ruido();

