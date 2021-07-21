$(document).ready(function() {
    smoothScroll();
    setLanguage();
});

function smoothScroll() {
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function() {
                window.location.hash = hash;
            });
        }
    });

}

function setLanguage() {
    try {
        if (navigator.language.includes("es")) { setSpanish(); } else { setEnglish(); }
    } catch (error) { alert(error); }
}


function setEnglish() {
    //Hero
    setTextById('header1', "Hi, I am Sebastian");
    setTextById('header2', "And I'm a developer");
    //Menu
    setTextById('home-link', "Home");
    //setTextById('about-lbl', "About me");
    setTextById('about-link', "About");
    setTextById('skils-link', "Skills");
    setTextById('skills-lbl', "Skills");
    setTextById('projects-link', "Proyects");
    setTextById('projects-lbl', "Projects");
    setTextById('contact-link', "Contact");
    //Contact
    setTextById('contact-lbl', "Contact");
    setTextById('frm_subject', "Subject");
    setTextById('frm_email', "E-Mail");
    setTextById('frm_content', "Content");
    setTextById('send-btn', "Send");
}

function setSpanish() {
    //Hero
    setTextById('header1', "Hola, Mi nombre es Sebastian");
    setTextById('header2', "Y soy desarrollador");
    //Menu
    setTextById('home-link', "Inicio");
    //setTextById('about-lbl', "Sobre mi");
    //setTextById('about-link', "Sobre mi");
    setTextById('skils-link', "Competencias");
    setTextById('skills-lbl', "Competencias");
    setTextById('projects-link', "Proyectos");
    setTextById('projects-lbl', "Projectos");
    setTextById('contact-link', "Contacto");
    //Contact
    setTextById('contact-lbl', "Contacto");
    setPlaceholderById('frm_subject', "Asunto");
    setPlaceholderById('frm_email', "Correo");
    setPlaceholderById('frm_content', "Contenido");
    setTextById('send-btn', "Enviar");
}

function setTextById(tagId, text) {
    try {
        const element = document.getElementById(tagId);
        if (element) { element.textContent = text; } else { alert("Tag:[" + element + "] not found"); }
    } catch (error) { alert(error); }
}

function setPlaceholderById(tagId, text) {
    try {
        const element = document.getElementById(tagId);
        if (element) { element.placeholder = text; } else { alert("Tag:[" + element + "] not found"); }
    } catch (error) { alert(error); }
}