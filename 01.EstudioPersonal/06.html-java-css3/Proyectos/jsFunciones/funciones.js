function saludo(){
    alert("Hola desde función");
}
function saludoConValor(nombre)
{
    var saludo = "Hola " + nombre;
    return saludo;
}
//Un solo parametro en funcion anonima
var x = a => a;
//Mas de un parametro en función anonima
var y = (a,b) => a+" "+b;
//Sin parametro
var z = () => "Hola sin prametos";
//Desde otr funcion
setTimeout(()=>alert("Hola desde otra funcion"),9000);
//Con mas de una linea
var yz = () => {
    var a=8;
    var b=9;
    return a+b;
}

//Creación de objetos, llenado y uso
var videojuegos = new Object()
videojuegos.nombre = "MetalGear"
videojuegos.genero = "Sigilo"
videojuegos.cronologia = [1964, 1970, 1974, 1975, 1984, 1995, 1999, 2005, 2007, 2014, 2018]
videojuegos.consolas = {mgs1: "ps1", mgs2: "ps2", mgs3: "ps2", mgs4: "ps3", mgs5: "ps4"}

document.write("Vamos a hablar del juego" + videojuegos.nombre + " el juego es de tipo "+ videojuegos.genero + " el metal gear solid 1 salio en la consola " + videojuegos.consolas.mgs1 + "<br>");

//Numeros aleatorios
var juegos = new Array("Mgs", "Sifu", "Fifa", "Moss", "Asseto corsa", "GT7", "hotWheels")
//Se toma un numero aleatorio
var numero = Math.random();
//Numero del 0 al tamaño del arreglo
numero*=juegos.length;
//Se trunca con floor
numero = Math.floor(numero);
//Se toma el juego que se va a jugar
document.write("Vamos a jugar el juego: " + juegos[numero+1]);