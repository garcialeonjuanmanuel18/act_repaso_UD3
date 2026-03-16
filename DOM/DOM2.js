/**
 * Semáforo Manual: Pedir un color (rojo, amarillo, verde) y cambiar el fondo
 * de un <div> circular con .style.backgroundColor.
 */

let color = prompt("Dime un color para el semaforo, por ejemplo green, yellow o red");
let contenedorCircular = document.getElementById("contenedorCircular");
contenedorCircular.style.backgroundColor=color;

