/**
 * Fahrenheit a Celsius: Una función que realice la conversión de
 * temperatura ().
 * (32 °F − 32) × 5 / 9 = 0 °C
 */

let gradosFarenheit = parseInt(prompt("Dime la temperatura en farenheit"));

function farenheitToCelsius(){
    return (gradosFarenheit-32)*5/9;
}

console.log(farenheitToCelsius(gradosFarenheit));

