let tecla = "";

function queTecla(event){
    tecla=event.key;
    alert("la tecla pulsada es: "+tecla);
}

document.addEventListener("keydown", queTecla);

