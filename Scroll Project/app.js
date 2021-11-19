// dynamically display date at footer
const date = document.getElementById("date").innerHTML = new Date().getFullYear();

//grab DOM elements and assign to variables
const toggleBtn = document.querySelector(".nav-toggle");
const navDiv = document.querySelector(".links-container");
const navLinksList = document.querySelector(".links-list");

toggleBtn.addEventListener("click", function() {
    //navDiv.classList.toggle("show-nav"); one way of doing it..not dynamic. if elements are excluded or added to the list the ul size will change hence changing the height of the container.

   const navDivHeight = navDiv.getBoundingClientRect().height; //the getBoundingClientRect method returns a right/left/top.bottom position of the html element relative to the View Port
   const navLinksListHeight = navLinksList.getBoundingClientRect().height;

   if (navDivHeight === 0) navDiv.style.height = `${navLinksListHeight}px`; //this changes the div that wraps the "ul".. we are determining the height of this div container by the size of the "ul"...if it changes then the container height will follow
   else navDiv.style.height = 0;
});

//navbar becomes fixed when scrolled past x pixels
const navCenter = document.querySelector(".nav-center");
const navCenterHeight = navCenter.getBoundingClientRect().height; 

window.addEventListener("scroll", () => {
    if (window.pageYOffset > navCenterHeight) navCenter.classList.add("fixed-navbar"); //we add this class to the navBar to change its features when past certain height
    else navCenter.classList.remove("fixed-navbar");
});

//scroll to top button appears after scrolled x pixels
const scrollTopBtn = document.querySelector(".scroll-link-btn");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 400) scrollTopBtn.classList.add("show-scroll-btn");
    else scrollTopBtn.classList.remove("show-scroll-btn");
});

//scrolls to the exact height/position when nav buttons are clicked
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function (link) { //select all links and loop through to listen for a click event.
    link.addEventListener("click", function(e) {

        //prevent the Default behaviour which is to go to #theID
        e.preventDefault();

        //navigates to a specific height on the page
        const id = e.currentTarget.getAttribute("href").slice(1); //as the attribute href would come #id, I had to use .slice() to remove the "#" to be able to pass in the add as an argument to the .getElementById()
        
        const element = document.getElementById(id); 

        //calculate the height to go to by subtracting the nav-bar height
        const navHeaderHeight = document.querySelector(".nav-header").getBoundingClientRect().height;
        let position = element.offsetTop - navHeaderHeight; //offsetTop gives us a fixed position of an element on the document..(relative to its parent element with a postition other than static or the body)
        
        window.scrollTo({left: 0, top: position}); //actually scroll to desired location
        navDiv.style.height = 0; //close the menu container
    });
});