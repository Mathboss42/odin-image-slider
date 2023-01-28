let slideIndex = -1;

function showNextSlide() {
    showSlide(slideIndex += 1);
}

function showPreviousSlide() {
    showSlide(slideIndex -= 1);
}

function showSelectedSlide(n) {
    showSlide(slideIndex = n);
}

function startSlideShow() {
    showNextSlide();
    setTimeout(startSlideShow, 5000);
} 

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    const discs = document.querySelectorAll('.disc');
    if (n > slides.length-1) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length-1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('visible');
    }
    for (let i = 0; i < discs.length; i++) {
        discs[i].classList.remove('selected');
    }
    slides[slideIndex].classList.add('visible');
    discs[slideIndex].classList.add('selected');
}


startSlideShow();