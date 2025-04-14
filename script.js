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
  showNotification(`${product.name} foi adicionado ao carrinho`);
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
      const orderElement = document.createElement('div');
      orderElement.className = 'order';
      currentOrder.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'order-item';
        itemElement.innerHTML = `
          <span>${item.name} - R$ ${item.price.toFixed(2)} x ${item.quantity}</span>
        `;
        orderElement.appendChild(itemElement);
      });
      orderElement.innerHTML += `<span>Status: 🛵 A caminho</span>`;
      orderElement.innerHTML += `<button class="delete-button" onclick="deleteCurrentOrder()">Cancelar Pedido</button>`;
      ordersContainer.appendChild(orderElement);
      ordersContainer.appendChild(document.createElement('hr'));
    }
  }

  if (historyContainer) {
    historyContainer.innerHTML = '';
    orderHistory.forEach(order => {
      const orderElement = document.createElement('div');
      orderElement.className = 'order';
      order.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'order-item';
        itemElement.innerHTML = `
          <span>${item.name} - R$ ${item.price.toFixed(2)} x ${item.quantity}</span>
        `;
        orderElement.appendChild(itemElement);
      });
      orderElement.innerHTML += `<span>Status: ✔️ Entregue</span>`;
      historyContainer.appendChild(orderElement);
      historyContainer.appendChild(document.createElement('hr'));
    });
  }
}


function clearHistory() {
  orderHistory = [];
  saveOrders();
  updateOrdersDisplay();
  showNotification("Histórico exluído!");
}

function deleteCurrentOrder() {
  currentOrder = [];
  saveOrders();
  updateOrdersDisplay();
  showNotification("Pedido cancelado!");
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

  // Agrupar os itens do carrinho antes de salvar
  const groupedItems = agruparItens(cart);

  if (groupedItems.length > 0) {
    // Adiciona o pedido ao histórico
    orderHistory.unshift(groupedItems);

    // Limitar o número de pedidos no histórico, por exemplo, manter os 2 mais recentes
    if (orderHistory.length > 2) {
      orderHistory.pop();
    }
  }

  // Atualizar o pedido atual
  currentOrder = groupedItems;

  saveOrders();  // Salva os pedidos e o histórico
  cart = [];     // Limpa o carrinho
  saveCart();    // Salva o carrinho vazio no localStorage
  updateCartDisplay(); // Atualiza a exibição do carrinho
  showNotification("Pedido finalizado!");
  window.location.href = 'pedidos.html';
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
        itemElement.className = 'cart-item'; // Usa a classe para estilizar a seção branca
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
  function showNotification(message) { 
    const notification = document.createElement('div'); 
    notification.className = 'notification'; 
    notification.innerText = message; 
    document.body.appendChild(notification); 
    setTimeout(() => { notification.remove(); }, 3000);
  }

  document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    loadOrders();
    updateCartDisplay();
    updateOrdersDisplay();
  });

  function agruparItens(carrinho) {
    const itensAgrupados = {};
  
    carrinho.forEach(item => {
      if (itensAgrupados[item.name]) {
        itensAgrupados[item.name].quantity += item.quantity;
      } else {
        itensAgrupados[item.name] = {
          name: item.name,
          price: item.price,
          quantity: item.quantity
        };
      }
    });
  
    return Object.values(itensAgrupados);
  }
  
  