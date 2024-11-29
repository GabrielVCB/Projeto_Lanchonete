// Manipulação do carrinho de compras
const cart = [];
const cartItemsDiv = document.getElementById("cart-items");
const totalPriceSpan = document.getElementById("total-price");
const finalizeOrderBtn = document.getElementById("finalize-order");

document.querySelectorAll(".add-to-cart").forEach((btn) => {
  btn.addEventListener("click", () => {
    const name = btn.dataset.name;
    const price = parseFloat(btn.dataset.price);

    const existingItem = cart.find((item) => item.name === name);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({ name, price, quantity: 1 });
    }
    updateCart();
  });
});

function updateCart() {
  if (!cartItemsDiv) return;

  cartItemsDiv.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    total += item.price * item.quantity;

    const div = document.createElement("div");
    div.className = "flex items-center my-4";
    div.innerHTML = `
      <img src="https://placehold.co/100x100" alt="${item.name}" class="mr-4 rounded">
      <div class="flex-1">
        <p class="font-semibold">${item.name} - R$ ${item.price.toFixed(2)}</p>
        <div class="flex items-center">
          <button class="bg-secondary text-secondary-foreground p-1 rounded" onclick="updateQuantity('${item.name}', 1)">+</button>
          <span class="mx-2">${item.quantity}</span>
          <button class="bg-secondary text-secondary-foreground p-1 rounded" onclick="updateQuantity('${item.name}', -1)">-</button>
        </div>
      </div>
    `;
    cartItemsDiv.appendChild(div);
  });

  totalPriceSpan.textContent = `TOTAL: R$ ${total.toFixed(2)}`;
  finalizeOrderBtn.disabled = total === 0;
}

function updateQuantity(name, delta) {
  const item = cart.find((item) => item.name === name);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cart.splice(cart.indexOf(item), 1);
  }

  updateCart();
}
const addressInput = document.getElementById("address");
const phoneInput = document.getElementById("phone");
const paymentSelect = document.getElementById("payment-method");

function validateCheckout() {
  const isValid = addressInput.value.trim() && phoneInput.value.trim() && paymentSelect.value;
  finalizeOrderBtn.disabled = !isValid;
}

addressInput.addEventListener("input", validateCheckout);
phoneInput.addEventListener("input", validateCheckout);
paymentSelect.addEventListener("change", validateCheckout);

document.querySelectorAll(".add-to-cart").forEach((btn) => {
  btn.addEventListener("click", () => {
    const name = btn.dataset.name;
    const price = parseFloat(btn.dataset.price);
    addToCart(name, price);
  });
});

function addToCart(name, price) {
  const existingItem = cart.find((item) => item.name === name);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ name, price, quantity: 1 });
  }
  updateCart();
}
