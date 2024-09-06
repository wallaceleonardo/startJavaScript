// Gera um número aleatório entre 1 e 100
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativas = 10; // Número limitado de tentativas

console.log("Bem-vindo ao jogo de adivinhação!");
console.log("Tente adivinhar o número entre 1 e 100.");

while (tentativas > 0) {
    // Solicita ao usuário um palpite
    let palpite = parseInt(prompt(`Você tem ${tentativas} tentativas restantes. Digite seu palpite:`));

    // Verifica se o palpite é um número válido
    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        console.log("Por favor, digite um número válido entre 1 e 100.");
        continue;
    }

    // Verifica se o palpite está correto
    if (palpite === numeroAleatorio) {
        console.log("Parabéns! Você adivinhou o número!");
        break;
    } else if (palpite < numeroAleatorio) {
        console.log("Seu palpite é menor que o número.");
    } else {
        console.log("Seu palpite é maior que o número.");
    }

    tentativas--;

    if (tentativas === 0) {
        console.log(`Você ficou sem tentativas. O número era ${numeroAleatorio}.`);
    }
}


// Como funciona:

// Geração do número aleatório: O programa usa Math.random() e Math.floor() para gerar um número aleatório entre 1 e 1001.
// Número de tentativas: O usuário tem um número limitado de tentativas (neste exemplo, 10).
// Solicitação do palpite: O programa solicita ao usuário que insira um palpite e verifica se é um número válido.
// Verificação do palpite: O programa informa se o palpite é maior ou menor que o número gerado.
// Controle de tentativas: O número de tentativas é decrementado a cada palpite incorreto. Se o usuário adivinhar o número ou ficar sem tentativas, o jogo termina.
