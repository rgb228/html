// Функции каталога из React-проекта
function renderCatalog() {
    const catalogContainer = document.querySelector('.products-grid');
    if (!catalogContainer) return;

    catalogContainer.innerHTML = products.map(product => `
        <div class="product-card" data-category="${product.category}">
            <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/300x200'">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="price">${product.price.toLocaleString()} руб.</div>
            <button class="add-to-cart" onclick="addToCart(${product.id})">
                В корзину
            </button>
        </div>
    `).join('');
}

function filterProducts(category) {
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}