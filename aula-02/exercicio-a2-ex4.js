
function calcularDesconto() {
    const valorCompra = parseFloat(document.getElementById('valorCompra').value);
    const percentualDesconto = parseFloat(document.getElementById('percentualDesconto').value);

    if (isNaN(valorCompra) || isNaN(percentualDesconto)) {
        document.getElementById('resultado').innerText = 'Por favor, insira valores válidos.';
        return;
    }

    const valorDesconto = (valorCompra * percentualDesconto) / 100;
    const valorTotal = valorCompra - valorDesconto;

    document.getElementById('resultado').innerText = `Valor do Desconto: R$ ${valorDesconto.toFixed(2)}\nValor Total: R$ ${valorTotal.toFixed(2)}`;
}
