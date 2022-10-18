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