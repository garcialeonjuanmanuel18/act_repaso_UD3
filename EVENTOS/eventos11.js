/**
 * Crea un botón que, al hacerle clic, muestre un alert con el
mensaje "¡Hola Mundo!".
 */
let botonR = document.getElementById("botonR");

function saludo(){
    alert("Hola inmundo");
}

botonR.addEventListener("click", saludo);