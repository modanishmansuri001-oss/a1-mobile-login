/* ==========================================
   A1 REWARDS — HOME / LOGIN PAGE SWITCH
========================================== */

const homePage = document.getElementById("homePage");
const loginPage = document.getElementById("loginPage");
const loginBtn = document.getElementById("loginBtn");


// LOGIN BUTTON
if (loginBtn) {
    loginBtn.addEventListener("click", function () {

        homePage.style.display = "none";
        loginPage.style.display = "block";

        window.scrollTo(0, 0);

    });
}


// LOGIN PAGE MENU = BACK TO HOME
const loginMenuBtn = document.querySelector("#loginPage .menu-btn");

if (loginMenuBtn) {
    loginMenuBtn.addEventListener("click", function () {

        loginPage.style.display = "none";
        homePage.style.display = "block";

        window.scrollTo(0, 0);

    });
}


/* ==========================================
   PASSWORD SHOW / HIDE
========================================== */

const pass = document.getElementById("password");
const eye = document.querySelector(".password-group .right-icon img");

if (pass && eye) {

    eye.onclick = function () {

        if (pass.type === "password") {

            pass.type = "text";
            eye.src = "images/eye-off.svg";

        } else {

            pass.type = "password";
            eye.src = "images/eye.svg";

        }

    };

}
