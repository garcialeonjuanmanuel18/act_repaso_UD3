/**
 * Pedir "oscuro" o "claro" y cambiar el fondo de la página (body.style.backgroundColor) y el color del texto.
 */

let color = prompt("Escribe grey, black o white");
let cuerpo = document.body;

if(color === "grey"){
    cuerpo.style.backgroundColor = color;
}

else if(color === "black"){
    cuerpo.style.backgroundColor = color;
}

else if(color === "white"){
    cuerpo.style.backgroundColor = color;
}

else{
    alert("color incorrecto");
}