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

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  private usuarioSubject = new BehaviorSubject<string>(''); // Para mostrar el nombre del usuario actualmente logueado
  usuario$ = this.usuarioSubject.asObservable();

  // Cambiar 'role' por 'type'
  private typeSubject = new BehaviorSubject<'docente' | 'alumno' | null>(null);
  type$ = this.typeSubject.asObservable(); // Para mostrar el tipo de usuario

  private usuarioCompletoSubject = new BehaviorSubject<ApiUser>(null);
  usuarioCompleto$ = this.usuarioCompletoSubject.asObservable();

  private loginFailedSubject = new BehaviorSubject<boolean>(false); // Para mostrar si falló la autenticación
  loginFailed$ = this.loginFailedSubject.asObservable(); // Para mostrar si falló la autenticación

  apicon = inject(ApiConnService);

  async buscarBD4(usuario: string, clave: string) {
    const url = 'https://670daff5073307b4ee442ea8.mockapi.io/api';
    const res = (await this.apicon.request('GET', url, '/')) as Array<ApiUser>;

    const user = res.find((u) => u.user === usuario && u.pass === clave);
    if (user) {
      console.log('Autenticación exitosa!');
      this.isAuthenticatedSubject.next(true);
      this.usuarioSubject.next(user.name);
      this.usuarioCompletoSubject.next(user);

      // Establecer el tipo del usuario
      this.typeSubject.next(user.type as 'docente' | 'alumno'); // Asegúrate de que el tipo es correcto
      this.loginFailedSubject.next(false);
    } else {
      this.isAuthenticatedSubject.next(false);
      this.loginFailedSubject.next(true);
    }
  }

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

  logout(): void {
    this.usuarioSubject.next('');
    this.usuarioCompletoSubject.next(null);
    this.isAuthenticatedSubject.next(false);
    this.loginFailedSubject.next(false);
    this.typeSubject.next(null); // Restablecer el tipo al cerrar sesión
  }

  isLoggedIn() {
    return this.isAuthenticated$; // Retornar el estado de autenticación
  }
}
