document.addEventListener("DOMContentLoaded", function () {
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