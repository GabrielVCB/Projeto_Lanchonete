let cart = [];

function addToCart(product) {
  const itemIndex = cart.findIndex(item => item.name === product.name);
  if (itemIndex !== -1) {
    cart[itemIndex].quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  saveCart();
  updateCartDisplay();
}

function addToCartAndRedirectFromCartPage() {
  // Adiciona um produto fixo como exemplo; você pode personalizar isso
  addToCart({ name: 'Produto Exemplo', price: 10.00 });
  window.location.href = 'index.html';
}

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
  const storedCart = localStorage.getItem('cart');
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
}

function updateCartDisplay() {
  const cartContainer = document.querySelector('.cart-container');
  if (cartContainer) {
    cartContainer.innerHTML = '';
    cart.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.className = 'cart-item';
      itemElement.innerHTML = `
        <p class="item-name">${item.name} - R$ ${item.price.toFixed(2)}</p>
        <div class="quantity">
          <button class="quantity-button" onclick="changeQuantity('${item.name}', 1)">+</button>
          <span class="quantity-value">${item.quantity}</span>
          <button class="quantity-button" onclick="changeQuantity('${item.name}', -1)">-</button>
        </div>
      `;
      cartContainer.appendChild(itemElement);
    });
  }
}

function changeQuantity(name, delta) {
  const itemIndex = cart.findIndex(item => item.name === name);
  if (itemIndex !== -1) {
    cart[itemIndex].quantity += delta;
    if (cart[itemIndex].quantity <= 0) {
      cart.splice(itemIndex, 1);
    }
    saveCart();
    updateCartDisplay();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadCart();
  updateCartDisplay();
});
