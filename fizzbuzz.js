for (i = 1; i < 101; i += 1) {
    if (i % 15 === 0) {
        document.write('FizzBuzz</br>');
    } else if (i % 5 === 0) {
        document.write('Buzz</br>');
    } else if (i % 3 === 0) {
        document.write('Fizz</br>');
    } else {
        document.write(i + '<br>');
    }
}
