
document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const mobileNav = document.querySelector(".mobile_nav");

    hamburger.addEventListener("click", function() {
        mobileNav.classList.toggle("mobile_nav_show");
    });
});
