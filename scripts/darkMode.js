const btnDarkMode = document.getElementById('darkModeImg');

const body = document.body;

const linkIcon = document.getElementById('linkSvg');
/* const cvIcon = document.getElementById('cvSvg'); */
const DescargarCv = document.getElementById('descargarCv');

const tel = document.getElementById('tel');
const articleText = document.getElementById('articleText');
const articleFooterTittle = document.getElementById('articleFooterTittle');

const htmlSvg = document.getElementById('htmlSvg');
const cssSvg = document.getElementById('cssSvg');
const jsSvg = document.getElementById('jsSvg');
const gitSvg = document.getElementById('gitSvg');

const logoNav = document.getElementById('logo');


btnDarkMode.onclick = function() {
    document.body.classList.toggle('darkMode');

    if (document.body.classList.contains('darkMode')) {

        btnDarkMode.src = "icons/moon.svg";
        logoNav.src = "./icons/logoNegro.png";

        /* cvIcon.style.fill = "#2b2b2b"; */
        DescargarCv.src = "./icons/downloadNegro.svg";
        linkIcon.style.fill = "#2b2b2b";

        htmlSvg.style.fill = "#2b2b2b";
        cssSvg.style.fill = "#2b2b2b";
        jsSvg.style.fill = "#2b2b2b";
        gitSvg.style.fill = "#2b2b2b";

    }else{

        btnDarkMode.src = "icons/sun.svg";
        logoNav.src = "./icons/logoBlanco.png";

        /* cvIcon.style.fill = "#f3f3f3"; */
        DescargarCv.src = "./icons/download.svg";
        linkIcon.style.fill = "#f3f3f3";

        htmlSvg.style.fill = "#f3f3f3";
        cssSvg.style.fill = "#f3f3f3";
        jsSvg.style.fill = "#f3f3f3";
        gitSvg.style.fill = "#f3f3f3";
    }
}

