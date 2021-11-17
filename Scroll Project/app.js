// dynamically display date
const date = document.getElementById("date").innerHTML = new Date().getFullYear();

const toggleBtn = document.querySelector(".nav-toggle");
const navDiv = document.querySelector(".links-container");


toggleBtn.addEventListener("click", function() {
    navDiv.classList.toggle("show-nav");
});