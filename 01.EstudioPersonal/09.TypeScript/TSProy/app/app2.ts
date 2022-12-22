function Saluda():void{
    console.log("Hola desde una funcion void")
}
Saluda();

let cadena:any = "Esto es una cadena";
let longitud:number = (<string>cadena).length;
let longitud2:number = (cadena as string).length;
console.log(longitud);

const NOMBREUSUSARIO = "Ramiro";

if (true) {
    const NOMBREUSUSARIO = "ramiro2";
} 

let juegoss:string[]= ["MGS", "GoW", "LoU"];
let [juegUno, Juego2, Juego3] = juegoss;

console.log(juegUno);

let persona : [string[], number, string, string[]];
persona = [["Ramiro", "Tello"], 36, "Hombre", ["Jugar", "Carros"]];

let [nombreP, edadP, generoP, interesP] = persona;

console.log(nombreP[1]);
console.log(interesP);

let personaObjeto = {
    nombrePO:["Ramiro", "Tello"],
    edadPO:35,
    generoPO:"Hombre",
    interesPO:["Jugar", "Pegarle a la pera"]
}

let {nombrePO:nombreCompletoObjeto, edadPO, generoPO, interesPO} = personaObjeto;

console.log(nombreCompletoObjeto);