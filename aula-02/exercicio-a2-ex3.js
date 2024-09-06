        // Obtenha os lados do triângulo usando o prompt
        function calcularTriangulo() {
            const ladoA = parseFloat(document.getElementById('ladoA').value);
            const ladoB = parseFloat(document.getElementById('ladoB').value);
            const ladoC = parseFloat(document.getElementById('ladoC').value);

            if (isNaN(ladoA) || isNaN(ladoB) || isNaN(ladoC)) {
                document.getElementById('resultado').innerText = 'Por favor, insira valores válidos.';
                return;
            }
            // Calcula o perimetro do triângulo
            const perimetro = ladoA + ladoB + ladoC;
            
            // Calcula a área usando a fórmula de Heron
            const semiPerimetro = perimetro / 2;
            const area = Math.sqrt(semiPerimetro * (semiPerimetro - ladoA) * (semiPerimetro - ladoB) * (semiPerimetro - ladoC));

            document.getElementById('resultado').innerText = `Perímetro: ${perimetro.toFixed(2)}\nÁrea: ${area.toFixed(2)}`;

            // Exibe os resultados em um alert
            alert(`Perímetro do triângulo: ${perimetro}\nÁrea do triângulo: ${area} `);
        }
