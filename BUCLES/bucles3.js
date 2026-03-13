//Dado un array de números, suma únicamente los valores que estén en
//posiciones pares y sean mayores que 10.

let arraynumeros = [5, 8, 2, 11, 12, 12, 13];
let sumaMayoresDiez = 0;

for(let i = 0; i < arraynumeros.length; i++){

    if(arraynumeros[i]>10){
        if(arraynumeros[i] % 2 == 0){
            sumaMayoresDiez=sumaMayoresDiez+arraynumeros[i];
        }
    }
}

alert("La suma de los pares mayores de 10 es: "+sumaMayoresDiez);