// Solicita ao usuário um número
let numero = prompt("Digite um número para ver a tabuada:");

// Converte a entrada para um número inteiro
numero = parseInt(numero);

// Verifica se a entrada é um número válido
if (!isNaN(numero)) {
    console.log(`Tabuada do ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
} else {
    console.log("Por favor, digite um número válido.");
}


// Como funciona:

// Solicitação do número: O programa usa prompt para solicitar ao usuário que digite um número.
// Conversão da entrada: A entrada do usuário é convertida para um número inteiro usando parseInt.
// Validação: O programa verifica se a entrada é um número válido.
// Exibição da tabuada: Se a entrada for válida, o programa exibe a tabuada do número de 1 a 10 usando um loop for.