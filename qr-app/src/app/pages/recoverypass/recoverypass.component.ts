import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-recoverypass',
  templateUrl: './recoverypass.component.html',
  styleUrls: ['./recoverypass.component.scss'],
})
export class RecoverypassComponent  implements OnInit {

  // private AuthService = inject(AuthService);
  // SearchFailed!: boolean;

  // private ChangePassSubject = new BehaviorSubject<string>('');
  // pass$ = this.ChangePassSubject.asObservable();
  // user! : string ;
  // subscripcionCuenta!: Subscription;
  // pass! : string;

  constructor(private router: Router) { }
  // isLoading: boolean = false;
  // async cambiarContra(user:string, pass:string){
  //   this.isLoading = true;
  //   this.SearchFailed = false;

  //   const isAuthenticated = await this.AuthService.recover(user, pass);

  //   this.isLoading = false; // Desactivar el estado de carga una vez que la autenticación termine
  //   if (isAuthenticated) {
  //     this.user = ''; // Limpiar el campo de usuario
  //     this.pass = ''; // Limpiar el campo de clave
  //     this.router.navigate(['/login']); // Redirigir al usuario si el login es exitoso
  //   } else {
  //     this.SearchFailed = true; // Mostrar mensaje de error si el login falla
  //   }
  // }
  ngOnInit() {

  }

}
