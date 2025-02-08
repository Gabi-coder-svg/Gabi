document.addEventListener('DOMContentLoaded', function() {
    const produtos = [
        { 
            id: 1, 
            nome: "Pack", 
            preco: "5.00", 
            checkoutLink: "https://pay.cakto.com.br/9DHfhEU"
        },
        { 
            id: 2, 
            nome: "Template de Site Profissional", 
            preco: "79.90", 
            checkoutLink: "https://sua-loja.cakto.com/checkout/ID_CHECKOUT_2"
        },
        { 
            id: 3, 
            nome: "Pack de Ícones Premium", 
            preco: "29.90", 
            checkoutLink: "https://sua-loja.cakto.com/checkout/ID_CHECKOUT_3"
        },
    ];

    const produtosSection = document.getElementById('produtos');

    produtos.forEach(produto => {
        const produtoDiv = document.createElement('div');
        produtoDiv.className = 'produto';

        produtoDiv.innerHTML = `
            <h2>${produto.nome}</h2>
            <p>Preço: R$ ${produto.preco}</p>
            <button onclick="comprarArquivo(${produto.id})">Comprar</button>
        `;

        produtosSection.appendChild(produtoDiv);
    });

    window.comprarArquivo = function(produtoId) {
        const produto = produtos.find(p => p.id === produtoId);
        if (produto) {
            // Abre o checkout em uma nova aba
            const checkoutWindow = window.open(produto.checkoutLink, '_blank');

           // Monitora se o checkout foi aberto e redireciona para success.html
const checkWindow = setInterval(() => {
    // Verifica se a janela de checkout está aberta
    if (checkoutWindow && !checkoutWindow.closed) {
        clearInterval(checkWindow);
        window.location.href = "success.html";
    }
}, 1000);  // A cada 1 segundo verifica o estado da janela

        } else {
            alert("Produto não encontrado!");
        }
    };
});
