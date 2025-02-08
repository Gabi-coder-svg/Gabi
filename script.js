document.addEventListener('DOMContentLoaded', function() {
    const produtos = [
        { 
            id: 1, 
            nome: "Pack", 
            preco: "5.00", 
            driveLink: "https://drive.google.com/drive/folders/1WZJyazo8IHjEitpVG_y-QVlm3Naal_tM?usp=sharing", 
            checkoutLink: "https://pay.cakto.com.br/9DHfhEU"
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
            <a href="${produto.checkoutLink}?redirect=https://seusite.com/success.html?produto=${produto.id}" target="_blank">
                <button>Comprar</button>
            </a>
        `;

        produtosSection.appendChild(produtoDiv);
    });
});
