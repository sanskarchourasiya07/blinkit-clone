const products = [
    {
        name: "Milk",
        price: 40,
        img: "https://tse2.mm.bing.net/th/id/OIP.Eis2j5vl36DSoATXcapFSAHaHZ?r=0&pid=Api&P=0&h=180"
    },
    {
        name: "Banana",
        price: 120,
        img: "https://img.freepik.com/premium-photo/close-up-photo-fresh-fruit-banana_983093-21.jpg"
    },
    {
        name: "Bread",
        price: 35,
        img: "https://www.womanscribbles.net/wp-content/uploads/2022/11/tasty-bread-1.jpg"
    },
    {
        name: "Chips",
        price: 20,
        img: "https://www.eatthis.com/wp-content/uploads/sites/4/2021/05/chips-2.jpg?quality=82&strip=1"
    }
];

let cart = 0;

const container = document.getElementById("products");
const count = document.getElementById("count");

// Products Show
function show(data) {

    container.innerHTML = "";

    data.forEach((product) => {

        container.innerHTML += `
        <div class="card">

            <img src="${product.img}" alt="${product.name}">

            <h3>${product.name}</h3>

            <p>₹${product.price}</p>

            <button onclick="add()">ADD</button>

            <button class="remove-btn" onclick="removeItem()">REMOVE</button>

        </div>
        `;
    });

}

// Show all products
show(products);

// Add to Cart
function add() {
    cart++;
    count.innerText = cart;
}

// Remove from Cart
function removeItem() {

    if (cart > 0) {
        cart--;
    }

    count.innerText = cart;
}

// Search Product
document.getElementById("search").addEventListener("keyup", function () {

    const value = this.value.toLowerCase();

    const filter = products.filter((product) =>
        product.name.toLowerCase().includes(value)
    );

    show(filter);

});