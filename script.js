// Exemplo de um script simples para validação do formulário
document.querySelector('.consulting-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simular o envio do formulário
    alert('Formulário enviado com sucesso! Em breve entraremos em contato.');

    // Limpar o formulário
    this.reset();
});