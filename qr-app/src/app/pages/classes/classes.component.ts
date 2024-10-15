import { Component, inject, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CuentaService } from 'src/app/services/cuenta.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss'],
})
export class ClassesComponent implements OnInit {
  cuenta = inject(CuentaService);
  user!: string | null;
  subscripcionCuenta!: Subscription;

  constructor() {}

  ngOnInit() {
    this.subscripcionCuenta = this.cuenta.user$.subscribe(cuenta => {
      this.user = cuenta;
    });
  }

  get userType() {
    return this.cuenta.GetType(); // Obtener el tipo de usuario
  }
}
