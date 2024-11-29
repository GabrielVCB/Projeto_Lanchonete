// script.js

// Função para atualizar o carrinho de compras
function updateCart() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartContainer = document.querySelector('.cart-container');
    const totalAmount = document.querySelector('.total-amount');
  
    cartContainer.innerHTML = '';
    let total = 0;
  
    cartItems.forEach((item, index) => {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;
  
      cartContainer.innerHTML += `
        <div class="item">
          <img src="${item.img}" alt="${item.name}" />
          <div class="item-info">
            <p class="item-name">${item.name} - R$ ${item.price.toFixed(2)}</p>
            <div class="quantity">
              <button class="quantity-button" onclick="changeQuantity(${index}, 1)">+</button>
              <span class="quantity-value">${item.quantity}</span>
              <button class="quantity-button" onclick="changeQuantity(${index}, -1)">-</button>
            </div>
          </div>
          <p class="item-total">Subtotal: R$ ${itemTotal.toFixed(2)}</p>
        </div>
      `;
    });
  
    totalAmount.textContent = `TOTAL: R$ ${total.toFixed(2)}`;
  }
  
  // Função para adicionar um item ao carrinho
  function addToCart(name, price, img) {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const itemIndex = cartItems.findIndex((item) => item.name === name);
  
    if (itemIndex > -1) {
      cartItems[itemIndex].quantity += 1;
    } else {
      cartItems.push({ name, price, img, quantity: 1 });
    }
  
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateCart();
    window.location.href = 'carrinho.html';
  }
  
  // Função para alterar a quantidade de um item no carrinho
  function changeQuantity(index, change) {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    if (cartItems[index]) {
      cartItems[index].quantity += change;
      if (cartItems[index].quantity <= 0) {
        cartItems.splice(index, 1);
      }
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      updateCart();
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
  
  // Função para inicializar a página do carrinho
  function initCartPage() {
    updateCart();
    document.querySelector('.checkout-button').addEventListener('click', finalizePurchase);
  }
  
  // Event listeners para adicionar produtos ao carrinho na página inicial
  document.querySelectorAll('.add-button').forEach((button, index) => {
    button.addEventListener('click', () => {
      const product = button.closest('.product');
      const name = product.querySelector('p').textContent.split(' - ')[0];
      const price = parseFloat(product.querySelector('p').textContent.split(' - R$ ')[1]);
      const img = product.querySelector('img').src;
      addToCart(name, price, img);
    });
  });
  
  // Event listener para a página de pedidos
  document.querySelector('.back-button').addEventListener('click', () => {
    window.location.href = 'index.html';
  });
  