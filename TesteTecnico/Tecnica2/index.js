function Fibonacci(n) {

let a = 0
let b = 1

while (b < n) {
    [a, b] = [b, a +b];
}    
return b === n || n === 0;
}


let numero = parseInt(prompt("Informe um número:"));
if (Fibonacci(numero)) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
}