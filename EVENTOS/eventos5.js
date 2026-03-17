/**
 * Contador de clics: Crea un botón y un párrafo. Cada vez que pulses el
botón, el número dentro del párrafo debe aumentar en 1.
 */

let boton = document.getElementById("boton");
let parrafoNum = document.getElementById("parrafoNum");
let valor = parseInt(0);

function aumentarNum(){
    valor++;
    
    parrafoNum.innerText = valor;
}

boton.addEventListener("click", aumentarNum);