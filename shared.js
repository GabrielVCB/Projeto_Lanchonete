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
  if (storedCart) cart = JSON.parse(storedCart);
}

function saveOrders() {
  localStorage.setItem('currentOrder', JSON.stringify(currentOrder));
  localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
}

function loadOrders() {
  const storedCurrentOrder = localStorage.getItem('currentOrder');
  const storedOrderHistory = localStorage.getItem('orderHistory');
  if (storedCurrentOrder) currentOrder = JSON.parse(storedCurrentOrder);
  if (storedOrderHistory) orderHistory = JSON.parse(storedOrderHistory);
}

function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.innerText = message;
  document.body.appendChild(notification);
  setTimeout(() => { notification.remove(); }, 3000);
}

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
