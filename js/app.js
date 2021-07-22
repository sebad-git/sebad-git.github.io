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
    setTextById('projects-link', "Proyects");
    setTextById('contact-link', "Contact");
    //Headers
    setTextById('skills-lbl', "Skills");
    setTextById('projects-lbl', "Projects");
    setTextById('contact-lbl', "Contact");
    //Projects
    setTextByClass('git','SEE ON GITHUB');
    setTextByClass('site','SEE SITE');
    setTextById('app1-ttl', "Android student app where you make map markers with pictures.");
    setTextById('app2-ttl', " A desktop application made in Java Swing to update your ip address to use your pc as a server with a dynamic dns.");
    setTextById('app2-lbl2', "* SHA1 password codification.");
    setTextById('app2-lbl3', "* AES data codification.");
    setTextById('app2-lbl4', "* Logs and log monitor.");
    setTextById('app3-ttl', " A website like Netflix with public domain movies made in Angular 9.");
    //Contact
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
    setTextById('skils-link', "Competencias");
    setTextById('projects-link', "Proyectos");
    setTextById('contact-link', "Contacto");
     //Headers
     setTextById('skills-lbl', "Competencias");
     setTextById('projects-lbl', "Proyectos");
     setTextById('contact-lbl', "Contacto");
     //Projects
     setTextByClass('git','VER EN GITHUB');
     setTextByClass('site','VER SITIO');
     setTextById('app1-ttl', "Android student app where you make map markers with pictures.");
     setTextById('app2-ttl', "Aplicación de escritorio hecha en Java Swing para actualizar la dirección ip de una para usar tu pc como servidor con dns dinamico.");
     setTextById('app2-lbl2', "* Codificación SHA1 de password.");
     setTextById('app2-lbl3', "* Codificación AES de los datos de login.");
     setTextById('app2-lbl4', "* Logs y monitor de logs.");
     setTextById('app3-ttl', "Un sitio como Netflix con peliculas de dominio público desarrollada con Angular 9 y Firebase.");
     //Contact
    setPlaceholderById('frm_subject', "Asunto");
    setPlaceholderById('frm_email', "Correo");
    setPlaceholderById('frm_content', "Contenido");
    setTextById('send-btn', "Enviar");
}

function setTextById(elementId, text) {
    try { $('#'+elementId).text(text); } 
    catch (error) { alert(error); }
}

function setPlaceholderById(elementId, text) {
    try { $('#'+elementId).attr("placeholder", text); }
    catch (error) { alert(error); }
}

function setTextByClass(className, text) {
    try { $('.'+className).text(text); }
    catch (error) { alert(error); }
}