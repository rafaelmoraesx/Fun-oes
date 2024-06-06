// Função para calcular a área do retângulo
function calcularAreaRetangulo() {
    // Obtém os valores dos inputs de comprimento e largura
    const comprimento = parseFloat(document.getElementById('comprimento').value);
    const largura = parseFloat(document.getElementById('largura').value);

    // Verifica se os valores são válidos
    if (isNaN(comprimento) || isNaN(largura) || comprimento <= 0 || largura <= 0) {
        alert("Por favor, insira valores numéricos válidos maiores que zero para comprimento e largura.");
        return;
    }
    
    // Calcula a área do retângulo
    const area = comprimento * largura;
    
    // Exibe a área calculada na tela
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `A área do retângulo é ${area} unidades quadradas.`;
    resultadoElement.style.display = 'block';
}

// Adiciona um evento de clique ao botão para chamar a função calcularAreaRetangulo
document.getElementById('calcularBtn').addEventListener('click', calcularAreaRetangulo);
