import { Component, inject, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CuentaService } from 'src/app/services/cuenta.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {
  cuenta = inject(CuentaService);
  user! : String | null;
  subscripcionCuenta!: Subscription;

  constructor() { }

  ngOnInit() {
    this.subscripcionCuenta = this.cuenta.user$.subscribe(cuenta => {
      this.user = cuenta;
    })
  }

}
