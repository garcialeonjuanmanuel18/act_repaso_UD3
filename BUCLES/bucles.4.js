//Dado un array de strings, encuentra la primera palabra que tenga más de 5
//caracteres y empiece por vocal.

let arrayPalabras = ["hola", "adios", "buenas", "chao", "algebra"];

for(let i = 0; i < arrayPalabras.length; i++){
    if(arrayPalabras[i.length]>5){
        if(arrayPalabras[i]){
            console.log("La primera palabra con más de 5 caracteres y que empiece por vocal es: "+arrayPalabras[i])
        }
    }
}
