/**
 * Bienvenida Personalizada: Pedir el nombre y ponerlo dentro de un <h1>
 * con .innerText.
 */

let nombre = prompt("Dime tu nombre");
let titulo = document.getElementById("titulo");

titulo.innerText = nombre;