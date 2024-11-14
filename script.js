//Funciones menu hamburguesa
let check = document.getElementById('menu');
let icono = document.getElementById('menu-icon');
let menuItems = document.querySelectorAll('.nav-ul_li');

check.addEventListener("change", function () {
    if (check.checked) {
        icono.classList.replace("fa-bars", "fa-xmark");
    } else {
        icono.classList.replace("fa-xmark", "fa-bars");
    }
});

menuItems.forEach(function(item) {
    item.addEventListener('click', function() {
        check.checked = false;
        icono.classList.replace("fa-xmark", "fa-bars");
    });
});

//Obtener id y agregar clases
function Change(item, claName) {
    let listLog = document.getElementById(item.id);
    listLog.classList.add(claName);
    setTimeout(() => {
        listLog.classList.remove(claName);
    }, 500);
}

//Botones next y back carrusel
let btn1 = document.getElementById("btnN");
let btn2 = document.getElementById("btnB");
let imagenes = [img1, img2, img3];
let indexActual = 0;

function mostrarImagen(index) {
    imagenes.forEach((img, i) => {
        img.style.display = i === index ? "inline" : "none";
    });
}

btn1.addEventListener("click", function () {
    indexActual = (indexActual - 1 + imagenes.length) % imagenes.length;
    mostrarImagen(indexActual);
});

btn2.addEventListener("click", function () {
    indexActual = (indexActual + 1) % imagenes.length;
    mostrarImagen(indexActual);
});

mostrarImagen(indexActual);

//mostrar seccion de logeo
function showSectLog() {
    let art1 = document.getElementById("sect1-art1");
    let art2 = document.getElementById("sect1-art2");
    let main = document.getElementById("main");
    let sect1 = document.getElementById("sect1");
    art1.style.display = "none";
    art2.style.display = "flex";
    main.classList.add("Mcont2");
    sect1.classList.add("contLog");
}

function showSects() {
    let art1 = document.getElementById("sect1-art1");
    let art2 = document.getElementById("sect1-art2");
    let main = document.getElementById("main");
    let sect1 = document.getElementById("sect1");
    art1.style.display = "flex";
    art2.style.display = "none";
    main.classList.remove("Mcont2");
    sect1.classList.remove("contLog");
}

//pre-load
window.onload = function () {
    let preLoad = document.getElementById("preLoad");
    setTimeout(() => {
        preLoad.style.display = "none";
    }, 4000);
}