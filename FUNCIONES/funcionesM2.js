/**
 * Crea una función que reciba un array y un valor. La función debe devolver un nuevo
 * Ejemplo: eliminar([1, 2, 3, 2], 2) devuelve [1, 3].
 * array que contenga todos los elementos del original excepto los que coincidan con
 * el valor entregado.
 */

let array = [0,1,2,0,2];
let valor = parseInt(prompt("Dime el número que quieres eliminar del array"));

function eliminarElemento(array, valor){
    
    let nuevoArray = [];

    for(let i = 0; i < array.length; i++){

        if(array[i] !== valor){
            nuevoArray.push(array[i]);
        }
    }
    return nuevoArray;
}

console.log(eliminarElemento(array, valor));