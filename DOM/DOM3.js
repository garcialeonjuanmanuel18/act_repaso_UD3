/**
 * Título Gigante: Pedir un número y asignar ese valor al tamaño de fuente
 * (.style.fontSize) de un texto.
 */

let numero = prompt("dime un numero positivo");
let texto = document.getElementById("texto");

if(numero > 0){
    texto.style.fontSize = numero + "px";
}
else{
    alert("El número no es válido");
}