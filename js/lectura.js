(function(){
    const elementosDOM = document.querySelectorAll("*");
    let idioma = localStorage.getItem("idioma") || "es";
    let modoInclusivo = localStorage.getItem("modoInclusivo") || "false";

    if (modoInclusivo == "on") {
        elementosDOM.forEach(elemento => {
                elemento.addEventListener("click", (e)=> {
                    e.stopPropagation();
    
                    if (elemento.textContent) {
                        const mensaje = new SpeechSynthesisUtterance(elemento.textContent);
                        const voces = speechSynthesis.getVoices();
        
                        mensaje.lang = idioma === "es" ? "es-ES" : idioma === "en" ? "en-US" : "fr-FR";
        
                        mensaje.rate = 1;
                        mensaje.pitch = 1;
                        mensaje.volume = 1;
                        
                        speechSynthesis.cancel();
                        speechSynthesis.speak(mensaje);
                    }
                })
        })
    }
})()