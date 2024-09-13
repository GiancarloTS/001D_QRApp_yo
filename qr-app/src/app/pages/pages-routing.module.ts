import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ClassesComponent } from './classes/classes.component';
import { RecoverypassComponent } from './recoverypass/recoverypass.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [ /* Aqui se declaran las rutas de los componentes */
  {path: '', component:HomeComponent},
  {path: 'profile', component: ProfileComponent},
  {path:'clases', component: ClassesComponent},
  {path: 'recovery',component: RecoverypassComponent},
  {path:'login',component:LoginComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
