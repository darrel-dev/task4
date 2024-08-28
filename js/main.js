
document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const navItems = document.getElementById("nav-items");

    menuIcon.addEventListener("click", function() {
        navItems.classList.toggle("show");
        menuIcon.classList.toggle("change");
    });
});