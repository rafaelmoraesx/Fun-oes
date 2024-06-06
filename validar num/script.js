function validarNumeroPositivo() {
    // Obtém o valor do input com id 'numero'
    const numero = parseFloat(document.getElementById('numero').value);
    
    // Verifica se o valor é um número e se é positivo
    let mensagem;
    if (isNaN(numero)) {
        mensagem = "Por favor, insira um número válido.";
    } else if (numero > 0) {
        mensagem = `O número ${numero} é positivo.`;
    } else {
        mensagem = "Por favor, insira um número positivo.";
    }
    
    // Define a mensagem no elemento com id 'mensagem'
    document.getElementById('mensagem').innerText = mensagem;
}

// Adiciona um evento de clique ao botão para chamar a função validarNumeroPositivo
document.getElementById('validarBtn').addEventListener('click', validarNumeroPositivo);
