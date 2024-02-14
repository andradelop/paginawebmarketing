document.addEventListener("DOMContentLoaded", function() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    scrollToTopBtn.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    // Código para el botón de hamburguesa y menú
    console.log("DOMContentLoaded se ha ejecutado"); 
    const menuToggle = document.getElementById('menu-toggle');
    const fullscreenMenu = document.getElementById('fullscreen-menu');
    const closeMenuButton = document.getElementById('close-menu-button');
    
    menuToggle.addEventListener('click', () => {
        fullscreenMenu.classList.toggle('open');
    });
    
    closeMenuButton.addEventListener('click', () => {
        fullscreenMenu.classList.remove('open');
    });
});