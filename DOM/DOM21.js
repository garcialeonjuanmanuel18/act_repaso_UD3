/**
 * Mostrar Contraseña
Crear un input tipo password y un botón que lo convierta en texto (type="text").
 */

let contrasenia = document.getElementById("contrasenia");
let botonColor = document.getElementById("botonColor");

function cambiarInput(){
    contrasenia.type="text";
}

botonColor.addEventListener("click", cambiarInput);