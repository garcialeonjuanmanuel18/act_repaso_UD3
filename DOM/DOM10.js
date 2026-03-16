/**
 * Enlace Dinámico: Pedir el nombre de una web (ej: Google) y cambiar el
 * .href y el .innerText de un enlace <a>.
 */

let nombreWeb = prompt("dime el nombre de una pagina web");
let dirWeb = prompt("pega el enlace de dicha web");
let enlace = document.getElementById("enlace");

if(nombreWeb.length<1){
    alert("nombre inválido");
}
else{
    enlace.innerText = nombreWeb;
}

if(dirWeb.length < 10){
    alert("enlace no válido");
}
else{
    enlace.href = dirWeb;
}

