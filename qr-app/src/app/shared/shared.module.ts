import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, IonNav } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { IonRouterOutlet } from '@ionic/angular/common';
import { ValidarLoginComponent } from './validar-login/validar-login.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavBarComponent,
    ValidarLoginComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterLink,
    FormsModule,

  ],
  exports:[
    NavBarComponent,
    ValidarLoginComponent,
  ]
})
export class SharedModule { }
