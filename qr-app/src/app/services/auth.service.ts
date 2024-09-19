import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { usuariosSimulados } from '../models/data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  //para mostrar el estado del login
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false); // Para mostrar el estado del login
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable(); // Para mostrar el estado del login

  private usuarioSubject = new BehaviorSubject<string>(''); // Para mostrar el nombre del usuario actualmente logueado  // Para mostrar el nombre del usuario
  usuario$ = this.usuarioSubject.asObservable(); // Para mostrar el nombre del usuario actualmente logueado

  private typeSubject = new BehaviorSubject<string>('');
  tipo$ = this.typeSubject.asObservable();

  private passSubject = new BehaviorSubject<string>('');
  pass$ = this.passSubject.asObservable();

  // Agregar un BehaviorSubject para el estado de loginFailed
  private loginFailedSubject = new BehaviorSubject<boolean>(false); // Para mostrar si falló la autenticación
  loginFailed$ = this.loginFailedSubject.asObservable(); // Para mostrar si falló la autenticación

  buscarBD3(usuario: string, clave: string): Promise<boolean> { // Devuelve una promesa
    return new Promise((resolve) => {  // Simular la autenticación con un retraso de 4 segundos
      setTimeout(() => {  // Simular la autenticación con un retraso de 4 segundos
        const usuarioEncontrado = usuariosSimulados.find( // Buscar un usuario en la liususta de usuarios simulados
          u => u.usuario === usuario && u.clave === clave // Revisar si el usuario y la clave coinciden con los datos de un usuario
        );

        if (usuarioEncontrado) { // Si el usuario y la clave coinciden con los datos de un usuario, activar
          this.isAuthenticatedSubject.next(true); // Activar el estado de autenticación si la autenticación es correcta.
          this.usuarioSubject.next(usuarioEncontrado.usuario); // Actualizar el nombre completo del usuario autenticado.
          this.typeSubject.next(usuarioEncontrado.tipo);
          this.loginFailedSubject.next(false); // Restablecer loginFailed a false
          resolve(true); // Resuelve la promesa como `true` si la autenticación es exitosa
        } else {
          this.isAuthenticatedSubject.next(false); // Desactivar el estado de autenticación si la autenticación es incorrecta.
          this.loginFailedSubject.next(true); // Establecer loginFailed a true si falla la autenticación
          resolve(false); // Resuelve la promesa como `false` si la autenticación falla
        }
      }, 3000); // Retraso de 4000 ms = 4 segundos
    });
  }


  logout(): void {
    this.usuarioSubject.next('');  // Resetear el nombre de usuario al desloguearse.  // Resetear el nombre de usuario al desloguearse.  // Resetear el nombre de usuario al desloguearse.  // Resetear el nombre de usuario al desloguearse.  // Resetear el nombre de usuario al desloguearse.  // Resetear el nombre de usuario al desloguearse.  // Resetear el nombre de usuario al desloguearse.  //
    this.isAuthenticatedSubject.next(false); // Desloguearse y desactivar el estado de autenticación.  // Desloguearse y
    this.loginFailedSubject.next(false);  // Restablecer loginFailed al cerrar sesión
  }

  recover(user:string,pass:string):Promise<boolean>{
    return new Promise((resolve) => {
      setTimeout(() => {
      const usuarioIndex = usuariosSimulados.findIndex( // Buscar un usuario en la liususta de usuarios simulados
      u => u.usuario === user); // Revisar si el usuario coincide con los datos de un usuario
      if (usuarioIndex != 0) { // Si el usuario y la clave coinciden con los datos de un usuario, activar
        resolve(false); // Resuelve la promesa como `false` si la autenticación falla
      } else {

        usuariosSimulados[usuarioIndex] = {...usuariosSimulados[usuarioIndex],clave:pass};
        resolve(true); // Resuelve la promesa como `true` si la autenticación es exitosa
      }
    },1000)
    });
  }
  isLoggedIn() {
    return this.isAuthenticated$; // Retornar el estado de autenticación
  }


}
