/* - factorial-while.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while */
let factorial = 1;
let num = 10;

while (num > 1) {
    factorial *= num;
    num--;
}
console.log(factorial);