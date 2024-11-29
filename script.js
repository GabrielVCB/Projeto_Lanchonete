// Variáveis globais
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || []; // Carrinho armazenado no localStorage

// Função para atualizar o localStorage
function atualizarLocalStorage() {
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

// Página inicial: Adicionar produto ao carrinho
function inicializarPaginaInicial() {
  document.querySelectorAll(".add-button").forEach((botao, index) => {
    botao.addEventListener("click", () => {
      const produtos = [
        { nome: "Hamburguer", preco: 10 },
        { nome: "Sopa de Feijão", preco: 8 },
        { nome: "Coxinha", preco: 5 },
        { nome: "Refrigerante", preco: 5 },
      ];

      const produto = produtos[index];
      const itemCarrinho = carrinho.find((item) => item.nome === produto.nome);

      if (itemCarrinho) {
        itemCarrinho.quantidade++;
      } else {
        carrinho.push({ ...produto, quantidade: 1 });
      }

      atualizarLocalStorage();
      window.location.href = "carrinho.html"; // Redireciona para o carrinho
    });
  });
}

// Página do carrinho: Atualizar UI e funcionalidades
function inicializarPaginaCarrinho() {
  const listaProdutos = document.querySelector(".p-4");
  const totalElement = document.querySelector(".total");
  const checkoutButton = document.querySelector(".checkout-button");

  // Renderizar os produtos no carrinho
  function renderizarCarrinho() {
    listaProdutos.innerHTML = ""; // Limpa a lista antes de renderizar
    carrinho.forEach((produto, index) => {
      const itemHTML = `
        <div class="item">
          <img src="https://placehold.co/100x100" alt="${produto.nome}" class="item-img" />
          <div class="item-info">
            <p class="item-name">${produto.nome} - R$ ${produto.preco.toFixed(2)}</p>
            <div class="quantity">
              <button class="quantity-button add" data-index="${index}">+</button>
              <span class="quantity-value">${produto.quantidade}</span>
              <button class="quantity-button remove" data-index="${index}">-</button>
            </div>
          </div>
        </div>
      `;
      listaProdutos.insertAdjacentHTML("beforeend", itemHTML);
    });
    atualizarTotal();
  }

  // Atualizar o total do carrinho
  function atualizarTotal() {
    const total = carrinho.reduce(
      (sum, item) => sum + item.preco * item.quantidade,
      0
    );
    totalElement.textContent = `TOTAL: R$ ${total.toFixed(2)}`;
  }

  // Manipular botões de adicionar e remover
  listaProdutos.addEventListener("click", (event) => {
    if (event.target.classList.contains("add")) {
      const index = event.target.dataset.index;
      carrinho[index].quantidade++;
    } else if (event.target.classList.contains("remove")) {
      const index = event.target.dataset.index;
      if (carrinho[index].quantidade > 1) {
        carrinho[index].quantidade--;
      } else {
        carrinho.splice(index, 1); // Remove o item se a quantidade chegar a 0
      }
    }
    atualizarLocalStorage();
    renderizarCarrinho();
  });

  // Configurar botão de adicionar mais produtos
  document.querySelector(".add-button").addEventListener("click", () => {
    window.location.href = "index.html";
  });

  // Configurar botão de finalizar compra
  checkoutButton.addEventListener("click", () => {
    const endereco = document.querySelector(".input-text[placeholder='Rua, número, complemento']").value.trim();
    const telefone = document.querySelector(".input-text[placeholder='(31) 9 1234-5678']").value.trim();
    const formaPagamento = document.querySelector(".input-select").value;

    if (!endereco || !telefone || !formaPagamento) {
      alert("Preencha todas as informações para finalizar o pedido.");
    } else {
      alert("Pedido finalizado com sucesso!");
      carrinho = [];
      atualizarLocalStorage();
      window.location.href = "pedidos.html"; // Redireciona para a página de pedidos
    }
  });

  // Renderizar o carrinho inicialmente
  renderizarCarrinho();
}

// Página de pedidos: Configurar botão de voltar
function inicializarPaginaPedidos() {
  document.querySelector(".back-button").addEventListener("click", () => {
    window.location.href = "index.html";
  });
}

// Inicialização das páginas
document.addEventListener("DOMContentLoaded", () => {
  const paginaAtual = window.location.pathname.split("/").pop();

  if (paginaAtual === "index.html") {
    inicializarPaginaInicial();
  } else if (paginaAtual === "carrinho.html") {
    inicializarPaginaCarrinho();
  } else if (paginaAtual === "pedidos.html") {
    inicializarPaginaPedidos();
  }
});
