//FUNCIÓN PARA abrir y cerrar
function activar_desactivar() {
    var x = document.getElementById("ventanaActivar");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

vt_menu.addEventListener('click' ,activar_desactivar);

//Funcion para carpeta
function ac_carpeta() {
    var x = document.getElementById("v_carp");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
vt_bts.addEventListener('click' ,ac_carpeta);


