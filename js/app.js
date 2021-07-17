
function init(){
	document.getElementById("sidebar").style.transform = "translate(-400%, 0%)";
	setLanguage();
}

function showSidebar(show){
	if(show){
		var sidebar = document.getElementById("sidebar");
		sidebar.style.animation = "slide-left 0.5s ease";
		sidebar.style.transform = "translate(0%, 0%)";
		document.getElementById("sidebar-open").style.display = "none";
	}
	else{ 
		const sidebar = document.getElementById("sidebar");
		sidebar.style.animation = "slide-right 0.5s ease";
		sidebar.style.transform = "translate(-400%, 0%)";
		document.getElementById("sidebar-open").style.display = "block";
	}
}


function setLanguage() {
    try {
        if (navigator.language.includes("es")) { setSpanish(); }
		else{ setEnglish(); }
    } catch (error) { alert(error); }
}

function setSpanish() {
    //Hero
    setTextById('header1', "Hola, Mi nombre es Sebastian");
    setTextById('header2', "Y soy desarrollador");
    //Menu
    setTextById('nav1', "Inicio");
    setTextById('nav2', "Competencias");
    setTextById('nav3', "Proyectos");
	setTextById('nav4', "Sobre Mi");
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

function setTextById(tagId, text) {
    try {
        const tag = document.getElementById(tagId);
        if (tag) { tag.textContent = text; } else { alert("Tag:[" + tagId + "] not found"); }
    } catch (error) { alert(error); }
}
