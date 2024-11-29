// Função para adicionar um produto ao carrinho
function addToCart(productId, productName, productPrice) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const productIndex = cartItems.findIndex(item => item.id === productId);
  
    if (productIndex > -1) {
      cartItems[productIndex].quantity += 1;
    } else {
      cartItems.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
    }
  
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }
  
  // Função para carregar os itens do carrinho
  function loadCartItems() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartContainer = document.querySelector('.cart-container');
    const totalAmount = document.querySelector('.total-amount');
  
    cartContainer.innerHTML = '';
    let total = 0;
  
    cartItems.forEach(item => {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;
  
      const cartItem = document.createElement('div');
      cartItem.classList.add('item');
      cartItem.innerHTML = `
        <img src="https://placehold.co/100x100" alt="${item.name}" class="item-img" />
        <div class="item-info">
          <p class="item-name">${item.name} - R$ ${item.price.toFixed(2)}</p>
          <div class="quantity">
            <button class="quantity-button" onclick="changeQuantity('${item.id}', 1)">+</button>
            <span class="quantity-value">${item.quantity}</span>
            <button class="quantity-button" onclick="changeQuantity('${item.id}', -1)">-</button>
          </div>
        </div>
        <p class="item-total">Subtotal: R$ ${itemTotal.toFixed(2)}</p>
      `;
  
      cartContainer.appendChild(cartItem);
    });
  
    totalAmount.textContent = `TOTAL: R$ ${total.toFixed(2)}`;
  }
  
  // Função para alterar a quantidade de um item no carrinho
  function changeQuantity(productId, change) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const productIndex = cartItems.findIndex(item => item.id === productId);
  
    if (productIndex > -1) {
      cartItems[productIndex].quantity += change;
      if (cartItems[productIndex].quantity <= 0) {
        cartItems.splice(productIndex, 1);
      }
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      loadCartItems();
    }
  }
  
  // Função para finalizar a compra
  function finalizePurchase() {
    const paymentMethod = document.querySelector('.input-select').value;
    const address = document.querySelector('.input-text.address').value;
    const phone = document.querySelector('.input-text.phone').value;
  
    if (paymentMethod && address && phone) {
      alert('Compra finalizada com sucesso!');
      localStorage.removeItem('cartItems');
      window.location.href = 'index.html';
    } else {
      alert('Por favor, preencha todos os campos para finalizar a compra.');
    }
  }
  
  // Inicializa a página de carrinho
  function initCartPage() {
    loadCartItems();
    document.querySelector('.checkout-button').addEventListener('click', finalizePurchase);
  }
  
  // Event listeners para adicionar produtos ao carrinho na página inicial
  document.getElementById('add-hamburguer').addEventListener('click', () => {
    addToCart('hamburguer', 'Hamburguer', 10.00);
  });
  
  document.getElementById('add-sopa').addEventListener('click', () => {
    addToCart('sopa', 'Sopa de Feijão', 8.00);
  });
  
  document.getElementById('add-coxinha').addEventListener('click', () => {
    addToCart('coxinha', 'Coxinha', 5.00);
  });
  
  document.getElementById('add-refrigerante').addEventListener('click', () => {
    addToCart('refrigerante', 'Refrigerante', 5.00);
  });
  
  // Event listener para a página de pedidos
  document.querySelector('.back-button').addEventListener('click', () => {
    window.location.href = 'index.html';
  });
  
  // Inicializa a página de carrinho, se necessário
  if (window.location.pathname.includes('carrinho.html')) {
    window.addEventListener('load', initCartPage);
  }
  