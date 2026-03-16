/**
 * 14.Aviso de Edad: Pedir la edad. Si es menor de 18, cambiar el texto a "Acceso
 * Denegado" y el color a rojo; si es mayor, "Acceso Permitido" en verde.
 */

let edad = parseInt(prompt("dime tu edad"));
let discoteca = document.getElementById("discoteca");


if(edad>18){
    
    let segurata = "<p>"+"acceso permitido"+"</p>";
    discoteca.style.backgroundColor = "green";
    discoteca.innerHTML = segurata;
}
else{
    let segurata = "<p>"+"acceso denegado"+"</p>";
    discoteca.style.backgroundColor = "red";
    discoteca.innerHTML = segurata;
}

