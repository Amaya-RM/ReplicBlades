// Selecciona el botón y el menú
const menuToggle = document.getElementById("mobile-menu");
const navList = document.querySelector(".nav-list");

// Agrega un evento para alternar la clase 'active'
menuToggle.addEventListener("click", () => {
    navList.classList.toggle("active");
});
