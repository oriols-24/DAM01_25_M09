// Datos iniciales de la flota espacial
const datosIniciales = `[
    { "id": "NAV-0001", "modelo": "Carguero Titan", "capacidadCarga": 5000, "estado": "En ruta", "capitan": "Laura Martín" },
    { "id": "NAV-0002", "modelo": "Explorador Nova", "capacidadCarga": 1200, "estado": "Disponible" },
    { "id": "NAV3", "modelo": "Transportador Orion", "capacidadCarga": 8000, "estado": "Mantenimiento", "capitan": "Carlos Ruiz" },
    { "id": "NAV-0004", "modelo": "Fragata Estelar", "capacidadCarga": 3500, "estado": "En ruta", "capitan": "Ana García" },
    { "id": "NAV-0005", "modelo": "Crucero Quantum", "capacidadCarga": 12000, "estado": "Disponible", "capitan": "Miguel Torres" },
    { "id": "NAV-0006", "modelo": "Carguero Pegasus", "capacidadCarga": 6200, "estado": "En ruta" },
    { "id": "NAV-0007", "modelo": "Explorador Helios", "capacidadCarga": 900, "estado": "Mantenimiento", "capitan": "Sofia Hernández" },
    { "id": "NAV-0008", "modelo": "Transportador Atlas", "capacidadCarga": 15000, "estado": "Disponible", "capitan": "Pedro Jiménez" },
    { "id": "NAV-0009", "modelo": "Nave Médica Phoenix", "capacidadCarga": 2500, "estado": "En ruta", "capitan": "Elena Navarro" },
    { "id": "NAV-0010", "modelo": "Minero Asteroid", "capacidadCarga": 10000, "estado": "Mantenimiento" },
    { "id": "NAV-0011", "modelo": "Interceptor Velocity", "capacidadCarga": 800, "estado": "Disponible", "capitan": "Javier Moreno" },
    { "id": "NAV-0012", "modelo": "Carguero Mammoth", "capacidadCarga": 18000, "estado": "En ruta", "capitan": "Isabel Romero" },
    { "id": "NAV0013", "modelo": "Explorador Frontier", "capacidadCarga": 1500, "estado": "Disponible" },
    { "id": "NAV-0014", "modelo": "Transportador Galaxy", "capacidadCarga": 7500, "estado": "Mantenimiento", "capitan": "Roberto Sánchez" },
    { "id": "NAV-0015", "modelo": "Crucero Neptune", "capacidadCarga": 9500, "estado": "En ruta", "capitan": "Carmen López" }
]`;

// 1. MODELADO DE DATOS (2 puntos)
class NaveEspacial {
    id;
    modelo;
    capacidadCarga;
    estado;
    capitan;

    constructor(id, modelo, capacidadCarga, estado, capitan) {
        this.id = id;
        this.modelo = modelo;
        this.capacidadCarga = capacidadCarga;
        this.estado = estado;
        this.capitan = capitan;
    }
     // Método para comprobar si el id cumple el formato NAV-XXXX 
    validarRegistro(id) {
        const regex = /^NAV-\d{4}$/;
        return regex.test(id);
    }

}


// 2. CARGA INICIAL Y GESTIÓN DE LA FLOTA (3,5 puntos)

   // mapa para almacenar todas las naves

    const flotaEspacial = new Map();


    // funcion que recorre  el array datosIniciales
    function recorreArray() {
        for (let i in datosIniciales) {
            crearInstancia(datosIniciales[i]);
        }
    }

    // funcion que por cada elemento crea una instancia de NaveEspacial
    function crearInstancia(element) {
        const nave = new NaveEspacial(
            element.id,
            element.modelo,
            element.capacidadCarga,
            element.estado,
            element.capitan
        );
        añadirNave(nave);
    }

    // funcion que añade cada nave al map usando su id como clave
    function añadirNave(nave) {
        flotaEspacial.set(nave.id, nave);
    }


// Función para cargar la flota desde el JSON
function cargarFlota() {
    datosIniciales.forEach(element => {
        crearInstancia(element);
    });
}

// 3. VISUALIZACIÓN EN TABLA (1.5 puntos)

function renderizarTabla() {
    const tabla = document.getElementById("tablaNaves");
    tabla.innerHTML = ""; 

    flotaEspacial.forEach((nave, id) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${nave.id}</td>
            <td>${nave.modelo}</td>
            <td>${nave.capacidadCarga}</td>
            <td>${nave.estado}</td>
            <td>${nave.capitan || "N/A"}</td>
        `;
        tabla.appendChild(fila);
    });
}

// 4. SIMULACIÓN EN TIEMPO REAL (2 puntos)

function encenderSimulacion() {
    const interval = setInterval(() => {
        const keys = Array.from(flotaEspacial.keys());
        const randomKey = keys[Math.floor(Math.random() * keys.length)];
        const naveAleatoria = flotaEspacial.get(randomKey);
        if (naveAleatoria.estado === "En ruta") {
            flotaEspacial.set(randomKey, { ...naveAleatoria, estado: "Disponible" });
        }
        if (naveAleatoria.estado === "Disponible") {
            flotaEspacial.set(randomKey, { ...naveAleatoria, estado: "En ruta" });
        }
        if (naveAleatoria.estado === "Mantenimiento") {
            flotaEspacial.set(randomKey, { ...naveAleatoria, estado: "" });
        }
    }, 5000);
}
function apagarSimulacion() {
        clearInterval(interval);
        interval = null;
        // Detener la simulación
}



// 5. BUSCADOR POR CAPACIDAD (1 punto)
function buscarPorCapacidad(capacidad) {
    const resultados = [];
    flotaEspacial.forEach(nave => {
        if (nave.capacidadCarga === capacidad) {
            resultados.push(nave);
        }
    });
    return resultados;
}

function mostrarTodas() {
    return Array.from(flotaEspacial.values());
}



// ============================================
// INICIALIZACIÓN
// ============================================

// Esperar a que el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {

    // Cargar la flota
    cargarFlota();

    // Renderizar tabla inicial
    renderizarTabla();
    
    // Configurar eventos de botones
    document.getElementById("btnBuscar").addEventListener("click", () => {
        const capacidad = parseInt(document.getElementById("inputCapacidad").value);
        const resultados = buscarPorCapacidad(capacidad);
        console.log(resultados);
    });

    document.getElementById("btnMostrarTodas").addEventListener("click", () => {
        const todas = mostrarTodas();
        console.log(todas);
    });

});


   


   

