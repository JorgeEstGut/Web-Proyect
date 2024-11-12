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

//pruba
function change(item) {
    let listLog = document.getElementById(item.id);
    listLog.classList.add("leli");
    setTimeout(() => {
        listLog.classList.remove("leli");
    }, 1000);
}