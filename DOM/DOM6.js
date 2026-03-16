/**
 * Pre-llenado de Formulario: Pedir un correo y que aparezca
 * automáticamente dentro de un <input> usando .value.
 */

let correoPrompt = prompt("dime tu correo");
let correo = document.getElementById("correo");
correo.value = correoPrompt; 