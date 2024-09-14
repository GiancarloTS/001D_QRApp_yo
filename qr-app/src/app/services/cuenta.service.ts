import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {
  private usernameSubject = new BehaviorSubject<string>('');
  private passwordSubject = new BehaviorSubject<string>('');
  private typeSubject = new BehaviorSubject<boolean>(false);
  user$ = this.usernameSubject.asObservable();
  pass$ = this.passwordSubject.asObservable();
  tipo$ = this.typeSubject.asObservable();
  constructor() { }

    SetUsername(nombre: string){
      this.usernameSubject.next(nombre);
    }
    GetUsername(): string|null{
      return this.usernameSubject.getValue();
    }
    SetPassword(pass: string){
      this.passwordSubject.next(pass);
    }
    GetPassword(): string|null{
      return this.passwordSubject.getValue();
    }
    SetType(tipo: boolean){
      this.typeSubject.next(tipo);
    }
    GetType():boolean{
      return this.typeSubject.getValue();
    }
}
