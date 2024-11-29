let cart = [];
let orders = [];

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

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
  const storedCart = localStorage.getItem('cart');
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
}

function saveOrders() {
  localStorage.setItem('orders', JSON.stringify(orders));
}

function loadOrders() {
  const storedOrders = localStorage.getItem('orders');
  if (storedOrders) {
    orders = JSON.parse(storedOrders);
  }
}

function updateCartDisplay() {
  const cartContainer = document.querySelector('.cart-container');
  if (cartContainer) {
    cartContainer.innerHTML = '';
    let totalPrice = 0;
    cart.forEach(item => {
      const itemTotalPrice = item.price * item.quantity;
      totalPrice += itemTotalPrice;

      const itemElement = document.createElement('div');
      itemElement.className = 'cart-item'; // Adiciona a classe cart-item
      itemElement.innerHTML = `
        <div class="item-info">
          <p class="item-name">${item.name} - R$ ${itemTotalPrice.toFixed(2)}</p>
          <div class="quantity">
            <button class="quantity-button" onclick="changeQuantity('${item.name}', 1)">+</button>
            <span class="quantity-value">${item.quantity}</span>
            <button class="quantity-button" onclick="changeQuantity('${item.name}', -1)">-</button>
          </div>
        </div>
      `;
      cartContainer.appendChild(itemElement);
    });

    const totalElement = document.querySelector('.total');
    if (totalElement) {
      totalElement.textContent = `TOTAL: R$ ${totalPrice.toFixed(2)}`;
    }
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

function validateOrder() {
  const paymentMethod = document.getElementById('payment-method').value;
  const address = document.getElementById('address').value;
  const phone = document.getElementById('phone').value;
  return paymentMethod && address && phone;
}

function finalizeOrder() {
  if (!validateOrder()) {
    document.getElementById('error-message').style.display = 'block';
    return;
  }

  cart.forEach(item => {
    orders.push({ ...item });
  });
  saveOrders();
  cart = [];
  saveCart();
  updateCartDisplay();
  window.location.href = 'pedidos.html';
}

document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    loadOrders();
    updateCartDisplay();
    updateOrdersDisplay();
  });
  