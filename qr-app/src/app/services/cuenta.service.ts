import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {

  private usernameSubject = new BehaviorSubject<string>('');
  private passwordSubject = new BehaviorSubject<string>('');
  private typeSubject = new BehaviorSubject<string>('');

  user$ = this.usernameSubject.asObservable();
  pass$ = this.passwordSubject.asObservable();
  tipo$ = this.typeSubject.asObservable();

  constructor() { }

  SetUsername(nombre: string) {
    this.usernameSubject.next(nombre);
  }

  GetUsername(): string | null {
    return this.usernameSubject.getValue();
  }

  SetPassword(pass: string) {
    this.passwordSubject.next(pass);
  }

  GetPassword(): string | null {
    return this.passwordSubject.getValue();
  }

  SetType(tipo: string) {
    this.typeSubject.next(tipo);
  }

  GetType(): string {
    return this.typeSubject.getValue();
  }

  logout() {

    this.usernameSubject.next('');
    this.passwordSubject.next('');
    this.typeSubject.next('');

    console.log('Sesión cerrada correctamente.');
  }
}
