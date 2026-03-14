//Dado un array y un número n, rota sus elementos n posiciones hacia la
//derecha.

let array = [0, 1, 2, 3, 4];
let n = 1;

for(let i = 0; i < array.length; i++){
    array[i]=array[i-1];
}

console.log(array);