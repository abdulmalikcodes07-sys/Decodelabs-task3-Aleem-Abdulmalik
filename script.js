const themeBtn =
document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

const welcomeBtn =
document.getElementById("welcomeBtn");

welcomeBtn.addEventListener("click", () => {
    document.getElementById("message")
    .textContent =
    "Welcome to my Portfolio Website!";
});

let count = 0;

document.getElementById("increase")
.addEventListener("click", () => {

    count++;

    document.getElementById("counter")
    .textContent = count;
});