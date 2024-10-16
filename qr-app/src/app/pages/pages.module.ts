// src/app/pages/pages.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { SharedModule } from "../shared/shared.module";
import { ValidarLoginComponent } from './validar-login/validar-login.component';
import { ClassesComponent } from './classes/classes.component';
import { ProfileComponent } from './profile/profile.component';
import { RecoverypassComponent } from './recoverypass/recoverypass.component';
import { CamaraComponent } from './camara/camara.component';
import { QrComponent } from './qr/qr.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { QRCodeModule } from 'angularx-qrcode'; // Importa QRCodeModule

@NgModule({
  declarations: [
    HomeComponent,
    ClassesComponent,
    ProfileComponent,
    RecoverypassComponent,
    ValidarLoginComponent,
    CamaraComponent,
    QrComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PagesRoutingModule,
    RouterLink,
    SharedModule,
    FormsModule,
    QRCodeModule // Agrega QRCodeModule aquí
  ]
})
export class PagesModule { }
