let productsDom = document.querySelector(".products");
let noProductsDom = document.querySelector(".no-products");


// draw function in cart page from products added from local storage
function drawProductsCartsUi( allProducts = [] ) {
    
    //check if products exists or no if no write there no products added!
    if (JSON.parse(localStorage.getItem("productsincarts")).length == 0) {
        noProductsDom.innerHTML = " there is no products !";
    }

    let products = JSON.parse(localStorage.getItem("productsincarts")) || allProducts;

    let productUi = products.map(function (item) {
        return `
        <div class="product-item">
                    <img src=${item.imgUrl} alt="">
                    <div class="product-info">
                        <h3>${item.title}</h3>
                        <span>${item.size}</span><br>
                        <span> quantity : ${item.qua}</span>
                    </div>
                    <div class="product-action">
                        <button class="add-to-cart" onclick="removeFromCart(${item.id})">remove from cart</button>
                    </div>
                </div>
                `;
    });
    productsDom.innerHTML = productUi.join("");
};

drawProductsCartsUi();


// function remove from card
function removeFromCart(id) {
    let productsInCarts = localStorage.getItem("productsincarts")
    if (productsInCarts) {
        let items = JSON.parse(productsInCarts);
        let filteredItem = items.filter((item) => item.id !== id);
        localStorage.setItem("productsincarts", JSON.stringify(filteredItem));
        drawProductsCartsUi(filteredItem);
    }
}



// add to cart
let productMenu = document.querySelector(".cart-menu div");
let domProductMenu = document.querySelector(".cart-menu");
let productBadge = document.querySelector(".badge");

let addedItem = localStorage.getItem("productsincarts") ? JSON.parse(localStorage.getItem("productsincarts")) : [] ; 

// check if product item in localstorage to add it in product menu 
if (addedItem) {
    addedItem.map(item => productMenu.innerHTML += `<p>${item.title}</p>`);
}
productBadge.innerHTML += addedItem.length;

//function add to cart
function addToCart(id) {
    let chosenItem = products.find((item) => item.id === id);
    if (localStorage.getItem("username")) {
        productMenu.innerHTML += `<p>${chosenItem.title}</p>`;
        // add number in badge
        let cartProductLength = document.querySelectorAll(".cart-menu div p")
        let finalAddedItem=[...addedItem,cartProductLength]    ;
        productBadge.innerHTML = finalAddedItem.length;

        // added product item in product page
        addedItem = [...addedItem, chosenItem];
        localStorage.setItem("productsincarts", JSON.stringify(addedItem));
        
    } else
        window.location = "register.html";
}



// click on cartICon
let cartICon = document.querySelector(".shoping-icon i");
cartICon.addEventListener("click", openCartMenu);
function openCartMenu() {
    if (productMenu.innerHTML != "") {
        if (domProductMenu.style.display == "block") {
            domProductMenu.style.display = "none";
        } else {
            domProductMenu.style.display = "block";
        }
    }
}
