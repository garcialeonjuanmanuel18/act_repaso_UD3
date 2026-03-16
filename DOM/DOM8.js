/**
 * Desactivador: Pedir al usuario una clave. Si es incorrecta, poner un botón
 * en modo "deshabilitado" con .disabled = true.
 */

let clave = prompt("dime la clave");
let submit = document.getElementById("submit");

if(clave!=="alejandria18"){
    submit.disabled = true;
}