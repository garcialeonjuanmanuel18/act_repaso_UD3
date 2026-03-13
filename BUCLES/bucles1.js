const arrayNumeros = [0, 1, 2, 3, 5];

let positivos = 0;
let negativos = 0;
let ceros = 0;

for(let i = 0; i < arrayNumeros.length; i++){
    if(arrayNumeros[i]>0){
        positivos++;
    }
    else if(arrayNumeros[i]<0){
        negativos++;
    }
    else{
        ceros++;
    }
}

console.log("hay "+positivos+" números positivos");
console.log("hay "+negativos+" numeros negativos");
console.log("hay "+ceros+" ceros");