import { Component, inject, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CuentaService } from 'src/app/services/cuenta.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-validar-login',
  templateUrl: './validar-login.component.html',
  styleUrls: ['./validar-login.component.scss'],
})
export class ValidarLoginComponent  implements OnInit {
  cuenta = inject(CuentaService);
  user! : string ;
  subscripcionCuenta!: Subscription;
  pass! : string;
  type : boolean = false ;

  constructor(private router: Router) { }

  IniciarSesion(){
    this.cuenta.SetUsername(this.user);
    this.cuenta.SetPassword(this.pass);
    this.cuenta.SetType(this.type);
    this.router.navigate([this.router.url]);

  }

  ngOnInit() {
    this.subscripcionCuenta = this.cuenta.user$.subscribe(cuenta => {
      this.user = cuenta;
    })
  }

}
