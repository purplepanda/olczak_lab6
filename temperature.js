// function buttonClick() {
//     var degrees = document.getElementById('input-degrees');
//     var system = document.getElementById('input-system');
// }
//
// var button = document.getElementById('convert');
// button.addEventListener('click', buttonClick);


function tempConversion(degrees, system) {
    var tempC = (parseInt(degrees) - 32) / 1.8;
    var tempF = (parseInt(degrees) * 1.8) + 32;
    if (system.toUpperCase() === 'F' || system.toUpperCase() === 'FAHRENHEIT') {
        document.write('<h3>The temperature is ' + Math.round(tempC) + ' degrees Celcius</h3>')
    } else if (system.toUpperCase() === 'C' || system.toUpperCase() === 'CELSIUS') {
        document.write('<h3>The temperature is ' + Math.round(tempF) + ' degrees Farenheit</h3>')
    }
}

function buttonClick() {
    var degrees = document.getElementById('input-degrees');
    var system = document.getElementById('input-system');
}

var button = document.getElementById('convert');
button.addEventListener('click', buttonClick);
