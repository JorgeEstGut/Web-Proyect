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
function Change(item, aniName) {
    let listLog = document.getElementById(item.id);
    listLog.classList.add(aniName);
    setTimeout(() => {
        listLog.classList.remove(aniName);
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