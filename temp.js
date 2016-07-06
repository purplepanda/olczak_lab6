function tempConversion(degrees, system) {
    var tempC = (parseInt(degrees) - 32) / 1.8;
    var tempF = (parseInt(degrees) * 1.8) + 32;
    if (system.toUpperCase() === 'C' || system.toUpperCase() === 'CELSIUS') {
        document.write('<h3>The temperature is ' + Math.round(tempC) + ' degrees Celsius</h3>')
    } else if (system.toUpperCase() === 'F' || system.toUpperCase === 'FAHRENHEIT') {
        document.write('<h3>The temperature is ' + Math.round(tempF) + ' degrees Farenheit</h3>')
    }
}

tempConversion(212, 'C');
tempConversion(32, 'c');
tempConversion(65, 'C');
tempConversion(-40, 'f');
