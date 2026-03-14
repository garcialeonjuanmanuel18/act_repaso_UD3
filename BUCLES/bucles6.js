//Dados dos arrays de números, indica si son iguales comparando valor por
//valor y posición por posición sin usar métodos avanzados.

let arrayNumeros = [];
let arrayNumeros2 = [4, 6, 7, 2, 1];

for(let i = 0; i < 5; i++){
    let numero=prompt("dime un numero");
    arrayNumeros.push(numero);
}

console.log(arrayNumeros);
console.log(arrayNumeros2);

for(let i = 0; i < arrayNumeros.length; i++){
    if(arrayNumeros[i]==arrayNumeros2[i]){
        alert("Los numeros de la posicion "+[i]+" son iguales: "+arrayNumeros[i])
    }
}