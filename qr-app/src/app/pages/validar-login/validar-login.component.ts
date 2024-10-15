import { AuthService } from '../../services/auth.service';
import { Component, inject, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { CuentaService } from 'src/app/services/cuenta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-validar-login',
  templateUrl: './validar-login.component.html',
  styleUrls: ['./validar-login.component.scss'],
})
export class ValidarLoginComponent implements OnInit {
  user: string = ''; // Campo de entrada para el usuario
  pass: string = ''; // Campos de entrada para el usuario y clave

  private authService = inject(AuthService); // Obtener el servicio de autenticación
  private router = inject(Router); // Obtener el servicio de navegación

  private loginFailedSubject = new BehaviorSubject<boolean>(false);
  loginFailed$ = this.loginFailedSubject.asObservable();
  loginFailed: boolean; // Variable para almacenar el estado de loginFailed

  ngOnInit(): void {
    this.authService.loginFailed$.subscribe(
      (loginFailed) => (this.loginFailed = loginFailed)
    ); // Obtener el estado de loginFailed
  }

  constructor() {}
  isLoading: boolean = false;
  async IniciarSesion(usuario: string, clave: string) {
    this.isLoading = true; // Activar el estado de carga
    await this.authService.buscarBD4(usuario, clave); // Intentar hacer login
    this.isLoading = false; // Desactivar el estado de carga una vez que la autenticación termine

    // Suscribirse al observable para verificar el estado de autenticación
    this.authService.isAuthenticated$.subscribe((isAuthenticated) => {
      this.authService.usuarioCompleto$.subscribe((usuarioCompleto) => {
        if (isAuthenticated) {
          this.user = ''; // Limpiar el campo de usuario
          this.pass = ''; // Limpiar el campo de clave
            this.user = ''; // Limpiar el campo de usuario
            this.pass = ''; // Limpiar el campo de clave
            this.router.navigate(['/']); // Redirigir al usuario alumno si el login es exitoso


          // if (usuarioCompleto.type === 'docente') {
          //   this.user = ''; // Limpiar el campo de usuario
          //   this.pass = ''; // Limpiar el campo de clave
          //   this.router.navigate(['/docente']); // Redirigir al usuario docente si el login es exitoso
          // } else {
          //   this.user = ''; // Limpiar el campo de usuario
          //   this.pass = ''; // Limpiar el campo de clave
          //   this.router.navigate(['/alumno']); // Redirigir al usuario alumno si el login es exitoso
          // }
        } else {
          this.loginFailed = true; // Mostrar mensaje de error si el login falla
        }
      });
    });
  }
}
