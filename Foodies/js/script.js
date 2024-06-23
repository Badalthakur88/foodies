// nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollaps = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollaps.classList.remove("show");
    })
})