
import { Subscriber, Subscription } from 'rxjs';
import { Component, inject, OnInit } from '@angular/core';
import { CuentaService } from 'src/app/services/cuenta.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent  implements OnInit {

  // tipo!:string

  // constructor() { }
  // private CuentaService = inject(AuthService);

  SubscriptionCuentaService!: Subscription;
  ngOnInit(){
    // this.SubscriptionCuentaService = this.CuentaService.tipo$.subscribe(tipo => {
    //   this.tipo = tipo;
    //   console.log(tipo);
    // })
  }

}
