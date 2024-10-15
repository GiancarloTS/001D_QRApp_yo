export interface ApiUser {
  user: string,
  pass: string,
  name: string,
  type: 'admin' | 'Estudiante' | 'Profesor';
  carrera: String,
}
