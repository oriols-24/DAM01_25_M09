// objeto coche
    const coche = {
        marca: "Toyota",
        modelo: "Corolla",
        año: 2020,
        encendido: false,
        kilometraje: 0
        
    };

    // Método arrancar el coche que cambia encendido a true
    coche.arrancar = function() {
        this.encendido = true;
        console.log("El coche ha sido arrancado.");
    };

    // Método apagar el coche que cambia encendido a false
    coche.apagar = function() {
        this.encendido = false;
        console.log("El coche ha sido apagado.");
    };

    // Método recorrer que aumenta el kilometraje segun el valor de km recibido 
    coche.recorrer = function(km) {
        if (this.encendido) {
            this.kilometraje += km;
            console.log(`Has recorrido ${km} km. Kilometraje total: ${this.kilometraje} km.`);
        } else {
            console.log("El coche está apagado. No puedes recorrer kilómetros.");
        }
    };


