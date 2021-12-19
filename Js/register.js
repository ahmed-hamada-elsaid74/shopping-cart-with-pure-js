let registerUser = document.querySelector("#register-user");
let registerMail = document.querySelector("#register-mail");
let registerPass = document.querySelector("#register-pass");
let registerBtn = document.querySelector("#register-btn");

registerBtn.addEventListener("click", registerForm);

function registerForm(e) {
    e.preventDefault();
    if (registerUser.value === "" || registerMail.value === "" || registerPass.value === "") {
        alert("Please Fill Data");
    } else {

        localStorage.setItem("username", registerUser.value);
        localStorage.setItem("usermail", registerMail.value);
        localStorage.setItem("userpass", registerPass.value);

        setTimeout( () =>  {
            window.location = "login.html";
        },1000)
    }
}



