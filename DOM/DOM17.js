/**
 * Color Aleatorio
Al hacer clic en un botón, cambiar el color de un <h1> a un color aleatorio.
 */

let titulo = document.getElementById("titulo");
let botonColor = document.getElementById("botonColor");

function cambiarColor(){
    titulo.style.backgroundColor = "red";
}

botonColor.addEventListener("click", cambiarColor);