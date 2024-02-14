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

    const words = ["NUESTRO EQUIPO", "TU EQUIPO"];
    let wordIndex = 0;
    let influencerIndex = 0;

    function changeWords() {
        word1.classList.remove('word-transition');
        setTimeout(function () {
            word1.textContent = words[wordIndex];
            word1.classList.add('word-transition');
            wordIndex = (wordIndex + 1) % words.length;
        }, 1000);

        word2.classList.remove('word-transition');
        setTimeout(function () {
            word2.textContent = influencers[influencerIndex];
            word2.classList.add('word-transition');
            influencerIndex = (influencerIndex + 1) % influencers.length;
        }, 2000);
    }

    setInterval(changeWords, 2000);

    // Código para el carrusel
    const carousel = document.querySelector('.carousel');
    const images = carousel.querySelectorAll('img');
    const imageWidth = images[0].clientWidth;
    const imageCount = images.length;
    const totalWidth = imageWidth * imageCount;
    let currentIndex = -1;

    function updateCarousel() {
        const offset = -currentIndex * imageWidth;
        carousel.style.transform = `translateX(${offset}px)`;
    }

    function nextSlide() {
        currentIndex++;
        if (currentIndex >= imageCount) {
            currentIndex = 0;
        }
        updateCarousel();
    }

    setInterval(nextSlide, 3000);

    images.forEach((image, index) => {
        const clone = image.cloneNode(true);
        carousel.appendChild(clone);
    });

    carousel.style.width = `${totalWidth * 2}px`;

    updateCarousel();
});
