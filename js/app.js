function init() {
    //document.getElementById("sidebar").style.transform = "translate(-400%, 0%)";
    setLanguage();
}

function showSidebar(show) {
    const sidebar = document.getElementById("sidebar");
    if (show) {
        sidebar.style.animation = "slide-left 0.5s ease";
        sidebar.style.transform = "translate(0%, 0%)";
        sidebar.style.display = "block";
        document.getElementById("sidebar-open").style.display = "none";
    } else {
        const skillPanel = document.getElementById("skills-pnl");
        skillPanel.style.animation = "fade-out 1.2s ease";
        setTimeout(function() { skillPanel.style.display = "none"; }, 1200);
        sidebar.style.animation = "slide-right 0.5s ease";
        sidebar.style.transform = "translate(-400%, 0%)";
        document.getElementById("sidebar-open").style.display = "block";
        setTimeout(function() { sidebar.style.display = "none"; }, 500);
    }
}

function showSkills() {
    const skillPanel = document.getElementById("skills-pnl");
    if (skillPanel.style.display == "none") {
        skillPanel.style.animation = "fade-in 1.2s ease";
        skillPanel.style.display = "block";
    } else {
        skillPanel.style.animation = "fade-out 1.2s ease";
        setTimeout(function() { skillPanel.style.display = "none"; }, 1200);
    }
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
    setTextById('nav1', "Home");
    setTextById('nav2', "Skills");
    setTextById('nav3', "Proyects");
    setTextById('nav4', "About");
}

function setSpanish() {
    //Hero
    setTextById('header1', "Hola, Mi nombre es Sebastian");
    setTextById('header2', "Y soy desarrollador");
    //Menu
    setTextById('nav1', "Inicio");
    setTextById('nav2', "Competencias");
    setTextById('nav3', "Proyectos");
    setTextById('nav4', "Sobre mi");
}

function setTextById(tagId, text) {
    try {
        const tag = document.getElementById(tagId);
        if (tag) { tag.textContent = text; } else { alert("Tag:[" + tagId + "] not found"); }
    } catch (error) { alert(error); }
}