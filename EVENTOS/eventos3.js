/**
 * Interruptor de texto: Crea un párrafo que diga "Encendido". Al hacer clic
sobre él, debe cambiar a "Apagado" (y viceversa).
 */

let parrafo = document.getElementById("parrafo");

function interruptor(){
    parrafo.innerText = "apagado";
}

parrafo.addEventListener("click", interruptor);