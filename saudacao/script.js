function saudacao() {
    // Obtém o valor do input com id 'nome'
    const nome = document.getElementById('nome').value;
    
    // Cria a mensagem de saudação
    const mensagem = `Olá, ${nome}! Seja bem-vindo(a)!`;
    
    // Define a mensagem de saudação no elemento com id 'mensagem'
    document.getElementById('mensagem').innerText = mensagem;
}
