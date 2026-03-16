/**
 * Cuadrícula de Colores: Pedir un color y generar mediante un bucle 5 cajas
 * (div) seguidas que tengan todas ese mismo color de fondo.
 */

let color = prompt("dime un color");
let contenedorGrande = document.getElementById("contenedorGrande");
let contenedores = "" 

for(let i = 0; i < 5; i++){
    contenedores+="<div style='background-color: "+color+"; width:50px'>"+"</div>"
}

contenedorGrande.innerHTML = contenedores;