(function() {
    const formulario = document.getElementById("formulario-preferencias");
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        const datos = new FormData(formulario);

        const nombre = datos.get("usuarioNombre");
        const idioma = datos.get("usuarioIdioma");
        const modoInclusivo = datos.get("modoInclusivo");

        localStorage.setItem("preferencias", true)
        definirPreferencias(nombre, idioma, modoInclusivo);
        window.location.reload();
    })

    function definirPreferencias (nombre, idioma, modoInclusivo) {
        localStorage.setItem("usuario", nombre);
        localStorage.setItem("idioma", idioma);
        localStorage.setItem("modoInclusivo", modoInclusivo);
    }

})()