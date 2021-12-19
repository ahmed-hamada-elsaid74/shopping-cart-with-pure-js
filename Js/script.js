// prodduct in db from local stotage
let productDB = JSON.parse(localStorage.getItem("products"));

// start draw product in home page
let productsDom = document.querySelector(".products");
let drawProducts;
(drawProducts= function (products = []) {
    let productUi = products.map(function (item) {
        return `
        <div class="product-item">
                    <img src=${item.imgUrl} alt="">
                    <div class="product-info">
                        <h3 onclick = "saveDateItem(${item.id})">${item.title}</h3>
                        <span>${item.size}</span>
                    </div>
                    <div class="product-action">
                        <button class="add-to-cart" onclick="addToCart(${item.id})">add to cart</button>
                        <i class="fas fa-heart"></i>
                    </div>
                </div>
                `;
    });
    productsDom.innerHTML = productUi.join("");
})(productDB);


// add to cart
let productMenu = document.querySelector(".cart-menu div");
let domProductMenu = document.querySelector(".cart-menu");
let productBadge = document.querySelector(".badge");

let addedItem = localStorage.getItem("productsincarts") ? JSON.parse(localStorage.getItem("productsincarts")) : [] ; 

// check if product item in localstorage to add it in product menu 
if (addedItem) {
    addedItem.map(item => productMenu.innerHTML += `<p>${item.title} ${item.qua}</p>`);
}
productBadge.innerHTML += addedItem.length;

//function add to cart
let allItems = [];
function addToCart(id) {
    let chosenItem = products.find((item) => item.id === id);
    let item = allItems.find(i => i.id == id);
    if (localStorage.getItem("username")) {
        if (item) {
            chosenItem.qua += 1;
        } else {
            allItems.push(chosenItem);
        }
        productMenu.innerHTML = "";
        allItems.forEach(item => {
            productMenu.innerHTML += `<p>${item.title} ${item.qua}</p>`;
        })
        // add number in badge
        let cartProductLength = document.querySelectorAll(".cart-menu div p")
        let finalAddedItem = [...addedItem, cartProductLength];
        productBadge.innerHTML = finalAddedItem.length;

        // added product item in product page
        addedItem = [...addedItem, chosenItem];
        let productsUniqe = getUniqeArray(addedItem, "id");
        localStorage.setItem("productsincarts", JSON.stringify(productsUniqe));
        
    } else
        window.location = "register.html";
}

function getUniqeArray(arr,filterbyid){
    let uniqe = arr.map(item => item[filterbyid]).map((item, i, final) => final.indexOf(item) == i && i).filter(item => arr[item]).map(item => arr[item]);
    return uniqe;
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


// save item id after click it
function saveDateItem(id) {
    localStorage.setItem("productId", id);
    window.location = "productDetails.html"
}


// search from input by title
let input = document.querySelector("input#input-search");

input.addEventListener("keyup", function (e) {
    search(e.target.value, productDB);

    if (e.target.value.trim() === "") {
        drawProducts(productDB);
    }
});

function search(title, myarray) {
    let myarr = myarray.filter(item => item.title.indexOf(title) !== -1);
    drawProducts(myarr);
}


// start function filter
let filteredSize = document.getElementById("products-filtered");

filteredSize.addEventListener("change", getFilteredBySize);

function getFilteredBySize(e) {
    let val = e.target.value;
    if (val === "all") {
        drawProducts(productDB);
    } else {
        let filteredproducts = productDB.filter(i => i.size === val);
        drawProducts(filteredproducts);
    }
}