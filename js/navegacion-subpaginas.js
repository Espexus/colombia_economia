(function() {
    document.addEventListener("DOMContentLoaded", () => {
        document.querySelectorAll(".menu-secundario").forEach(menu => {
            const botones = Array.from(menu.querySelectorAll(".boton-navegacion"));
            const secciones = Array.from(document.querySelectorAll(".seccion"));

            botones.forEach((boton, index) => {
                boton.addEventListener("click", () => {
                    const destino = boton.dataset.target
                        ? document.getElementById(boton.dataset.target)
                        : secciones[index];

                    if (!destino || !secciones.includes(destino)) {
                        return;
                    }

                    secciones.forEach(seccion => {
                        seccion.style.display = seccion === destino ? "block" : "none";
                    });
                    botones.forEach(botonNav => {
                        botonNav.classList.remove("boton-navegacion-activo");
                    });
                    boton.classList.add("boton-navegacion-activo");
                });
            })
        });
    });

})()