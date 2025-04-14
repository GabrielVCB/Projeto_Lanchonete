document.addEventListener('DOMContentLoaded', () => {
    loadOrders();
    updateOrdersDisplay();
  });
  
  function updateOrdersDisplay() {
    const ordersContainer = document.querySelector('.orders-container');
    const historyContainer = document.querySelector('.history-container');
  
    if (ordersContainer) {
      ordersContainer.innerHTML = '';
      if (currentOrder.length > 0) {
        const orderElement = document.createElement('div');
        orderElement.className = 'order';
        currentOrder.forEach(item => {
          orderElement.innerHTML += `
            <div class="order-item">
              <span>${item.name} - R$ ${item.price.toFixed(2)} x ${item.quantity}</span>
            </div>
          `;
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
          orderElement.innerHTML += `
            <div class="order-item">
              <span>${item.name} - R$ ${item.price.toFixed(2)} x ${item.quantity}</span>
            </div>
          `;
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
    showNotification("Histórico excluído!");
  }
  
  function deleteCurrentOrder() {
    currentOrder = [];
    saveOrders();
    updateOrdersDisplay();
    showNotification("Pedido cancelado!");
  }
  