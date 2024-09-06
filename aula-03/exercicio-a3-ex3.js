let notas = [];
let nota;

// Solicita ao usuário que insira notas até que ele insira -1
while (true) {
    nota = parseFloat(prompt("Digite uma nota (ou -1 para terminar):"));
    
    if (nota === -1) {
        break;
    }
    
    if (!isNaN(nota) && nota >= 0) {
        notas.push(nota);
    } else {
        console.log("Por favor, insira uma nota válida.");
    }
}

// Calcula a média das notas
if (notas.length > 0) {
    let soma = notas.reduce((acc, curr) => acc + curr, 0);
    let media = soma / notas.length;
    console.log(`A média das notas é: ${media.toFixed(2)}`);
} else {
    console.log("Nenhuma nota válida foi inserida.");
}


// Como funciona:

// Solicitação das notas: O programa usa um loop while para solicitar ao usuário que insira notas até que ele insira -1.
// Validação das notas: Cada entrada é convertida para um número e validada. Se for um número válido e não negativo, é adicionada ao array notas.
// Cálculo da média: Após a inserção das notas, o programa calcula a média somando todas as notas e dividindo pelo número de notas.
// Exibição da média: A média é exibida no console com duas casas decimais.