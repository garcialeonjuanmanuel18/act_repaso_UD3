/**
 * Editor de Bordes: Pedir un número (píxeles) y aplicarlo como borderWidth
 * a una caja.
 */

let numero = prompt("dime un número de pixeles para el borde de la caja");
let caja = document.getElementById("caja");

if(numero > 0){
    caja.style.borderWidth = numero+"px";
    caja.style.borderStyle = "solid";
    caja.style.height = 200 + "px";
}
else{
    alert("numero invalido");
}
