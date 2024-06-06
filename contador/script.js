function contarCaracteres() {
    // Obtém o valor do textarea com id 'texto'
    const texto = document.getElementById('texto').value;
    
    // Conta o número de caracteres no texto
    const numeroDeCaracteres = texto.length;
    
    // Cria a mensagem com a contagem de caracteres
    const mensagem = `O texto contém ${numeroDeCaracteres} caracteres.`;
    
    // Define a mensagem no elemento com id 'mensagem'
    document.getElementById('mensagem').innerText = mensagem;
}
