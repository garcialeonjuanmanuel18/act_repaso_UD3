/**
 * Crea un botón que, al hacerle clic, muestre un alert con el
mensaje "¡Hola Mundo!".
 */

let boton = document.getElementById("boton");

function alertBoton(){
    alert("hola mundo");
}

boton.addEventListener("click", alertBoton);