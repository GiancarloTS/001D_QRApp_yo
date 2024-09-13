import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, IonNav } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { IonRouterOutlet } from '@ionic/angular/common';



@NgModule({
  declarations: [
    NavBarComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterLink,

  ],
  exports:[
    NavBarComponent,
  ]
})
export class SharedModule { }
