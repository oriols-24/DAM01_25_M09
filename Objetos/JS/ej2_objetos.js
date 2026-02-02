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

    // Mostramos los datos en pantalla 
    for (let atributo in tvSamsung) {
        if (typeof tvSamsung[atributo] !== "function") {

            console.log(atributo + ": " + tvSamsung[atributo]);
        }
    }

    // obtenemos el string que corresponde al JSON del objeto
    const tvSamsungJSON = JSON.stringify(tvSamsung);
    console.log("Objeto en formato JSON:", tvSamsungJSON);
