console.log("login.js is running!");

function login() {
const mail = document.querySelector("#login-mail").value;
const password = document.querySelector("#login-password").value;

if (mail === "Jane Doe" && password === "Barma123") {
localStorage.setItem("userIsAuthenticated", true);
document.querySelector(".login-message").innerHTML = "";
        window.location.href = "guide.html";
} else {
document.querySelector(".login-message").innerHTML = "User not found. Wrong name or password.";
}
}


function logout() {
localStorage.removeItem("userIsAuthenticated");
    window.location.href = "index.html";
}

let btnLogin = document.querySelector("#btn-login");

if (btnLogin !== null)
btnLogin.onclick = () => login();

let btnLogout = document.querySelector("#btn-logout");
if (btnLogout !== null)
btnLogout.onclick = () => logout();
