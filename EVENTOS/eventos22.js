/**
 * Cambio de color: Crea un botón que, al pulsarlo, cambie el color de fondo
del body a rojo.
 */

let botonRojo = document.getElementById("botonRojo");
let cuerpo = document.body;

function bodyRojo(){
    cuerpo.style.backgroundColor="red";
}

botonRojo.addEventListener("click", bodyRojo);