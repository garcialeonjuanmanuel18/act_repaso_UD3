/** 
 * Suma de un Array: Crea un array de números y escribe un bucle que sume
 *   todos sus elementos.
 */

let longitudArray = parseInt(prompt("dime cómo de grande será el array"));
let arrayNum = [];

function crearArray(){
for(let i = 0; i < longitudArray; i++){
    arrayNum[i] = parseInt(prompt("dime un numero para la posicion "+i));
}
}

function sumarElementos(){
    let resultado = 0;
    for(let i = 0; i < longitudArray; i++){
        resultado=resultado+arrayNum[i];
    }
    return resultado;
}

crearArray(arrayNum);
console.log("array creado: "+arrayNum);

console.log("El resultado de sumar los elementos del array es: "+sumarElementos(arrayNum));
