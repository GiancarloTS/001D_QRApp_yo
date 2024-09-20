import { Component, inject, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { CuentaService } from 'src/app/services/cuenta.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {
  auth = inject(AuthService);
  subscriptionAuthService!: Subscription; // Subscripción para el observable del estado de autenticación




  user! : String ;

  constructor() { }

  ngOnInit() {
    this.subscriptionAuthService = this.auth.usuario$.subscribe(usuario => {
      this.user = usuario
      console.log('Header:', usuario);
    }); // Obtiene el nombre del usuario logueado
  }

}
