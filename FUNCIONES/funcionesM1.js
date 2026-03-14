/**
 * Crea una función que reciba una frase y devuelva cuántas vocales tiene.
 * Lógica: deberás recorrer la cadena (usando un bucle como si fuera un array) y
 * usar un condicional para verificar si cada letra es 'a', 'e', 'i', 'o' u 'u'.
 */

let frase = prompt("dime una frase y te digo las vocales que tiene");
let contador = 0;

function contarVocales(){
    for(let i = 0; i < frase.length; i++){
        if(frase[i] == "a"){
            contador++;
        }
        else if(frase[i] == "e"){
            contador++;
        }
        else if(frase[i] == "i"){
            contador++;
        }
        else if(frase[i] == "o"){
            contador++;
        }
        else if(frase[i] == "u"){
            contador++;
        }
    }
    return contador;
}

console.log(contarVocales(frase));