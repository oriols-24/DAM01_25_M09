function setCookie(name, value, days) {
//TODO
}

function saveConfig() {
 //TODO

    // Avisamos a la ventana padre ANTES de cerrar
    if (window.opener) {
        window.opener.postMessage("config_actualizada", "*");
    }
    
    window.close();
}

document.getElementById("config-form").addEventListener("submit", function (event) {
    event.preventDefault();
    saveConfig();
});