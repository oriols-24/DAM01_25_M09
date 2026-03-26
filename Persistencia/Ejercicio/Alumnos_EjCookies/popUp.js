function setCookie(name, value, days) {
const expires = new Date(Date.now() + days * 864e5).toUTCString();
 document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

function saveConfig() {
    const backgroundColor = document.getElementById("background-color").value;
    const textColor = document.getElementById("text-color").value;

    setCookie("config", JSON.stringify({
        backgroundColor: backgroundColor,
        textColor: textColor
    }), 7);
}

    // Avisamos a la ventana padre ANTES de cerrar
    if (window.opener) {
        window.opener.postMessage("config_actualizada", "*");
    }

    //window.close();


document.getElementById("config-form").addEventListener("submit", function (event) {
    event.preventDefault();
    saveConfig();
});