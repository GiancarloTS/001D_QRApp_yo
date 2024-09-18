import { Usuario } from "./bd"; // Importar la interface de usuario

// bd.models.ts
export const usuariosSimulados: Usuario[] = [
  {
    id: 1,
    usuario: 'admin',
    clave: 'admin',
    tipo:'admin'

  },
  {
    id: 2,
    usuario: 'logan',
    clave: 'bub',
    tipo:'Estudiante'
  },
  {
    id: 3,
    usuario: 'Xavier',
    clave: 'x-men',
    tipo:'Profesor'
  },

];
