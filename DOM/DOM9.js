/**
 * Contador de Caracteres: Pedir una frase y mostrar en un <p> cuántas
 * letras tiene usando .length.
 */

let frasePrompt = prompt("Die una frase");
let frase = document.getElementById("frase");
frase.innerText = frasePrompt.length;