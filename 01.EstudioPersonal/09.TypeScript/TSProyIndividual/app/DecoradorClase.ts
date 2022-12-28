function DecoradorClase(target:Function) {
    target.prototype.PaisAleatorio = function(){
        console.log("Hola Argelia");
    }
}
function DecoradorMetodo(esModifcables:boolean){
    return function(target:any,
                    nombrePropiedad:string,
                    desriptor: PropertyDescriptor){
                        desriptor.writable = esModifcables;
                    }
}

function DecoradorPropiedad(esModifcables:boolean){
    return function(target:any,
                    nombrePropiedad:string):any{
                        let descriptor:PropertyDescriptor = {
                            writable:esModifcables
                        }                        
                        return descriptor;
                    }                    
}

@DecoradorClase
class Pais {
    @DecoradorPropiedad(true)
    nombre:string;
    constructor(_nombre:string){
        this.nombre = _nombre;
    }    
    
    @DecoradorMetodo(true)

    EnviarMsj():void{
        console.log("Enviano mensaje desde función con decorador de método");
    }
}

let pais = new Pais("Ramiro");
//pais.PaisAleatorio();
pais.EnviarMsj = function(){
    console.log("Se manda msj desde la función editada");
}
pais.EnviarMsj();
console.log(pais.nombre);