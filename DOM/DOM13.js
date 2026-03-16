/**
 * Calculadora de IVA: Pedir un precio y mostrar en un <span> el precio
 * original y en otro el precio con el 21% de IVA.
 */
let precio = parseInt(prompt("dime un precio"));
let parrafoSpan = document.getElementById("parrafoSpan");

let original = "<span>"+"PRECIO ORIGINAL: "+precio+"</span>"+"<br>";
let IVA = "<span>"+" PRECIO CON IVA: "+(precio*1.21)+"</span>";

parrafoSpan.innerHTML = original+IVA;
