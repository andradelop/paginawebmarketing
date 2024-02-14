document.addEventListener("DOMContentLoaded", function () {
    // Código para el botón de hamburguesa y menú
    const menuToggle = document.getElementById('menu-toggle');
    const fullscreenMenu = document.getElementById('fullscreen-menu');
    const closeMenuButton = document.getElementById('close-menu-button');

    menuToggle.addEventListener('click', () => {
        fullscreenMenu.classList.toggle('open');
    });

    closeMenuButton.addEventListener('click', () => {
        fullscreenMenu.classList.remove('open');
    });

    // Código para cambiar las palabras
    const word1 = document.getElementById('word1');
    const word2 = document.getElementById('word2');

    const words = ["NUESTRO TALENTOS", "NUESTROS TALENTOS"];
    let wordIndex = 0;

    function changeWords() {
        word1.classList.remove('word-transition');
        setTimeout(function () {
            word1.textContent = words[wordIndex];
            word1.classList.add('word-transition');
            wordIndex = (wordIndex + 1) % words.length;
        }, 1000);
    }

    setInterval(changeWords, 2000);

    // Agregar eventos para mostrar/ocultar descripciones al hacer clic en "Leer descripción"
    const readDescriptionButtons = document.querySelectorAll('.read-description-button');
    const descriptions = document.querySelectorAll('.description');

    readDescriptionButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            descriptions[index].classList.toggle('description-visible');
        });
    });
});
