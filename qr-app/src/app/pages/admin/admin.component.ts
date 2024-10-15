// src/app/pages/admin/admin.component.ts
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  nombreUsuario: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.usuario$.subscribe((usuario: string) => {
      this.nombreUsuario = usuario;
      console.log('Nombre del admin:', usuario);
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
