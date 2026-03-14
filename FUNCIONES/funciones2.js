/**
 * Par o Impar: Una función que reciba un número y retorne un mensaje
*  diciendo si es par o impar usando el operador %.
 */

let numero = parseInt(prompt("dime un numero"));

function parImpar(){
    if(numero%2==0){
        return alert(numero+" es par");
    }
    else{
        return alert(numero+" es impar");
    }
}

parImpar(numero);