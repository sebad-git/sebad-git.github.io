$(document).ready(function() { carrousel(); });

let index = 0;

function carrousel() {
    setTimeout(function() {
        const silder = $(".slider");
        if (slider == undefined) { return; }
        const slides = $(".slider").find("li");
        if ((index + 1) < slides.length) {
            silder[0].style.animation = "fade-in 1.3s ease";
            slides[index].style.transform = "translateX(-100%)";
            index++;
            alert(index);
            slides[index].style.transform = "translateX(-100%)";
        } else {
            silder[0].style.animation = "fade-in 1.3s ease";
            index = 0;
        }
        carrousel();
    }, 3000);
}