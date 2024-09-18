import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createAnimation, IonicModule, IonNav } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    NavBarComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterLink,
    FormsModule,

  ],
  exports:[
    NavBarComponent,
  ]
})
export class SharedModule { }
