let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(e){
    e.preventDefault();
    validarFormulario(this);
});

function validarFormulario(formulario){
    let campos = formulario.elements;
    let valido = true;

    for(let i = 0; i < campos.length; i++){
        let campo = campos[i];
        let valor = campo.value.trim();

        if(campo.type === "submit") continue;

        switch(campo.name){
            case "nombre":
                if (valor === ""){
                    alert("este campo está vacío");
                    valido = false;
                }
                let nombre = valor;
                break;

            case "edad":
                let edad = parseInt(valor);
                if(edad < 0 || valor > 110){
                    alert("valor inválido");
                    valido = false;
                }
                break;

            case "pelicula":
                let pelicula = valor;
                if(pelicula === "terror" || pelicula === "infantil" || pelicula === "accion" ){
                    if(pelicula === "terror" && edad <18){
                    alert("Debes ser mayor de 18 para ver una película de teror");
                    valido = false;
                    }
                    else if(pelicula === "infantil" && edad > 13){
                        alert("Demasiado mayor para ver una pelicula infantil");
                        valido = false;
                    }
                }
                else{
                    alert("pelicula inválida");
                    valido = false;
                }
                break;
        
        }
        if (!valido) break;
    }

        if(valido){
            let reciboCompra = document.getElementById("reciboCompra");
             recibo.innerHTML = "<p>"+"Reserva confirmada para " + nombre +". Disfrute de la película " + pelicula+"</p>";

        if(edad > 65){
            reciboCompra.style.backgroundColor = "gold";
        }
        formulario.reset();
        }
    
}