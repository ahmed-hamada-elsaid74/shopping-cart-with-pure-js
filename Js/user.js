let toggleIcon = document.querySelector("nav i.toggle-icon");
let navLinks = document.querySelector("nav ul.links");
let navUser = document.querySelector("nav ul.user-info");
let navShowUserName = document.querySelector("nav ul.user-info .show-username a");
let navLogin = document.querySelector("nav ul.user-info .logout");


// check user login
let checkuser = localStorage.getItem("username");
if (checkuser) {
    navLinks.remove();
    navUser.style.display = "flex";
    navUser.style.alignItems = "center";
    navShowUserName.innerHTML = checkuser;
}

navLogin.addEventListener("click", logout);


// log out
function logout(e) {
    e.preventDefault();
    localStorage.clear();
    setTimeout(() => {
        window.location = "register.html";
    })
}


