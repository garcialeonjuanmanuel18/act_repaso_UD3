/**
 * Escribir en un input y mostrar el mismo texto en tiempo real en un <p>.
 */

let duplicado = document.getElementById("duplicado");
let parrafo = document.getElementById("parrafo");

function duplicarTexto(){
    parrafo.innerText=duplicado.value;
}

duplicado.addEventListener("input", duplicarTexto);


