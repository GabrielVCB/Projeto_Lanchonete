document.addEventListener('DOMContentLoaded', () => {
  loadCart();
  loadOrders();
  updateCartDisplay();
  preencherDadosUsuario(); // <- nova função
});
  
  function updateCartDisplay() {
    const cartContainer = document.querySelector('.cart-container');
    if (!cartContainer) return;
  
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
  
  function changeQuantity(name, delta) {
    const itemIndex = cart.findIndex(item => item.name === name);
    if (itemIndex !== -1) {
      cart[itemIndex].quantity += delta;
      if (cart[itemIndex].quantity <= 0) cart.splice(itemIndex, 1);
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
  
    const groupedItems = agruparItens(cart);
    if (groupedItems.length > 0) {
      orderHistory.unshift(groupedItems);
      if (orderHistory.length > 2) orderHistory.pop();
    }
  
    currentOrder = groupedItems;
    saveOrders();
    cart = [];
    saveCart();
    updateCartDisplay();
    showNotification("Pedido finalizado!");
    window.location.href = 'pedidos.html';
  }
  
  function preencherDadosUsuario() {
    const usuarioJSON = localStorage.getItem("usuario");
    if (usuarioJSON) {
      const usuario = JSON.parse(usuarioJSON);
  
      const inputEndereco = document.getElementById("address");
      const inputTelefone = document.getElementById("phone");
  
      if (inputEndereco && usuario.endereco) {
        inputEndereco.value = usuario.endereco;
      }
  
      if (inputTelefone && usuario.telefone) {
        inputTelefone.value = usuario.telefone;
      }
    }
  }
  