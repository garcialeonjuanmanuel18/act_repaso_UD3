/**
 * Interruptor de texto: Crea un párrafo que diga "Encendido". Al hacer clic
sobre él, debe cambiar a "Apagado" (y viceversa).
 */

let pAp = document.getElementById("pAp");

function encender(){
    if(pAp.innerText == "Apagado"){
    pAp.innerText = "Encendido";
    }
    else{
        pAp.innerText = "Apagado";
    }
}

pAp.addEventListener("click", encender);