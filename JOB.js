let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-images img');
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function changeSlide(direction) {
    const slides = document.querySelectorAll('.carousel-images img');
    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1; // Retourner à la dernière image
    } else if (currentSlide >= slides.length) {
        currentSlide = 0; // Retourner à la première image
    }

    showSlide(currentSlide);
}

// Afficher la première image au chargement
showSlide(currentSlide);
