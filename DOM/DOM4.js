/**
 * Escondite: Pedir al usuario la palabra "ocultar". Si la escribe, cambiar
 * .style.display = 'none' de una imagen.
 */

let ocultar = prompt("Escribe ocultar para ocultar la imagen");
let imagen = document.getElementById("imagen");

if(ocultar == "ocultar"){
    imagen.style.display = "none";
}
else{
    alert("No has escrito la palabra correctamente");
}

let mostrar = prompt("Escribe mostrar para mostrar la imagen");

if(mostrar == "mostrar"){
    imagen.style.display = "block";
}
else{
    alert("No has escrito la palabra correctamente");
}