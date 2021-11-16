const toggleBtn = document.querySelector(".nav-toggle");
const navDiv = document.querySelector(".links-container");


toggleBtn.addEventListener("click", function() {
    navDiv.classList.toggle("show-nav");
});