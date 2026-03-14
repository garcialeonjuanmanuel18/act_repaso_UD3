/**
 * Calculadora de edad: Crea una función que reciba un año de nacimiento y
 * devuelva la edad actual.
 */

let anoNacimiento = parseInt(prompt("dime tu año de nacimiento"));


function calcularEdad(){
    return new Date().getFullYear()-anoNacimiento;
}

alert(calcularEdad(anoNacimiento));
