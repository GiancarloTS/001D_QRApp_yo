// auth.service.ts
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiUser } from '../models/api-user';
import { ApiConnService } from './api-conn.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  // Estado de autenticación
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  // Nombre del usuario
  private usuarioSubject = new BehaviorSubject<string>('');
  usuario$ = this.usuarioSubject.asObservable();

  // Tipo de usuario
  private typeSubject = new BehaviorSubject<'admin' | 'Estudiante' | 'Profesor' | null>(null);
  type$ = this.typeSubject.asObservable();

  // Datos completos del usuario
  private usuarioCompletoSubject = new BehaviorSubject<ApiUser | null>(null);
  usuarioCompleto$ = this.usuarioCompletoSubject.asObservable();

  // Estado de fallo de login
  private loginFailedSubject = new BehaviorSubject<boolean>(false);
  loginFailed$ = this.loginFailedSubject.asObservable();

  // Inyección del servicio de conexión API
  apicon = inject(ApiConnService);

  // Método para buscar y autenticar al usuario
  async buscarBD4(usuario: string, clave: string) {
    const url = 'https://670daff5073307b4ee442ea8.mockapi.io/api';
    const res = (await this.apicon.request('GET', url, '/')) as Array<ApiUser>;

    const user = res.find((u) => u.user === usuario && u.pass === clave);
    if (user) {
      console.log('Autenticación exitosa!', user);
      this.isAuthenticatedSubject.next(true);
      this.usuarioSubject.next(user.user); // Usando 'user' como nombre de usuario
      this.usuarioCompletoSubject.next(user);

      // Establecer el tipo del usuario
      if (user.type === 'admin' || user.type === 'Estudiante' || user.type === 'Profesor') {
        this.typeSubject.next(user.type);
      } else {
        console.error('Tipo de usuario inválido:', user.type);
        this.typeSubject.next(null);
      }

      this.loginFailedSubject.next(false);
    } else {
      this.isAuthenticatedSubject.next(false);
      this.loginFailedSubject.next(true);
    }
  }

  // Método para registrar un nuevo usuario
  async registrarNuevoUsuario(usuario: any) {
    const url = 'https://670daff5073307b4ee442ea8.mockapi.io/api';
    try {
      const usuariosExistentes = await this.obtenerUsuarios();
      const usuarioExistente = usuariosExistentes.find((u) => u.user === usuario.user);

      if (usuarioExistente) {
        throw new Error('El usuario ya existe');
      }

      const res = await this.apicon.request('POST', url, 'users', usuario);
      console.log('Usuario registrado con éxito', res);
      return res; // Devuelve la respuesta exitosa del registro
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      throw error; // Propaga el error para manejarlo en el componente
    }
  }

  // Método para obtener la lista de usuarios existentes
  async obtenerUsuarios(): Promise<ApiUser[]> {
    const url = 'https://670daff5073307b4ee442ea8.mockapi.io/api';
    try {
      const res = (await this.apicon.request('GET', url, 'users')) as Array<ApiUser>;
      return res; // Devuelve la lista de usuarios existentes
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
      throw error; // Manejo del error
    }
  }

  // Método para cerrar sesión
  logout(): void {
    this.usuarioSubject.next('');
    this.usuarioCompletoSubject.next(null);
    this.isAuthenticatedSubject.next(false);
    this.loginFailedSubject.next(false);
    this.typeSubject.next(null); // Restablecer el tipo al cerrar sesión
  }

  // Método para verificar si el usuario está autenticado
  isLoggedIn() {
    return this.isAuthenticated$; // Retornar el estado de autenticación
  }
}
