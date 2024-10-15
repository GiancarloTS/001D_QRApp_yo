import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent  implements OnInit {
  user: string = ''; // Campo de entrada para el usuario
  pass: string = '';
  nombrecompleto: string = '';
  type:string = '';
  carrera:string = '';
  constructor() { }
  isLoading: boolean = false;
  ngOnInit() {}

}
