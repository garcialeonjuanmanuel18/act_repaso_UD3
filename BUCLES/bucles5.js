//Dado un array de palabras, elimina espacios al inicio y al final, convierte
//todo a minúsculas y elimina palabras vacías.

let arrayPalabras = [null, null, null, "muela", "ojo", "mano", "pie", "monokuma"];

for(let i = 0; i < arrayPalabras.length; i++){
   
    if(arrayPalabras[i] == null){
        arrayPalabras.splice(i, 1);
        i--;
    }
    else{
        arrayPalabras[i] = arrayPalabras[i].toUpperCase();
    }
    


}

console.log(arrayPalabras);