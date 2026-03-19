import { notas } from '../data/notas.js';

// Valida campos mínimos
function validateNota(obj) {
 if (!obj || typeof obj !== "object") return "Body inválido";
 if (!obj.id || !obj.studentId || !obj.modulo || !obj.nota) return "Faltan campos: id, studentId, modulo, nota";
 return null;
}
// Comprueba si el id ya existe
const existsId = (id) => notas.some(s => s.id === id);
export function getAll() {
 return notas;
}
export function getById(id) {
 return notas.find(s => s.id === id);
}
export function create(alumnoNew) {
 const validationMsg = validateNota(alumnoNew);
 if (validationMsg) return { error: validationMsg };

 if (existsId(alumnoNew.id)) return { error: "id ya existe", status: 409 };

 notas.push({ id: alumnoNew.id, studentId: alumnoNew.studentId, modulo: alumnoNew.modulo, nota: alumnoNew.nota });
 return { data: alumnoNew };
}

//
export function update(id, payload) {
 const idx = notas.findIndex(s => s.id === id);
 if (idx === -1) return null;

 if (payload && typeof payload === "object") {
   if (payload.studentId !== undefined) notas[idx].studentId = payload.studentId;
   if (payload.modulo !== undefined) notas[idx].modulo = payload.modulo;
   if (payload.nota !== undefined) notas[idx].nota = payload.nota;
 }

 return notas[idx];
}

export function remove(id) {
 const before = notas.length;
 const filtered = notas.filter(s => s.id !== id);

 if (filtered.length === before) return false;

 notas.length = 0;
 notas.push(...filtered);
 return true;
}