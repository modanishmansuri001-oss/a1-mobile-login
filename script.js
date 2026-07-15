const pass = document.getElementById("password");
const eye = document.querySelector(".right-icon img");

eye.onclick = function () {
    if (pass.type === "password") {
        pass.type = "text";
        eye.src = "images/eye-off.svg";
    } else {
        pass.type = "password";
        eye.src = "images/eye.svg";
    }
};
