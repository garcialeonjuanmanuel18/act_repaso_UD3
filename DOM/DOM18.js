/**
 * Texto en Mayúsculas
Pedir una frase y mostrarla en un <p> en mayúsculas (.toUpperCase()).
 */

let relleno = prompt("dime una frase");
let frase = document.getElementById("frase");

relleno = relleno.toUpperCase();
frase.innerText=relleno;

