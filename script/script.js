//imagenes columna 2

function cambiarImagen(link1, link2, etiqueta) {
    let imagenActual1 = $(etiqueta).attr("src");
    if(imagenActual1 == link1) {
        $(etiqueta).attr("src", link2);
    } else {
        $(etiqueta).attr("src", link1);
    }
}

// HTML
$('#imagen-html').mouseover(function(){
    cambiarImagen('./images/html-bn.jpg', './images/html-color.jpg', '#imagen-html');
});
$('#imagen-html').mouseout(function(){
    cambiarImagen('./images/html-bn.jpg', './images/html-color.jpg', '#imagen-html');
});
// CSS
$('#imagen-css').mouseover(function(){
    cambiarImagen('./images/css-bn.jpg', './images/css-color.jpg', '#imagen-css');
});
$('#imagen-css').mouseout(function(){
    cambiarImagen('./images/css-bn.jpg', './images/css-color.jpg', '#imagen-css');
});
// Javascript
$('#imagen-js').mouseover(function(){
    cambiarImagen('./images/js-bn.jpg', './images/js-color.jpg', '#imagen-js');
});
$('#imagen-js').mouseout(function(){
    cambiarImagen('./images/js-bn.jpg', './images/js-color.jpg', '#imagen-js');
});
//Bootstrap
$('#imagen-b').mouseover(function(){
    cambiarImagen('./images/bootstrap-bn.jpg', './images/bootstrap-color.png', '#imagen-b');
});
$('#imagen-b').mouseout(function(){
    cambiarImagen('./images/bootstrap-bn.jpg', './images/bootstrap-color.png', '#imagen-b');
});
//jQuery
$('#imagen-jquery').mouseover(function(){
    cambiarImagen('./images/jquery-bn.jpg', './images/jquery-color.jpg', '#imagen-jquery');
});
$('#imagen-jquery').mouseout(function(){
    cambiarImagen('./images/jquery-bn.jpg', './images/jquery-color.jpg', '#imagen-jquery');
});

//Barra navegación

let inicioNav = document.querySelector("#inicioNav");
let inicio = document.querySelector ("#inicio");
let sobreMiNav = document.querySelector ("#sobreMiNav");
let sobreMi = document.querySelector ("#sobreMi");
let contactoNav = document.querySelector ("#contactoNav");
let contacto = document.querySelector ("#contacto");

inicioNav.addEventListener("click", seccion1, false);
sobreMiNav.addEventListener("click", seccion2, false);
contactoNav.addEventListener("click", seccion3, false);

function seccion1 (e) {
    inicio.scrollIntoView ({behavior: "smooth"});
};

function seccion2 (e) {
    sobreMi.scrollIntoView ({behavior: "smooth"});
};

function seccion3 (e) {
    contacto.scrollIntoView ({behavior: "smooth"});
};

//Imagen Diego

let diego = document.getElementById("diego");
let golDiego = new Audio("./music/gol.mp3");

function reproducir() {
    golDiego.play();
}

diego.addEventListener("click", reproducir);

//Footer

const configuracion_ventana = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";
let github = document.getElementById("github");
let facebook = document.getElementById("facebook");
let instagram = document.getElementById("instagram");

function abrirGithub() {
    github = window.open("https://github.com/MauricioZeiter", "GitHub", configuracion_ventana);
}
function abrirFacebook() {
    facebook = window.open("https://www.facebook.com/Sr.Piedrita", "Facebook", configuracion_ventana);
}
function abrirInstagram() {
    instagram = window.open("https://www.instagram.com/podogol/", "Instagram", configuracion_ventana);
}

github.addEventListener("click", abrirGithub);
facebook.addEventListener("click", abrirFacebook);
instagram.addEventListener("click", abrirInstagram);

//programador

let teclado = document.getElementById("programador");
let tecleando = new Audio("./music/teclado.mp3");

function programando() {
    tecleando.play();
}

teclado.addEventListener("click", programando);