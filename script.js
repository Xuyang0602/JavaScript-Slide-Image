
let slideIdx = 1;

showSlides(slideIdx);

function plusSlides(n) {
    showSlides(slideIdx += n);
};

function currentSlides(n) {
    showSlides(slideIdx = n);
}

function showSlides(n) {
    console.log(1);
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName('dot');
    
    if (n > slides.length) slideIdx = 1;
    if (n < 1) slideIdx = slides.length;

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.dispaly = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIdx - 1].style.dispaly = "block";
    dots[slideIdx - 1].className == " active";
}

