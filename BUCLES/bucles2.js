//Dado un array de notas, comprueba que todas estén entre 0 y 10 e indica
//cuántas no cumplen la condición.

let arrayNotas = [2.4, 6.3, 5, 9.3, 4.3];

let contador = 0;
let notasCorrectas = true;

for(let i = 0; i < arrayNotas.length; i++){
    if(arrayNotas[i]<0){
        contador++;
        notasCorrectas = false;
    }
    if(arrayNotas[i]>10){
        contador++;
        notasCorrectas = false;
    }
}

if(notasCorrectas){
    console.log("Todas las notas están entre el cero y el 10");
}
else{
    console.log("Hay "+contador+" notas incorrectas");
}


