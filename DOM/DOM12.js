/**
 * Lista de la Compra: Pedir 3 productos (separados por comas) y
 * convertirlos en una lista <ul> con 3 <li>.
 */

let producto1 = prompt("dime el primer producto");
let producto2 = prompt("dime el segundo producto");
let producto3 = prompt("dime el tercer producto");

let divLista = document.getElementById("divLista");

let lista = "<ul>"
for(let i = 0; i < 1; i++){
    lista+= "<li>"+producto1+"</li>";
    lista+= "<li>"+producto2+"</li>";
    lista+= "<li>"+producto3+"</li>";
}
    lista+= "</ul>";

divLista.innerHTML = lista;