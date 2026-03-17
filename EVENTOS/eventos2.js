/**
 * Cambio de color: Crea un botón que, al pulsarlo, cambie el color de fondo
del body a rojo.
 */

let boton = document.getElementById("boton");
let cuerpo = document.body;

function bodyRojo(){
    cuerpo.style.backgroundColor = "red";
}

addEventListener("click", bodyRojo);