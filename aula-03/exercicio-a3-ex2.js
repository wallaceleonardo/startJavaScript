// Solicita ao usuário um número inteiro positivo
let numero = prompt("Digite um número inteiro positivo:");

// Converte a entrada para um número inteiro
numero = parseInt(numero);

// Verifica se a entrada é um número válido e positivo
if (!isNaN(numero) && numero >= 0) {
    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }
    console.log(`O fatorial de ${numero} é ${fatorial}`);
} else {
    console.log("Por favor, digite um número inteiro positivo válido.");
}


// Como funciona:

// Solicitação do número: O programa usa prompt para solicitar ao usuário que digite um número inteiro positivo.
// Conversão da entrada: A entrada do usuário é convertida para um número inteiro usando parseInt.
// Validação: O programa verifica se a entrada é um número válido e positivo.
// Cálculo do fatorial: Se a entrada for válida, o programa calcula o fatorial do número usando um loop for.
// Exibição do resultado: O resultado é exibido no console.