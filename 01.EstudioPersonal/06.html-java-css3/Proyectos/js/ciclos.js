var i = 0;
while(i<10){
    document.write(i+"<br>")
    i++;
}
var claveAcceso = "";
i=0;
do {
    claveAcceso=prompt("Agrega tu clave de acceso")
    i++
    if(i>3)
    {
        alert("Error en clave de acceso");
        break;
    }
} while (claveAcceso != "007");
(claveAcceso=="007")?alert("Bienvenido agente") : alert("No tiene acceso");;
for (var i = 10; i > 0; i--) {
    document.write(i+"<br>")    
}
for (var i = 0; i < 10; i++) {
    if (i%2==1) {
        continue;
    }
    document.write("el valor es: " + i + "<br>");
}