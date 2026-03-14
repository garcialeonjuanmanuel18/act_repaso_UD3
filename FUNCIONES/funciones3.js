/**
 * Tabla de multiplicar: Dado un número, imprime su tabla del 1 al 10 usando
 *  un bucle for.
 */

let numero = parseInt(prompt("dime un numero para hacer su tabla de multiplicar"));
let numero2 = parseInt(prompt("dime un numero"));

function tablaMult(){
    for(let i=1; i <= 10; i++){
        console.log(i+" x "+numero+": "+numero*i);
    }
}

tablaMult(numero);

function tablaMultiplicarReturn(){
    let tabla = "";
    for(let i = 1; i <= 10; i++){
        tabla+=i+" x "+numero2+": "+numero2*i+"\n";
    }
    return tabla;
}

console.log(tablaMultiplicarReturn(numero2));




