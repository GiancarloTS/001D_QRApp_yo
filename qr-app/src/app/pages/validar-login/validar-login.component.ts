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
export class ValidarLoginComponent  implements OnInit {
  cuenta = inject(CuentaService);
  private AuthService = inject(AuthService);



  private loginFailedSubject = new BehaviorSubject<boolean>(false);
  loginFailed$ = this.loginFailedSubject.asObservable();
  loginFailed!: boolean; // Variable para almacenar el estado de loginFailed


  user! : string ;
  subscripcionCuenta!: Subscription;

  pass! : string;
  type : string ="Estudiante";






  constructor(private router: Router) {}

  isLoading: boolean = false; // Variable para mostrar el estado de carga
  async IniciarSesion(usuario: string, clave: string): Promise<void> { // Simular la autenticación con un retraso de 4 segundos
    this.isLoading = true; // Activar el estado de carga
    this.loginFailed = false; // Resetear el estado de loginFailed al iniciar sesión

    const isAuthenticated = await this.AuthService.buscarBD3(usuario, clave); // Esperar a que se complete la autenticación

    this.isLoading = false; // Desactivar el estado de carga una vez que la autenticación termine

    if (isAuthenticated) {
      this.user = ''; // Limpiar el campo de usuario
      this.pass = ''; // Limpiar el campo de clave
      this.router.navigate(['/']); // Redirigir al usuario si el login es exitoso
    } else {
      this.loginFailed = true; // Mostrar mensaje de error si el login falla
    }
  }

 /*  IniciarSesion(){
    console.log(this.type)

     this.cuenta.SetUsername(this.user);
    this.cuenta.SetPassword(this.pass);
    this.cuenta.SetType(this.type);
    this.router.navigate([this.router.url]);

  } */

  ngOnInit() {
    this.subscripcionCuenta = this.cuenta.user$.subscribe(cuenta => {this.user = cuenta;})
    this.AuthService.loginFailed$.subscribe(loginFailed => this.loginFailed = loginFailed);
  }

}
