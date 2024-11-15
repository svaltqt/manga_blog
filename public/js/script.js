document.addEventListener('DOMContentLoaded', () => {
    const sliderContainer = document.querySelector('.slider-container');
    const slides = document.querySelectorAll('.comic-card');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.nav-arrow.left');
    const nextBtn = document.querySelector('.nav-arrow.right');

    let currentSlide = 0;
    const slidesPerView = 3;
    const maxSlide = slides.length - slidesPerView;

    function updateCarousel(index) {
        // Validar límites
        currentSlide = Math.max(0, Math.min(index, maxSlide));

        // Mover el slider
        const slideWidth = slides[0].offsetWidth + 16;
        sliderContainer.scrollTo({
            left: currentSlide * slideWidth,
            behavior: 'smooth'
        });

        // Actualizar dots
        dots.forEach((dot, i) => {
            dot.classList.toggle('active',
                i === 0 && currentSlide === 0 ||
                i === 1 && currentSlide > 0 && currentSlide < maxSlide ||
                i === 2 && currentSlide === maxSlide
            );
        });

        // Actualizar botones
        prevBtn.style.visibility = currentSlide <= 0 ? 'hidden' : 'visible';
        nextBtn.style.visibility = currentSlide >= maxSlide ? 'hidden' : 'visible';
    }

    // Event listeners
    prevBtn.addEventListener('click', () => updateCarousel(currentSlide - 1));
    nextBtn.addEventListener('click', () => updateCarousel(currentSlide + 1));

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            const positions = [0, Math.floor(maxSlide / 2), maxSlide];
            updateCarousel(positions[i]);
        });
    });

    // Manejar resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => updateCarousel(currentSlide), 250);
    });
});