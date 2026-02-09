
class Personaje {
    
    nombre;
    nivel;
    puntosDeVida;

    constructor(nombre, nivel, puntosDeVida) {
        this.nombre = nombre;
        this.nivel = nivel;
        this.puntosDeVida = puntosDeVida;
    }

    toString() {
        return `${this.nombre} (Nivel: ${this.nivel}, PV: ${this.puntosDeVida})`;
    }

    atacar() {
        console.log(`${this.nombre} ataca`);
    }
}

class Guerrero extends Personaje {
    fuerza;

    constructor(nombre, nivel, puntosDeVida, fuerza) {
        super(nombre, nivel, puntosDeVida);
        this.fuerza = fuerza;
    }

    golpeEspada() {
        console.log(`${this.nombre} ataca con su espada.`);
    }
}

class Mago extends Personaje {
    mana;

    constructor(nombre, nivel, puntosDeVida, mana) {
        super(nombre, nivel, puntosDeVida);
        this.mana = mana;
    }

    lanzarHechizo() {
        console.log(`${this.nombre} lanza un hechizo mágico.`);
    }
}


const personajes = [];
personajes.push(new Guerrero("Oriol", 5, 100, 15));
personajes.push(new Mago("Oriols", 10, 80, 30));
personajes.push(new Guerrero("Uri", 7, 90, 20));
personajes.push(new Mago("Uriel", 12, 70, 40));


personajes.forEach(personaje => {
    if (personaje instanceof Guerrero) {
        personaje.golpeEspada();
    } else if (personaje instanceof Mago) {
        personaje.lanzarHechizo();
    }
});

personajes.sort((a, b) => a.nivel - b.nivel);
console.log("Personajes ordenados por nivel:");
personajes.forEach(personaje => {
    console.log(`${personaje.nombre} - Nivel: ${personaje.nivel}`);
});



