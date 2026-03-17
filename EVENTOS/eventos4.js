/**
 * Rastreador de ratón: Haz que un elemento div cambie su color de fondo
cuando el ratón pase por encima (mouseenter) y vuelva al original al salir
(mouseleave).
 */

let div = document.getElementById("div");

function divColor(){
    if(div.style.backgroundColor==="red"){
        div.style.backgroundColor="blue"
    }
    else{
        div.style.backgroundColor="red"
    }
   
}

div.addEventListener("mouseenter", divColor);
div.addEventListener("mouseleave", divColor);