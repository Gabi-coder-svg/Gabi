document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const produtoId = params.get('produto');

    const produtos = [
        { id: 1, nome: "pack 1", driveLink: "https://drive.google.com/drive/folders/1WZJyazo8IHjEitpVG_y-QVlm3Naal_tM?usp=sharing" },
        { id: 2, nome: "Template de Site Profissional", driveLink: "https://drive.google.com/file/d/SEU_DRIVE_ID_2/view?usp=sharing" },
        { id: 3, nome: "Pack de Ícones Premium", driveLink: "https://drive.google.com/file/d/SEU_DRIVE_ID_3/view?usp=sharing" },
    ];

    const produto = produtos.find(p => p.id == produtoId);

    if (produto) {
        document.getElementById('mensagem').innerHTML = `
            <p>Obrigado pela compra!</p>
            <p>Aqui está seu arquivo: <a href="${produto.driveLink}" target="_blank">Clique para baixar</a></p>
        `;
    } else {
        document.getElementById('mensagem').innerHTML = "Erro: Produto não encontrado!";
    }
});
