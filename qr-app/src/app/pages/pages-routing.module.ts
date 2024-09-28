import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ClassesComponent } from './classes/classes.component';
import { RecoverypassComponent } from './recoverypass/recoverypass.component';
import { ValidarLoginComponent } from './validar-login/validar-login.component';
import { wardGuard } from '../guard/ward.guard';
import { CamaraComponent } from './camara/camara.component';
import { QrComponent } from './qr/qr.component';

const routes: Routes = [ /* Aqui se declaran las rutas de los componentes */
  {path: '', component:HomeComponent,canActivate: [wardGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [wardGuard]},
  {path:'clases', component: ClassesComponent,canActivate: [wardGuard]},
  {path: 'recovery',component: RecoverypassComponent},
  {path:'login',component:ValidarLoginComponent},
  {path:'camara',component:CamaraComponent,canActivate: [wardGuard]},
  {path:'qr',component:QrComponent,canActivate: [wardGuard]},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
