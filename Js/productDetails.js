let products = JSON.parse(localStorage.getItem("products"));
let productId = localStorage.getItem("productId");
let detailsDom = document.querySelector(".details");

let productDetails = products.find(item => item.id == productId);

detailsDom.innerHTML = `
                <img src="${productDetails.imgUrl}" alt="">
                <h3>${productDetails.title}</h3>
                <span>${productDetails.size}</span>
                <p>${productDetails.price}</p>
`;

