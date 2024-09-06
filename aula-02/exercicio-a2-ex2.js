// Solicita ao usuário que insira o primeiro número
let numero1 = parseFloat(prompt("Por favor, insira o primeiro número:"));

// Solicita ao usuário que insira o segundo número
let numero2 = parseFloat(prompt("Por favor, insira o segundo número:"));

// Realiza as operações matemáticas
let soma = numero1 + numero2;
let subtracao = numero1 - numero2;
let multiplicacao = numero1 * numero2;
let divisao = numero1 / numero2;

// Exibe os resultados usando alert()
alert("Resultados:\n" +
    "Soma: " + soma + "\n" +
    "Subtração: " + subtracao + "\n" +
    "Multiplicação: " + multiplicacao + "\n" +
    "Divisão: " + divisao);
