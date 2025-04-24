document.addEventListener('DOMContentLoaded', () => {
    loadOrders();
    updateOrdersDisplay();
  });
  
  function updateOrdersDisplay() {
    const ordersContainer = document.querySelector('.orders-container');
    const historyContainer = document.querySelector('.history-container');
  
    if (ordersContainer) {
      ordersContainer.innerHTML = '';
      currentOrder.forEach((pedido, index) => {
        const orderElement = document.createElement('div');
        orderElement.className = 'order';
    
        pedido.forEach(item => {
          orderElement.innerHTML += `
            <div class="order-item">
              <span>${item.name} - R$ ${item.price.toFixed(2)} x ${item.quantity}</span>
            </div>
          `;
        });
    
        orderElement.innerHTML += `
          <span>Status: 🛵 A caminho</span>
          <button class="received-button" onclick="markAsReceived(${index})">Recebido</button>
          <button class="delete-button" onclick="deleteCurrentOrder(${index})">Cancelar</button>
        `;
    
        ordersContainer.appendChild(orderElement);
        ordersContainer.appendChild(document.createElement('hr'));
      });
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
  
  function deleteCurrentOrder(index) {
    currentOrder.splice(index, 1);
    saveOrders();
    updateOrdersDisplay();
    showNotification("Pedido cancelado!");
  }  

  function markAsReceived(index) {
    const pedidoRecebido = currentOrder.splice(index, 1)[0];
    orderHistory.unshift(pedidoRecebido);
    saveOrders();
    updateOrdersDisplay();
    showNotification("Pedido marcado como recebido!");
  }
  
  