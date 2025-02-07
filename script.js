document.addEventListener('DOMContentLoaded', function() {
    const produtos = [
        { 
            id: 1, 
            nome: "Curso de Marketing Digital", 
            preco: "49.90", 
            driveLink: "https://drive.google.com/file/d/SEU_DRIVE_ID_1/view?usp=sharing", 
            checkoutLink: "https://sua-loja.cakto.com/checkout/ID_CHECKOUT_1"
        },
        { 
            id: 2, 
            nome: "Template de Site Profissional", 
            preco: "79.90", 
            driveLink: "https://drive.google.com/file/d/SEU_DRIVE_ID_2/view?usp=sharing", 
            checkoutLink: "https://sua-loja.cakto.com/checkout/ID_CHECKOUT_2"
        },
        { 
            id: 3, 
            nome: "Pack de Ícones Premium", 
            preco: "29.90", 
            driveLink: "https://drive.google.com/file/d/SEU_DRIVE_ID_3/view?usp=sharing", 
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
            // Redireciona para o checkout da Cakto e, após o pagamento, volta para success.html com o ID do produto
            window.location.href = `${produto.checkoutLink}?redirect=https://seusite.com/success.html?produto=${produto.id}`;
        } else {
            alert("Produto não encontrado!");
        }
    };
});
