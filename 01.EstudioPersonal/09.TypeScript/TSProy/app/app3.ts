function obtenerValor(objecto :{nombre: string, cantidad?: number })
{
let{nombre, cantidad} = objecto;
console.log(nombre);
console.log(cantidad);    
}

let juegoObj={
    nombre: "metalgear",
    //cantidad: 5
}

obtenerValor(juegoObj);

function saludar(nombre:string, genero:string = "SG")
{
    console.log("tu nombres es: " + nombre + " y tu genero es: " + genero);
}

saludar("Ramiro", "MA");