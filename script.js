// script.js
const cart = document.querySelector('.cart');
const cartToggle = document.querySelector('.cart-toggle');
const cartItems = document.querySelector('.cart-items');
const shopList = [
    {
        name: 'คาเฟ่ชิคสตาร์',
        description: 'ร้านคาเฟ่ชิคสตาร์เป็นสถานที่สำหรับคนที่รักกาแฟและสตาร์ความเท่',
    },
    {
        name: 'เอสเพรสโซคาเฟ่',
        description: 'ร้านเอสเพรสโซคาเฟ่เป็นสถานที่ที่คุณสามารถหายเหนื่อยจากความวุ่นวายของชีวิต',
    },
    {
        name: 'กาแฟแคราฟท์',
        description: 'ร้านกาแฟแคราฟท์เป็นที่สำหรับคนรักกาแฟแบบคราฟท์ ที่นี่เราเสนอกาแฟที่ผลิตด้วยความพิถีพิถัน',
    },
];

cartToggle.addEventListener('click', () => {
    cart.classList.toggle('show');

    if (cart.classList.contains('show')) {
        displayCartItems();
    } else {
        cartItems.innerHTML = '';
    }
});

function displayCartItems() {
    cartItems.innerHTML = '';

    shopList.forEach(shop => {
        const shopItem = document.createElement('div');
        shopItem.innerHTML = `
            <h2>${shop.name}</h2>
            <p>${shop.description}</p>
            <button onclick="addToCart('${shop.name}')">Add to Cart</button>
        `;
        cartItems.appendChild(shopItem);
    });
}

function addToCart(shopName) {
    const cartContents = document.querySelector('.cart-contents');

    // สร้าง HTML สำหรับรายการร้านค้าที่ถูกเพิ่มลงในตะกร้า
    const cartItem = document.createElement('div');
    cartItem.innerHTML = `
        <h2>${shopName}</h2>
        <p>Description of ${shopName}</p>
    `;

    cartContents.appendChild(cartItem); // เพิ่มรายการร้านค้าลงในตะกร้า
}


function displayShopList() {
    const grid = document.querySelector('.grid');
    grid.innerHTML = '';

    shopList.forEach(shop => {
        const shopItem = document.createElement('div');
        shopItem.textContent = shop.name;
        grid.appendChild(shopItem);
    });
}

displayShopList();
