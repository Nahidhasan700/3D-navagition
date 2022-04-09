var menuBar = document.querySelector(".menu");
var mainPart = document.querySelector(".main");
var container = document.querySelector(".container");
menuBar.addEventListener("click", function () {
    container.classList.toggle("active");
})