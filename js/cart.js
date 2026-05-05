/* =========================================================
   LaidBack Restaurant – cart.js
   Cart management + utilities
   ========================================================= */

const CART_KEY = 'laidback_cart';

/* ── Storage ── */
function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateBadge();
}

/* ── Cart Operations ── */
function addToCart(item) {
  const cart = getCart();
  const existing = cart.find(c => c.id === item.id);
  if (existing) {
    existing.qty = Math.min(existing.qty + 1, 20);
  } else {
    cart.push({
      id:          item.id,
      name:        item.name,
      category:    item.category,
      price:       item.price,
      image:       item.image,
      ingredients: item.ingredients,
      qty:         1
    });
  }
  saveCart(cart);
  showToast(`${item.name} ditambahkan ke keranjang!`, 'success');
}

function updateQty(id, delta) {
  const cart = getCart();
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty = Math.max(1, Math.min(item.qty + delta, 20));
  saveCart(cart);
}

function removeFromCart(id) {
  let cart = getCart();
  cart = cart.filter(c => c.id !== id);
  saveCart(cart);
}

function clearCart() {
  localStorage.removeItem(CART_KEY);
  updateBadge();
}

/* ── Computed ── */
function getCartCount() {
  return getCart().reduce((sum, item) => sum + item.qty, 0);
}

function getSubtotal() {
  return getCart().reduce((sum, item) => sum + item.price * item.qty, 0);
}

/* ── Badge ── */
function updateBadge() {
  const badges = document.querySelectorAll('#cart-badge');
  const count = getCartCount();
  badges.forEach(badge => {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
    badge.classList.add('bump');
    setTimeout(() => badge.classList.remove('bump'), 400);
  });
}

/* ── Format Currency ── */
function formatRp(n) {
  return 'Rp. ' + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

/* ── Toast Notifications ── */
function showToast(msg, type = 'info') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  const icon = type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ';
  toast.innerHTML = `<span style="font-size:1rem;">${icon}</span><span>${msg}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('hide');
    setTimeout(() => toast.remove(), 350);
  }, 2800);
}

/* ── Init badge on every page ── */
document.addEventListener('DOMContentLoaded', updateBadge);
