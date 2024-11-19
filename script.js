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

// Avanzar automáticamente en el carrusel
function avanzarAutomatico() {
    indexActual = (indexActual + 1) % imagenes.length;
    mostrarImagen(indexActual);
}

let intervalo = setInterval(avanzarAutomatico, 5000);

btn1.addEventListener("click", function () {
    clearInterval(intervalo);
    indexActual = (indexActual - 1 + imagenes.length) % imagenes.length;
    mostrarImagen(indexActual);
    intervalo = setInterval(avanzarAutomatico, 5000);
});

btn2.addEventListener("click", function () {
    clearInterval(intervalo);
    indexActual = (indexActual + 1) % imagenes.length;
    mostrarImagen(indexActual);
    intervalo = setInterval(avanzarAutomatico, 5000);
});

mostrarImagen(indexActual);

//mostrar seccion de logeo y registro
let art1 = document.getElementById("sect1-art1");
let art2 = document.getElementById("sect1-art2");
let art3 = document.getElementById("sect1-art3");
let main = document.getElementById("main");
let sect1 = document.getElementById("sect1");
let sect2 = document.getElementById("sect2");
let sect3 = document.getElementById("sect3");
let sect4 = document.getElementById("sect4");
let page1 = document.getElementById("p1");
let page2 = document.getElementById("p2");
let page3 = document.getElementById("p3");
let foot = document.getElementById("foot");

function showSectLog() {
    art1.style.display = "none";
    art2.style.display = "flex";
    art3.style.display = "none";
    main.classList.add("Mcont2");
    sect1.classList.add("contLog");
    sect1.classList.remove("cont2");
    sect2.classList.add("cont2");
    sect3.classList.add("cont2");
    sect4.classList.add("cont2");
    page1.classList.remove("li-se");
    page2.classList.remove("li-se");
    page3.classList.remove("li-se");
    foot.classList.add("cont2");
}

function showSectReg() {
    art1.style.display = "none";
    art2.style.display = "none";
    art3.style.display = "flex";
    main.classList.add("Mcont2");
    sect1.classList.add("contLog");
    sect1.classList.remove("cont2");
    sect2.classList.add("cont2");
    sect3.classList.add("cont2");
    sect4.classList.add("cont2");
    page1.classList.remove("li-se");
    page2.classList.remove("li-se");
    page3.classList.remove("li-se");
    foot.classList.add("cont2");
}
//mostrar seccion 1
function showSect1() {
    art1.style.display = "flex";
    art2.style.display = "none";
    art3.style.display = "none";
    main.classList.remove("Mcont2");
    sect1.classList.remove("contLog");
    sect1.classList.remove("cont2");
    sect2.classList.remove("cont2");
    sect3.classList.add("cont2");
    sect4.classList.add("cont2");
    page1.classList.add("li-se");
    page2.classList.remove("li-se");
    page3.classList.remove("li-se");
    foot.classList.remove("cont2");
}
//mostrar seccion juegos
function showSect2() {
    art1.style.display = "none";
    art2.style.display = "none";
    art3.style.display = "none";
    main.classList.remove("Mcont2");
    sect1.classList.remove("contLog");
    sect1.classList.add("cont2");
    sect2.classList.add("cont2");
    sect3.classList.remove("cont2");
    sect4.classList.add("cont2");
    page1.classList.remove("li-se");
    page2.classList.add("li-se");
    page3.classList.remove("li-se");
    foot.classList.remove("cont2");
}

//mostrar seccion juegos
function showSect3() {
    art1.style.display = "none";
    art2.style.display = "none";
    art3.style.display = "none";
    main.classList.remove("Mcont2");
    sect1.classList.remove("contLog");
    sect1.classList.add("cont2");
    sect2.classList.add("cont2");
    sect3.classList.add("cont2");
    sect4.classList.remove("cont2");
    page1.classList.remove("li-se");
    page2.classList.remove("li-se");
    page3.classList.add("li-se");
    foot.classList.remove("cont2");
}

//Abrir respuestas - sect4
let questions = document.querySelectorAll('.question');

questions.forEach(question => {
    question.addEventListener("click", () => {
        const simbol = question.querySelector('i');
        if(question.classList.contains("active")) {
            question.classList.remove("active");
            simbol.classList.remove('fa-minus');
            simbol.classList.add('fa-plus');
        } else {
            questions.forEach(el => {
                el.classList.remove("active")
                const otherSimbol = el.querySelector('i');
                otherSimbol.classList.remove('fa-minus');
                otherSimbol.classList.add('fa-plus');
            });
            question.classList.add("active");
            simbol.classList.remove('fa-plus');
            simbol.classList.add('fa-minus');
        }
    });
});

//pre-load
window.onload = function () {
    let preLoad = document.getElementById("preLoad");
    let sect2 = document.getElementById("sect2");
    sect2.classList.add("cont2");
    foot.classList.add("cont2");
    setTimeout(() => {
        preLoad.style.display = "none";
        sect2.classList.remove("cont2");
        foot.classList.remove("cont2");
    }, 4000);
}