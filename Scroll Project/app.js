// dynamically display date
const date = document.getElementById("date").innerHTML = new Date().getFullYear();

//open menu
const toggleBtn = document.querySelector(".nav-toggle");
const navDiv = document.querySelector(".links-container");
const navLinksList = document.querySelector(".links-list");

toggleBtn.addEventListener("click", function() {
    //navDiv.classList.toggle("show-nav"); one way of doing it..not too dynamic if container height changes

   const navDivHeight = navDiv.getBoundingClientRect().height;
   const navLinksListHeight = navLinksList.getBoundingClientRect().height;
    console.log(navDivHeight);
    console.log(navLinksListHeight);
   if (navDivHeight === 0) {
    navDiv.style.height = `${navLinksListHeight}px`;
   } else {
       navDiv.style.height = 0;
   } 
});