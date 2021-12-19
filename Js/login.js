let loginUser = document.querySelector("#login-user");
let loginPass = document.querySelector("#login-pass");
let loginBtn = document.querySelector("#login-btn");
let imageLogo = document.querySelector(".logo a");


imageLogo.addEventListener("click", checklinkUser);

function checklinkUser(e) {
    e.preventDefault();
    if (localStorage.getItem("username") === loginUser.value.trim() && localStorage.getItem("userpass") === loginPass.value) {
        setTimeout(() => {
            window.location = "index.html";
        })
    }
}


loginBtn.addEventListener("click", loginForm);

function loginForm(e) {
    e.preventDefault();
    let user = localStorage.getItem("username");
    let pass = localStorage.getItem("userpass");

        if (loginUser.value === "" || loginPass.value === "") {
            alert("Please Fill Data");
    } else {

            if ((user && user === loginUser.value.trim()) && (pass && pass === loginPass.value)) {
            
                setTimeout(() => {
                window.location = "index.html";
                },1000) 
            } else {
            
                alert("invalid username or password");
            }
    }
}


