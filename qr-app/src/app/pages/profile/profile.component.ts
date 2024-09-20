import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CuentaService } from 'src/app/services/cuenta.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  cuenta = inject(CuentaService);
  user!: String | null;
  subscripcionCuenta!: Subscription;

  constructor() { }

  ngOnInit() {
    this.subscripcionCuenta = this.cuenta.user$.subscribe(cuenta => {
      this.user = cuenta;
    });
  }

  ngOnDestroy() {
    this.subscripcionCuenta.unsubscribe(); // Desuscribirse para evitar memory leaks.
  }
}
