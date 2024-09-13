import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';


@NgModule({
  declarations: [   /* Aqui se declaran los componentes hijos */
    HomeComponent,

  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    IonicModule,
    RouterLink
  ]
})
export class PagesModule { }
