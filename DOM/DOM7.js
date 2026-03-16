/**
 * Cambio de Imagen: Pedir la URL de una foto y asignarla al atributo .src de
 * una etiqueta <img>.
 */
let nuevaFoto = prompt("pega el enlace de una foto");
let imagen = document.getElementById("imagen");
imagen.src = nuevaFoto;