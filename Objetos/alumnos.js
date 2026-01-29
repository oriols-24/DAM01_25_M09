const json = `[
  {"nombre": "Juan", "apellido": "Pérez", "dni": "12345678A"},
  {"nombre": "María", "apellido": "Lopez", "dni": "23456789B"},
  {"nombre": "Pedro", "apellido": "Martínez", "dni": "34567890C"},
  {"nombre": "Ana", "apellido": "Sanchez", "dni": "45678901D"},
  {"nombre": "David", "apellido": "Perez", "dni": "56789012E"},
  {"nombre": "Laura", "apellido": "Gonzalez", "dni": "12345678A"},
  {"nombre": "Carlos", "apellido": "Gómez", "dni": "67890123G"},
  {"nombre": "Elena", "apellido": "Fernández", "dni": "23456789B"},
  {"nombre": "Miguel", "apellido": "Martínez", "dni": "78901234H"},
  {"nombre": "Sara", "apellido": "Jiménez", "dni": "45678901D"}
]`;


// recorrer el JSON y mostrar por pantalla, en una tabla, tres de sus propiedades.

const alumnos = JSON.parse(json);
console.table(alumnos); 