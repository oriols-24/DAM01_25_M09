 // objeto tvSamsung
    const tvSamsung = {
        nombre: "TV Samsung 42",
        categoria: "Televisores",
        unidades: 4,
        precio: 345.590,
        getImporte: function() {
            return this.unidades * this.precio;
        }
    };

    // Añade al objeto tvSamsung varias características 
    tvSamsung.marca = prompt("Introduce la marca de la TV: ");
    tvSamsung.resolucion = prompt("Introduce la resolución de la TV: ");
    tvSamsung.pulgadas = prompt("Introduce las pulgadas de la TV: ");

    // lista de propiedades  a comprobar
    const propiedades = ["marca", "modelo", "resolucion", "pulgadas", "precio", "unidades"];

    // comprobamos si existen las propiedades, si no existen las añadimos con valor "default value"
    propiedades.forEach(prop => {
        if (!tvSamsung.hasOwnProperty(prop)) {
            tvSamsung[prop] = "default value";
        }
    });

    // Mostramos todos los datos en pantalla 
    for (let atributo in tvSamsung) {
        if (typeof tvSamsung[atributo] !== "function") {
            console.log(atributo + ": " + tvSamsung[atributo]);
        }
    }

    // obtenemos el string que corresponde al JSON del objeto
    const tvSamsungJSON = JSON.stringify(tvSamsung);
    console.log("Objeto en formato JSON:", tvSamsungJSON);