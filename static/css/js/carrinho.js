async function mostrar_carrinho() {
    try {
        const resposta = await fetch("/api/get/itens_carrinho");
        console.log(resposta)
        if (!resposta.ok) {
            alert("ERRO AO CARREGAR CARRINHO!");
            return;
        }

        const dados = await resposta.json();
        console.log(dados)
        const carrinhoContainer = document.getElementById("cart-items");

        carrinhoContainer.innerHTML = "";

        let total = 0;

        for (let dado of dados) {

            total += dado.preco;

            let linha = `
                <li class="cart-item">

                    <div class="cart-item__info">

                        <div class="cart-item__top">
                            <h3 class="cart-item__name">${dado.PRODUTO}</h3>

                            <button class="remove-item-btn">
                                🗑
                            </button>
                        </div>

                        <div class="cart-item__bottom">
                            <span class="cart-item__price">
                                R$ ${dado.PRECO}
                            </span>
                        </div>

                    </div>
                </li>
            `;

            carrinhoContainer.innerHTML += linha;
        }

        document.getElementById("cart-total").innerText =
            total.toFixed(2);

    } catch (erro) {
        console.error(erro);
        alert("Erro de rede ao carregar o carrinho.");
    }
}

mostrar_carrinho();

async function inserirItemCarrinho(cod_produto, quantidade = 1) {
    const resposta = await fetch("/api/post/carrinho", 
                                    {
                                        method:"POST", 
                                        headers: {"Content-Type" : "application/json"
                                                },
                                        body: JSON.stringify(
                                                            {
                                                                "cod_produto:":cod_produto,
                                                                "quantidade": quantidade
                                                            }
                                        )
                                    }
                                    
    )
    
    if(!resposta.OK)
    {
        alert("Erro ao inserir item!")
    }

    mostrar_carrinho()
}

function finalizarCompra() {
  if (total <= 0) {
    alert("Seu carrinho está vazio!");
    return;
  }

  alert(`Compra finalizada! Total: R$ ${total.toFixed(2)}`);

  // Limpar carrinho
  document.getElementById("cart-items").innerHTML = "";
  total = 0;
  document.getElementById("total").innerText = "0.00";

  fecharCarrinho();
}