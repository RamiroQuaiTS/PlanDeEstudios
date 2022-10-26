//Numeros aleatorios
var juegos = new Array("Camilos", "Karinos", "Mayros")
//Se toma un numero aleatorio
var numero = Math.random();
//Numero del 0 al tamaño del arreglo
numero*=juegos.length;
//Se trunca con floor
numero = Math.floor(numero);
//Se toma el juego que se va a jugar
document.write("Nos vamos a juntar en casa de los : " + juegos[numero+1]);