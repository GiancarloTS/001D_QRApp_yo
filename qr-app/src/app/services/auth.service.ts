import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {ApiUser} from '../models/api-user';
import { ApiConnService } from './api-conn.service';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  //para mostrar el estado del login
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false); // Para mostrar el estado del login
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable(); // Para mostrar el estado del login

  private usuarioSubject = new BehaviorSubject<string>(''); // Para mostrar el nombre del usuario actualmente logueado  // Para mostrar el nombre del usuario
  usuario$ = this.usuarioSubject.asObservable(); // Para mostrar el nombre del usuario actualmente logueado

  // utiliza un tipo UsuarioAPI de models/UsuarioAPI.models.ts
  private usuarioCompletoSubject = new BehaviorSubject<ApiUser>(null);
  usuarioCompleto$ = this.usuarioCompletoSubject.asObservable(); // Para mostrar el nombre del usuario actualmente logueado

  // Agregar un BehaviorSubject para el estado de loginFailed
  private loginFailedSubject = new BehaviorSubject<boolean>(false); // Para mostrar si falló la autenticación
  loginFailed$ = this.loginFailedSubject.asObservable(); // Para mostrar si falló la autenticación

  apicon = inject(ApiConnService); // Obtener el servicio de webService
  async buscarBD4(usuario: string, clave: string) {
    const url = 'https://670daff5073307b4ee442ea8.mockapi.io/api';
    const res = (await this.apicon.request(
      'GET',
      url,
      '/'
    )) as Array<ApiUser>; // utiliza un tipo UsuarioAPI de models/UsuarioAPI.models.ts

    const user = res.find((u) => u.user === usuario && u.pass === clave); // Buscar un usuario en la lista de usuarios de la API
    if (user) {
      console.log('Autenticación exitosa!'); // Autenticación exitosa!
      console.log(user); // Nombre completo: Hel
      this.isAuthenticatedSubject.next(true); // Activar el estado de autenticación si la autenticación es correcta.
      this.usuarioSubject.next(user.name); // Actualizar el nombre completo del usuario autenticado.
      this.usuarioCompletoSubject.next(user); // Actualizar el usuario completo como objeto del usuario autenticado.
      this.loginFailedSubject.next(false); // Restablecer loginFailed a false
    } else {
      this.isAuthenticatedSubject.next(false); // Desactivar el estado de autenticación si la autenticación es incorrecta.
      this.loginFailedSubject.next(true); // Establecer loginFailed a true si falla la autenticación
    }
  }

  async registrarNuevoUsuario(usuario: any) {
    const url = 'https://670daff5073307b4ee442ea8.mockapi.io/api';
    try {
      // Verifica si el usuario ya existe antes de registrarlo
      const usuariosExistentes = await this.obtenerUsuarios();
      const usuarioExistente = usuariosExistentes.find(
        (u) => u.user === usuario.user
      );

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

  // Método para verificar si el usuario ya existe
  async obtenerUsuarios(): Promise<ApiUser[]> {
    const url = 'https://670daff5073307b4ee442ea8.mockapi.io/api';
    try {
      const res = (await this.apicon.request(
        'GET',
        url,
        'users'
      )) as Array<ApiUser>;
      return res; // Devuelve la lista de usuarios existentes
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
      throw error; // Manejo del error
    }
  }

  logout(): void {
    this.usuarioSubject.next(''); // Resetear el nombre de usuario al desloguearse.  // Resetear el nombre de usuario al desloguearse.  // Resetear el nombre de usuario al desloguearse.  // Resetear el nombre de usuario al desloguearse.  // Resetear el nombre de usuario al desloguearse.  // Resetear el nombre de usuario al desloguearse.  // Resetear el nombre de usuario al desloguearse.  //
    this.usuarioCompletoSubject.next(null);
    this.isAuthenticatedSubject.next(false); // Desloguearse y desactivar el estado de autenticación.  // Desloguearse y
    this.loginFailedSubject.next(false); // Restablecer loginFailed al cerrar sesión
  }

  isLoggedIn() {
    return this.isAuthenticated$; // Retornar el estado de autenticación
  }
}
