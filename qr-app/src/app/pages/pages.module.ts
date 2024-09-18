import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ClassesComponent } from './classes/classes.component';
import { ProfileComponent } from './profile/profile.component';
import { RecoverypassComponent } from './recoverypass/recoverypass.component';
import { FormsModule, NgModel } from '@angular/forms';
import { ValidarLoginComponent } from './validar-login/validar-login.component';


@NgModule({
  declarations: [   /* Aqui se declaran los componentes hijos */
    HomeComponent,
    ClassesComponent,
    ProfileComponent,
    RecoverypassComponent,
    ValidarLoginComponent,

  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    RouterLink,
    IonicModule,
    SharedModule,
    FormsModule,


  ]
})
export class PagesModule { }
