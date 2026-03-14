//Dado un array y un número n, rota sus elementos n posiciones hacia la
//derecha.

let array = [0, 1, 2, 3, 4];
let n = 1;
let ultimo = array[array.length-n];

for(let i = array.length-n; i > 0; i--){
   array[i]=array[i-n];

}

array[0]=ultimo;

console.log(array);