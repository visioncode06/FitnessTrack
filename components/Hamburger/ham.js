


const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
});

document.addEventListener('DOMContentLoaded', () => {
    //nav constant
    const navbarActionBtn = document.getElementById('navbarActionBtn');
    const navSection = document.getElementById('navSection');

    //navbar trigger btn
    navbarActionBtn.addEventListener('click', () => {
        navSection.classList.toggle('active');
    });

});
