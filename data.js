const products = [{
        id: 1,
        name: "iPhone 13",
        price: 79990,
        category: "electronics",
        image: "images/iphone13.jpg",
        description: "Новый iPhone с улучшенной камерой"
    },
    {
        id: 2,
        name: "MacBook Pro",
        price: 129990,
        category: "electronics",
        image: "images/macbook.jpg",
        description: "Мощный ноутбук для работы"
    },
    {
        id: 3,
        name: "Футболка",
        price: 1990,
        category: "clothing",
        image: "images/tshirt.jpg",
        description: "Хлопковая футболка"
    },
    {
        id: 4,
        name: "Джинсы",
        price: 4990,
        category: "clothing",
        image: "images/jeans.jpg",
        description: "Классические джинсы"
    }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];