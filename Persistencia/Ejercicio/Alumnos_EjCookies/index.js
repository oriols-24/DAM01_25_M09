// Función para obtener el valor de una cookie
function getCookie(name) {
   return document.cookie
   .split('; ')
   .find(c => c.startsWith(name + '='))
   ?.split('=')[1]
   ?? null;
}


function changeConfig() {
    const config = getCookie("config");
    if (config) {
        const configObj = JSON.parse(config);
        document.body.style.backgroundColor = configObj.backgroundColor;
        document.body.style.color = configObj.textColor;
    }
}

// Escuchamos el mensaje de la ventana hija
window.addEventListener("message", function (event) {
    if (event.data === "config_actualizada") {
        changeConfig();
    }
});

function init() {
    const visited = getCookie("visited");
    if (!visited) {
        // Abrimos el popup
        window.open('popUP.html', 'Config', 'width=600,height=400');
    }
    // Aplicamos lo que ya haya (si existe)
    changeConfig();
}

// Ejecutamos al cargar
init();