// define products
let products = [
    {
        id: 1,
        title: "T-shirt",
        size: "medium",
        imgUrl: "Images/t-shirt.jpg",
        price: "30$",
        qua: 1
    },
    {
        id: 2,
        title: "bag",
        size: "large",
        imgUrl: "Images/bag.jpg",
        price: "40$",
        qua: 1

    },
    {
        id: 3,
        title: "table",
        size: "small",
        imgUrl: "Images/table.jpg",
        price: "50$",
        qua: 1
    },
    {
        id: 4,
        title: "window",
        size: "medium",
        imgUrl: "Images/window.jpg",
        price: "70$",
        qua: 1
    },
    {
        id: 5,
        title: "smart phone",
        size: "large",
        imgUrl: "Images/mobile.jpg",
        price: "100$",
        qua: 1,
    },
    {
        id: 6,
        title: "headphone",
        size: "small",
        imgUrl: "Images/headphone.jpg",
        price: "20$",
        qua: 1,
    },
    {
        id: 7,
        title: "lab",
        size: "medium",
        imgUrl: "Images/lab.jpg",
        price: "200$",
        qua: 1,
    }
];

localStorage.setItem("products",JSON.stringify(products));