import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { ClassesComponent } from './classes/classes.component';
import { ProfileComponent } from './profile/profile.component';
import { RecoverypassComponent } from './recoverypass/recoverypass.component';
import { ValidarLoginComponent } from './validar-login/validar-login.component';


@NgModule({
  declarations: [

    HomeComponent,
    ClassesComponent,
    ProfileComponent,
    RecoverypassComponent,
    ValidarLoginComponent,

  ],
  imports: [

    CommonModule,
    IonicModule,
    PagesRoutingModule,
    RouterLink,
    SharedModule,
    FormsModule,

  ]
})

export class PagesModule { }
