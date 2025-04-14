document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    updateCartDisplay();
  });
  
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
  