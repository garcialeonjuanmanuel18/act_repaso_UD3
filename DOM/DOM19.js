/**
 * Cambio de Fuente
Pedir el nombre de una fuente (ej: Arial, Courier) y aplicarla con .style.fontFamily.
 */
let relleno = prompt("dime un tipo de fuente");
let texto = document.getElementById("texto");

texto.style.fontFamily=relleno;