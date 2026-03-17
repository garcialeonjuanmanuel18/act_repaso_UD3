let registroForm = document.getElementById("registroForm");

registroForm.addEventListener('submit', function(e){
    e.preventDefault();
    validarFormulario(this);
});

function validarFormulario(registroForm){
    let campos = registroForm.elements;
    let valido = true;

    for(let i = 0; i < campos.length; i++){
        let campo = campos[i];
        let valor = campo.value.trim();

        if(campo.type === 'submit') continue;

        switch(campo.type){
            case "text":
                if (valor.length < 3){
                    alert("numero de caracteres demasiado pequeño");
                    valido = false;
                }
            break;

            case "email":
                if(!valor.includes('@') || !valor.includes('.')){
                    alert("formato de correo inválido");
                    valido = false;
                }
            break;

            case "number":
                if(valor < 18){
                    alert("debes ser mayor de 18");
                    valido = false;
                }
            break;

            case "password":
                if(valor.length < 6){
                    alert("contraseña demasiado corta, debe tener al menos 6 caracteres");
                    valido = false;
                }
        }

        if(valido === false){
            break;
        }
        if(valido){
            alert("Formulario correcto, enviando...");
            validarFormulario.submit();
        }
    }

}