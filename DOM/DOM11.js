/**
 * Tabla de 1 fila: Pedir tres datos (Nombre, Apellido, Edad) y generar una fila
 * de tabla HTML con ellos.
 */

let nombre = prompt("dime tu nombre");
let apellido = prompt("apellido");
let edad = prompt("edad");

let divTabla = document.getElementById("divTabla");


let tabla = "<table border = '1' >";
for(let i = 0; i == 0; i++){
    tabla+="<tr>"
    tabla+="<td>"+nombre+"</td>"
    tabla+="<td>"+apellido+"</td>"
    tabla+="<td>"+edad+"</td>"
    tabla+="</tr>"
}
tabla+="</table>";

divTabla.innerHTML = tabla;



