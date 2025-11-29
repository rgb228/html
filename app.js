// Основные функции приложения
function toggleCart() {
    const cartModal = document.querySelector('.cart-modal');
    cartModal.style.display = cartModal.style.display === 'block' ? 'none' : 'block';
    renderCart();
}

function closeCart() {
    document.querySelector('.cart-modal').style.display = 'none';
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    renderCatalog();
    updateCartCount();

    // Закрытие корзины при клике вне ее
    document.addEventListener('click', function(e) {
        const cartModal = document.querySelector('.cart-modal');
        const cartBtn = document.querySelector('.cart-btn');

        if (!cartModal.contains(e.target) && !cartBtn.contains(e.target)) {
            closeCart();
        }
    });
});