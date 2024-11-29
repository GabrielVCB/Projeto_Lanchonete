let cart = [];
let currentOrder = [];
let orderHistory = [];

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
  localStorage.setItem('currentOrder', JSON.stringify(currentOrder));
  localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
}

function loadOrders() {
  const storedCurrentOrder = localStorage.getItem('currentOrder');
  const storedOrderHistory = localStorage.getItem('orderHistory');
  if (storedCurrentOrder) {
    currentOrder = JSON.parse(storedCurrentOrder);
  }
  if (storedOrderHistory) {
    orderHistory = JSON.parse(storedOrderHistory);
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
      itemElement.className = 'cart-item';
      itemElement.innerHTML = `
        <p class="item-name">${item.name} - R$ ${itemTotalPrice.toFixed(2)}</p>
        <div class="quantity">
          <button class="quantity-button" onclick="changeQuantity('${item.name}', 1)">+</button>
          <span class="quantity-value">${item.quantity}</span>
          <button class="quantity-button" onclick="changeQuantity('${item.name}', -1)">-</button>
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

function updateOrdersDisplay() {
  const ordersContainer = document.querySelector('.orders-container');
  const historyContainer = document.querySelector('.history-container');
  
  if (ordersContainer) {
    ordersContainer.innerHTML = '';
    if (currentOrder.length > 0) {
      currentOrder.forEach(item => {
        const orderElement = document.createElement('div');
        orderElement.className = 'order-item';
        orderElement.innerHTML = `
          <span>${item.name} - R$ ${item.price.toFixed(2)}</span>
          <span>🛵 A caminho</span>
        `;
        ordersContainer.appendChild(orderElement);
      });
      ordersContainer.appendChild(document.createElement('hr'));
    }
  }

  if (historyContainer) {
    historyContainer.innerHTML = '';
    orderHistory.forEach(order => {
      const orderElement = document.createElement('div');
      orderElement.className = 'order-item';
      orderElement.innerHTML = `
        <span>${order.name} - R$ ${order.price.toFixed(2)}</span>
        <span>✔️ Entregue</span>
      `;
      historyContainer.appendChild(orderElement);
      historyContainer.appendChild(document.createElement('hr'));
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

  // Move pedidos atuais para o histórico antes de finalizar o novo pedido
  orderHistory = orderHistory.concat(currentOrder);
  currentOrder = cart.slice();

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
