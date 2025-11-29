// Функции корзины из React-проекта
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showNotification(`Товар "${product.name}" добавлен в корзину!`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    renderCart();
}

function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
        cartCount.style.display = totalItems > 0 ? 'block' : 'none';
    }
}

function renderCart() {
    const cartModal = document.querySelector('.cart-modal');
    if (!cartModal) return;

    cartModal.innerHTML = `
        <div class="cart-content">
            <h2>Корзина</h2>
            ${cart.length === 0 ? 
                '<p>Корзина пуста</p>' : 
                cart.map(item => `
                    <div class="cart-item">
                        <img src="${item.image}" alt="${item.name}">
                        <div class="cart-item-info">
                            <h4>${item.name}</h4>
                            <p>${item.price} руб. x ${item.quantity}</p>
                        </div>
                        <button onclick="removeFromCart(${item.id})">×</button>
                    </div>
                `).join('')
            }
            ${cart.length > 0 ? `
                <div class="cart-total">
                    Итого: ${cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)} руб.
                </div>
                <button class="checkout-btn">Оформить заказ</button>
            ` : ''}
            <button class="close-cart" onclick="closeCart()">Закрыть</button>
        </div>
    `;
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}