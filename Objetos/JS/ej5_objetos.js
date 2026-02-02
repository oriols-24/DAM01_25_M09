// Array usuarios con 3 objetos representando personas
const usuarios = [
    {
        nombre: "Ana",
        edad: 28,
        email: "ana@example.com"
    },
    {
        nombre: "Luis",
        edad: 34,
        email: "luis@example.com"
    },
    {
        nombre: "Marta",
        edad: 22,
        email: "marta@example.com"
    }
];

// Añade un nuevo usuario utilizando push
usuarios.push({
    nombre: "Pedro",
    edad: 30,
    email: "pedro@example.com"
});
 
// Función para mostrar todos los usuarios y sus atributos
usuarios.mostrarUsuarios = function() {
    this.forEach((usuario) => {
        console.log(`Nombre: ${usuario.nombre}, Edad: ${usuario.edad}, Email: ${usuario.email}`);
    });
};





