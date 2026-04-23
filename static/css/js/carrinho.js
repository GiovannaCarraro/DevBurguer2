function mostrarCarrinho (){
    const resposta =  await fetch("http://10.110.134.2:8080/api/get/carrinho:")

    if (!resposta.ok) {
        alert("ERRO AO CARREGAR CARRINHO!")
    }
    else{
        const dados = await resposta.json()

        const carrinho = document.getElementById('carrinho')

        carrinho.innerHTML = '';

        for (let dado of dados) {
            let linha = 
            
        `<div class="product-grid">
            <div class="card">
                <h3>${dado.nome}</h3>
                <p>Pão, carne 160g e queijo.</p>
                <span>${dado.preco}</span>
                <button onclick="addToCart('Classic Burger', 25.00)">Adicionar</button>
            </div>
        </div>`

        carrinho.innerHTML += linha
        }
    }
}

mostrarCarrinho()