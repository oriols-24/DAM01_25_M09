class FiguraGeometrica {
    nombre;


    constructor (nombre) {
        this.nombre = nombre;
    }

    calcularArea() {}
}


class Rectangulo extends FiguraGeometrica {
    base;
    altura;
    
    constructor (nombre, base, altura) {
        super(nombre);
        this.base = base;
        this.altura = altura;
    }

    calcularArea() {
        return this.base * this.altura;
    }

}

class Triangulo extends FiguraGeometrica {
    base;
    altura;

    constructor (nombre, base, altura) {
        super(nombre);
        this.base = base;
        this.altura = altura;
    }

    calcularArea() {
        return (this.base * this.altura) / 2;
    }

}

class Circulo extends FiguraGeometrica {
    radio;

    constructor (nombre, radio) {
        super(nombre);
        this.radio = radio;
    }

    calcularArea() {
        return Math.PI * Math.pow(this.radio, 2);
    }

}


const rectangulo = new Rectangulo("Rectángulo", 5, 3);
const triangulo = new Triangulo("Triángulo", 4, 6);
const circulo = new Circulo("Círculo", 2);

console.log(`${rectangulo.nombre}: Área = ${rectangulo.calcularArea()}`);
console.log(`${triangulo.nombre}: Área = ${triangulo.calcularArea()}`);
console.log(`${circulo.nombre}: Área = ${circulo.calcularArea()}`);